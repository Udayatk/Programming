"""Python Calculator"""

def addition(a,b):
    """Addition of two variables a and b"""
    print(a+b)

def subtraction(a,b):
    """Subtracting variable b from a"""
    print(a-b)

def multiplication(a,b):
    """Multiplying two variables"""
    print(a*b)

def division(a,b):
    """Dividing two variables"""
    print(a/b)

def remainder(a,b):
    """Dividing two variables and checking for remainder"""
    print(a%b)

def float_division(a,b):
    """Performing floor division on two variables"""
    print(a//b)

def comparison(a,b):
    """Comparing two variables to each other and performing checks"""
    print("Is ",a,"greater than ",b)
    print(a>b)
    print("Is ",a,"lesser than ",b)
    print(a<b)
    print("Is ",a,"is equal to ",b)
    print(a==b)
    print("Is ",a,"not equal than ",b)
    print(a!=b)

def assignment(a,b):
    """Assigning variables and swapping them"""
    x=a
    print("Assigning value of a to x. X: ",x)
    y=b
    print("Assigning value of b to y. Y: ",y)
    y+=x
    print("Adding x value to y. Y: ",y)
    y-=x
    print("Subtracting x value from y. Y: ",y)
    y*=x
    print("Multiplying x value to y. Y: ",y)
    x=x+y
    print("Adding x and y and assigning it to x. X: ",x)

A=int(input("Enter your number: "))
B=int(input("Enter your number: "))

C=input('''What operation do you wanna do with your two variables?\n
        The Options are \naddition\nsubtraction\nmultiplication\ndivision
        \nremainder\nfloat division\ncomparison\nassignment\nWhat is your 
        option?\n''')
if C=="addition":
    addition(A,B)
if C=="subtraction":
    subtraction(A,B)
if C=="multiplication":
    multiplication(A,B)
if C=="division":
    division(A,B)
if C=="remainder":
    remainder(A,B)
if C=="float division":
    float_division(A,B)
if C=="comparison":
    comparison(A,B)
if C=="assignment":
    assignment(A,B)
