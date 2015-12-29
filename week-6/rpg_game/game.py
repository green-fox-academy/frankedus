from menu import *
from player import Player

class Game:
    def __init__(self):
        self.menu = None
        self.player = Player()
        self.main_menu()


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
            MenuItem(2, 'Continue', self.continue_game),
            MenuItem(3, 'Save', self.not_implemented),
            MenuItem(0, 'Quit', self.quit_game)
        ])

    def continue_game(self):
        self.player.get_status()
        print(self.player.print_status())
        self.menu = Menu([
            MenuItem(1, 'Reroll stats', self.not_implemented),
            MenuItem(2, 'Continue', self.not_implemented),
            MenuItem(3, 'Save', self.not_implemented)
        ])


    def quit_game(self):
        self.menu = Menu([
            MenuItem(1, 'Save and quit', self.not_implemented),
            MenuItem(2, 'Quit without save', self.not_implemented),
            MenuItem(3, 'Resume', self.not_implemented),
        ])

    def not_implemented(self):
        print('Not implemented')
