import React from 'react'
import articleStyles from '../styles/ArticleStyles.module.css';
import ArticleItem from './ArticleItem';

const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
        {articles.map((article => (
            <ArticleItem article={article}/>
        )))}
    </div>
  )
}

export default ArticleList