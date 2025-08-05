import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

function ViewStory() {

  const {id} = useParams();
  const [story,setStory] = useState<any>(null);
  const [total,setTotal] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`).
    then((data) => data.json()).
    then(data => {console.log("data :" ,data); setStory(data)}).
    catch(err => console.log(err))
  },[id]);

  useEffect(() => {
    fetch(`http://localhost:3000/story`).
    then((data) => data.json()).
    then(data => {console.log(data.length);setTotal(data.length)}).
    catch(err => console.log(err))
  })

  if(Number(id) <= 0 || Number(id) >total ){
    navigate('/');
  }

  return (
    <div>
      {story ? (
          <div className="d-flex justify-content-center align-items-center">
            <Link
              to={
                id && !isNaN(Number(id)) && Number(id) > 1
                ? `/story/${Number(id) - 1}`
                : "/"
              }
            >
              <i className="bi bi-arrow-left-circle-fill"></i>
            </Link>
            <img className="vh-100" src={story.image} alt="img" />
            <Link
              to={
                id && !isNaN(Number(id))
                  ? `/story/${Number(id) + 1}`
                  : "#"
              }
            >
              <i className="bi bi-arrow-right-circle-fill"></i>
            </Link>
          </div>
        ) : (
          <div>Loading</div>
        )}
    </div>
  )
}

export default ViewStory