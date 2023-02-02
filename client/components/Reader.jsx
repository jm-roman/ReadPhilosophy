import React, { Component } from 'react';
import Top from './Top';
import Prompt from './Prompt';
import Text from './Text';
import Bottom from './Bottom';

class Reader extends Component {
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
    this.getPage();
  }

  getPage() {
    fetch('http://localhost:3000/text')
      .then((res) => {
        return res.json();
      })
      .then((res) => this.addText(res))
      .catch((err) => console.log('Reader getPage ERROR: ', err));
    fetch('http://localhost:3000/prompts')
      .then((res) => {
        return res.json();
      })
      .then((res) => this.addPrompt(res))
      .catch((err) => console.log('Reader getPage ERROR: ', err));
  }

  addText(text) {
    // adding at the correct index (which is current - 1)
    const currentText = text[this.state.currentPage - 1].text;
    const currentOriginal = text[this.state.currentPage - 1].original;
    const lastPage = text.length;
    this.setState({ currentText, currentOriginal, lastPage });
  }

  readOriginal() {
    // stretch feature to switch to original language
  }

  addPrompt(prompts) {
    // adding at the correct index (which is current - 1)
    const currentPrompt = prompts[this.state.currentPage - 1].prompt;
    this.setState({ currentPrompt });
  }

  nextPage() {
    // changing current page on click
    // check if answered or if there are further pages
    if (this.state.currentPage < this.state.lastPage) {
      const currentPage = this.state.currentPage + 1;
      this.setState({ currentPage });
      this.getPage();
    } else if (this.currentPage >= this.state.lastPage) {
      // this.goToNotes();
    }
  }

  prevPage() {
    // changing current page on click
    console.log('prev page plz');
    if (this.state.currentPage > 1) {
      const currentPage = this.state.currentPage - 1;
      this.setState({ currentPage });
      this.getPage();
    } else if (this.state.currentPage <= 1) {
      // <Link to></Link>;
    }
  }

  saveNote() {
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
    // write answer to answers json in local database
  }

  render() {
    const pageProps = {
      answered: this.state.answered,
      currentPage: this.state.currentPage,
      currentText: this.state.currentText,
      currentOriginal: this.state.currentOriginal,
      currentPrompt: this.state.currentPrompt,
      lastPage: this.state.lastPage,
    };

    return (
      <div>
        <header>
          <h1>
            <a href='/'>Read Philosophy</a>
          </h1>
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
        <Bottom
          nextPage={this.nextPage}
          prevPage={this.prevPage}
          currentPage={pageProps.currentPage}
          lastPage={pageProps.lastPage}
        />
      </div>
    );
  }
}

export default Reader;

// use switch router?
// use Link tags?
