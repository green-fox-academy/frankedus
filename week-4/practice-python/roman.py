def test(expected, actual, message):
    if expected == actual:
        print ('check')
    else:
        print(message)

def arabic_to_roman(arabic):
    if arabic == 1:
        return 'I'
    return ''

test(arabic_to_roman(0), '', 'It should handle 0')
test(arabic_to_roman(1), 'I', 'It should handle 1')
