import React from "react";
import "./Subscription.css";

function Subscription() {
  return (
    <div className="subscriptionSection">
      <p className="subscriptionText">
        Be the first to know about the latest deals, receive <br/> new trending
        recipes & more!
      </p>
      <form action="" className="subscriptionForm">
              <input type="email" placeholder="Email Address" className="emailSubscription" />
              <button type="submit" className="subscriptionBtn">Subscribe</button>
      </form>
    </div>
  );
}

export default Subscription;
