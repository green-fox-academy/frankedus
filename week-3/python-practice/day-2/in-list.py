numbers = [1, 13, 7, 9, 4, 21]

has_even = False
for n in numbers:
    if n % 2 == 0:
        has_even = True
        break

print(has_even)
