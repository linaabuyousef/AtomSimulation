import os
import flask_admin as admin
from flask import Flask, Blueprint
from flask_cors import CORS
from flask import Flask
from flask_session import Session
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from endpoints import register_all_endpoints
# from endpoints.helpers.apiargs import argsparser
# from endpoints.helpers.converters import MongoIdConverter, ProductNameConverter
# from endpoints.helpers.decorators import no_auth
# from endpoints.helpers.request_rules import RequestRules, ErrorHandlers, WebargsErrorHandlers
# from utils.db import register_mongo
# from utils import admin_panel
# from pymongo import MongoClient


# from sentry_sdk.integrations.flask import FlaskIntegration

def config_name():
    return 'config.flask_config.{}Config'.format(os.environ.get("FLASK_ENV", "development").title())


# def config_name():
#     return 'config.flask_config.DevelopmentConfig'


# sentry_sdk.init(
#     dsn="https://6e8c63374edf4f819adfefec263dc763@o446166.ingest.sentry.io/5424113",
#     integrations=[FlaskIntegration()]
# )

# create app and load configuration
app = Flask(__name__)
CORS(app, origins='http://localhost:3001', methods=['GET', 'POST', 'PUT', 'DELETE'])

# app.config.from_object(config_name())

# app.url_map.converters['productName'] = ProductNameConverter

# register blueprints (endpoints)
register_all_endpoints(app)

# init before_request/after_request rules
# RequestRules(app)

# init error handlers
# ErrorHandlers(app)

# error handler for webargs errors
# WebargsErrorHandlers(argsparser)

# init Jwt integration
flask_bcrypt = Bcrypt(app)
jwt = JWTManager(app)


@app.route("/")
def home():
    print("e")
    return "Welcome to my Flask app!"

if __name__ == '__main__':
    from werkzeug.serving import run_simple
    from werkzeug.wsgi import DispatcherMiddleware

    # on debug, make Flask listen to "/api"- as the UI uses this path
    parent_app = DispatcherMiddleware(Flask("dummy"), {'/api': app})
  
    # for https debug, uncomment the context below and pass ssl_context=context to run_simple
    # context = ('/tmp/atlas.cloud-band.com.crt', '/tmp/atlas.cloud-band.com.key')
    run_simple('0.0.0.0', 5001, parent_app, use_reloader=True, use_debugger=True)