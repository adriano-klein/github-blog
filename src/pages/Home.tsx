import { useState } from 'react'
import { Header } from '../components/Header'
import { InputSearch } from '../components/InputSearch/Index'
import { PostCard } from '../components/PostCard'
import { Profile } from '../components/Profile'
import { HomeContainer, PostsContainer } from './styles'
import axios from 'axios'



export function Home() {
  const [posts, setPosts] = useState([])

  async function getPosts(){
    const response = await axios.get('https://api.github.com/repos/adriano-klein/{repo}/issues');
      console.log(response.data)
  }

  getPosts()

  return (
    <>
      <Header />
      <HomeContainer>
        <Profile />
        <InputSearch />
        <PostsContainer>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostsContainer>
      </HomeContainer>
   </>
  )
}