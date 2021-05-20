import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import axios from 'axios';

const NewsSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [news, setNews] = useState([]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const sendRequest = async () => {
    let response = await axios.get(
      `http://newsapi.org/v2/everything?q=${searchQuery}&sortBy=publishedAt&apiKey=5d48999320a142eea038784383f93b76`
    );
    setNews(response.data.articles);
  };

  const newsList = news.map((article, index) => {
    while (index < 5) {
      return (
        <div data-cy='article' key={index}>
          <h3 data-cy='title'>{article.title}</h3>
        </div>
      );
    }
  });

  return (
    <>
      <Input
        type='text'
        name='news-search'
        data-cy='news-search'
        placeholder='Input search term'
        onChange={(event) => handleChange(event)}
      />
      <Button data-cy='search-submit' onClick={() => sendRequest()}>
        Search
      </Button>
      <div data-cy="article-display">{newsList}</div>
    </>
  );
};

export default NewsSearch;
