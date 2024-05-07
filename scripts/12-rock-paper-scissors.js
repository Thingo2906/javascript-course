// WE will use localStorage to get the score which is stored in localStorage
      /*const score ={
        wins: 0,
        losses: 0,
        ties: 0,
      };*/
      

function pickComputerMove(){
        const randomNumber = Math.random();
        let computerMove = '';
        
        if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove ='rock'

        } else if (randomNumber >=1/3 && randomNumber < 2/3){
        computerMove ='rock'
        } else if (randomNumber>= 2/3 && randomNumber<1){
        computerMove = 'scissors';
        }

        return computerMove;

      }

      function updateScoreElement(){
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`;

      }
     

      //Everytime we reload the page we will get the current score

      // If the left side is falsy, the value of score is right side

      let score = JSON.parse(localStorage.getItem('score')) || {
          wins: 0,
          losses: 0,
          ties: 0
        };
      
      updateScoreElement();

      // We can write like this too
      // if (!score){
      //   score = {
      //     wins: 0,
      //     losses: 0,
      //     ties: 0
      //   }
      // }
      
      let isAutoPlaying = false;
      let intervalId;

      function autoPlay(){
        if (!isAutoPlaying){
          //setInterval will create an unique id
          intervalId = setInterval(() => {
          const playerMove = pickComputerMove()
          playGame(playerMove);

          }, 1000);
          document.querySelector('.auto-play-button').innerHTML ='Stop Playing'
          isAutoPlaying = true;

        } else {
          // it will stop the interval
          document.querySelector('.auto-play-button').innerHTML ='Auto Play'
          clearInterval(intervalId);
          isAutoPlaying = false;

        }
        
      }

      document.querySelector('.js-rock-button').addEventListener('click', () => {
        playGame('rock');
      });

      document.querySelector('.js-paper-button').addEventListener('click', () => {
        playGame('paper');
      });

      document.querySelector('.js-scissor-button').addEventListener('click', () => {
        playGame('scissor');
      })

      document.body.addEventListener('keydown', (event) => {
        if (event.key ==='r'){
          playGame('rock');
        } else if (event.key === 'p'){
          playGame('paper');
        } else if (event.key === 's'){
          playGame('scissors')
        } else if (event.key === 'a'){
          autoPlay();
        } else if (event.key ==='Backspace'){
           showResetConfirm();

        }
      })
      document.querySelector('.reset-score-button').addEventListener('click', () =>{
        showResetConfirm();
        
       
      });

      function showResetConfirm(){
        document.querySelector('.reset-message').innerHTML = `Are you sure you want to reset the score?
        <button class ="yes-confirm">Yes</button>
        <button class ="no-confirm">No</button>`
        document.querySelector('.yes-confirm').addEventListener('click', () => {
          score.wins = 0;
          score.losses =0;
          score.ties = 0;
          localStorage.removeItem('score');
          updateScoreElement();
          hideResetConfirm();

        });
        document.querySelector('.no-confirm').addEventListener('click', () => {
          hideResetConfirm();
        })

      }

      function hideResetConfirm(){
        document.querySelector('.reset-message').innerHTML =" ";
      }


      function playGame(playerMove){
        const computerMove = pickComputerMove();
        let result = '';

        if (playerMove === 'scissors'){
          if (computerMove === 'rock'){
            result = 'You lose';
          } else if (computerMove=== 'paper'){
            result = 'You win'
          } else if (computerMove === 'scissors'){
            result = 'Tie.'
          }
          
        } else if (playerMove === 'paper'){
          if (computerMove === 'rock'){
            result = 'You win';
          } else if (computerMove=== 'paper'){
            result = 'Tie.'
          } else if (computerMove === 'scissors'){
            result = 'You lose'
          }

        } else if (playerMove === 'rock'){  
          if (computerMove === 'rock'){
            result = 'Tie.';
          } else if (computerMove=== 'paper'){
            result = 'You lose'
          } else if (computerMove === 'scissors'){
            result = 'You win'
          }

        }

        if (result === 'You win'){
          score.wins += 1;
        } else if (result === 'You lose'){
          score.losses += 1;
        } else if (result === 'Tie.'){
          score.ties += 1;
        }
        
        //  LocalStorage is only work with string, so we have to convert the object to JSON string
        localStorage.setItem('score', JSON.stringify(score))

        updateScoreElement()
        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML =`You 
        <img src ="images/${playerMove}-emoji.png" class="icon">
        <img src="images/${computerMove}-emoji.png" class ="icon"> Computer`;

      }
