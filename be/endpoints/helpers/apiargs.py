import re
from functools import partial

from itertools import chain
from webargs import flaskparser, ValidationError, fields, validate

from webargs.flaskparser import use_kwargs, parser, abort
from marshmallow import EXCLUDE
# from utils.db import Collections, as_objectId

# for generating swagger docs: from flask_apispec import use_kwargs
# and use its use_kwargs in "Locations" section below

"""
Helpers and partial methods to support webargs fields
"""

argsparser = flaskparser.FlaskParser()


class WebargsException(Exception):
    """
    Custom exception that can be formatted to display a nice error message,
    instead of the generic one provided by webargs.
    """

    @property
    def errors(self):
        return self.message


"""
Locations
------------------
Shorthand for setting the location to read the parameters from.
from_body = body payload (like json)
from_query = query param (i.e. ?q=<...>&m=<...>)
from_path = parameters found in URL (like /tests/<test_id>/delete)
"""
from_body = partial(use_kwargs, unknown=EXCLUDE, location="json")
from_query = partial(use_kwargs, unknown=EXCLUDE, location="querystring")
from_path = partial(use_kwargs, unknown=EXCLUDE, location='view_args')