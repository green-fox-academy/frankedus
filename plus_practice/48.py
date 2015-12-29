class Student:
    def __init__(self):
        self.grades = []

    def add_grade(self, grade):
        self.grades.append(grade)

    def get_average(self):
        return sum(self.grades) / len(self.grades)

benedek = Student()

benedek.add_grade(4)
benedek.add_grade(1)
benedek.add_grade(1)

print(benedek.get_average())
