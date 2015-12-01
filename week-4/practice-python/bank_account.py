#1
class Bank_Account:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

    def pay(self, amount):
        self.balance -= amount

    def receive(self, amount):
        self.balance += amount

    def print_balance(self):
        print(self.balance)

human = Bank_Account('Pali', 30000)

human.pay(10000)
human.print_balance()

#2
class Bank_Account:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

    def receive(self, amount):
        self.balance += amount

    def print_balance(self):
        print('Balance of: ')
        print(self.name)
        print('is: ')
        print(self.balance)

    def transfer(self, other_account, money):
        self.balance -= money
        other_account.balance += money

feri = Bank_Account('Feri', 20000)

tojas = Bank_Account('Tamas Kokeny', 46)
tojas.receive(130000)

tojas.transfer(feri, 40)

tojas.print_balance()
feri.print_balance()
