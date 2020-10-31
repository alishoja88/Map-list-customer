import React from 'react';
import { Marker } from 'react-map-gl';

const MarkerList = (props) => {
    const { MarkerData } = props
    return ( 
        <div>
            {MarkerData.map(data => (
                <Marker key={data.properties.point_id} latitude={data.geometry.coordinates[0]} longitude={data.geometry.coordinates[1]}>
                    <i style={{color : data.toggle ? "red" : "green"}} class='fas fa-map-marker-alt icon-map'></i>
                </Marker>
            ))}

        </div>
     );
}
 
export default MarkerList;