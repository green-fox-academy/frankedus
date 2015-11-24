def greet(name, hi = None):
    if hi is None:
        hi = "Hello"
    print ((hi + ", ") + name)

greet ("Tomi", "hello")
greet ("Tomi", "szia")
greet ("Tomi", None)
greet ("Tomi")
