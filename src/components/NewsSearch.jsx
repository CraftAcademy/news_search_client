import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import axios from 'axios'

const API_KEY = process.env.REACT_APP_NEWS_API

const NewsSearch = () => {
  const [input, setInput] = useState();
  const [article, setArticles] = useState()

  const handleSearch = async () => {
    let response = await axios.get(`http://newsapi.org/v2/everything?q=${input}&from=2020-07-12&sortBy=publishedAt&apiKey=${API_KEY}`)
    debugger
  }

  return (
    <>
      <Input
        type='text'
        data-cy='news-search'
        placeholder='Input search term'
        onBlur={(event) => setInput(event.target.value)}
      />
      <Button onClick={() => handleSearch()} data-cy='search-submit'>Search</Button>

    </>
  );
};

export default NewsSearch;
