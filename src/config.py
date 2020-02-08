import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    SECRET_KEY = os.environ['SECRET_KEY']
    SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class ProdConfig(Config):
    DEBUG = False


class StageConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class DevConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class TestConfig(Config):
    TESTING = True
