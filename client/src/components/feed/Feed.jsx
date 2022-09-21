import { useEffect, useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import { publicRequest } from "../../requestMethod"

const Feed = ({username}) => {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = username
      ? await publicRequest.get("/posts/profile/" + username)
      : await publicRequest.get("/posts/timeline/631c62d4d42418fdd26972e6")
      setPosts(res.data)
    }
    fetchPosts()
  },[username])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed