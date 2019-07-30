import React, {Component} from 'react';
import './SearchBar.css';
import 'font-awesome/css/font-awesome.min.css';

class SearchBar extends Component {

    state = {term: ''};

    onFormSubmit = event => {

        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };
    render() {

        return(


            <div className='search-container'>
                <form  onSubmit={this.onFormSubmit} className='search'>
                    <input
                        value={this.state.term}
                        onChange={event => this.setState({term: event.target.value})}
                        className='searchbar' type="text" placeholder='Search'/>
                    <button type='submit' className='searchButton'>
                        <i className='fa fa-search'></i>
                    </button>
                </form>
            </div>
        )
    }
}

export default SearchBar;