import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import axios from 'axios';
import ArticlesList from './ArticlesList';

const API_KEY = process.env.REACT_APP_NEWS_API;

const NewsSearch = () => {
  const [input, setInput] = useState();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        `http://newsapi.org/v2/everything?q=${input}&sortBy=popularity&apiKey=${API_KEY}`
      );
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      <div style={{ marginTop: 10 }}>
        <Input
          type='text'
          data-cy='news-search'
          placeholder='Input search term'
          onBlur={(event) => setInput(event.target.value)}
        />
        <Button
          loading={loading ? true : false}
          onClick={() => handleSearch()}
          data-cy='search-submit'>
          Search
        </Button>
      </div>
      <div style={{ marginTop: 50 }}>
        <ArticlesList articles={articles.slice(0, 10)} />
      </div>
    </>
  );
};

export default NewsSearch;
