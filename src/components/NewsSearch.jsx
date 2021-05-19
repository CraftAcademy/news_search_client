import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import Results from './Results'
import axios from 'axios';

const NewsSearch = () => {
  const [articleSearch, setArticleSearch] = useState();
  const [result, setResult ] = useState([])

  const search = async () => {
    let response = await axios.get(`http://newsapi.org/v2/everything?q=${articleSearch}&from=2020-07-12&sortBy=publishedAt&apiKey=${process.env.REACT_APP_APIKEY}`)
    setResult(response.data)
  };

  return (
    <>
      <Input
        type="text"
        name='search'
        data-cy="news-search"
        placeholder="Input search term"
        onBlur={(event) => setArticleSearch(event)}
      />

      <Button
       data-cy="search-submit"
       name='search'
       onClick={search}
       >
         Search
       </Button>
       <Results result={result}/>
    </>
  );
};

export default NewsSearch;
