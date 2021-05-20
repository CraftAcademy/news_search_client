import React from 'react'

const NewsDisplay = ({articles}) => {
  const articleList = articles.map((article, index) => {
    return (
      <li key={`article-${index}`}>{article.title}</li>
    )
  })
  return (
    <div data-cy="articles">
      <ul>
        {articleList}
      </ul>
    </div>
  )
}

export default NewsDisplay
