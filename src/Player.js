const Player = (turn, id) => {
    let isTurn = turn;
    let playerId = id;
    const getPlayerId = () => playerId;
    const getTurn = () => isTurn;
    const setTurn = (newTurn) => {
       isTurn = newTurn
    }
    const attack = (enemyPlayer, enemyGameboard, coord) => {
        enemyGameboard.receiveAttack(coord);
        setTurn(false);
        enemyPlayer.setTurn(true);
    }
    
    if (playerId == "computer") {
        return { getTurn, setTurn, getPlayerId, attack }
    } else {
        return { getTurn, setTurn, getPlayerId, attack }
    }

    
}

export default Player;