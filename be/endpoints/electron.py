from helpers.ReadData import get_electrons
from flask import Blueprint, send_file, request, current_app
from webargs import fields, validate
from flask import jsonify
from datetime import datetime
from utils.json_response import json_response
from .helpers.apiargs import  from_query, from_body
from .helpers.decorators import async_call, jwt_open, no_auth, standalone_only

electron_bp = Blueprint("electron", __name__)


@electron_bp.route("/", methods=["GET"])
@from_query({
    "electron_type": fields.Str(missing='', data_key="electronType"),
    "N": fields.Int(missing=0, data_key="N"),
    "K": fields.Int(missing=0, data_key="K"),
    "dimension": fields.Str(missing='', data_key="dimension")
})
@jwt_open
def electrons(electron_type, N, K, dimension):
    data = get_electrons(electron_type, N, K, dimension)
    return json_response(data)
