import React from 'react';
import { id } from 'postcss-selector-parser';

function TeamCard(props){
console.log(props.person);

    return(
        <div className ="teamCard">
            <h2>Name: {props.person.name}</h2>
            <h2>Email: {props.person.email}</h2>
            <h2>Role: {props.person.role}</h2>

        </div>
    )
};
export default TeamCard;