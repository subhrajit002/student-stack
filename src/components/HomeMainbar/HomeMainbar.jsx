import React from 'react'
import { Link } from 'react-router-dom'
import CreatePost from './CreatePost/CreatePost'
import PostCards from './PostCards/PostCards'

const HomeMainbar = () => {
  return (
    <>

      <CreatePost />
      <PostCards />
    </>
  )
}

export default HomeMainbar
