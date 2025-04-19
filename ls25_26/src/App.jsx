import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Users, UserDetail, Posts, PostDetail, Comments, CommentDetail, Forms } from './pages'
import { Layout } from './components'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="user/:id" element={<UserDetail />} />
          <Route path="posts" element={<Posts />} />
          <Route path="post/:id" element={<PostDetail />} />
          <Route path="comments" element={<Comments />} />
          <Route path="comment/:id" element={<CommentDetail />} />
          <Route path="forms" element={<Forms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
