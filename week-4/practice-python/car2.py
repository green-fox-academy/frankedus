class Car:
    def __init__(self, color, type, km):
        if type(color) != str:
            raise Exception('Color is not a string')
        self.color = color
        self.type = type
        self.km = km

    def ride(self, km):
        self.km += km

    def getMiles(self):
        return self.km * 0.6213

tesla = Car('pink', 'Tesla S', 1200)

tesla_has_eye_brows = True

tesla.ride(220)

lada = Car('red', 'Lada 1200', 40000)

print(tesla.km)
print(tesla_has_eye_brows)
tesla.ride(300)
print(tesla.getMiles())
