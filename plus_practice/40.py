students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

def candy_counter(students):
    candies = 0
    for student in students:
        if student['age'] < 10:
            candies += student['candies']
    return candies

print(candy_counter(students))
