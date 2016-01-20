from menu import MenuItem

def start_game():
    input_name()
    input_field()

def load_game():
    print('Load game')

def exit_game():
    print('Exit')

menu_items = [MenuItem(1, 'New game', start_game),
              MenuItem(2, 'Load game', load_game),
              MenuItem(0, 'Exit game', exit_game)]


def show_menu(items):
    print('*** MENU ***')
    items = ''
    for item in menu_items:
        items += str(item.number) + ' ' + item.name + '\n'
    print (items)


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

def main_menu(menu_items):
    while True:
        show_menu(menu_items)
        user_input = input_field()
        for item in menu_items:
            if user_input == item.number:
                
        if user_input == 1:
            print('New game')
            input_name()
            input_field()
        elif user_input == 2:
            print('Loading game')
            print('Loading...')
        elif user_input == 0:
            print('Exit')
            print('Are you sure? y/n')
            user_input = input()
            if user_input == 'y':
                exit()
            elif user_input == 'n':
                pass

main_menu(menu_items)
