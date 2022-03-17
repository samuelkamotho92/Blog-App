const BlogList = ({blogs,project}) => {
    return ( 
<div className="blogList">
    <h2 style={{textAlign:"center",margin:"20px auto"}}>My {project}</h2>
{blogs.map(blog=>(
<div className='blog' key={blog.id}>
<h3>{blog.title}</h3>
<p>Client:{blog.owner}</p>
<p>Type of Application:{blog.type}</p>

</div>

    ))}
</div>

     );
}
 
export default BlogList;