// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////...
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    The difference between counter1 and counter2 is that counter 2 is a closure because it looks inside itself for the variable; and when it doesn't find
 *    it, it looks outside of the scope to see what it is returning. Now counter1 on the other hand is a higher order function. Function counterMaker is the higher 
 *    order function while the function of counter() is passing thru it.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *    As in the explaination above, counter2 uses closure because it is looking outside of its scope for the variable
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    I think counter1 code would be useful when you want to use counter1 in another area of your code but don't want your code to be messy. So you write what
 *    you want the function to do in the beginning, that way later on you can address it outside of that scope, somewhere else in your code. And maybe counter2 would be
 *    useful when you want something quick?
*/

// counter1 code
function counterMaker() {
  let count = 0; //starts at 0
  return function counter() {
   return count++;  //when function counter() is invoked, it will add 1 to count starting at 0
  }
}

const counter1 = counterMaker(); // when counter1 is invoked, it process the whole cycle of counterMaker()

// counter2 code
let count = 0;

function counter2() {
  return count++; //this function doesn't have count, so forth, its going to look outside of its scope for count; then sees the variable and counts up starting from 0
}

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

          // function inning(/*Code Here*/){

          //     /*Code Here*/

          // }

function inning(score) {
  return Math.floor(Math.random() * Math.floor(score));
}

console.log(inning(3));

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and 
returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

          // function finalScore(/*code Here*/){

          //   /*Code Here*/

          // }

function finalScore(inningCB, inngingsNum( {
	let homeScore = 0;
	let awayScore = 0;
	
	for(let i = 0, I < inningsNum; i++) {
		homeScore = homeScore + inningCB();
		awayScore = awayScore + inningCB();
	} //for loop end
	
	return {
		Home: homeScore,
		Away: awayScore,
	}//return loop end
}//finalScore loop end

console.log('Task 3: ',  finalScore(inning, 9));

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


          // function scoreboard(/* CODE HERE */) {
          //   /* CODE HERE */
          // }
      
function getInningScore (inningCB) {
	return {
		Home: inningCB(),
		Away: inningCB(),
	}//return loop end
}//getInningScore end

function scoreboard (inningScoreCB, inningCB, inningsNum) {
	const scoreByInning = [];
	
	let homeScore = 0;
	let awayScore = 0;
	
	for(let i = 0; i < innings, i++) {
		const currentInning = inningScoreCB(inningCB);
		homeScore = homeScore + currentInning.Home
		awayScore = awayScore + currentInning.Away
		scoreByInning.push(`Inning ${ i + 1}: Away ${currentInning.Away} - Home: ${currentInning.Home}`);
	}//scoreBoard loop end
	
	If (homeScore === awayScore) {
		scoreByInning.push(`you will need to play another inning`);
	}else{
		scoreByInning.push(`Final Score: Away: ${awayScore} - Home: ${homeScore}`);
	}
	
	return scoreByInning;
	
}//scoreboard end

console.log('Task 4: ', scoreboard(getInningScore, inning, 9));


