import { useEffect, useState } from "react"
import './suggestions.css'

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
    </div>
  )
}

export default Suggestions