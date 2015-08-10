#Phoebe Hughes
#Password Hashing

from hashlib import *

def createNewlogin(logins):
	user= raw_input("Please enter your username: ")
	password= raw_input("Please enter a password: ")
	logins[user]= sha256(password).hexdigest()


def tryLogin(logins):
	user= raw_input("Please enter your username: ")
	if not(user in logins):
		print("No user with that login. Please try again.")
		options(logins)
		return
	else:
		password= raw_input("Please enter your password: ")
		if (logins[user]==sha256(password).hexdigest()):
			print("Login successful!")
		else:
			print("Incorrect password!")


def options(logins):
	loginChoice= raw_input("Please enter 1 to login or 2 to create a new login or 3 to quit: ")
	try:
		loginChoice= int(loginChoice)
	except:
		print ("Invalid choice. Try again.")
		options(logins)
		
	if loginChoice==1:
		tryLogin(logins)
		
	elif loginChoice==2:
		createNewlogin(logins);
		
	elif loginChoice==3:
		quit()
	else:
		print("Not a valid option.")
		options(logins)
		return
	options(logins)



def main():
	logins= {}
	options(logins);

if __name__=='__main__':
	main()