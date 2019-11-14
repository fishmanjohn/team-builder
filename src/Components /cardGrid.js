import React from 'react'
import TeamCard from './teamCard';


export function CardGrid(props){
   return ( <div className = "cardGrid">
    {props.teamMember.map( (item, index) => {
        return <TeamCard person = {item} key={index}/>
    })}
    </div>
   )
};
