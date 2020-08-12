import React from 'react'
import { List, Image, Header } from 'semantic-ui-react'
import truncate from '../modules/truncate'

const NewsDetails = ({ article }) => {
  return (
      <List.Item>
        <Image size='small' src={article.urlToImage} />
        <List.Content>
          <Header as='h3'>
            <List.Header as='a' href={article.url} target='_blank'>
              {truncate(article.title, 60, '...')}
            </List.Header>
          </Header>
          <List.Description>
            {`Published in: ${article.source.name}. Written by: ${article.author}`}
          </List.Description>
        </List.Content>
      </List.Item>
  )
}

export default NewsDetails
