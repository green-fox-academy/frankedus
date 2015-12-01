class Bank_Account:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

    def receive(self, amount):
        self.balance += amount

    def pay(self, amount):
        self.balance -= amount

    def print_balance(self):
        print('Balance of: ')
        print(self.name)
        print('is: ')
        print(self.balance)

    def transfer(self, other, amount):
        self.pay(amount)
        other.receive(amount)



tojas = Bank_Account('Tamas Kokeny', 46)
feri = Bank_Account('Feri', 700000)
tojas.receive(130000)

tojas.transfer(feri, 40000)

tojas.print_balance()
feri.print_balance()
