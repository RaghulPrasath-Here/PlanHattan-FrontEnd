// src/components/FriendsDashboard.jsx

import React, { useState } from 'react';
import '../styles/FriendsDashboard.css';

// Sample plans that are shared with friends
const initialSharedPlans = [
  {
    title: "Morning walk at Brooklyn Bridge",
    with: "Hanna",
    when: "July 12",
    status: "Accepted"
  },
  {
    title: "Foodie Crawl",
    with: "Joe, Mike",
    when: "June 10",
    status: "Pending"
  }
];

// Sample friend activity feed data
const initialActivities = [
  { text: `Sarah just added "Roosevelt Island Tram" to her plan`, action: "ASK TO JOIN" },
  { text: `You and Leila last planned together 2 weeks ago!`, action: "PLAN" },
  { text: `Andre visited Brooklyn Brewery today!`, action: "REACT" }
];

// Starting list of friends
const initialFriends = ["Alex", "Hanna", "Sarah"];

// Main dashboard component
const FriendsDashboard = () => {
  const [friends, setFriends] = useState(initialFriends); // Friend list state
  const [showFriends, setShowFriends] = useState(false);  // Friend list visibility
  const [reminded, setReminded] = useState(null);         // Track which plan has been reminded
  const [addedFriendCount, setAddedFriendCount] = useState(0); // Count newly added friends

  // Handles sending a reminder for a specific plan
  const handleRemind = (planTitle) => {
    setReminded(planTitle);
    setTimeout(() => setReminded(null), 2000); // Reset after 2 seconds
  };

  // Adds a new placeholder friend to the list
  const handleAddFriend = () => {
    const newFriend = `Friend ${friends.length + 1}`;
    setFriends([...friends, newFriend]);
    setAddedFriendCount(addedFriendCount + 1);
  };

  // Simulates sending an invite
  const handleInvite = () => {
    alert("Invite link sent!");
  };

  // Handles responses to activity feed items
  const handleJoinAction = (text) => {
    alert(`You responded to: "${text}"`);
  };

  return (
    <div className="friends-dashboard-container">
      <h1>Friends Dashboard</h1>

      {/* Section: Plans Shared with Friends */}
      <section className="plans-shared card">
        <h2>Plans Shared with Friends</h2>
        <p className="subtitle">Track your active shared plans and participants.</p>
        {initialSharedPlans.map((plan, i) => (
          <div key={i} className={`shared-plan ${plan.status.toLowerCase()}`}>
            <div className="icon" aria-label="Calendar">📅</div>
            <div className="details">
              <strong>{plan.title}</strong>
              <div>With: {plan.with}</div>
              <div>When: {plan.when}</div>
              <div>Status: <span className={`status ${plan.status.toLowerCase()}`}>{plan.status}</span></div>
            </div>
            <button
              className="btn btn-remind"
              onClick={() => handleRemind(plan.title)}
              aria-label={`Send reminder for ${plan.title}`}
            >
              Remind
            </button>
            {reminded === plan.title && <span className="reminder-note"> Reminder sent!</span>}
          </div>
        ))}
      </section>

      {/* Section: Search/Add Friends */}
      <section className="search-add card">
        <h2>Search and Add Friends</h2>

        {/* Search input */}
        <input
          type="text"
          placeholder="Find friends..."
          aria-label="Search friends"
          className="search-input"
        />

        {/* Add/invite/show buttons */}
        <div className="button-row">
          <button className="btn btn-add" onClick={handleAddFriend}>+ Add</button>
          <button className="btn btn-invite" onClick={handleInvite}>Invite</button>
          <button
            className="btn btn-show-friends"
            onClick={() => setShowFriends(!showFriends)}
            aria-expanded={showFriends}
          >
            {showFriends ? "Hide Friends" : "Show Friends"}
          </button>
        </div>

        {/* Conditional rendering of friend list */}
        {showFriends && (
          <ul className="friends-list" aria-live="polite">
            {friends.map((friend, i) => (
              <li key={i}>{friend}</li>
            ))}
          </ul>
        )}

        {/* Confirmation message after adding friend */}
        {addedFriendCount > 0 && <p className="added-count"> {addedFriendCount} friend(s) added!</p>}
      </section>

      {/* Section: Activity Feed */}
      <section className="activity-feed card">
        <h2>What are your friends up to?</h2>
        {initialActivities.map((item, i) => (
          <div key={i} className="activity-item">
            <div className="avatar" aria-hidden="true">👤</div>
            <p>{item.text}</p>
            <button
              className="btn btn-action"
              onClick={() => handleJoinAction(item.text)}
            >
              {item.action}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FriendsDashboard;
