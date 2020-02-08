from flask import jsonify, request
from services import student_service
from exception import TheFlaskTestException


def register_routes(app):
    @app.route("/students/")
    def get_all_students():
        students = student_service.get_all_students()
        return jsonify([e.serialize() for e in students])

    @app.route("/student", methods=["POST"])
    def add_student():
        student = request.get_json()
        return student_service.add_student(student)

    @app.route("/student/<id>", methods=["GET", "DELETE", "PUT"])
    def student_id_handler(id: int):
        if not isinstance(int(id), int):
            raise TheFlaskTestException('`id` should be an integer', 400)
        if request.method == "GET":
            return jsonify(student_service.get_student_by_id(id))

        if request.method == "DELETE":
            return student_service.delete_student(id)

        if request.method == "PUT":
            student = request.get_json()
            return student_service.update_student(id, student)
