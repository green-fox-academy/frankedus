def count_letters(input_string):
    output = {}

    for char in input_string:
        if char in output:
            output[char] += 1
        else:
            output[char] = 1
    return output
