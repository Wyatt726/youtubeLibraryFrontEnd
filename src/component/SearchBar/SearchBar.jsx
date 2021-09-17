import React from "react";
import './SearchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchBar: ''
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filterVideos(this.state.searchBar)
    }

    

    render() { 
        return ( 
            <div className ="container">
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                    <input 
                    class='col-sm-offset-6 col-sm-3'
                    type='text' name="searchBar" 
                    onChange={this.handleChange} 
                    value={this.state.searchBar} 
                    placeholder= 'Search Videos' />
                    <button class='searchButton'type="submit">Search</button>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default SearchBar;