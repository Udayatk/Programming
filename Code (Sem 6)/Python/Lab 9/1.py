#Write a python program to get user input from Nested List
def nestedList(no,size):
    a=[]
    for i in range(no):
        b=[]
        for j in range(size):
            x=int(input("Enter the "+str(i+1)+" list numbers :"))
            b.append(x)
        a.append(b)
    print("Your list has been created successfully ")
    print(a)

no=int(input("How many arrays do u want? :"))
size=int(input("How many items per list :"))
nestedList(no,size)