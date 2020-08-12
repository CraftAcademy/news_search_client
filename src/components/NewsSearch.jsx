import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

const NewsSearch = () => {
  let [query, setQuery] = useState()
  const dispatch = useDispatch()
  const performSearch = async (event) => {
    let results = await axios.get(`http://newsapi.org/v2/everything?q=${query}&from=2020-07-12&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`)
    dispatch({ type: 'SET_ARTICLES', payload: results.data.articles })
  }
  return (
    <>
      <Input
        type="text"
        onBlur={event => setQuery(event.target.value)}
        data-cy="news-search"
        placeholder="Input search term" />
      <Button
        onClick={event => performSearch(event)}
        data-cy="search-submit">
        Search
        </Button>
    </>
  )
}

export default NewsSearch
