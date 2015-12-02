w = 123
credits = 100
is_bonus = False


#1
if credits >= 50 and not is_bonus:
    w -= 2
elif credits < 50 and not is_bonus:
    w -= 1

print(w)


#2
if is_bonus:
    pass
elif credits >= 50:
    w -= 2
else:
    w -= 1


#3
if not is_bonus:
    if credits >= 50:
        w -= 2
    else:
        w -= 1
        
