import unittest
import menu from Menu
import menuitem from MenuItem

class TestMenu(unittest.TestCase):
    def test_choose(self):
        def test_func():
            pass

    menu = Menu([
        MenuItem(1, 'Test', test_func)
    ])
    output = menu.choose(1)
    self.assertEqual(output, 'kacsa')

unittest.main()
