/* eslint-disable no-unused-expressions */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateProj = () => {
    const [title,settitle] = useState("");
    const [client,setClient] = useState("");
    const [type,settype] = useState("MERN stack");
    const [body,setbody] = useState("Enter Project description");
    const [pending,setpending] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const proj = { title, client, type , body };
        setpending(true)
     fetch("http://localhost:8000/blogs",{
         method:"POST",
         headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(proj)
     }).then(()=>{
         console.log("added")
         setpending(false)
        navigate("/")
     })
      }


    return (  
        <div className="createProj">
            <h2 style={{textAlign:"center",color:"pink"} }>
 Enter Details About Your new Proj</h2>
       <form onSubmit={handleSubmit}>
<label>Project Title</label>
<input type="text" 
required
value={title}
onChange={(e)=>{
settitle(e.target.value)
}}
/>
<label>Client</label>
<input type="text" required
value={client}
onChange={(e)=>{
    setClient(e.target.value)
    }}
/>
<label>Type of Project</label>
<select name="type"
 id="type"
  value={type}
  onChange={(e)=>settype(e.target.value)}>
<option value="Dynamic">Dynamic</option>
<option value="Static">Static</option>
<option value="MERN stack">Mern Stack</option>
<option value="React Firebase">React Firebase</option>
</select>
<label>Body</label>
<textarea required
value={body}
onChange={(e)=>setbody(e.target.value)}
></textarea>
{!pending &&<button>SUBMIT</button>}
{pending &&<button>Adding new proj...</button>}

       </form>
       
        </div>
    );
}
 
export default CreateProj;