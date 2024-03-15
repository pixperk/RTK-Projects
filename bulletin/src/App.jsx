import React from 'react'
import PostList from './features/posts/PostList'
import AddPost from './features/posts/AddPost'

function App() {
  return (
    <div>
     <h1 className='font-bold text-center bg-blue-200'>Bulletin</h1> 
    
     <AddPost/>
     <PostList/>
     
    </div>
  )
}

export default App
