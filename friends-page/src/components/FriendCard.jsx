// src/components/FriendCard.jsx


import React from 'react';
import PlanList from './PlanList';

// FriendCard component receives from the parent - FriendsPage
const FriendCard = ({
  friend,
  editingPlan,
  setEditingPlan,
  savePlan,
  remindedFriend,
  setRemindedFriend
}) => {
  return (
    <div className="friend-card">
      {/* Display friend's name and recent activity */}
      <h3>{friend.name}</h3>
      <p className="activity">Last activity: {friend.recentActivity}</p>

      {/* Display list of plans associated with this friend */}
      <PlanList
        friend={friend}
        editingPlan={editingPlan}
        setEditingPlan={setEditingPlan}
        savePlan={savePlan}
      />

      {/* Buttons for user interaction - remind and invite */}
      <div className="button-group">
        <button
          className="btn remind"
          onClick={() => {
            // Set friend as reminded and show message for 2 seconds
            setRemindedFriend(friend.id);
            setTimeout(() => setRemindedFriend(null), 2000);
          }}
        >
          Remind
        </button>
        <button className="btn invite">Invite</button>
      </div>

      {/* Conditional message shown when reminder is sent */}
      {remindedFriend === friend.id && (
        <p className="reminder-message">Reminder sent!</p>
      )}
    </div>
  );
};

export default FriendCard;
