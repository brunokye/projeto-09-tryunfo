import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    savedCards: [],
  };

  handleError = () => {
    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare,
    } = this.state;

    const minNumber = 0;
    const maxNumber = 90;
    const maxTotal = 210;
    const attributes = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];
    const verifyAttr = attributes
      .every((attr) => (attr >= minNumber && attr <= maxNumber));
    const total = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxTotal);

    const errorCases = [
      !cardName.length,
      !cardDescription.length,
      !cardImage.length,
      !cardRare.length,
      !verifyAttr,
      total,
    ];

    const formOk = errorCases.every((error) => error !== true);

    this.setState({
      isSaveButtonDisabled: !formOk,
    });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, this.handleError);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();

    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
    } = this.state;

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    const newValue = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((oldValue) => ({
      savedCards: [...oldValue.savedCards, newValue],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardTrunfo: false,
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
    }));
  };

  render() {
    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare,
      cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, savedCards,
    } = this.state;
    const { onInputChange, onSaveButtonClick } = this;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
          savedCards={ savedCards }
        />
        <h1>Preview</h1>
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        <h1>Saved Cards</h1>
        { savedCards.map((saved) => (
          <div key={ saved.cardName }>
            <Card
              cardName={ saved.cardName }
              cardDescription={ saved.cardDescription }
              cardAttr1={ saved.cardAttr1 }
              cardAttr2={ saved.cardAttr2 }
              cardAttr3={ saved.cardAttr3 }
              cardImage={ saved.cardImage }
              cardRare={ saved.cardRare }
              cardTrunfo={ saved.cardTrunfo }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
