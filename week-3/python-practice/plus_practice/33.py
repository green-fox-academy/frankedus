ag = 'kuty'

#1
def appendA(text):
    return text + 'a'

ag = appendA(ag)

print(ag)


#2
ag2 = ['rep', 'macsk', 'cic', 'alm', 'Ann', 'kacs']

for i in range(len(ag2)):
    ag2[i] = appendA(ag2[i])

print(ag2)
