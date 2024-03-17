"""Write a python program to check whether a given character is vowel or not"""

def isvowel(a):
    """checks wheter a character is a vowel or not"""
    z=a.lower()
    vowel=["a","e","i","o","u"]
    for i in vowel:
        if z==i :
            print("It is a vowel")
            break
    else:
        print("It is an consonant")
A=input("Enter a variable : ")
isvowel(A)
