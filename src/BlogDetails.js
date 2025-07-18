import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history=useNavigate();
  const handleClick=()=>{
    fetch('http://localhost:8000/blogs/'+blog.id,{
      method:'DELETE'
    }).then(()=>{
      history('/', { replace: false });
    })
  }

  return (
    <div className="blog-details">
      <h2>Blog details - { id }</h2>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.auth }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}
export default BlogDetails;