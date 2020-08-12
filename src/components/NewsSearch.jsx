import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

class NewsSearch extends Component {

  searchNews = async () => {
    const results = await axios.get(`http://newsapi.org/v2/everything?q=${this.state.search}&from=2020-07-12&sortBy=publishedAt&apiKey=8225ccbb856d480682e8488928542447`)
    this.setState({ items: results.data.items })
  }
  
  render() {
    return (
      <>
        <Input
          type="text"
          data-cy="news-search"
          placeholder="Input search term"
        />
        <Button data-cy="search-submit">Search</Button>
      </>
    );
  }
}

export default NewsSearch;
