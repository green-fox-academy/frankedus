numbers = [3, 4, 5, 6, 7]

#1
def reverse(numbers):
    reversed_list = []
    i = len(numbers) - 1
    while i >= 0:
        reversed_list.append(numbers[i])
        i -= 1
    return reversed_list

print(reverse(numbers))

#2
def reverse(input_list):
    output_list = []
    i = len(input_list) - 1
    while i >= 0:
        output_list.append(input_list[i])
        i -= 1
    return output_list

print(reverse(numbers))
