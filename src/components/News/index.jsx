import React from 'react';

import NewsItem from './News-item';
import './News.scss';

const newsObj = [
  { 
    imgName: 'blog-1.png',
    title: 'Streed Food Convention',
    date: 'May 15, 2023',
    author: 'Laura Green',
    text: 'Street Food Convention will showcase products like Packed food, beef and lamb, street food.'
  },
  { 
    imgName: 'blog-2.png',
    title: 'Tedx Moscow Conference',
    date: 'May 16, 2023',
    author: 'Laura Green',
    text: 'Street Food Convention will showcase products like Packed food, beef and lamb, street food.'
  },
  { 
    imgName: 'blog-3.png',
    title: 'Los Angeles Institute',
    date: 'May 17, 2023',
    author: 'Laura Green',
    text: 'Street Food Convention will showcase products like Packed food, beef and lamb, street food.'
  },
  { 
    imgName: 'blog-1.png',
    title: 'Streed Food Convention',
    date: 'May 15, 2023',
    author: 'Laura Green',
    text: 'Street Food Convention will showcase products like Packed food, beef and lamb, street food.'
  },
  { 
    imgName: 'blog-2.png',
    title: 'Tedx Moscow Conference',
    date: 'May 16, 2023',
    author: 'Laura Green',
    text: 'Street Food Convention will showcase products like Packed food, beef and lamb, street food.'
  },
  { 
    imgName: 'blog-3.png',
    title: 'Los Angeles Institute',
    date: 'May 17, 2023',
    author: 'Laura Green',
    text: 'Street Food Convention will showcase products like Packed food, beef and lamb, street food.'
  },
  { 
    imgName: 'blog-1.png',
    title: 'Streed Food Convention',
    date: 'May 15, 2023',
    author: 'Laura Green',
    text: 'Street Food Convention will showcase products like Packed food, beef and lamb, street food.'
  },
  { 
    imgName: 'blog-2.png',
    title: 'Tedx Moscow Conference',
    date: 'May 16, 2023',
    author: 'Laura Green',
    text: 'Street Food Convention will showcase products like Packed food, beef and lamb, street food.'
  },
  { 
    imgName: 'blog-3.png',
    title: 'Los Angeles Institute',
    date: 'May 17, 2023',
    author: 'Laura Green',
    text: 'Street Food Convention will showcase products like Packed food, beef and lamb, street food.'
  }
]

function News( {newsSlice} ) {
  return (
      <div className="news__cards">
          <NewsItem newsObj={newsObj} newsSlice={newsSlice}/>
      </div> 
  )
}

export default News
