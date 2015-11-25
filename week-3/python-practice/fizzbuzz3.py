#n = 0
#while n <= 100:
#    if n % 3 == 0:
#       print ('fizz')
#    else:
#        print (n)
#    n += 1

def fizz_buzz(minimum, maximum):
    n = minimum
    while n <= maximum:
        if n % 3 == 0:
            print ('fizz')
        else:
            print (n)
        n += 1

fizz_buzz(1, 50)
