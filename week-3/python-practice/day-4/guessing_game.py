from random import randint

def get_integer():
    number = int(input("Enter an integer: "))
    return number

number_to_guess = randint(0, 30)

number_of_guesses = 5

while number_of_guesses > 0:
    try:
        guess = get_integer()
    except ValueError:
        print("You entered a wrong value.")
    else:
        if guess == number_to_guess:
            print("You won")
            break
        elif guess > number_to_guess:
            print ("My number is smaller")
            number_of_guesses -= 1
        else:
            print ("My number is bigger")
            number_of_guesses -= 1

if number_of_guesses == 0:
    print("You lost. ")
    print("The right number is:", number_to_guess)
