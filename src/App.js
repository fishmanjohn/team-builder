import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamForm from './Components /teamForm';
import TeamCard from './Components /teamCard';
import {CardGrid} from './Components /cardGrid';

function App() {

  const [teamMember,setTeamMember] = useState([{
    id:1,
    name:'John',
    email:'fishmanjohn@earthlink.net',
    role:'Web Developer'
  }])
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMember([...teamMember, newMember]);
    
  };
  console.log(teamMember)
  return (
    <div>
     <h1>My Team.</h1>
      <TeamForm addNewMember={addNewMember}/>
      <CardGrid teamMember={teamMember}/>
    </div>
  );
}

export default App;
