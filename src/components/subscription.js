import React from "react";
import "../assets/styles/subscription.css"

function Subscription(details){
    return(
        <div className="Subscribe">
            <h1>`Hello ${details.plan}`</h1>
            <h3>{details.price}</h3>
            <h3>{details.allowedSeats}</h3>
            <h3>{details.miles}</h3>
        </div>
    )
}


function SubscriptionData(){
    const data = [{
        id: 1,
        plan: "Free",
        price: "$0",
        allowedSeats: "1",
        miles: "1 mile"
    },
    {
        id: 2,
        plan: "Advanced",
        price: "$20",
        allowedSeats: "2",
        miles: "10 miles"
    }
    ,
    {
        id: 3,
        plan: "pro",
        price: "$50",
        allowedSeats: "3",
        miles: "20 miles",
    }]

    const list = data.map((item) => {
        return <Subscription details={item}/>
    })

    return(
        <div className="Display">{list}</div>
    )
}

export default SubscriptionData;

