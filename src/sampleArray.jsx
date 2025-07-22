import React from 'react';

let fruits = ["apple", "banana", "orange", "grape"]

let players = [
    {
    name: "apple",
    name: "banana",
    name: "orange",
    name: "grape"
}
]

const sampleArray = () => {
    return (
        <div>
            {fruits.map((fruit, index) =>
                <p key={index}>{fruit}</p>
            )}
        </div>
    );
}    

export default sampleArray;