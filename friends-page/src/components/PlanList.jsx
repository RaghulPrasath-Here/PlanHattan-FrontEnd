// src/components/PlanList.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// PlanList component displays and allows editing of plans for a given friend
const PlanList = ({ friend, editingPlan, setEditingPlan, savePlan }) => {
  return (
    <ul className="plan-list">
      {friend.plans.length > 0 ? (
        // Map through each plan for this friend
        friend.plans.map((plan, i) => (
          <li key={i} className={`plan ${plan.status.toLowerCase()}`}>
            {editingPlan?.friendId === friend.id && editingPlan?.index === i ? (
              // If this plan is being edited, show input fields
              <>
                <input
                  type="text"
                  value={editingPlan.title}
                  onChange={e =>
                    setEditingPlan({ ...editingPlan, title: e.target.value })
                  }
                />
                <input
                  type="date"
                  value={editingPlan.date}
                  onChange={e =>
                    setEditingPlan({ ...editingPlan, date: e.target.value })
                  }
                />
                <select
                  value={editingPlan.status}
                  onChange={e =>
                    setEditingPlan({ ...editingPlan, status: e.target.value })
                  }
                >
                  <option value="Accepted">Accepted</option>
                  <option value="Pending">Pending</option>
                </select>
                {/* Save and cancel buttons for edit mode */}
                <button onClick={() => savePlan(friend.id, i)}>Save</button>
                <button onClick={() => setEditingPlan(null)}>Cancel</button>
              </>
            ) : (
              // Display the plan
              <>
                <span>{plan.title}</span> — <strong>{plan.status}</strong> on {plan.date}
                <button
                  className="btn edit-btn"
                  onClick={() =>
                    setEditingPlan({ ...plan, friendId: friend.id, index: i })
                  }
                >
                  Edit
                </button>
                {/* Show plan */}
                <button onClick={() => console.log("Show plan", plan.id)}>View Plan</button>
              </>
            )}
          </li>
        ))
      ) : (
        // Show if friend has no plans
        <li className="plan none">No plans yet.</li>
      )}
    </ul>
  );
};

export default PlanList;
