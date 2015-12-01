zen_order = open('reversed_zen_order.txt')
lines = zen_order.readlines()

for line in lines[::-1]:
    line = line.rstrip()
    print(line)

zen_order.cloes(s)
