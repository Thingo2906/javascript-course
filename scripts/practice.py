def factorial_calc(x):
     
     if x ==1:
         return 1
     else: 
        return (x * factorial_calc(x-1))
num = 6
print(“The factorial of“, num, “is”, factorial_calc(num)
