filename = 'alma.txt'

def print_file(name):
    file_to_print = open(name)
    content = file_to_print.read()
    file_to_print.close()
    return content

print(print_file(filename))
