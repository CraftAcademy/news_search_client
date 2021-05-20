import React from 'react';
import { Header } from 'semantic-ui-react';

const Title = () => {
  return (
    <Header style={{ marginTop: 10 }} data-cy='title' as='h1'>
      News Search
    </Header>
  );
};

export default Title;
