// src/components/FriendsPage.jsx

import React, { useState } from 'react';
import '../styles/FriendsPage.css';
import SharePlanForm from './SharePlanForm';
import FriendCard from './FriendCard';

// Sample list of friends with activities
const initialFriends = [
  {
    id: 1,
    name: "Hanna",
    recentActivity: "Morning walk at Brooklyn Bridge",
    plans: [{ title: "Brooklyn Bridge Walk", status: "Accepted", date: "2025-06-10" }]
  },
  {
    id: 2,
    name: "Joe",
    recentActivity: "Went on a Foodie Crawl",
    plans: [{ title: "Foodie Crawl", status: "Pending", date: "2025-07-12" }]
  },
  {
    id: 3,
    name: "Sarah",
    recentActivity: "Added Roosevelt Island Tram to her plan",
    plans: []
  }
];

// Main component for displaying friends and their plans
const FriendsPage = () => {
  // State to store list of friends
  const [friends, setFriends] = useState(initialFriends);
  // State for new plan input form
  const [newPlan, setNewPlan] = useState({ title: '', date: '', friendId: '' });
  // State to track which plan is currently being edited
  const [editingPlan, setEditingPlan] = useState(null);
  // State to track which friend has been reminded
  const [remindedFriend, setRemindedFriend] = useState(null);

  // Function to handle sharing a new plan with a friend
  const handleSharePlan = () => {
    // Exit if required fields are missing
    if (!newPlan.title || !newPlan.date || !newPlan.friendId) return;

    // Update the appropriate friend's plans list
    setFriends(prev =>
      prev.map(friend =>
        friend.id === parseInt(newPlan.friendId)
          ? {
              ...friend,
              plans: [...friend.plans, { title: newPlan.title, date: newPlan.date, status: "Pending" }]
            }
          : friend
      )
    );

    // Reset the new plan form
    setNewPlan({ title: '', date: '', friendId: '' });
  };

  // Function to save an edited plan for a friend
  const savePlan = (friendId, planIndex) => {
    setFriends(prev =>
      prev.map(friend =>
        friend.id === friendId
          ? {
              ...friend,
              plans: friend.plans.map((p, i) =>
                i === planIndex
                  ? {
                      ...p,
                      title: editingPlan.title,
                      date: editingPlan.date,
                      status: editingPlan.status
                    }
                  : p
              )
            }
          : friend
      )
    );

    // Clear editing state after saving
    setEditingPlan(null);
  };

  return (
    <div className="friends-page-container">
      <h1>My Friends</h1>

      {/* Plan sharing form component */}
      <SharePlanForm
        newPlan={newPlan}
        setNewPlan={setNewPlan}
        friends={friends}
        onShare={handleSharePlan}
      />

      {/* Render a list of FriendCard components */}
      <div className="friend-list">
        {friends.map(friend => (
          <FriendCard
            key={friend.id}
            friend={friend}
            editingPlan={editingPlan}
            setEditingPlan={setEditingPlan}
            savePlan={savePlan}
            remindedFriend={remindedFriend}
            setRemindedFriend={setRemindedFriend}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;
