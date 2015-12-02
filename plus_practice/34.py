numbers = [4, 5, 6, 7, 8, 9, 10]

def summa(num_list):
    summ = 0
    for n in numbers:
        summ = summ + n
    return summ

print(summa(numbers))
print(summa([1, 2, 3]))
