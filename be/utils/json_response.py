from bson.json_util import dumps, RELAXED_JSON_OPTIONS
from flask import Response

"""
mongodb has some "ubnormal" fields, like ObjectID,
which the simple jsonify function of flask can't handle.

The 'json_response' method here converts the response to a 'real' json using
mongodb's utilities
"""


def to_json(obj):
    return dumps(obj, json_options=RELAXED_JSON_OPTIONS)


def json_response(obj):
    return Response(to_json(obj), mimetype="application/json")
