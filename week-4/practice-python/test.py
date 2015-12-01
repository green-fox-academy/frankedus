def multiply(a, b):
    return (a * b)

def test(expected, actual, message):
    if expected == actual:
        print ('check')
    else:
        print(message)


test(multiply(3, 2), 6, 'it should multiply numbers')
