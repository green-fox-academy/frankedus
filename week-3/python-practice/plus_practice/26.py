z = 4
text = 'Silver'
i = 0

#1
while i < z:
    print(text)
    i += 1

#2
for i in range(0, z):
    print(text)

#3
for t in [text] * 4:
    print(t)
