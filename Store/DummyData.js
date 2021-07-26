import React, { useState, useCallback, useEffect} from 'react';
import UserMapping from './UserMapping';
import "./DummyData.css";
import FormInput from "../FormInput";


const DummyData = () => {

    // const usersData = [
    //     {
    //         id:1,
    //         fullname: "Naveen Chauhan",
    //         email: "nkc.2096@gmail.com",
    //         passward:"12345"
    //     },
    //     {
    //         id:2,
    //         fullname: "Rahul Patel",
    //         email: "rahul.patel@gmail.com",
    //         passward:"54321"
    //     }
    // ];

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

   

    const fetchUserDataHandler = useCallback(async () => {
         
        setIsLoading(true);
        const response = await fetch('https://react-fetch-a2a4c-default-rtdb.firebaseio.com/users.json')
        const data = await response.json();
        console.log(data);
        const loadedUsers =[];

        for ( const key in data ){
            loadedUsers.push({
                id:key,
                fullname:data[key].fullname,
                email:data[key].email,
                passward:data[key].passward
            })
        }
        
        setUsers(loadedUsers)
        setIsLoading(false);
        },[],)
    
    
    useEffect(()=>{
        fetchUserDataHandler()
    },[fetchUserDataHandler]);


    const AddUserHandler = async (users) => {
        const response = await fetch('https://react-fetch-a2a4c-default-rtdb.firebaseio.com/users.json',{
            method:'POST',
            body: JSON.stringify(users),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="UserData">
            <section>
                <FormInput onAddUsers={AddUserHandler} />
            </section>
            <section>
                <button onClick={fetchUserDataHandler}>Fetch the User Data</button>
            </section>
            <section>
                <UserMapping data={users} />
            </section>
        </div>
    )
}

export default DummyData;
