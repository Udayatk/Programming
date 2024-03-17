"""Write a python program to check the group of box according to the weight condition
    The weight condition : 50-60 = Group A
                           61-70 = Group B
                           71-80 = Group C
                           Above 80 = Group D"""

def weight(a):
    """functin to check weight conditon"""
    if a<50:
        print("Underweight")
    elif a>=50 and a<=60:
        print("Group A")
    elif a>=61 and a<=70:
        print("Group B")
    elif a>=71 and a<=80:
        print("Group C")
    elif a>80:
        print("Group D")

X=int(input("Enter a number :"))
weight(X)
