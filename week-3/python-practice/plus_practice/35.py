#1
def factorial(num):
    output = 1
    i = 1
    while i <= num:
        output *= i
        i += 1
    return output

print(factorial(4))

#2
def factorial(num):
    output = 1
    for n in range(1, num + 1):
        output *= n
    return output

print(factorial(4))

#3
def factorial(num):
    if num == 1:
        return 1
    else:
        return factorial(num -1) * num

print(factorial(4))
