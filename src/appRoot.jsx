import React from 'react';
import {render} from 'react-dom';
import MapNode from 'app/Map';

class AppRoot extends React.Component {
    render() {
        return <MapNode/>;
    }
}

render(<AppRoot/>, document.getElementById('root'));