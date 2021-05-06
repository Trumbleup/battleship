import './GameboardDisplay.css';

const Tile = (props) => {
    return (
        <div style={{width: 10, height: 10}} className="black-border">

        </div>
    )
}


const GameboardDisplay = () => {
    return (
        <div className="gameboard-wrap">
            <div className="gameboard black-border">
                {
                    
                }
                <Tile />
            </div>
        </div>
    )
}

export default GameboardDisplay