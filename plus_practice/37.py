numbers = [3, 4, 5, 6, 7]

def odd(input_list):
    output_list = []
    for n in input_list:
        if n % 2 == 0:
            output_list.append(n)
    return output_list

print(odd(numbers))
