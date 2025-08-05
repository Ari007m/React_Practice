import { useEffect, useState } from 'react'
import "./post.css"

function Posts() {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts').
    then((data) => data.json()).
    then(data=> setPosts(data)).
    catch(err => console.log(err));
  },[]);

  return (
    <div className='d-flex justify-content-center'>
      {(posts.length > 0) ? (
        <div className='my-3'>
          {posts.map((post: any) => (
            <div key={post.id}>
              <div className='d-flex'>
                <img className='dp rounded-circle' src={post.user.profile_pic} alt="Profile Pic" />
                <h5>{post.user.username}</h5>
              </div>
              <img className='post-img' src={post.image} alt="Post" />
              <div>
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
              </div>
              <div>
                <b>{post.likes}</b>
              </div>
              <p>{post.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          Posts are Loading
        </div>
      )}
    </div>
  )
}

export default Posts