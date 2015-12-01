class Player:
    def __init__(self, name, hp, dmg):
        self.name = name
        self.hp = hp
        self.dmg = dmg

    def drink_potion(self):
        self.hp += 10

    def strike(self, enemy):
        enemy.hp -= self.dmg

    def print_status(self):
        print(self.name)
        if self.hp <= 0:
            print(self.name, 'Dead')
        else:
            print('HP: ' + str(self.hp))

balrog = Player('Balrog', 100, 20)
gandalf = Player('Gandalf the Grey', 50, 40)

balrog.print_status()
for i in range(3):
    gandalf.strike(balrog)
balrog.print_status()
