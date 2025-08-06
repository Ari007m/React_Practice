import { useEffect, useState } from "react"
import './suggestions.css'
import axios from "axios";

function Suggestions() {

  const [profile,setProfile] = useState<any>(null);
  const [suggestions,setSuggestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/profile').
    then((data) => data.json()).
    then(data => setProfile(data)).
    catch(err => console.log(err));

    fetch('http://localhost:3000/suggestions').
    then((data) => data.json()).
    then(data => setSuggestions(data)).
    catch(err => console.log(err));
  },[]);

  type follow = {
    id : number,
    username : string
  };

  const handleFollow = async(follow: follow) =>{
    try {
      await axios.post('http://localhost:3000/followers', { id: follow.id, username: follow.username });
      alert('followed');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="suggestions-container m-5">
      {(profile) ? (
        <div className='d-flex'>
          <img className='dp rounded-circules' src={profile.profile_pic} alt="Profile Pic" />
          <h5>{profile.username}</h5>
          <small className="ms-auto text-primary">Switch</small>
        </div>
      ) : (
          <p>Loading...</p>
      )}

      <div className="d-flex ">
        <p>Suggestions for you</p>
        <b className="ms-auto">See All</b>
      </div>

      {(suggestions.length > 0) ? (
        <div>
          {suggestions.map((suggestion: any) => (
            <div key={suggestion.id}>
              <div className='d-flex'>
                <img className='dp rounded-circules' src={suggestion.profile_pic} alt="Profile Pic" />
                <h5>{suggestion.username}</h5>
                <a
                  className="text-primary ms-auto"
                  onClick={() => handleFollow({ id: suggestion.id, username: suggestion.username })}
                  style={{ cursor: 'pointer' }}
                >
                  Follow
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          suggestions are Loading
        </div>
      )}
    </div>
  )
}

export default Suggestions