class Game_Character:
    def __init__(self, name, hp, damage):
        self.name = name
        self.hp = hp
        self.damage = damage

    def print_status(self):
        if self.hp <= 0:
            print(self.name, 'Dead')
        else:
            print(self.name, self.hp)

    def drink_potion(self):
        self.hp += 10

    def strike(self, other):
        other.hp -= self.damage


fighter = Game_Character('Feri', 50, 40)
warlock = Game_Character('Jozsi', 100, 60)

warlock.strike(fighter)
fighter.print_status()
