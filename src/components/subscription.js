import React from "react";
import "../assets/styles/subscription.css"

function Subscription({details}){
    const {id, plan, price, allowedSeats, miles} = details
    return(
        <div className="subscribeCard">
            <ul className="Subscribe">
                <h2>{plan}</h2>
                <p>{price}</p>
                <p>{allowedSeats}</p>
                <p>{miles}</p>
                <p>{id}</p>
            </ul>
        </div>

    )
}


function SubscriptionData(){
    const data = [{
        id: 1,
        plan: "FREE",
        price: "$0",
        allowedSeats: "1",
        miles: "1 mile"
    },
    {
        id: 2,
        plan: "ADVANCED",
        price: "$20",
        allowedSeats: "2",
        miles: "10 miles"
    }
    ,
    {
        id: 3,
        plan: "PRO",
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

