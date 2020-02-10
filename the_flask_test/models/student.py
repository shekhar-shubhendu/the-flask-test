from the_flask_test.extensions import db, marshmallow


class Student(db.Model):
    __tablename__ = 'student'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    class_no = db.Column(db.Integer, name='class', nullable=False)
    sex = db.Column(db.String(), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    siblings = db.Column(db.Integer, nullable=False)
    gpa = db.Column(db.Float, nullable=False)

    def __init__(self, name, class_no, sex, age, siblings, gpa):
        self.name = name
        self.class_no = class_no
        self.sex = sex
        self.age = age
        self.siblings = siblings
        self.gpa = gpa

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'class': self.class_no,
            'sex': self.sex,
            'age': self.age,
            'siblings': self.siblings,
            'gpa': self.gpa
        }


class StudentSchema(marshmallow.TableSchema):
    class Meta:
        table = Student.__table__
