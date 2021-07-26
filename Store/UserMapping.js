import React from 'react';
import IndividualUser from './IndividualUser';

const UserMapping = (props) => {
    
    return (
        <div>
            <ul className="UserMap">
                    {props.data.map((userDetails)=>(
                       <IndividualUser 
                       key={userDetails.id}
                       fullname={userDetails.fullname}
                       email={userDetails.email}
                       passward={userDetails.passward} /> 
                       )
                    )}
            </ul>
        </div>
    )
}

export default UserMapping;
