import React from 'react';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Address: {user.address}</p>
      <div className="map-container">
        <iframe
          src={user.mapEmbedUrl}
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>
      </div>
    </div>
  );
}

export default UserProfile;
