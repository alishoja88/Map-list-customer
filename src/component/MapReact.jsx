import React, { Component } from 'react';
import Map from "react-map-gl"
import MarkerList from "./MarkerList"
import ModeDraw from "./ModeDraw"
import MapDataPoint from "../Data/ListOfSending.json"
import inside from 'point-in-polygon'
import { Editor, EditingMode, DrawLineStringMode, DrawPolygonMode } from 'react-map-gl-draw'


const MODES = [
    { id: "drawPolyline", text: "Draw Polyline", handler: DrawLineStringMode },
    { id: "drawPolygon", text: "Draw Polygon", handler: DrawPolygonMode },
    { id: "editing", text: "Edit Feature", handler: EditingMode }
];

const mapPointList = MapDataPoint.features.map(item => item.geometry.coordinates)




class MapReact extends Component {
    state = {
        modeId: null,
        modeHandler: null,
        location: null,
        data : [],
    }

    switchMode = evt => {
        const modeId = evt.target.value === this.state.modeId ? null : evt.target.value;
        const mode = MODES.find(m => m.id === modeId);
        const modeHandler = mode ? new mode.handler() : null;

        this.setState({ modeId, modeHandler });
    };

  

    // getCoordinatesPolygon = (datas) => {
    //     const data = (datas.data).map(item => item.geometry.coordinates[0]).map(item => item)
    //     this.setState({data : data})       
    // }

    render() {

        const { onViewportChange, viewPort, mapboxApiAccessToken, MarkerData , handleUpdate } = this.props;
 
        return (
            <div className="map-container">
                <Map
                    onViewportChange={onViewportChange}
                    width="1000px"
                    height="100vh"
                    {...viewPort}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxApiAccessToken={mapboxApiAccessToken}
                >
                    <Editor
                        clickRadius={12}
                        mode={this.state.modeHandler}
                        onSelect={_ => { }}
                        onUpdate={(points) => handleUpdate(points)}
                    />
                    <MarkerList MarkerData={MarkerData} />
                    <ModeDraw switchMode={this.switchMode} modeDraw={MODES} />
                </Map>
            </div>
        );
    }
}

export default MapReact;


