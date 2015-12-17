from menu import *
from player import Player

class Game:
    def __init__(self):
        self.menu = None
        self.player = Player()
        self.main_menu()

    def not_implemented(self):
        print('Not implemented')

    def main_menu(self):
        self.menu = Menu([
            MenuItem(1, 'New game', self.new_game),
            MenuItem(2, 'Load game', self.not_implemented),
            MenuItem(0, 'Exit game', exit),
        ])

    def new_game(self):
        self.player.set_name()
        self.menu = Menu([
            MenuItem(1, 'Reenter name', self.player.set_name),
            MenuItem(2, 'Load game', self.not_implemented),
            MenuItem(0, 'Exit game', self.exit_game)
        ])

    def exit_game(self):
        self.menu = Menu([
            MenuItem(1, 'Save and quit', self.not_implemented),
            MenuItem(2, 'Quit without save', self.not_implemented),
            MenuItem(3, 'Resume', self.not_implemented),
        ])


def main():
    game = Game()
    while True:
        menu = game.menu
        menu.show_menu()
        choice = menu.user_input()
        menu.choose(choice)

print('*** MENU ***' + '\n')
main()
