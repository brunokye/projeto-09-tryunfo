import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="cardName">
          Nome
          <input
            name="cardName"
            data-testid="name-input"
            type="text"
          />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea
            name="description"
            data-testid="description-input"
            cols="30"
            rows="10"
          />
        </label>

        <label htmlFor="attack">
          Ataque
          <input
            name="attack"
            data-testid="attr1-input"
            type="number"
          />
        </label>

        <label htmlFor="defense">
          Defesa
          <input
            name="defense"
            data-testid="attr2-input"
            type="number"
          />
        </label>

        <label htmlFor="speed">
          Velocidade
          <input
            name="speed"
            data-testid="attr3-input"
            type="number"
          />
        </label>

        <label htmlFor="image">
          Imagem
          <input
            name="image"
            data-testid="image-input"
            type="text"
          />
        </label>

        <label htmlFor="rarity">
          Raridade
          <select
            name="rarity"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="cardSuper">
          Super Trunfo
          <input
            name="cardSuper"
            data-testid="trunfo-input"
            type="checkbox"
          />
        </label>

        <button
          data-testid="save-button"
          type="button"
        >
          Salvar
        </button>
      </form>
    );
  }
}
