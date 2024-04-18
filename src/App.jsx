import React, { useState } from 'react';
import './App.css';
import Navbar from './navbar';
import UserProfile from './userprofile';

// Your users data
const users = [
  {
    name: 'Suyango Duo',
    address: 'Chaorean resort,Thailand',
    city: 'Thailand',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121258.6771826285!2d99.96291762286013!3d18.24051963237306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d8e402c2b43ab3%3A0x6e358e2db80d7959!2sWat%20Luang%20Wiang%20Ta%20Mon!5e0!3m2!1sen!2sin!4v1713446846065!5m2!1sen!2sin',
    photoUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jacky Jone',
    address: 'Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014',
    city: 'Pune',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7564.6162438757665!2d73.91011745!3d18.560142450000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13f120b95d9%3A0xbfdde2f42e221a78!2sWEIKFIELD%20IT%20CITI%20INFO%20PARK%2C%20Sakore%20Nagar%2C%20Viman%20Nagar%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1713446351108!5m2!1sen!2sin',
    photoUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Arya Patil',
    address: '69, Gali No. 2, Milap Nagar, Jaipur, Rajasthan 302018',
    city: 'Jaipur',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14238.611095414592!2d75.80576109334574!3d26.850994150893552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db578efc73a41%3A0x51c0e13a9ab30aac!2sJaypore360%20Homestay!5e0!3m2!1sen!2sin!4v1713446972821!5m2!1sen!2sin',
    photoUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Doe',
    address: '123 Main St, Anytown, USA',
    city: 'Anytown',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.882113633313!2d-73.9689566845877!3d40.78075867922157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25950b64c89e5%3A0xc5f39487fb62b71a!2s123%20Main%20St%2C%20Anytown%2C%20USA!5e0!3m2!1sen!2sin!4v1713525912988!5m2!1sen!2sin',
    photoUrl: 'https://via.placeholder.com/150',
  },
  {
    name: ' Smith Duo',
    address: '456 Elm St, Sometown, USA',
    city: 'Sometown',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.228654986739!2d-73.96343438458802!3d40.778812979221816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2594ac7d298ed%3A0x77c7d04dbecb40de!2s456%20Elm%20St%2C%20Sometown%2C%20USA!5e0!3m2!1sen!2sin!4v1713526051233!5m2!1sen!2sin',
    photoUrl: 'https://via.placeholder.com/150',
  },
];


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users.filter(user =>
    user.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSummaryClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="search-bar-container">
  <input
    type="text"
    placeholder="Search by city or name"
    value={searchQuery}
    onChange={e => setSearchQuery(e.target.value)}
    className="search-bar"
  />
  <button className="search-button">Search</button>
</div>

      
      <div className="users-container">
        {filteredUsers.map(user => (
          <div key={user.name} className="profile">
            <div className="profile-photo">
              <img src={user.photoUrl} alt={user.name} />
            </div>
            <div className="profile-info">
              <address>
                <b>
                  <p>Name: {user.name}</p>
                  <p>Address: {user.address}</p>
                </b>
              </address>
              <button onClick={() => handleSummaryClick(user)}>Summary</button>
            </div>
          </div>
        ))}
      </div>
      {selectedUser && <UserProfile user={selectedUser} />}
    </div>
  );
}

export default App;
