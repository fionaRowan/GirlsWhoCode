//Phoebe Hughes
//2048

var board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var add = false;


function drawBoard(){
	//numbers tiles
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			var boardID = "r"+i+"c"+j;
			if(board[i][j]!=0){
				document.getElementById(boardID).innerHTML = board[i][j];
			}
			else{
				document.getElementById(boardID).innerHTML= null;
			}
		}
	}

	//colors tiles
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			var boardID = "r"+i+"c"+j;
			var bkColor;
			var textColor= "#ffffff"
			switch (board[i][j]){
				case 2:
					bkColor="#f0e5da";
					textColor= "#000000";
					break;
				case 4:
					bkColor="#ede2c8";
					textColor="#000000";
					break;
				case 8:
					bkColor="#feb578";
					break;
				case 16:
					bkColor="#ff9962";
					break;
				case 32:
					bkColor="#ff8060";
					break;
				case 64:
					bkColor="#ff613c";
					break;
				case 128:
					bkColor="#efd26d";
					break;
				case 256:
					bkColor="#efd15c";
					break;
				case 512:
					bkColor="#efcd4a";
					break;
				case 1024:
					bkColor="#f0ca36";
					break;
				case 2048:
					bkColor="#ccc0b3";
					break;
				default: 
					bkColor=null;
			}
			document.getElementById(boardID).style.background = bkColor;
			document.getElementById(boardID).style.color= textColor;
		}
	}
}

//show students an ascii conversion tool. 
function bindings(e){
	var code= e.keyCode;

	//print if p is pressed
	if (code===112){
		printBoard();
		//console.log(checkOpen());
	}
	//i up
	else if(code===105){
		moveAll("u");
	}
	//k down
	else if(code===107){
		moveAll("d");
	}
	//l right
	else if(code===108){
		moveAll("r");
	}
	//j left
	else if(code===106){
		moveAll("l");
	}
	/*
	//a add random block
	else if(code===97){
		addRandom();
	}*/
	else{
		console.log(code);
	}
	drawBoard();
}

//prints all the objects in the board
function printBoard(){
	for (var i=0; i<4; i++){
		console.log(board[i]);
	}
}

//checks if open tiles
function checkOpen(){
	//console.log("Checking");
	for (var i=0; i<4; i++){
		for (var j=0; j<4; j++){
			if (board[i][j]===0){
				return true
			}
		}
	}
	return false;
}

//given a list finds all indices where int is 0
function find0(row){
	//console.log(row);
	var indicies=[];
	for (var i=0; i<4; i++){
		if (row[i] === 0){
			indicies.push(i);
		}
	}
	//console.log(indicies);
	return indicies;
}

//adds new square
function addRandom(){
	if (!checkOpen()){
		console.log("Can't add any!");
		return;
	}

	var randRow= -1;
	var randCol= -1;
	do{
		randRow= Math.floor(Math.random()*4); //numbers between 0 and 5
		var ind= find0(board[randRow]);
		if (ind.length===0){ //no empty spaces in row
			//console.log("Empty!");
			randRow= -1;		
		}
		else{
			randCol= ind[Math.floor(Math.random()*ind.length)];
		}
	}
	while(randRow === -1);
	
	/*
	console.log("Adding");
	console.log(randRow);
	console.log(randCol);
	console.log(board[randRow][randCol]);*/
	
	if (Math.random()>0.5){
		board[randRow][randCol]=2;
	}
	else{
		board[randRow][randCol]=4;
	}
}

//add two blocks
//each block is formatted [rowNum, colNum]
//merges to block1's location
function merge(block1, block2){
	var b1Val= board[block1[0]][block1[1]];
	var b2Val= board[block2[0]][block2[1]];
	
	console.log("Merging!");
	if (b1Val===b2Val){
		board[block1[0]][block1[1]]= b1Val*2;
		board[block2[0]][block2[1]]= 0;
	}
}

