// components/PlannerLayout.jsx
import MapPanel from '../../components/map/MapPanel';
import Navbar from '../../components/nav/Navbar';
import './PlannerLayout.css';

export default function PlannerLayout({ children }) {
  return (
    <div className="planner-page">
      <Navbar />
      <div className="planner-layout">
        <div className="planner-left">
          <MapPanel />
        </div>
        <div className="planner-right">
          {children} {/* Dynamic content */}
        </div>
      </div>
    </div>
  );
}