class MySuperString:
    def __init__ (self, mystr):
        self.mystr = mystr

    def reverse(self):
        n = len(self.mystr)
        reversed = ''
        for i in range(n-1, -1, -1):
            reversed += self.mystr[i]
        return reversed
