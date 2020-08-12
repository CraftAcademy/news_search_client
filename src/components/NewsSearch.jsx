import React from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

const NewsSearch = () => {
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
};

export default NewsSearch;