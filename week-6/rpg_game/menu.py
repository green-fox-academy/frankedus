class MenuItem:
    def __init__(self, number, name, action):
        self.number = number
        self.name = name
        self.action = action

    def show_item(self):
        print('{} {}'.format(self.number, self.name))

    def is_selected(self, number):
        return str(self.number) == number

    def call_action(self):
        return self.action()

class Menu:
    def __init__(self, items):
        self.items = items

    def choose(self, number):
        for item in self.items:
            if item.is_selected(number):
                return item.call_action()

    def show_menu(self):
        for item in self.items:
            item.show_item()

    def user_input(self):
        return input('\n' + 'Choose one: ')
