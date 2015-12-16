from menu import Menu


def start_game():


def load_game():


main_menu = Menu([
    MenuItem(1, 'Start Game', start_game),
    MenuItem(2, 'Load Game', load_game)
    ])

main_menu.choose(1)
