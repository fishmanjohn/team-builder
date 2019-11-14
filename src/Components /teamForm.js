import React, {useState} from 'react';

function TeamForm(props){
    const [member, setMember] = useState({ 
        name: "", email: "" ,role: ""});

    const handleChanges = e => {
      setMember({ ...member, [e.target.name]: e.target.value });
      console.log(e.target.name);
    };
  
    const submitForm = e => {
      e.preventDefault();
      props.addNewMember(member);
      setMember({name:"", email:"" ,role:""});
    };


    return(
        <div>
            <form onSubmit ={submitForm} >
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange ={handleChanges}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type = "text"
        name="email"
        onChange ={handleChanges}
      />
      <label htmlFor="role">Role</label>
      <input
        id="role"
        type = "text"
        name="role"
        onChange ={handleChanges}
      />
      <button type="submit">Add Team Member</button>
    </form>

        </div>
    )
};
export default TeamForm;