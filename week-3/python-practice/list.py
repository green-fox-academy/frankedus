class Elem(object):
    __slots__ = [
        'value',
        'next'
    ]
    def __repr__(self):
        return '({}, {})'.format(self.value, self.next)

def new_elem(value):
    elem = Elem()
    elem.value = value
    elem.next = None
    return elem

#head = new_elem(2)
#head = append(head, 3)
#head  # => (2, (3, None))
def append(head, value):
    end = head
    while end.next is not None:
        end = end.next
    end.next = new_elem(value)
    return head

#head = insert(head, 1, 3)
def insert(head, index, value):
    if index == 0:
        new = new_elem(value)
        new.next = head
        return new

    prev = head
    i = 0
    while i < index:
        prev = prev.next
        i += 1


    new = new_elem(value)
    new.next = prev.next
    prev.next = new

    return head

    def remove(head, index):
        if index == 0:
            
        elem = head.next
        return elem


        i = 0
        while i < index -1:
            prev = prev.next
            i += 1

        elem = prev.next
        prev.next = elem.next

        return head

    remove(head, 0)
