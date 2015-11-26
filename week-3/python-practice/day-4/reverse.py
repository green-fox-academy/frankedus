def reverse(in_list):
    out = []
    i = len(in_list) - 1
    while i >= 0:
        out.append(in_list[i])
        i -= 1
    return out
output = reverse([1, 2, 3, 4])
print(output)
