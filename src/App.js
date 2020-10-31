import React, { Component } from "react";
import MapReact from './component/MapReact'
import Table from "./component/Table"
import * as MapData from "./Data/ListOfSending.json"
import "./App.css";
import inside from "point-in-polygon";


const MAPBOX_TOKEN = 'pk.eyJ1IjoiODg2NyIsImEiOiJja2NsZ3J1OGwwNmIxMnlwaDdlZnQ5cmhyIn0.-M84EZsJ_ANM5F7HkpmoGA';


class App extends Component {
  state = {
    MapData: MapData.features,
    selectedOrders : [],
    data: [],
    viewport: {
      width: "100%",
      height: 500,
      latitude: 35.70138829445551,
      longitude: 51.39148446072476,
      zoom: 10
    },
    features: []
  }

  handleDelete = delet => {
    console.log("deler", delet);
    const MapData = this.state.MapData.filter(m => m.properties.point_id !== delet)
    this.setState({
      MapData,
      tableData: MapData
    })
  }

  handelViewoPort = (viewport) => {
    this.setState({
      viewport
    })
  }

  getCoordinatesPolygon = (points) => {
    if (points.editType === "addFeature") {

      const polygonPoints = points.data[0].geometry.coordinates[0].map(eachArray => eachArray.reverse());
      const mapDataCoordinates = this.state.MapData.map(point => point.geometry.coordinates)

      const selectedPointData = mapDataCoordinates.filter(item => inside(item, polygonPoints))
      .map(eachCoordinates => {
       return  this.state.MapData.filter(eachItem => eachItem.geometry.coordinates === eachCoordinates)[0]
      })
      this.setState({
        selectedOrders :selectedPointData
      })
    }
  }

  render() {

    const { viewport, MapData, selectedOrders } = this.state;
    console.log("mapdata" , MapData);
    console.log("selectedOrders" ,selectedOrders);

    return (
      <main className="container">
        <MapReact
          onViewportChange={(viewport) => this.handelViewoPort(viewport)}
          viewPort={viewport}
          MarkerData={MapData}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          handleUpdate={this.getCoordinatesPolygon}
        />
        <Table TableData={MapData} handelDelete={this.handleDelete} />
        {selectedOrders.length > 0 &&  <Table TableData={selectedOrders} handelDelete={this.handleDelete} />}

      </main>

    );
  }
}


export default App;
