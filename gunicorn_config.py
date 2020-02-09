import os

port = os.environ.get('PORT', 8080)
host = os.environ.get('HOST', '0.0.0.0')
workers = 4
