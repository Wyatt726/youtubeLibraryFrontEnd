import React, {Component} from "react";
import './SearchBar.css'

class SearchBar extends Component {
    state = { title: ""};
    handleSearchChanged = event => {
        const _title = event.target.value;
        this.setState({title:_title})
    }


    handleChange = event => {
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
                    <form onSubmit={this.handleSubmit} className='search-form'>
                        <div className='form-controls'>
                            <label class=''></label>
                            <input
                                id='search-video'
                                type='text'
                                value={this.state.title}
                                handleChange={this.handleSearchChanged}
                                placeholder='enter to search'
                                />
                            <button type='submit'>Search</button>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default SearchBar;