class MyMath:
    def __init__(self, myint):
        self.myint = myint

    def average(self):
        average = 0
        sum = 0
        count = 0
        for i in self.myint:
            sum += i
            count += 1
        average = sum / count
        return average
