numbers = [7, 5, 8, -1, 2]

def get_min_element(number_list):
    output = number_list[0]
    for n in number_list:
        if output > n:
            output = n
    return output

print(min_element(numbers))
