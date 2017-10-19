

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var tries ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'




  


   result = function () {


    for (var i = 0; i < word.length; i++) {

      if (word[i] === "-") {
        console.log = "-";
        space = 1;
      } else {
        console.log = "_";
      }

      geusses.push(guess);
    }
  }
  

   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
        console.log("Losar!");

          }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        console.log("Winnar!");
      }
    }
  }

 


  // Function would handle new input coming inputs
  newGuess = function () {

    inquirer({
          newGuess: "guess",
  
    })

      for (var x = 0; x < word.length; x++) {
        if (word[x] === newGeuss) {
          geusses[x] = newGeuss;
          counter ++;
        } 
      }
      var x = (word.indexOf(newGeuss));
      if (x === -1) {
        tries--
      } else {
      }
    
  }
  
    
  // Would put together the other functions.
  playGame = function () {
    wordPossibilities = [
        ["cat", "dog", "bird", "cat-dog", "bird dog"]

    ];

    //gets a random word from the wordPossibilities array. 

    chosenWord = wordPossibilities[Math.floor(Math.random() * wordPossibilities.length)];
    word = chosenWord[Math.floor(Math.random() * chosenWord.length)];

    //okay, admittedly didn't figure out how to replace the letters myself but looked this up, hopefully it takes the word that's created and replaces the array with the correct letter.


    word = word.replace(/\s/g, "-"); 
    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;


    //runs the prompt to get the newGuess
    newGeuss();

    //would take the newGuess variable and pass it

    result();

    //comments out if the player won or lost

    comments();
  }

  //sets playGame function to run.
  playGame();
  






