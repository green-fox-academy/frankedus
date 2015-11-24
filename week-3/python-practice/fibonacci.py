a = 0
b = 1
c = 0
n = 0

print (a)
print (b)
while n < 10:
    c = a + b
    print (c)
    a = b
    b = c
    n += 1
