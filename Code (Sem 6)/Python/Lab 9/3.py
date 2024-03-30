#Write an python program to take the input in a single line
def nestedList(no):
    a=[]
    for i in range(no):
        x=input("Enter the list "+str(i+1)+" numbers :")
        b=[int(y) for y in x.split(" ")]
        a.append(b)
    print("Your list has been created successfully ")
    for i in range(no):
        for j in range(no):
            print(a[i][j], end=" ")
        print()

no=int(input("How many arrays do u want? :"))
nestedList(no)