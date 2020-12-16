import React from 'react';

class SearchBar extends React.Component {
    state = { temp: '' };

    onFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.temp);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            onChange={(e) => this.setState({ temp: e.target.value })}
                            value={this.state.temp}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;