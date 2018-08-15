import React from 'react';
import Person from './Person.css';

const person = (props) => {

    const inputNameStyle = {
        marginBottom: '.5rem',
        textAlign: 'center',
        width: '50%'
    }
    const inputAffirmStyle = {
        textAlign: 'center',
        width: '80%',
    }
    return (
        <div className="Person">
            <p onClick={props.click}>{props.name} is {props.affirmation}</p>
            <p onClick={props.click}>I am {props.affirmation}</p>
            <p onClick={props.click}>You are {props.affirmation}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} name="name" value={props.name} style={inputNameStyle} />
            <input type="text" onChange={props.changed} name="affirmation" value={props.affirmation} placeholder="type what you'd like to affirm" style={inputAffirmStyle} />
        </div>
    )
}

export default person;