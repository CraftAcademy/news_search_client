import React from 'react';

const Results = ({ result }) => {
  return (
    <div>
      {result.map((article, index) => (
        <div key={index} data-cy="article-container">
          <div>
            <p data-cy="article-title">{article.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
