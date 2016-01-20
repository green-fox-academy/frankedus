import random

class Player:
    def __init__(self):
        self.name = ''
        self.get_status()

    def get_name(self):
        return self.name

    def set_name(self):
        self.name = input('Enter your name: ')
        
        print('\n' + self.name + '\n')

    def get_status(self):
        self.dexterity = random.randint(1, 6) + 6
        self.health = random.randint(2, 12) + 12
        self.luck = random.randint(1, 6) + 6

    def print_status(self):
        output = ''
        output = 'Dexterity: ' + str(self.dexterity) + '\n' + 'Health: ' + str(self.health) + '\n' + 'Luck: ' + str(self.luck) + '\n'
        return output
