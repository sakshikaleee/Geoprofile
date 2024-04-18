import React from 'react';
import { MdDashboard, MdMap, MdPerson } from 'react-icons/md'; // Import icons from Material Icons

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-icons">
        <span><MdDashboard /></span> {/* Admin Panel */}
        <span><MdMap /></span> {/* Map Symbol */}
        <span><MdPerson /></span> {/* User Symbol */}
      </div>
      <div className="app-name">GeoProfile</div>
    </div>
  );
}

export default Navbar;
