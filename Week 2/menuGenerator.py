#Phoebe Hughes
#Random Menu Generator

import random as r

def buildMenu(adj, cookingStyle, dish, numItems):
	menu=[]
	for i in range(numItems):
		menuOption=""
		for item in [adj, cookingStyle, dish]:
			menuOption+=item[r.randint(0, len(item)-1)]
			menuOption+=" "
		menu.append(menuOption)
		
	return menu

def main():
	adj=["Salty", "Spicy", "Tasty", "Delicious", "Tangy", "Creamy", "Chewy", "Cheesy", "Chocolaty", "Buttery"]
	dish=["Chicken", "Beef", "Tofu", "Vegetables", "Potatoes", "Turkey", "Pork", "Noodles", "Rice", "Lamb"]
	cookingStyle= ["Steamed", "Baked", "Sauteed", "Blended", "Fried", "Grilled", "Oven Roasted", "Mashed", "Boiled", "Raw"]
	
	menu= buildMenu(adj, cookingStyle, dish, 10)
	for i in range(len(menu)):
		print ("%d. %s" % (i+1, menu[i]))
	
	
if __name__=='__main__':
	main()