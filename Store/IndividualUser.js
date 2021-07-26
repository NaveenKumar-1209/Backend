import React from 'react'

const IndividualUser = (props) => {
    return (
        <div>
            <li key={props.key} className="IndiUser">
                <p>Full Name : {props.fullname}</p>
                <p>Email ID : {props.email}</p>
                <p>Passward : {props.passward}</p>
            </li>
        </div>
    )
}

export default IndividualUser;
