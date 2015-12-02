filename = 'alma.txt'

def wc(filename):
    input_file = open(filename)
    file_content = input_file.read()
    line_count = len(file_content.split('\n'))
    input_file.close()
    return [line_count, len(file_content)]

print(wc(filename))
