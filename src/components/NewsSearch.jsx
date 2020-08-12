import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

class NewsSearch extends Component {
  state = {
    searchTerm: [],
    items: []
  };

  onChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://newsapi.org/v2/everything?q=${this.state.searchTerm}&from=2020-07-12&sortBy=publishedAt&apiKey=<API KEY>`;
    const response = await axios.get(url);
    this.setState({
      items: response.data.articles,
    });
  };

  render() {
    const showArticles = this.state.items.map((article) => {
      return (
        <div>
          <p>{article.title}</p>
        </div>
      );
    });

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            data-cy="news-search"
            placeholder="Input search term"
            value={this.state.searchTerm}
            onChange={this.onChange}
          />
          <Button data-cy="search-submit">Search</Button>
        </form>
        <p>{showArticles}</p>
      </>
    );
  }
}

export default NewsSearch;