/*
//moves block in direction so long as empty space
//block is [rowNum, colNum]
//direction is "u" "d" "l" or "r"
function moveBlock(block, direction){
	var row= block[0];
	var col= block[1];
	var val= board[row][col];
	
	switch (direction){
		case "u":
			if (row!=0 && board[row-1][col]===0){
				board[row-1][col]=val;
				board[row][col]=0;
			}
			break;
		case "d":
			if (row!=3 && board[row+1][col]===0){
				board[row+1][col]=val;
				board[row][col]=0;
			}
			break;
		case "l":
			if (col!=0 && board[row][col-1]===0){
				console.log("Left!");
				board[row][col-1]=val;
				board[row][col]=0;
			}
			break;
		case "r":
			if (col!=3 && board[row][col+1]===0){
				console.log("Right!");
				board[row][col+1]=val;
				board[row][col]=0;
			}
			break;
		default:
			console.log("Invalid direction");
	}
}*/

//moves a row or a column
//row or col num is 0-4
//direction is "u" "d " "l" or "r"
function move(num, direction){
	//moves left
	if (direction==="l"){
		var row= num;
		for(var i=1; i<4; i++){ //does not try to move blocks in col 0
			var col= i;
			var val= board[row][col];
			while(val !=0 && col-1 != -1 && (board[row][col-1]===0 || board[row][col-1]===val)){
				if (board[row][col-1]===0 ){
					console.log("Moving Block Left!");
					board[row][col-1]=val;
					board[row][col]=0;
					//moveBlock([rowNum, col],"l");
				}
				else{ //mergeable
					merge([row, col-1], [row, col]);
					break;
				}
				add=true;
				col--;
			}
		}
	}
	
	//moves right
	else if(direction==="r"){
		var row=num;
		for(var i=2; i>-1; i--){ //does not try to move blocks in col 3
			var col= i;
			var val= board[row][col];
			while(val !=0 && col+1 != 4 && (board[row][col+1]===0 || board[row][col+1]===val)){
				if (board[row][col+1]===0){
					console.log("Moving Block Right!");
					//moveBlock([rowNum,col] ,"r");
					board[row][col+1]=val;
					board[row][col]=0;
				}
				else{
					merge([row, col+1], [row, col]);
					//val= val*2;
					break;
				}
				col++;
				add=true;
			}
		}
	}
	
	//moves up
	else if(direction==="u"){
		var col=num;
		for(var i=1; i<4; i++){ //does not try to move blocks in row 0
			var row= i;
			var val= board[row][col];
			while(val !=0 && row-1 != -1 && (board[row-1][col]===0|| board[row-1][col]===val)){ //move while there is a 0 to the left
				if (board[row-1][col]===0){
					console.log("Moving Block Up!");
					board[row-1][col]=val;
					board[row][col]=0;
					//moveBlock([rowNum, col],"u");
				}
				else{
					merge([row-1, col], [row, col]);
					break;
				}
				row--;
				add=true;
			}
		}
	}
	
	//moves down
	else if(direction==="d"){
		var col=num;
		for(var i=2; i>-1; i--){ //does not try to move blocks in col 3
			var row= i;
			var val= board[row][col];
			while(val !=0 && row+1 != 4 && (board[row+1][col]===0 || board[row+1][col]=== val)){
				if (board[row+1][col]===0){
					console.log("Moving Block Right!");
					//moveBlock([rowNum,col] ,"d");
					board[row+1][col]=val;
					board[row][col]=0;
				}
				else{
					merge([row+1, col], [row, col]);
					break;
				}
				row++;
				add=true;
			}
		}
	}
}

//moves all blocks
function moveAll(direction){
	add= false;
	console.log(add);
	for (var i=0; i<4; i++){
		move(i, direction);
	}
	if (add){
		addRandom();
	}
}

function initBoard(){
	addRandom();
	addRandom();
	drawBoard();
}