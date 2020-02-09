import os
from dotenv import load_dotenv
from flask import Flask

from . import TheFlaskTestException, db, migrate, marshmallow, cors
from the_flask_test.routes import student_router


def create_app(app_config):
    app = Flask(__name__)
    app.url_map.strict_slashes = False
    app.config.from_object(f"the_flask_test.{app_config}")

    from the_flask_test.models import Student

    db.init_app(app)
    marshmallow.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app)

    setup_error_handler(app)
    student_router.register_routes(app)
    return app


def setup_error_handler(app):

    def error_handler(error):
        response = error.to_json()
        response.status_code = error.status_code
        return response

    app.errorhandler(TheFlaskTestException)(error_handler)


load_dotenv()
app = create_app(os.environ['APP_SETTINGS'])
