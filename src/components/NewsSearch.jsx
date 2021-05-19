import React, { useState } from 'react';
// import { Button, Container, Input, Form } from 'semantic-ui-react';
import axios from 'axios';

const NewsSearch = () => {
  const [news, setNews] = useState([]);
  const [text, setText] = useState('');

  const searchNews = async (subject) => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${subject}&from=2021-04-19&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_KEY}`
    );

    setNews(response.data.articles);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    searchNews(text);
    setText('');
  };

  const onChange = (event) => setText(event.target.value);

  let newsList = news.map((article, index) => {
    return (
      <div>
        <h3 data-cy={`article-title-${index}`} >{article.title}</h3>
        <p data-cy={`article-description-${index}`}>{article.description}</p>
      </div>
    );
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name='text'
          type='text'
          data-cy='news-search'
          value={text}
          placeholder='Search News...'
          onChange={onChange}
        />
        <input type='submit' value='Search' data-cy='search-submit' />
      </form>
      <div text data-cy='results-container'>
        <div data-cy='article-0'>
          <div>{newsList}</div>
        </div>
      </div>
    </>
  );
};

export default NewsSearch;
