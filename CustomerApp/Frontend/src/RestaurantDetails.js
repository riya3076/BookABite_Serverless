import React from 'react';
import { useParams } from 'react-router-dom';

const RestaurantDetails = () => {
  const { id } = useParams();

  if (!restaurant) {
    return <div>No restaurant data available</div>;
  }
  // Fetch the specific restaurant details based on the ID
  const restaurant = restaurant.find(restaurant => restaurant.id.toString() === id);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="restaurant-details">
      <h2>{restaurant.name} Details</h2>
      <p>Location: {restaurant.location}</p>
      <p>Operation Hours: {restaurant.operationHours}</p>
      <p>Number of Tables: {restaurant.numOfTables}</p>
      <p>Food Menu: {restaurant.foodMenu}</p>
    </div>
  );
};

export default RestaurantDetails;
