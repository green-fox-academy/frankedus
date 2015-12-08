filename = 'alma.txt'

#1
def print_file(name):
    file_to_print = open(name)
    content = file_to_print.read()
    file_to_print.close()
    output = ''
    for line in content.split('\n'):
        output += 'a ' + line + '\n'
    return output

print(print_file(filename))

#2
def print_file_lines_with_a(name):
    file_to_print = open(name)
    lines = file_to_print.readlines()
    file_to_print.close()
    for line in lines:
        print('a ' + line.rstrip())

print_file_lines_with_a(filename)
