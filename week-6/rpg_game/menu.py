class MenuItem:
    def __init__(self, number, name, action):
        self.number = number
        self.name = name
        self.action = action


class Menu:
    def __init__(self, items)
        self.items = items

    def choose(self, number):
        for item in self.items:
            if self.number == number:
                return item.action()
