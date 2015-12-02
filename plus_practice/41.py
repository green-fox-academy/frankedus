students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Teodor', 'age': 3, 'candies': 2}
]

#1
def student_counter(students):
    counted_students = 0
    for student in students:
        if student['candies'] > 4:
            counted_students += 1
    return counted_students

print(student_counter(students))

#2
def is_rich(kid):
    return kid['candies'] > 4

def filter_da_rich(peeps):
    return len(list(filter(is_rich, peeps)))

print(filter_da_rich(students))
