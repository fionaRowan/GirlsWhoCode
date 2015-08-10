#Phoebe Hughes

from hashlib import *

def addPass(passDict, username, password):
	print("Adding Username and Password")
	passDict[username]= sha256(password).hexdigest()
	
	
def main():
	logins= {"Phoebe": "MyPass"}
	print(logins)
	while True:
		user= raw_input("Please enter a username: ")
		password= raw_input("Please enter a password: ")
		addPass(logins, user, password)
		print(logins)
		
		
main()