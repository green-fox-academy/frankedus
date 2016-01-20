import unittest
from katapotter import *

class TestKataPotter(unittest.TestCase):
    def test_empty_array(self):
        self.assertEqual(discounter([]), 0)

    def test_one_book(self):
        self.assertEqual(discounter([1]), 8)

    def test_2_different_books(self):
        self.assertEqual(discounter([1, 2]), 8 * 2 * 0.95)

    def test_3_different_books(self):
        self.assertEqual(discounter([1, 2, 3]), 8 * 3 * 0.9)

    def test_2_equal_books(self):
        self.assertEqual(discounter([2, 2]), 16)
    def test_4_different_books(self):
        self.assertEqual(discounter([1, 2, 3, 4]), 8 * 4 * 0.8)
    def test_5_different_books(self):
        self.assertEqual(discounter([1, 2, 3, 4, 5]), 8 * 5 * 0.75)

    def test_2_different_books_3pcs(self):
        self.assertEqual(discounter([1, 2, 1]), (8 * 2 * 0.95)+8)

    def test_3_different_books_5pcs(self):
        self.assertEqual(discounter([1, 2, 2, 3, 3]), 8 * (3 * 0.9 + 2 * 0.95))




unittest.main()