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

const SampleArray = ({ userName }) => {
  return (
    <div>
      {userName.map((user, index) => (
        <div key={index}>
          <div>{user.email}</div>
          <div>{user.username}</div>
          <div>{user.address.street}</div>
        </div>
      ))}
    </div>
  );
};


   

export default SampleArray;