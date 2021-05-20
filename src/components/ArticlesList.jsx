import React from 'react';

const ArticlesList = ({ articles }) => {
  const listOfArticles = articles.map((article, index) => {
    return (
      <div key={index} style={styles.row} data-cy='article'>
        <div>
          <img
            data-cy='image'
            style={styles.image}
            alt={article.title}
            src={article.urlToImage}
          />
        </div>
        <div style={{ padding: 25 }}>
          <h1 data-cy='title'>{article.title}</h1>
          <p data-cy='author'>{article.author}</p>
          <p data-cy='published'>{article.publishedAt}</p>
          <p>
            <a data-cy='url' href={article.url}>
              Link to article {'<---'}
            </a>
          </p>
        </div>
      </div>
    );
  });

  return <div style={styles.container}>{listOfArticles}</div>;
};

export default ArticlesList;

const styles = {
  contianer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 25,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    height: 200,
    width: 200,
    objectFit: 'cover',
  },
};
