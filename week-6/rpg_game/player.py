class Player:
    def __init__(self):
        self.name = ''

    def get_name(self):
        return self.name

    def set_name(self):
        self.name = input('Enter your name: ')
        print('\n' + self.name + '\n')
