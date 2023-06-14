import asyncio

import logging
import time
import threading
from flask import current_app, copy_current_request_context, make_response
from functools import wraps, update_wrapper
from datetime import datetime
loop = asyncio.get_event_loop()

logger = logging.getLogger("testmanager")


def no_auth(f):
    """
    Decorate a function we don't want to require authenticated user to perform the action
    :param func f:
    """
    f.no_auth = True
    return f


def standalone_only(f):
    """
    Decorate a function we don't want to require authenticated user to perform the action
    :param func f:
    """
    f.is_standalone = True
    return f


def jwt_open(f):
    """
    Decorate a function to able to jwt calls
    :param func f:
    """
    f.jwt_open = True
    return f


def async_call(f, *args, **kwargs):
    """This function runs the given function `f` asynchronously, while preserving the request context.

   :param func f:
   :param list args:
   :param dict kwargs:
   :return:
   """
    with current_app.app_context():
        @copy_current_request_context
        def helper(*args, **kwargs):
            current_app.preprocess_request()
            f(*args, **kwargs)

        thread = threading.Thread(target=helper, args=args, kwargs=kwargs)
        thread.start()


def validate_jenkins_connection(f):
    def wrapper(*args, **kwargs):
        max_retry = 0
        while max_retry < 10:
            try:
                ret = f(*args, **kwargs)
                return ret
            except ConnectionError as e:
                logger.error("Timeout connections to jenkins %s", e)
                max_retry += 1
                if max_retry == 10:
                    raise e
                time.sleep(0.5)

    return wrapper


def nocache(view):
    @wraps(view)
    def no_cache(*args, **kwargs):
        response = make_response(view(*args, **kwargs))
        response.headers['Last-Modified'] = datetime.now()
        response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '-1'
        return response

    return update_wrapper(no_cache, view)