#Write a python program to get user input from Nested List and print it as a matrix
def nestedList(no):
    a=[]
    for i in range(no):
        b=[]
        for j in range(no):
            x=int(input("Enter the list "+str(i+1)+" numbers :"))
            b.append(x)
        a.append(b)
    print("Your list has been created successfully ")
    for i in range(no):
        for j in range(no):
            print(a[i][j], end=" ")
        print()

no=int(input("How many arrays do u want? :"))
nestedList(no)