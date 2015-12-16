def show_menu():
    print('\n*** MENU ***\n')
    print('\n1 = New game\n2 = Load game\n \n0 = Exit\n')

def input_field():
    while True:
        try:
            user_input = int(input('Choose a number: '))
            break
        except ValueError:
            print('You entered a wrong value!')
    return user_input

def input_name():
    user_input = input('Enter a name: ')
    print('\n' + user_input)
    print('\n1 = Reenter name\n2 = Continue\n3 = Save\n \n0 = Exit\n')

def main_menu():
    while True:
        show_menu()
        user_input = input_field()
        if user_input == 1:
            print('New game')
            input_name()
            input_field()
        elif user_input == 2:
            print('Load game')
            print('Loading...')
        elif user_input == 0:
            print('Exit')
            print('Are you sure? y/n')
            user_input = input()
            if user_input == 'y':
                exit()
            elif user_input == 'n':
                pass

main_menu()
