from tkinter import *

master = Tk()

w = Canvas(master, width=400, height=300)
w.pack()

w.create_rectangle(0, 0, 400, 300, fill="#ffffff")

for i in range(8):
    for n in range(4):
        if i % 2 == 0:
            w.create_rectangle(n * 40, i * 20, n * 40 + 20, i * 20 + 20, fill="#000000")
        else:
            w.create_rectangle(n * 40 + 20, i * 20, n * 40 + 40, i * 20 + 20, fill="#000000")

mainloop()
