import Nav from "./blogger_components/Nav"
import Header  from "./blogger_components/Header"
import Main  from "./blogger_components/Main"
import Footer  from "./blogger_components/Footer"
import { useEffect, useState } from "react"
const Blogger = ()=>{

//    1.: a state that stores if the request is loading or not 
 const [loading, setLoading] = useState(true);
// 2. a state to store whatever  from the api
const [posts, setPosts] = useState([]);
// 3. a state to store error
const [error, setError] = useState(false);
// how to send req to another application
 function  fetch_all_posts(){
     fetch("https://jsonplaceholder.typicode.com/posts")
     .then((res)=>{
      return  res.json()
     })
     .then((data)=>{
       setLoading(false)
       setError(false)
       setPosts(data)
     })
     .catch((error)=>{
            setLoading(false)
       setError(true)
       setPosts([])
     })
 }
       useEffect(()=>{
        fetch_all_posts()
       }, []);
    return(
        <>
            <Nav/>
            <Header/>
            <Main  posts={posts} loading={loading} error={error}/>
            <Footer/>
        </>
    )
}

export default Blogger