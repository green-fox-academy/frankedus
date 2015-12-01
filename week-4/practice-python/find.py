students = [
    {'name': 'Tibi', 'age' : 8},
    {'name': 'Adorjan', 'age' : 9},
    {'name': 'Agoston', 'age' : 6},
    {'name': 'Aurel', 'age' : 7},
    {'name': 'Dezso', 'age' : 12}
]

students_names_at_least_8 = []

for n in students:
    if n['age'] >= 8:
        students_names_at_least_8.append(n['name'])

print(students_names_at_least_8)


student_ages_starting_with_A = []

for student in students:
    if student['name'][0] == 'A':
        student_ages_starting_with_A.append(student['age'])

print(student_ages_starting_with_A)
