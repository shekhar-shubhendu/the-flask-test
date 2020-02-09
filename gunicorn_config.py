import os

bind = f"{os.environ.get('HOST', '0.0.0.0')}:{os.environ.get('PORT', 8080)}"
workers = 4
