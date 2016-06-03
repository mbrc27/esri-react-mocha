import React from 'react';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';

class MapNode extends React.Component {
    componentDidMount() {
        this.map = new Map({
            basemap: 'dark-gray'
        });
        this.view = new MapView({
            container: 'viewDiv',
            map: this.map,
            ui: {
                components: [
                    'zoom',
                    'compass',
                    'attribution'
                ]
            }
        });
    }
    render() {
        return (
            <div id='viewDiv'></div>
        );
    }
}

export default MapNode;