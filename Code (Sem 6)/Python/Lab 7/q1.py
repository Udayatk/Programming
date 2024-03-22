#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'timeConversion' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def timeConversion(s):
    if "AM" in s:
        if "12" in s:
            s=s.replace("12","00")
        s=s.replace("AM","")
    if "PM" in s:
        s=s.replace("PM","")
        s=s.split(":")
        y=int(s[0])
        if y!=12:
            s[0]=y+12
    s=':'.join(map(str, s))
    return s

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    fptr.write(result + '\n')

    fptr.close()
