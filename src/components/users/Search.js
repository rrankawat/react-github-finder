import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search"
          value={this.state.value}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
    );
  }
}

export default Search;
