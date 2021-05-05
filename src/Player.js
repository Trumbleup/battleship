const Player = (turn, id) => {
    let isTurn = turn;
    let playerId = id;
    const getPlayerId = () => playerId;
    const getTurn = () => isTurn;
    const setTurn = (newTurn) => {
       isTurn = newTurn
    }
    const attack = (enemyPlayer, enemyGameboard, coord) => {
        if (!isTurn) return null
        enemyGameboard.receiveAttack(coord);
        setTurn(false);
        enemyPlayer.setTurn(true);
        return true
    }

    const hitTiles = [];

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
        return randomCoordinate;
    }
    
    if (playerId == "computer") {
        return { getTurn, setTurn, getPlayerId, attack, generateRandomLetter, getRandomCoordinate }
    } else {
        return { getTurn, setTurn, getPlayerId, attack }
    }

    
}

export default Player;