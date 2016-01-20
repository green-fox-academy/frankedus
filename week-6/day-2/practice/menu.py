class Menu:
    def __init__(self, items):
        self.item = item

    def choose(self, number):
        for item in self.items:
            if item.num == number:
                return item.action()
