from tkinter import *

master = Tk()

w = Canvas(master, width=400, height=300)
w.pack()

w.create_rectangle(0, 0, 400, 300, fill="#ffffff")
#w.create_rectangle(0, 0, 20, 20, fill="#000000")
#w.create_rectangle(40, 0, 60, 20, fill="#000000")
#w.create_rectangle(20, 20, 40, 40, fill="#000000")
#w.create_rectangle(60, 20, 80, 40, fill="#000000")
a = 0
b = 0
c = 20
d = 20

for i in range(8):

    for n in range(4):
        w.create_rectangle(a, b, c, d, fill="#000000")
        a += 40
        c += 40

    b += 20
    d += 20
    a = 0
    c = 20

    if i % 2 == 0:
        a += 20
        c += 20


mainloop()
