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
      currentOriginal: '',
      currentPrompt: '',
      lastPage: Infinity,
    };

    this.addText = this.addText.bind(this);
    this.addPrompt = this.addPrompt.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
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
    const currentOriginal = text[this.state.currentPage - 1].original;
    const lastPage = text.length;
    this.setState({ currentText, currentOriginal, lastPage });
  }

  addPrompt(prompts) {
    // adding at the correct index (which is current - 1)

    const currentPrompt = prompts[this.state.currentPage - 1].prompt;
    this.setState({ currentPrompt });
  }

  readOriginal() {}

  nextPage() {
    // changing current page on click
    // check if answered or if there are further pages
    console.log('next page plz');
    if (this.state.currentPage < this.state.lastPage) {
      const currentPage = this.state.currentPage + 1;
      this.setState({ currentPage });
    }
  }

  prevPage() {
    // changing current page on click
    console.log('prev page plz');
    if (this.state.currentPage > 1) {
      const currentPage = this.state.currentPage - 1;
      this.setState({ currentPage });
    }
  }

  writeAnswer() {
    // write answer to answers json in local database
  }

  render() {
    const pageProps = {
      answered: this.state.answered,
      currentPage: this.state.currentPage,
      currentText: this.state.currentText,
      currentOriginal: this.state.currentOriginal,
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
            currentOriginal={pageProps.currentOriginal}
          />
        </div>
        <Bottom nextPage={this.nextPage} prevPage={this.prevPage} />
      </div>
    );
  }
}

export default App;

// use switch router?
// use Link tags?
