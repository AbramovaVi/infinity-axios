import React, { Component } from 'react';
import Axios from 'axios';

import List from './List.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        };

        console.log('constructor');
    }

    componentDidMount() {
        Axios.get('/list').then(res => console.log(res));
        console.log('/list/count=3');
    }

    render() {
        console.log('state', this.state);

        const { list } = this.state;

        return (
            <div>
                <List list={list}  />
            </div>
        );
    }
}

export default App;
