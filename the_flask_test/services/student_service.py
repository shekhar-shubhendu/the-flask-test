from the_flask_test.extensions import db
from the_flask_test.models import Student, StudentSchema
from the_flask_test.exception import TheFlaskTestException
student_schema = StudentSchema()
students_schema = StudentSchema(many=True)


def get_all_students():
    return Student.query.all()


def get_student_by_id(id):
    value = Student.query.get(id)
    if value:
        return value.serialize()
    raise TheFlaskTestException('Student Not Found', 404)


def update_student(id, data):
    get_student_by_id(id)
    err, result = validate(data)
    if err:
        raise TheFlaskTestException('Validation Failed', 400, err)
    result = result.serialize()
    result.pop('id')
    result['class_no'] = result.pop('class')
    db.session.query(Student).filter(Student.id == id).update(result)
    db.session.commit()
    return {
            'id': int(id)
    }


def delete_student(id: int):
    student = Student.query.get(id)
    if student:
        db.session.delete(student)
        db.session.commit()
        return {
            'id': int(id)
        }
    raise TheFlaskTestException('Student Not Found', 404)


def add_student(args):
    err, result = validate(args)
    if err:
        raise TheFlaskTestException('Validation Failed', 400, err)
    db.session.add(result)
    db.session.commit()
    return {
        'id': int(result.id)
    }


def validate(student):
    errors = student_schema.validate(student)
    if errors:
        return {
            'error': errors
        }, None
    return None, Student(
        student.get('name'),
        student.get('class'),
        student.get('sex'),
        student.get('age'),
        student.get('siblings'),
        student.get('gpa')
    )
