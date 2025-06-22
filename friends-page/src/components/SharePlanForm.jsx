// src/components/SharePlanForm.jsx


import React, { useState } from 'react';

const SharePlanForm = ({ newPlan, setNewPlan, friends, onShare }) => {
  // Local state to show success feedback message after form submission
  const [successMessage, setSuccessMessage] = useState("");

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Validate input fields
    if (!newPlan.title || !newPlan.date || !newPlan.friendId) {
      alert("Please fill in all fields.");
      return;
    }

    // Share the plan using parent handler and reset the form
    onShare(newPlan);
    setSuccessMessage("Plan shared successfully!");
    setNewPlan({ title: "", date: "", friendId: "" });
  };

  return (
    <div className="share-form">
      <h3>Share a New Plan</h3>

      {/* Plan sharing form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Plan Title"
          value={newPlan.title}
          onChange={e => setNewPlan({ ...newPlan, title: e.target.value })}
        />

        {/* Input for date */}
        <input
          type="date"
          value={newPlan.date}
          onChange={e => setNewPlan({ ...newPlan, date: e.target.value })}
        />

        {/* Dropdown to select a friend */}
        <select
          value={newPlan.friendId}
          onChange={e => setNewPlan({ ...newPlan, friendId: e.target.value })}
        >
          <option value="">Select Friend</option>
          {friends.map(f => (
            <option key={f.id} value={f.id}>
              {f.name}
            </option>
          ))}
        </select>

        {/* Submit button */}
        <button type="submit">Share Plan</button>
      </form>

      {/* Conditional success message */}
      {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
    </div>
  );
};

export default SharePlanForm;
