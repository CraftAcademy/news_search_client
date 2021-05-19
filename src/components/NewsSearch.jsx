import React, { useState } from 'react';
import { Button, Input, Container,Card } from 'semantic-ui-react';
import axios from 'axios';

const NewsSearch = () => {
  const [articles, setArtices] = useState([]);
  const [text, setText] = useState('');

  const API_KEY = process.env.REACT_APP__NEWS_API_KEY;

  const searchArticle = async (name) => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=tesla&apiKey=${API_KEY}&source=${name}`
    );
    setArtices(response.data);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    searchArticle(text);
    setText('');
  };

  const onChange = (event) => setText(event.target.value);

  let articleList = articles.map((article, i) => {
    return <Card article={article} i={i} />;
  });
  return (
    <>
      <Input
        type='text'
        data-cy='news-search'
        placeholder='Input search term'
        onChange={onChange}
        value={text}
      />
      <Button data-cy='search-submit' type='submit' onSubmit={onSubmit}>
        Search
      </Button>
      <Container data-cy='search-resault'>
        <p>{articleList}</p>
      </Container>
    </>
  );
};

export default NewsSearch;
