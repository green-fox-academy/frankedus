def reverse(my_string):
    reversed_string = ''
    for char in my_string:
        reversed_string = char + reversed_string
    return reversed_string

def make_palindrome(from_string):
    return from_string + reverse(from_string)

print(make_palindrome(input('Enter a word: ')))
