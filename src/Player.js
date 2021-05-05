const Player = (turn, id) => {
    let isTurn = turn;
    let playerId = id;
    const getPlayerId = () => playerId;
    const getTurn = () => isTurn;
    const setTurn = (newTurn) => {
       isTurn = newTurn
    }
    const playerHasAttacked = [];

    const handleTurn = () => {}

    const attack = (enemyPlayer, enemyGameboard, coord) => {
        if (!getTurn()) {
            return null;
        } else {
            setTurn(false);
            playerHasAttacked.push(coord);
            enemyGameboard.receiveAttack(coord);
            enemyPlayer.setTurn(true);
            return true
        }    
    }

    const generateRandomLetter = () => {
        const alphabetRange = "ABCDEFGHIJ";
        return alphabetRange[Math.floor(Math.random() * alphabetRange.length)];
    }

    const generateRandomNumber = () => {
        // Generates a random number between 0 and 9, then adds 1 to the solution.
        return Math.floor(Math.random() * 10) + 1
    }

    const getRandomCoordinate = () => {
        const randomLetter = generateRandomLetter();
        const randomNumber = generateRandomNumber();
        const randomCoordinate = randomLetter + randomNumber;
        if (playerHasAttacked.includes(randomCoordinate)) {
          return getRandomCoordinate()
        } else {
          return randomCoordinate;  
        } 
    }
    
    if (playerId == "computer") {
        return { getTurn, setTurn, getPlayerId, attack, generateRandomLetter, getRandomCoordinate }
    } else {
        return { getTurn, setTurn, getPlayerId, attack }
    }

    
}

export default Player;