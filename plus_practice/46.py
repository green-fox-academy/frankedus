class Pirate:
    def __init__(self):
        self.num = 0

    def drink_rum(self):
        self.num += 1

    def hows_goin_mate(self):
        if self.num >= 5:
            return 'Arrr!'
        else:
            return 'Nothin'

Jack = Pirate()
Jack.drink_rum()
Jack.drink_rum()
Jack.drink_rum()
Jack.drink_rum()
Jack.drink_rum()
Jack.drink_rum()
Jack.drink_rum()
print(Jack.hows_goin_mate())
