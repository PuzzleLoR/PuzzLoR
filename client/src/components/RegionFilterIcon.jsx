import React from 'react'

const RegionFilterIcon = (props) => {
    return (
        <div className = "Region Icon Button"
        value = {props.regions}
        
        // onClick = {()=> {props.setRegion(allRegions)}}
        >
            <img
                style={{ width: '20%' }}
                src={`./regions/icon-${props.regions}.png`}
                alt={props.Regions}
                onClick = {()=> {props.handleRegions(props.regions)}} />
                </div>
    )
}

export default RegionFilterIcon
