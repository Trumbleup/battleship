import { React, useEffect, useState } from 'react';
import './PlacementTile.css';

const PlacementTile = ({ refWidth, refHeight, coordinate, handleHoveredTile, highlightedTiles, handleShipCoordinates, takenCoords }) => {
    const [hovered, setHovered] = useState(false);
    const [highlighted, setHighlighted] = useState(false);

    const handleHovered = () => {
        if (!hovered) {
            setHovered(true)
        } else {
            setHovered(false)
        }
    }

    useEffect(() => {
        if (hovered) {
            handleHoveredTile(coordinate)
        }
    }, [hovered])

    useEffect(() => {
        if (highlightedTiles) {
            if (highlightedTiles.includes(coordinate)) {
                setHighlighted(true)
            } else {
                setHighlighted(false)
            }
        }
        else {
            setHighlighted(false)
        }
    }, [highlighted, highlightedTiles])

    return (
        <div 
        style={{width: (1/10) * refWidth, height: (1/10) * refHeight}}
        className={`black-border border-box tile ${highlighted ? 'sky-blue' : null} ${takenCoords.includes(coordinate) ? 'green' : null}`}
        data-coordinate={coordinate}
        onMouseEnter={handleHovered}
        onMouseLeave={handleHovered}
        onClick={handleShipCoordinates}
        >
        </div>
    )
}

export default PlacementTile