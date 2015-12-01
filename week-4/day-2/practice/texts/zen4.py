duplicated_zen = open('duplicated_chars.txt', 'r')
lines = duplicated_zen.readlines()

for line in lines:
    line = line.rstrip()
    print(line[::2])

duplicated_zen.close()
