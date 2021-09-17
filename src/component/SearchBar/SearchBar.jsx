import React, {Component} from "react";
import './SearchBar.css'

class SearchBar extends Component {
    state = { title: ""};
    onSearchChanged = event => {
        let title = event.target.value;
        console.log(title)
        this.setState({title: title})
    }


    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.title)
        this.props.filterVideos(this.state.title)
    }


    render() { 
        return ( 
            <div className ="container">
                <div className="row">
                    <form onSubmit={this.onSubmit} className='search-form'>
                        <div className='form-controls'>
                            <label className=''></label>
                            <input
                                id='search-video'
                                type='text'
                                value={this.state.title}
                                onChange={this.onSearchChanged}
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