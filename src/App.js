import React from "react";
// import UserProfileCard from "./components/UserProfileCard";

/*
function Greeting() {
  return <h1>Guten Morgen</h1>;
}

 const users = [
    {
      name: "Anne Usang",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      bio: "A cloud expert",
    }, 

    {
      name: "John Ebong",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      bio: "A Product Designer",
    },

    {
      name: "Edet Emmanuel",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      bio: "A Backend Engineer",
    },
  ];

  const usersList = users.map((user) => {
    return (
    <div className="user-profile">
      <img src={user.avatar} alt={`${user.name}'s avatar`} style={{width:100}}/>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
    )
  })

  return <section>{usersList}</section>

}
*/

function App() {
  const[counter, setCounter] = useState(0);

  // handle click
  const handleIncrement = (event)=>{
    event.preventDefault();
    alert("handle Increment")
  }


  return (
    <section>
      <div className="container">
        <h1 className="counter-label">0</h1>
        <button onClick={handleClick} className="action-button">Increment</button>
        <button onClick={handleClick} className="action-btn">Decrement</button>
      </div>
    </section>
  )
}

export default App;