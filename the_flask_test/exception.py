from flask import jsonify


class TheFlaskTestException(Exception):

    def __init__(self, message, status_code=500, error_payload=None):
        Exception.__init__(self)
        self.message = message
        self.status_code = status_code
        self.payload = error_payload

    def to_json(self):
        resp = {
            'message': self.message
        }
        if self.payload:
            resp['errors'] = self.payload
        return jsonify(resp)
