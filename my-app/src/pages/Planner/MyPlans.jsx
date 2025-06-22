import PlannerLayout from './PlannerLayout';
import './MyPlans.css';
import { FiTrash2 } from 'react-icons/fi';
import { useState } from 'react';
import { initialPlans } from './plansData.js'; 


function MyPlans() {
  // Initial sample data - sorted by date and time

  const [plans, setPlans] = useState(initialPlans);
  const [deletingId, setDeletingId] = useState(null);


const handleDelete = (index) => {
    setDeletingId(index);
    setTimeout(() => {
      setPlans(prev => prev.filter((_, i) => i !== index));
      setDeletingId(null);
    }, 300); // Match this duration with your CSS transition
  };

  const getPredictionColor = (percentage) => {
    const value = parseInt(percentage);
    if (value >= 80) return '#ff4d4f'; // Red
    if (value >= 40) return '#faad14'; // Orange/Yellow
    return '#52c41a'; // Green
  };

  return (
    <PlannerLayout>
      <div className="my-plans-container">
        <div className="my-plans-header">
          <h2>My Plans</h2>
          <div className="results-count">{plans.length} results</div>
        </div>
        
        <div className="plans-scroll-container">
          <table className="plans-table">
            <thead>
              <tr>
                <th>PLACE</th>
                <th>PLANNED ON</th>
                <th>PLANNED AT</th>
                <th>PREDICTED</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, index) => (
                <tr key={index} className={`plan-row ${deletingId === index ? 'deleting' : ''}`}>
                  <td>
                    <div className="place-cell">
                      <div className="area-image-container">
                        <img 
                          src={plan.areaImage} 
                          alt={plan.area} 
                          className="area-image"
                        />
                      </div>
                      {plan.place}
                    </div>
                  </td>
                  <td>{plan.date}</td>
                  <td>{plan.time}</td>
                  <td>
                    <div 
                        className="prediction-bar" 
                        style={{ 
                          '--percentage': plan.predicted,
                          '--text-color': getPredictionColor(plan.predicted)
                        }}
                      >
                        {plan.predicted}
                      </div>

                  </td>
                  <td>
                    <button 
                      className="delete-btn"
                      onClick={() => handleDelete(index)}
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PlannerLayout>
  );
}

export default MyPlans