import React from 'react'
import Header from './components/Title'
import NewsSearch from './components/NewsSearch'
import NewsDisplay from './components/NewsDisplay'
import { Container } from 'semantic-ui-react'

const App = () => {
  return (
    <Container >
      <Header />
      <NewsSearch />
      <NewsDisplay />
    </Container>
  )
}

export default App
