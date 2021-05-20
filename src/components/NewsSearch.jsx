import React, {useState} from 'react'
import { Button, Input } from 'semantic-ui-react'
import NewsDisplay from './NewsDisplay'
import axios from 'axios'

const NewsSearch = () => {
const [query, setQuery] = useState('')
const [articles, setArticles] = useState([])

const fetchArticles = async ()=> {
  const apiKey = ''
  const response = await axios.get(`http://newsapi.org/v2/everything?q=biden&from=2020-07-12&sortBy=publishedAt&apiKey=${apiKey}`)
  setArticles(response.data.articles)
}
  return (
    <>
      <Input
        type="text"
        data-cy="news-search"
        placeholder="Input search term"
        onBlur={event => setQuery(event.target.value)} />
      <Button
        data-cy="search-submit"
        onClick={()=> {fetchArticles()}}
        >
        Search
        </Button>
        <NewsDisplay articles={articles} />
    </>
  )
}

export default NewsSearch
