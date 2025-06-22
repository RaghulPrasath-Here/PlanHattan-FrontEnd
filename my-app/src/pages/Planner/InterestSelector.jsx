import React from "react";
import './InterestSelector.css'
import {
  Landmark,
  Binoculars,
  Utensils,
  Glasses,
  ShoppingCart,
  Guitar,
  Ship,
} from "lucide-react";

const interests = [
  { label: "Museums, Galleries", icon: Landmark },
  { label: "Landmarks, Attractions", icon: Binoculars },
  { label: "Cafe, Restaurants", icon: Utensils },
  { label: "Nightlife, Bars", icon: Glasses },
  { label: "Shopping, Boutiques", icon: ShoppingCart },
  { label: "Live Music", icon: Guitar },
  { label: "Cruises", icon: Ship },
];

const InterestSelector = () => {
  return (
    <div className="interest-container">
      <h2 className="title">Discover by Interest</h2>
      <p className="subtitle">
        Activities recommended based on your time, preferences, and the city’s current pace.
      </p>

      <div className="icon-grid">
        {interests.map(({ label, icon: Icon }, idx) => (
          <div className="icon-card" key={idx}>
            <div className="icon"><Icon size={28} /></div>
            <span className="icon-label">{label}</span>
          </div>
        ))}
      </div>

      <div className="cta">
        <p className="search-label">
          <strong>Search By Landmarks & Attractions</strong>
        </p>
        <button className="go-btn">GO</button>
      </div>
    </div>
  );
};

export default InterestSelector;
