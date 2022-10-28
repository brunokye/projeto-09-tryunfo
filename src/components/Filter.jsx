import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  render() {
    const { nameFilter } = this.props;
    return (
      <label htmlFor="name-input">
        <span className="label-title">Nome</span>
        <input
          id="name-input"
          name="nameFilter"
          data-testid="name-filter"
          type="text"
          value={ nameFilter }
          onChange={ (event) => console.log(event.target.value) }
        />
      </label>
    );
  }
}

Filter.propTypes = {
  nameFilter: PropTypes.string,
}.isRequired;
