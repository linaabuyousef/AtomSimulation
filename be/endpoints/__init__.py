from flask_apispec import FlaskApiSpec

from .electron import electron_bp

def register_all_endpoints(app):
    """invoke app.register_blueprints() in a specific order
    to allow only a subset of endpoints (with Shared: True) to be exposed in FlaskApiSpec (Swagger).
    """

    blueprints = [
        {"bp": electron_bp, "route": "electron", "name": "electron_bp", "shared": True},
    ]


    # register the existing blueprints in FlaskApiSpec
    FlaskApiSpec(app).register_existing_resources()
    
    # register all other blueprints in the app
    for blueprint in (bp for bp in blueprints):
        app.register_blueprint(blueprint["bp"], url_prefix='/{}'.format(blueprint["route"]), name=blueprint["name"])
