def reverse(my_string):
    reversed_string = ''
    for char in my_string:
        reversed_string = char + reversed_string
    return reversed_string

def make_palindrome(from_string):
    return from_string + reverse(from_string)

def lets_play():
    user_input = input('Enter word: ').lower()
    swear_words = ['python', 'a_kutyafajat', 'anyagcsere', 'kacsa']
    is_tojas = ['tojas']

    try:
        if user_input in swear_words:
            raise ValueError

        elif user_input in is_tojas:
            raise ZeroDivisionError

        print(make_palindrome(user_input))

    except ValueError:
        print('Don\'t be rude!')

    except ZeroDivisionError:
        print('Hello Tojas!')

lets_play()
