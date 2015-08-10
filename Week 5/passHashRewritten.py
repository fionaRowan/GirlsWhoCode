#Phoebe Hughes

from hashlib import *

def addPass(passDict, username, password):
	print("Adding Username and Password")
	passDict[username]= sha256(password).hexdigest()
	
	
def main():
	logins= {"Phoebe": "MyPass"}
	print(logins)
	while True:
		option= raw_input("Enter 1 to add a login. Enter 2 to exit")
		if(int(option)==1):
			user= raw_input("Please enter a username: ")
			password= raw_input("Please enter a password: ")
			addPass(logins, user, password)
			print(logins)
		else:
			break
		
		
main()