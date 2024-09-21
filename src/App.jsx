import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Video from './pages/video/Video'
import Pictures from './pages/pictures/Pictures'
import News from './pages/news/News'
import HomeAll from './pages/pagesHome/homeAll/HomeAll'
import ChatSferius from './components/chat/ChatSferius'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path='/video' element={<Video />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path='/news' element={<News />} />
        <Route path="/all" element={<HomeAll />} />
        <Route path='/ai-sferius' element={<ChatSferius />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App