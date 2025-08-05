import { useEffect, useState } from "react"
import "./story.css"
import { useNavigate } from "react-router-dom";

function Stories() {

  const [stories, setStories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/story').
    then((data) => data.json()).
    then((data) => setStories(data)).
    catch(err => console.log(err));
  },[]);

  return (
    <div className='story'>
      {stories.length > 0 ? (
        stories.map((story: any) => (
          <div key={story.id} className="mx-1" onClick={() => {navigate(`/story/${story.id}`)}}>
            <div className="gradient-border">
              <img src={story.user.profile_pic} alt="dp" className="story-dp rounded-circle"/>
            </div>
            <p className="text-truncate" >{story.user.username}</p>
          </div>
        ))
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  )
}

export default Stories