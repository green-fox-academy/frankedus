class MySuperString:
    def __init__ (self, mystr):
        self.mystr = mystr

    def reverse(self):
        n = len(self.mystr)
        reversed = ''
        for i in range(n):
            reversed = self.mystr[i] + reversed
            print('i={}'.fomat(i))
            print(reversed)
        return reversed
