import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./profile.css";

function Profile() {

  const [profile,setProfile] = useState<any>(null);
  const [followers,setFollowers] = useState<any>([]);



  useEffect(() => {
    axios.get('http://localhost:3000/profile').
    then((data) => setProfile(data.data)).
    catch(err => console.log(err));

    axios.get('http://localhost:3000/followers').
    then(data => setFollowers(data.data)).
    catch(err => console.log(err));

  },[]);

  const handleOnChange =((e : any) =>{
    setProfile((prev: any) => ({
      ...prev, [e.target.name] : e.target.value 
    }))
  });

  const handleUpdate = async () => {
    try {
      await axios.put('http://localhost:3000/profile', profile);
      console.log("Updated");
    } catch (err) {
      console.log(err);
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/followers/${id}`);
      alert('Un Followed');
      // Optionally update followers state here if you want to remove the follower from UI
      setFollowers((prev: any[]) => prev.filter((f: any) => f.id !== id));
    } catch (err) {
      console.log(err);
      alert('Failed to unfollow');
    }
  }

  return (
    <div className='m-5'>
      {profile ? (
        <div>
          <img src={profile.profile_pic} alt=""  className='profile rounded-circle'/>
          <h5>{profile.username}</h5>

          <input type="text"
                  name='username'
                  value={profile.username}
                  className='form-control my-4' 
                  onChange={handleOnChange}
          />

          <input type="text"
                 name='profile_pic'
                 value={profile.profile_pic}
                 className='form-control' 
                 onChange={handleOnChange}
          />

          <button className='btn btn-primary my-4' onClick={handleUpdate} >
            update
          </button>
        </div>
      ) : (
        <div>Loading Profile</div>
      )}

      {followers.length > 0 ? (
        followers.map((follower: any) => (
          <div key={follower.id} className='d-flex m-2'>
            {follower.username}
            <button className='btn btn-secondary ms-auto' onClick={() => {handleDelete(follower.id)}}>Un Follow</button>
          </div>
        ))
      ) : (
        <div>Loading Followers</div>
      )}
    </div>
  )
}

export default Profile