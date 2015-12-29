from game import *

def main():
    game = Game()
    while True:
        menu = game.menu
        menu.show_menu()
        choice = menu.user_input()
        menu.choose(choice)

print('-' * 20)
print(' ')
print('    *** MENU ***' + '\n')
print('-' * 20 + '\n')

main()
