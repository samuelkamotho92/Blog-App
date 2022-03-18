/* eslint-disable no-unused-expressions */
import { useState } from "react";
const CreateProj = () => {
    const [title,settitle] = useState("");
    const [client,setClient] = useState("");
    const [type,settype] = useState("MERN stack");
    const [body,setbody] = useState("Enter Project description");

    return (  
        <div className="createProj">
            <h2 style={{textAlign:"center",color:"pink"} }>
 Enter Details About Your new Proj</h2>
       <form>
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
<button type="submit">SUBMIT</button>
       </form>
       
        </div>
    );
}
 
export default CreateProj;