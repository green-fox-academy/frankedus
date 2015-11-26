numbers = [1, 2, 3, 4, 5, 6, 7, 8]
output = []

def even():
    for i in numbers:
        if i % 2 == 0:
            output.append(i)

even()
print(output)
