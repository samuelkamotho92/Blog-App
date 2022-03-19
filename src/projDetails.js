import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import useFetch from "./useFetch";


const ProjDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: blogs,
    error,
    ispending,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handledelete = ()=>{
    fetch(`http://localhost:8000/blogs/${id}`,{
      method:'DELETE'
    }).then(()=>{
navigate("/")
    })
  }
  return (
    <div className="details">
      {error && <div>{error}</div>}
      {ispending && <div>Loading...</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <h3>{blogs.type}</h3>
          <div>{blogs.body}</div>
          <button className="delete" 
          onClick={handledelete}>DELETE</button>
        </article>
      )}
    </div>
  );
};

export default ProjDetails;
