import { React, useEffect, useState } from 'react';
import './PlacementTile.css';

const PlacementTile = ({ refWidth, refHeight, coordinate, handleHoveredTile }) => {
    const [hovered, setHovered] = useState(false);

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
    return (
        <div 
        style={{width: (1/10) * refWidth, height: (1/10) * refHeight}}
        className="black-border border-box tile"
        data-coordinate={coordinate}
        onMouseEnter={handleHovered}
        onMouseLeave={handleHovered}
        >
        </div>
    )
}

export default PlacementTile