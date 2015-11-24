curr_room = "Hall"

def move(dir):
    if dir == "north" and room == "Hall":
        return "Living room"
    elif dir == "South":
        return "Kitchen"
    else:
        return None

curr_room = move('north')
