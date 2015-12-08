def read_db(path):
    db = open(path, "r")
    raw_content = db.read()
    db.close()
    database = raw_text_to_list(raw_content)
    return database

def save_to_db(database, path):
    db = open(path, "w")
    raw_content = list_to_raw_text(database)
    db.write(raw_content)
    db.close()

def show_menu():
    print('\nMENU\n')
    print('0 = exit\n1 = add\n2 = complete\n3 = remove\n')

def add_task(database):
    while True:
        userInput = input('\nNew task:\n')
        if userInput == '':
            break
        database.append('[ ] ' + userInput)
        print_todo_list(database)

def remove_task(database):
    while True:
        print_todo_list(database)
        userInput = input('\nNumber of task to delete:\n')
        if userInput == '':
            break
        i = int(userInput) - 1
        del database[i]


def complete_task(database):
    while True:
        userInput = input('\nNumber of completed task:\n')
        if userInput == '':
            break
        i = int(userInput) - 1
        database[i] = database[i][:1] + 'X' + database[i][2:]
        print_todo_list(database)

def raw_text_to_list(text):
    list_ = text.split('\n')
    return [string for string in list_ if string != '']

def list_to_raw_text(list_):
    return "\n".join(str(i) for i in list_)

def print_todo_list(list_):
    print('\n*** TO DO LIST ***\n')
    nasd = []
    i = 0
    for item in list_:
        i += 1
        nasd.append(str(i) + '. ' + item)
    print("\n".join(str(i) for i in nasd))
