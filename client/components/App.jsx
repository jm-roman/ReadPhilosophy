import React, { Component } from 'react';
import Top from './Top';
import Prompt from './Prompt';
import Text from './Text';
import Bottom from './Bottom';

// function getInitialState() {
//   return {
//     answered: false,
//     current: 1,
//   };
// }

class App extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    fetch('/text')
      .then((res) => res.json())
      .then((res) => this.addText(res.text))
      .then((res) => this.addPrompt(res.prompt))
      .catch((err) =>
        console.log('App.componentDidMount: get characters: ERROR: ', err)
      );
  }

  // addPrompt() {}

  // addText() {}

  render() {
    return (
      <div>
        <h1>Read Philosophy</h1>
        <Top />
        <div className='reader'>
          <Prompt />
          <Text />
        </div>
        <Bottom />
      </div>
    );
  }
}

export default App;

// use switch router?
// use Link tags?
