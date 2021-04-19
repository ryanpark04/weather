import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = event => {
        this.setState({ term: event.target.value })
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui search">
                <form id="input-location" onSubmit={this.onFormSubmit} className="ui icon input">
                    <input
                        className="prompt"
                        type="text"
                        placeholder="Search locations..."
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <i className="search icon"></i> 
                </form>
            </div>
        );
    }

}

export default SearchBar;
