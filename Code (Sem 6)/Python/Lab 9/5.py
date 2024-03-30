#Write a python program to print the distinct elements in a list
def distinctElements(b):
    dup=[]
    dis=[]
    for i in range(len(b)):
        for j in range(i + 1, len(b)):
            if b[i] == b[j]:
                dup.append(b[j])
    for i in b:
        if i not in dup and i not in dis:
            dis.append(i)
    print(dis)

x=input("Enter the list numbers :")
b=[int(y) for y in x.split(" ")]
distinctElements(b)