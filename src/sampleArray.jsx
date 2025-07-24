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
function Dashboard() {
  const { data, isLoading, error } = useQuery('fetchData', fetchDashboardData);
  
  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;

  return (
    <div>
      <Header />
      <Sidebar />
      <MainContent data={data} />
    </div>
  );
}



        </div>
    );
    
}    

export default SampleArray;