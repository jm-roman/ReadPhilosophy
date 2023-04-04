import React, { useState, useEffect } from 'react';
import Top from '../components/Top';
import Prompt from '../components/Prompt';
import Text from '../components/Text';
import Bottom from '../components/Bottom';
import MultipleChoice from '../components/MultipleChoice';

const Reader = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentText, setCurrentText] = useState('');
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [lastPage, setLastPage] = useState(Infinity);

  const getPage = async () => {
    const text = await (await fetch('http://localhost:3000/text')).json();
    const prompts = await (await fetch('http://localhost:3000/prompts')).json();
    setCurrentText(text[currentPage - 1].text);
    setLastPage(text.length);
    setCurrentPrompt(prompts[currentPage - 1].prompt);
    console.log(currentPrompt);
  };

  const nextPage = () => {
    console.log('next page plz');
    // changing current page on click
    // check if answered or if there are further pages
    if (currentPage < lastPage) {
      const tempPage = currentPage + 1;
      setCurrentPage(tempPage);
      getPage();
    }
  };

  const prevPage = () => {
    if (this.state.currentPage > 1) {
      const currentPage = currentPage - 1;
      setCurrentPage({ currentPage });
      getPage();
    }
  };

  // saveNote(input) {
  //   fetch('http://localhost:3000/notes', {
  //     method: 'POST',
  //     body: JSON.stringify(body),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }

  useEffect(() => {
    getPage();
  });

  return (
    <div>
      <header>
        <h1>
          <a href='/'>Read Philosophy</a>
        </h1>
      </header>
      <Top />
      <div id='reader'>
        {/* <Prompt currentPrompt={currentPrompt} /> */}
        <MultipleChoice currentPrompt={currentPrompt} />
        <Text currentText={currentText} currentPage={currentPage} />
      </div>
      <Bottom
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </div>
  );
};

export default Reader;

// use switch router?
// use Link tags?
