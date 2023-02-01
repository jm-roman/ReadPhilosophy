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
    // fetch('http://localhost:3000/text/')
    //   .then((res) => res.json())
    //   .then((res) => this.addText(res.text))
    //   .catch((err) =>
    //     console.log('App.componentDidMount: get characters: ERROR: ', err)
    //   );

    fetch('http://localhost:3000/text', { mode: 'no-cors' })
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then((res) => this.addText(res))
      .catch((err) =>
        console.log('App.componentDidMount: get text: ERROR: ', err)
      );
  }

  addText(text) {
    // adding at the correct index (which is current - 1)
    console.log(text);
  }

  addPrompt(prompts) {
    // adding at the correct index (which is current - 1)
    console.log(prompts);
  }

  render() {
    return (
      <div>
        <h1>Read Philosophy</h1>
        <Top />
        <div id='reader'>
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
