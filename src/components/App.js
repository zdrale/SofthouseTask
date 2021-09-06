import axios from 'axios';

import React from 'react';
import SearchBar from './SearchBar';
import AboutWebsite from './AboutWebsite';

class App extends React.Component {

    state = { website: []};

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.linkpreview.net', {
            params: {key: '47caa4074eb0734eb2a59414cc3a1639',q: term}
        });
        console.log(response);
        this.setState({website: response.data})
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <AboutWebsite websiteData={this.state}/>
            </div>
        );
    }
}


export default App;