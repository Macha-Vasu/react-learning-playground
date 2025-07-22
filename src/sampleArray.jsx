import React from 'react';
import { userName } from './data';

let fruits = ["apple", "banana", "orange", "grape"]

let players = [
    {
    name: "apple",
    name: "banana",
    name: "orange",
    name: "grape"
}
]

const SampleArray = () => {
    return (
        <div>
           {userName.map((user) =>{
                return(
                    <div>
                    <div>{user.email}</div>
                    <div>{user.username}</div>
                    <div>{user.address.street}</div> 

                    </div>
                )
           } )
           
        
        }

        </div>
    );
}    

export default SampleArray;