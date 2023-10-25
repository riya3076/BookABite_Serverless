import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from './components/RestaurantCard';

const restaurants = [
  {
    id: 1,
    name: 'Restaurant A',
    location: 'Location A',
    operationHours: '9:00 AM - 10:00 PM',
    numOfTables: 20,
    foodMenu: 'Menu A',
  },
  
  {
    id: 2,
    name: 'Restaurant B',
    location: 'Location B',
    operationHours: '10:00 AM - 10:00 PM',
    numOfTables: 10,
    foodMenu: 'Menu B',
  },

  {
    id: 3,
    name: 'Restaurant B',
    location: 'Location B',
    operationHours: '10:00 AM - 10:00 PM',
    numOfTables: 10,
    foodMenu: 'Menu B',
  },

  {
    id: 4,
    name: 'Restaurant B',
    location: 'Location B',
    operationHours: '10:00 AM - 10:00 PM',
    numOfTables: 10,
    foodMenu: 'Menu B',
  },

  {
    id: 5,
    name: 'Restaurant B',
    location: 'Location B',
    operationHours: '10:00 AM - 10:00 PM',
    numOfTables: 10,
    foodMenu: 'Menu B',
  },

  {
    id: 6,
    name: 'Restaurant B',
    location: 'Location B',
    operationHours: '10:00 AM - 10:00 PM',
    numOfTables: 10,
    foodMenu: 'Menu B',
  },

  {
    id: 7,
    name: 'Restaurant B',
    location: 'Location B',
    operationHours: '10:00 AM - 10:00 PM',
    numOfTables: 10,
    foodMenu: 'Menu B',
  },

  {
    id: 8,
    name: 'Restaurant B',
    location: 'Location B',
    operationHours: '10:00 AM - 10:00 PM',
    numOfTables: 10,
    foodMenu: 'Menu B',
  },
];

const RestaurantList = () => {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}> {/* Use Link to navigate to restaurant details */}
          <RestaurantCard
            id={restaurant.id}
            name={restaurant.name}
            location={restaurant.location}
            operationHours={restaurant.operationHours}
            numOfTables={restaurant.numOfTables}
            foodMenu={restaurant.foodMenu}
          />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantList;
