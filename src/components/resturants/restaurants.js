import React, { useEffect, useState } from "react";
import axios from 'axios';
import './restaurants.css'
import { Link } from "react-router-dom";

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM4NiIsImVtYWlsIjoiOTgxODk3OTQ1MEBmYXN0b3IuaW4iLCJwaG9uZSI6Ijk4MTg5Nzk0NTAiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjMtMTItMDJUMDk6MjQ6NDcuMDAwWiIsImlhdCI6MTcwNjYyOTE2NywiZXhwIjoxNzEzODg2NzY3fQ.RvEOzD0Ilt8RsMxO97JWjO_tk-eVXBOAY01KQHbKirE';
                const res = await axios.get('https://staging.fastor.in/v1/m/restaurant?city_id=118', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setRestaurants(res.data); 

            } catch (err) {
                console.log('Error fetching restaurants:', err);
            }
        };

        fetchRestaurants(); 

    }, []); 


    return (
        <div>
          <h1 className="center-heading">List of Restaurants</h1>
          <ul>
            {restaurants.map((restaurant, index) => (
              <li key={index} className="restaurant-item">
                <Link to={`/details/${restaurant.restaurant_name}?image=${restaurant.images[0].url}`}>
                    {restaurant.restaurant_name}
                </Link>
                <img src={restaurant.images[0].url} alt={restaurant.restaurant_name} />
              </li>
            ))}
          </ul>
        </div>
    );
    
};

export default Restaurants;
