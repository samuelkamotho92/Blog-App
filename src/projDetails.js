import { useParams } from "react-router-dom";

import useFetch from "./useFetch";

const ProjDetails = () => {
  const { id } = useParams();

  const {
    data: blogs,
    error,
    ispending,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div className="details">
      {error && <div>{error}</div>}
      {ispending && <div>Loading...</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <h3>{blogs.type}</h3>
          <div>{blogs.body}</div>
        </article>
      )}
    </div>
  );
};

export default ProjDetails;
