class MySuperString:
    def __init__ (self, mystr):
        self.mystr = mystr

    def reverse(self):
        reversed = ''
        for i in self.mystr:
            reversed = i + reversed
        return reversed

    def count(self, character):
        count = 0
        for i in self.mystr:
            if i == character:
                count += 1
        return count

    def nospace(self):
        newstr = ''
        for i in self.mystr:
            if i == ' ':
                newstr += '_'
            else:
                newstr += i
        return newstr
