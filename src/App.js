import React, {useState} from "react";
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

//On Click...........
function NumberCounter(){
  const[counter, setCounter] = useState(0);

  const handleIncrement = (event) =>{
    event.preventDefault();
    setCounter((prev) => prev + 1)
  }

  const handleDecrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev-1)
  }

  const clearIncrement = (event) => {
    event.preventDefault();
    setCounter(0)
  }

  return (
    <div className="container">
      <h1 className="counter-label">{counter}</h1>
      <button onClick={handleIncrement} className="action-button">
        Increment
      </button>
      <button onClick={handleDecrement} className="action-btn">
        Decrement
      </button>
      <button onClick={clearIncrement} className="action-btn">
        Clear
      </button>
  </div>)

}

function OnSubmit(){
  return(
    <form>
      <input type="text" placeholder="Input Name"/>
      <input type="number" placeholder="Phone Number"/>
      <input type="email" placeholder="Email"/>
      <button>Submit</button>
  </form>
  )
}


//On Change.........
function App() {
  const handleChange = (event) =>{
    event.preventDefault()
    console.log(event.target.value)
  }
  
  return (
    <section>
      <form>
        <input type="text" placeholder="Input Name" onChange={handleChange}/>
        <input type="number" placeholder="Phone Number"/>
        <input type="email" placeholder="Email"/>
        <button>Submit</button>
      </form>
    </section>
  )
}

export default App;
export {NumberCounter, OnSubmit};