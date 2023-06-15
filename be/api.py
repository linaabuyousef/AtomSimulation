import os
import flask_admin as admin
from flask import Flask, Blueprint
from flask_cors import CORS
from flask import Flask
from flask_session import Session
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from endpoints import register_all_endpoints

def config_name():
    return 'config.flask_config.{}Config'.format(os.environ.get("FLASK_ENV", "development").title())

app = Flask(__name__)
CORS(app, origins='http://localhost:3001', methods=['GET', 'POST', 'PUT', 'DELETE'])


register_all_endpoints(app)

flask_bcrypt = Bcrypt(app)
jwt = JWTManager(app)


@app.route("/")
def home():
    print("e")
    return "Welcome to my Flask app!"

if __name__ == '__main__':
    from werkzeug.serving import run_simple
    from werkzeug.wsgi import DispatcherMiddleware

    parent_app = DispatcherMiddleware(Flask("dummy"), {'/api': app})
  
    run_simple('0.0.0.0', 5001, parent_app, use_reloader=True, use_debugger=True)