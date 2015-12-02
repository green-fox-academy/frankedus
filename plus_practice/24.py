x = 4
time = 120
out = ''
maxtime = 200

if x % 4 == 0 and time < maxtime:
    out = 'check'
elif time >= maxtime:
    out = 'Time out'
else:
    out = 'Run Forest Run'

print(out)
