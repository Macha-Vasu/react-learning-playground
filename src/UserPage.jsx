import React, {useEffect, useState}from 'react';




const userDetails= "https://jsonplaceholder.typicode.com/posts"

console.log(userDetails);

const UserPage = () => {
    const [user,setUser]= useState([]);
    const userHandler = async()=>{
        const response = await fetch(userDetails)
        const newDate = await response.json();
        setUser(newDate);

    }
    // 
    useEffect(()=>{
        userHandler()
    },[])
}




export default UserPage;