def discounter(array):
    discounts = [1, 0.95, 0.9, 0.8, 0.75]
    book_types = len(set(array))
    discount = discounts[book_types - 1]
    full_price_book = len(array)-book_types
    result = round(8 * (book_types * discount + full_price_book), 2)