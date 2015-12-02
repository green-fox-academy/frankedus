ac = ['kuty', 'macsk', 'cic']

#1
i = 0
while i < len(ac):
    ac[i] = ac[i] + 'a'
    i += 1

#2
for i in range(len(ac)):
    ac[i] += 'a'

print(ac)
