import './App.css'
import Header from './components/header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const [readTime, setReadTime] = useState(0);

  const [timeId, setTimeId] = useState([0]);
  let flag = true;

  const handleMarkedRead = (time, id) => {
    for (const element of timeId) {
      if (id === element) {
        flag = false;
      }
    }
    
    if (flag ===  true) {
      const newReadTime = readTime + time;
      setReadTime(newReadTime);
    }

    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark);
    
    const newId = [...timeId, id]
    setTimeId(newId);

    flag = true;
  }

  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-3 gap-4">
        <Blogs handleBookmark={handleBookmark} handleMarkedRead={handleMarkedRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
