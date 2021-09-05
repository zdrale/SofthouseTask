import axios from 'axios';

import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('https://api.linkpreview.net', {
            params: {key: '47caa4074eb0734eb2a59414cc3a1639',q: term}
        });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}


export default App;