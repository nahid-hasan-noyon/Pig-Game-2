var currentScore, totalScore, activePlayer, gamePlaying, limit, rollClicked;

function start() 
{
    currentScore = 0;
    totalScore = [0, 0, 0];
    activePlayer = 1;
    gamePlaying = true;
    rollClicked = false;
    //changed the active status
    document.querySelector('.player-2-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
    
    //change the winner name
    document.getElementById('name-1').textContent = 'Player 1';
    document.getElementById('name-2').textContent = 'Player 2';
    
    //all value changed 
    document.getElementById('score-1').textContent = '0';  
    document.getElementById('score-2').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';
    
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}

start();

function otherPlayer()
{
    document.querySelector('#current-' + activePlayer).textContent = '0';
    activePlayer === 1 ? activePlayer === 2 : activePlayer === 1;
    roundScore = 0;
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-2-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-roll').addEventListener('click', function(){
    //if the game is not finished
    if(gamePlaying)
        {
            // get random value
            var dice1 = Math.floor(Math.random() * 6 + 1 );           var dice2 = Math.floor(Math.random() * 6 + 1 );

            //dice png and currentScore
            document.querySelector('#dice-1').style.display = 'block';
            document.querySelector('#dice-2').style.display = 'block';
            
            document.querySelector('#dice-1').src = 'dice-' + dice1 + '.png';
            document.querySelector('#dice-2').src = 'dice-' + dice2 + '.png';
            
            rollClicked = true;
            
            var input = document.querySelector('.final-score').value;
            if(input)
                {
                        limit = input;
                }
            else 
                {
                    limit = 100;
                }
            //add to current score if dice is not 1
            if(dice1 === 6 && dice2 === 6)
                {
                    totalScore[activePlayer] = 0;
                    document.querySelector('#score-' + activePlayer).textContent = '0';
                    otherPlayer();
                }
            if(dice1 !== 1 && dice2 !== 1)
                {
                    currentScore += dice1 + dice2;
                    document.querySelector('#current-' + activePlayer).textContent = currentScore;
                }
            else // if dice is 1 then go to otherPlayer
                {
                    otherPlayer();
                }
        }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying && rollClicked)
        {
            //add to total score
            totalScore[activePlayer] += currentScore;
            currentScore = 0;
            document.getElementById('score-' + activePlayer).textContent = totalScore[activePlayer];
            //change current to 0
            document.getElementById('current-' + activePlayer).textContent = '0';
            
            rollClicked = false;
            if(totalScore[activePlayer] >= limit)
                {
                    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                    document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
                    document.querySelector('#dice-1').style.display = 'none';
                    document.querySelector('#dice-1').style.display = 'none';
                    gamePlaying = false;
                }
            else
            {
                otherPlayer();
            }
        }
    
});

function otherPlayer()
{
    document.querySelector('#current-' + activePlayer).textContent = '0';
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    currentScore = 0;
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-2-panel').classList.toggle('active');
    rollClicked = false;
}

document.querySelector('.btn-new').addEventListener('click', start);










