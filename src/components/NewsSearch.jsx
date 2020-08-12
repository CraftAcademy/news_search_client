import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

class NewsSearch extends Component {
  state = {
    search: "",
    articles: []
  };

  performSearch = async () => {
    const results = await axios.get(
      `http://newsapi.org/v2/everything?q=${this.state.search}&from=2020-07-12&sortBy=publishedAt&apiKey=<API KEY>`
    );
    this.setState({ articles: results.data.articles });
  };

  setValue = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    let articlesDisplay = this.state.articles.map(article => {
      return <li>{article.title}</li>;
    });
    return (
      <>
        <Input
          onChange={(e) => this.setValue(e)}
          type="text"
          data-cy="news-search"
          placeholder="Input search term"
        />
        <Button name="search" id="search" onClick={this.performSearch}>
          Search
        </Button>
        <ul id="search-results">{articlesDisplay}</ul>
      </>
    );
  }
}
export default NewsSearch;