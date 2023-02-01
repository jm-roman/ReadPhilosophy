import React, { Component } from 'react';
import Top from './Top';
import Prompt from './Prompt';
import Text from './Text';
import Bottom from './Bottom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answered: false,
      currentPage: 1,
      currentText: '',
      currentPrompt: '',
      lastPage: Infinity,
    };

    this.addText = this.addText.bind(this);
    this.addPrompt = this.addPrompt.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/text')
      .then((res) => {
        return res.json();
      })
      .then((res) => this.addText(res))
      .catch((err) =>
        console.log('App.componentDidMount: get text: ERROR: ', err)
      );
    fetch('http://localhost:3000/prompts')
      .then((res) => {
        return res.json();
      })
      .then((res) => this.addPrompt(res))
      .catch((err) =>
        console.log('App.componentDidMount: get text: ERROR: ', err)
      );
  }

  addText(text) {
    // adding at the correct index (which is current - 1)
    const currentText = text[this.state.currentPage - 1].text;
    const lastPage = text.length;
    this.setState({ currentText, lastPage });
  }

  addPrompt(prompts) {
    // adding at the correct index (which is current - 1)
    const currentPrompt = prompts[this.state.currentPage - 1].prompt;
    this.setState({ currentPrompt });
  }

  nextPage() {
    // changing current page on click
    // check if answered or if there are further pages
    if (answered && currentPage < lastPage) {
      const currentPage = this.state.currentPage + 1;
      this.setState({ currentPage });
    }
  }

  prevPage() {
    // changing current page on click
    if (this.state.currentPage > 1) {
      const currentPage = this.state.currentPage + 1;
      this.setState({ currentPage });
    }
  }

  render() {
    const pageProps = {
      answered: this.state.answered,
      currentPage: this.state.currentPage,
      currentText: this.state.currentText,
      currentPrompt: this.state.currentPrompt,
    };
    return (
      <div>
        <header>
          <h1>Read Philosophy</h1>
        </header>
        <Top />
        <div id='reader'>
          <Prompt currentPrompt={pageProps.currentPrompt} />
          <Text
            currentText={pageProps.currentText}
            currentPage={pageProps.currentPage}
          />
        </div>
        <Bottom {...pageProps} />
      </div>
    );
  }
}

export default App;

// use switch router?
// use Link tags?
