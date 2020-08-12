import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

class NewsSearch extends Component {
  
  onChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://newsapi.org/v2/everything?${this.state.searchTerm}q=&from=2020-07-12&sortBy=publishedAt&apiKey=<API KEY>`;
    const response = await axios.get(url);
    this.setState({
      items: response.data.articles,
    });
  };

  render() {
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
      </>
    );
  }
}

export default NewsSearch;
