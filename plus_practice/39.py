names = ['Zakarias', 'Hans', 'Otto', 'Ole']

def get_shortest_string(strings):
    output = strings[0]
    for string in strings:
        if len(string) < len(output):
            output = string
    return output

print(get_shortest_string(names))
