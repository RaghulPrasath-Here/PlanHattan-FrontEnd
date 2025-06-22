// src/components/PlanPreview.jsx

import React from 'react';
import { plans } from '../data/mockPlans';
import '../styles/PlanPreview.css';

// Map crowd levels to specific color for visual - just for the mockup
const crowdColors = {
  Low: '#4caf50',      // Green
  Moderate: '#ff9800', // Orange
  High: '#f44336'      // Red
};

// Main PlanPreview component
const PlanPreview = () => {
  const plan = plans[0];

  // If no plan is found, show a message
  if (!plan) return <div>Plan not found.</div>;

  return (
    <div className="plan-preview">
      <h1>Plan Preview</h1>

      <h2>{plan.title}</h2>
      <p className="date">Date: {plan.date}</p>

      {/* List of stops in itinerary */}
      <ul className="stop-list">
        {plan.stops.map((stop, idx) => (
          <li key={idx} className="stop-card">
            <div className="stop-info">
              <strong>{stop.location}</strong>
              <span>@ {stop.time}</span>
            </div>

            {/* Crowd level visual with color */}
            <span
              className="crowd-badge"
              style={{ backgroundColor: crowdColors[stop.crowd] }}
            >
              {stop.crowd}
            </span>
          </li>
        ))}
      </ul>

      {/* Show list of attendees */}
      <p><strong>Attendees:</strong> {plan.attendees.join(', ')}</p>

      {/* Action buttons related to the plan */}
      <div className="preview-actions">
        <button className="btn join">Join Plan</button>
        <button className="btn suggest">Suggest Edit</button>
        <button className="btn comment">Comment</button>
      </div>
    </div>
  );
};

export default PlanPreview;
