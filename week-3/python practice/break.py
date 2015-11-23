numbers = [5, 7, 9, 11, 13, 12]

i = 0
while i < len(numbers):
    if numbers[i] % 3 == 0:
        print (numbers[i])
        break
    i = i + 1
