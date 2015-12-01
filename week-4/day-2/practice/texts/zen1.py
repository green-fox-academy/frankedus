reversed_zen = open('reversed_zen_lines.txt')
lines = reversed_zen.readlines()

for line in lines:
    reversed_line = ''
    line = line.rstrip()
    reversed_line = line[::-1]
    print(reversed_line)

reversed_zen.close()
