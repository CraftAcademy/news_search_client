import React, { useState } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

const NewsSearch = () => {
  let [articlesList, setArticlesList] = useState()
  let key = 1
  const performSearch = async (event) => {
    let q = event.target.previousSibling.children[0].value
    let results = await axios.get(`http://newsapi.org/v2/everything?q=${q}&from=2020-07-12&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`)
    setArticlesList(results.data.articles)
  }
  return (
    <>
      <Input
        type="text"
        data-cy="news-search"
        placeholder="Input search term" />
      <Button
        onClick={(event) => performSearch(event)}
        data-cy="search-submit">
        Search
        </Button>
      <ul data-cy="articles-list">
        {articlesList && articlesList.map(article => {
          return <li key={key++}>{article.title}</li>
        })}
      </ul>
    </>
  )
}

export default NewsSearch
