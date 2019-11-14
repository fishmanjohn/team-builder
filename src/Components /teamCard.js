import React from 'react';
import { id } from 'postcss-selector-parser';

function TeamCard(props){
console.log(props.teamMember.name);
    return(
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Email: {props.email}</h2>
            <h2>Role: {props.role}</h2>

        </div>
    )
};
export default TeamCard;