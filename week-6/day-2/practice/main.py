from menu import Menu
from menu_item import MenuItem

def start_game():
    print(ghjj)

def load_game():
    print(dskl)

main_menu = Menu([
    MenuItem(1, 'Start game', start_game)
    MenuItem(2, 'Load game', load_game)
    ])

main_menu.choose(1)
