import './GameboardDisplay.css'

const Tile = ({ refWidth, refHeight, coordinate }) => {
    return (
        <div 
        style={{width: (1/10) * refWidth, height: (1/10) * refHeight}}
        className="black-border border-box"
        data-coordinate={coordinate}
        >    
        </div>
    )
}

const Tiles = ({ refWidth, refHeight }) => {
    const alphabetRange = "ABCDEFGHIJ".split('');
    const tilesArr = [];
    for (let x = 0; x < 10; x++) {
        let coordinateLetter = alphabetRange[x];
        for (let y = 1; y <= 10; y++) {
            let coordinate = coordinateLetter + y;
            tilesArr.push(<Tile refWidth={refWidth} refHeight={refHeight} key={coordinate} coordinate={coordinate}/>);
        }   
    }
    return (
        <div className="flex-row">
            {tilesArr.map(Tile => Tile)}
        </div>
    )
}

export default Tiles