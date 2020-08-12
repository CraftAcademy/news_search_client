import React, { useState } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

const NewsSearch = () => {
  let [articlesList, setArticlesList] = useState()
  let key = 1
  const performSearch = async () => {
    let results = await axios.get('http://newsapi.org/v2/everything?q=biden&from=2020-07-12&sortBy=publishedAt&apiKey=242e4858bbf5473587fcb96de1358bb7')
    setArticlesList(results.data.articles)
  }
  return (
    <>
      <Input
        type="text"
        data-cy="news-search"
        placeholder="Input search term" />
      <Button
        onClick={() => performSearch()}
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
