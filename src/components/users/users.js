import User from "../user/user";
import {useEffect, useState} from "react";


export default function Users() {
    let [users, setUsers]=useState([]);
    let [user, setUser]=useState(null);
 const lift = (obj) => {
     setUser(obj)
 }
 useEffect( () => {
     fetch('https://jsonplaceholder.typicode.com/users')
         .then(value => value.json())
         .then(value => {
             setUsers(value);
             // console.log(value);
         });
 }, []);

 return (<div>
     <hr/> {JSON.stringify(user)}
     <hr/>

     {users.map((user,index) => (<User
         item = {user}
         key = {index}
         lift = {lift}/>))}
 </div>);
}