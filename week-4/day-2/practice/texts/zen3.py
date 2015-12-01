encoded_zen = open('encoded_zen_lines.txt')
outfile = open('decoded_zen_lines.txt', 'w')
lines = encoded_zen.readlines()

for line in lines:
    line = line.rstrip().split()
    new_line = ''
    for word in line:
        new_word = ''
        for char in word:
            new_word += chr(ord(char) -1)
        new_line += new_word + ' '

    outfile.write(new_line + '\n')

encoded_zen.close()
outfile.close()
