import React from 'react';

const Results = ({ result }) => {
  return (
    <div>
      {result.map((articles, index) => (
        <div key={index} data-cy="article-container">
          <div>
            <p data-cy="article-title">{articles.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
