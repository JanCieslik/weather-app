import React from "react";
import './searchBar.css';


export default class SearchBar extends React.Component {
    state = { inputValue: '' };

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };
    
    handleSearch = () => {
        if (this.state.inputValue.trim() !== '') {
            this.props.onSearch(this.state.inputValue);
            this.setState({ inputValue: '' });
        }

    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSearch();
        }
    };


    render() {  
        return (
            <div className="searchbar_wrapper">
                <input className="search_bar_input" type="text" placeholder="Search city..."
                    value={this.state.inputValue} 
                    onChange={this.handleChange} 
                    onKeyDown={this.handleKeyPress} 
                 />
                <button onClick={this.handleSearch}>Search</button>
            </div>
            
        );
    }         
}