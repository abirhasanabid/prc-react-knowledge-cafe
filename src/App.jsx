import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0)

  const handlerBookmark = (blogs) => {
    const newBookmarks = [...bookmarks, blogs];
    setBookmarks(newBookmarks);
  }
  // readtime
  const handleReadTime = time => {
    setReadTime(readTime + time)
  }

  return (
    <>
      <Header></Header>
      <div className="container mx-auto flex gap-5 mt-7">
        <Blogs handleReadTime={handleReadTime} handlerBookmark={handlerBookmark}></Blogs>
        <Bookmarks readTime={readTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
