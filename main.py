# This program calculates the total amount of money in a till based on user input for various denominations.
print("Enter the amount of money in the till starting with $100 bills and ending with 5 cent coins")

one_hundred = int(input("Enter the number of $100 bills: "))
fifty = int(input("Enter the number of $50 bills: "))
twenty = int(input("Enter the number of $20 bills: "))
ten = int(input("Enter the number of $10 bills: "))
five = int(input("Enter the number of $5 bills: "))
two = int(input("Enter the number of $2 coins: "))
one = int(input("Enter the number of $1 coins: "))
twenty_cent = int(input("Enter the number of 20 cent coins: "))
ten_cent = int(input("Enter the number of 10 cent coins: "))
five_cent = int(input("Enter the number of 5 cent coins: "))
total = one_hundred * 100 + fifty * 50 + twenty * 20 + ten * 10 + five * 5 + two * 2 + one * 1 + twenty_cent * 0.2 + ten_cent * 0.1 + five_cent * 0.05
print("The total amount of money in the till is $", total)
