#Write an python program to find and print the duplicate elements in a list
def duplicateElements(b):
    for i in range(len(b)):
        for j in range(i+1,len(b)):
            if b[i]==b[j]:
                print(b[j])

x=input("Enter the list numbers :")
b=[int(y) for y in x.split(" ")]
duplicateElements(b)