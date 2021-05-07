import './GameboardDisplay.css'

const Tile = ({ refWidth, refHeight }) => {
    return (
        <div style={{width: (1/10) * refWidth, height: (1/10) * refHeight}} className="black-border border-box"></div>
    )
}

const Tiles = ({ refWidth, refHeight }) => {
    const tilesArr = []
    for (let x = 1; x <= 100; x++) {
        tilesArr.push(<Tile refWidth={refWidth} refHeight={refHeight}/>);
    }
    return (
        <div className="flex-row">
            {tilesArr.map(Tile => Tile)}
        </div>
    )
}

export default Tiles