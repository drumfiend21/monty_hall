//Monty Hall



var monty_hall = function(switchYesorNo){
	count=0
	switchWins = 0;
	noSwitchWins = 0; 

	while(count<1000){
		count++;
		var array= ["W","L","L"];
		var selectNum = (Math.floor(Math.random()*3));
		var select = array[selectNum];
		//var Guess = array.splice(array.indexOf(select),1);
		//array is now the two remaining values, minus our guess
		var indexes = [0,1,2];
		var indexGuess= indexes.splice(selectNum, 1);
		//indexes is now two values indexes[0] and indexes[1]
		var finalChoice;
		
		if(switchYesorNo==="No"){
			if(select==="W"){
				//console.log("Your choice was right and you did not switch, you win!");
				noSwitchWins++;
			}
			if(select==="L"){
				//console.log("Your choice was wrong and you did not switch, you lose.")
			}
		}
		
		if(switchYesorNo==="Yes"){
			if(select === "W"){
				//console.log("You have chosen a door.  We have revealed the next door\nwithout a prize.  You have chosen to switch to the last\nunrevealed door.  It is empty.  You lose.");
			}
			if(array[indexes[0]]==="L" && array[indexes[1]]!=="L"){
				//console.log("You have chosen a door.  We have revealed the next door\nwithout a prize.  You have chosen to switch to the last\nunrevealed door.");
				finalChoice = array[indexes[1]];
				if(finalChoice === "W"){
					//console.log("You switched to the right choice! You Win!");
					switchWins++;
				}
				if(finalChoice === "L"){
					//console.log("You switched to the wrong choice!  You lose!");
				}
			}
			if(array[indexes[1]]==="L" && array[indexes[0]]!=="L"){
				//console.log("You have chosen a door.  We have revealed the next door\nwithout a prize.  You have chosen to switch to the last\nunrevealed door.");
				finalChoice = array[indexes[0]];
				if(finalChoice === "W"){
					//console.log("You switched to the right choice! You Win!");
					switchWins++;
				}
				if(finalChoice === "L"){
					//console.log("You switched to the wrong choice!  You lose!");
				}
			}
		}
		//console.log(select, selectNum, indexes, finalChoice);
	}
}
monty_hall("Yes");
console.log("Wins out of 1000 using switch (should be close to 666 or 66%) = "+switchWins+"("+switchWins/10+"%)");
monty_hall("No");
console.log("Wins out of 1000 using no switch (should be close to 333 or 33%) = "+noSwitchWins+"("+noSwitchWins/10+"%)");