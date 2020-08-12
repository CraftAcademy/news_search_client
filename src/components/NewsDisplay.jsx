import React from 'react'
import { useSelector } from 'react-redux'
import NewsDetails from './NewsDetails'
import { List } from 'semantic-ui-react'


const NewsDisplay = () => {
  let key = 1

  const articlesList = useSelector(state => state.articlesList)
  return (
    <List data-cy="articles-list">
      {articlesList && articlesList.map(article => {
        return (
          <NewsDetails key={key++} article={article} />
        )
      })}
    </List>
  )
}

export default NewsDisplay
