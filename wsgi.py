import os
from the_flask_test.app import app as application

if __name__ == "__main__":
    port = os.environ.get('PORT', 8080)
    host = os.environ.get('HOST', '0.0.0.0')
    application.run(host, port)
