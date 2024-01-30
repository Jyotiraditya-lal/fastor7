import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import './detail.css'

const Detail = () => {
    const { restaurant_name } = useParams(); 
    const imageUrl = new URLSearchParams(window.location.search).get('image'); 

    const handleShare = async () => {
        try {
            await navigator.share({
                title: 'Share Image URL',
                url: imageUrl
            });
            console.log('Image URL shared successfully');
        } catch (error) {
            console.error('Error sharing image URL:', error);
        }
    };

    return (
        <div>
            <h1>Details</h1>
            <p>{restaurant_name}</p>
            <div className='container'>
                <img src={imageUrl} alt={restaurant_name} className="background-image" />
                <img src="https://i0.wp.com/fastor7.com/wp-content/uploads/2021/03/Fastor-7.png?fit=750%2C78&ssl=1" alt='logo' className="foreground-image" />
            </div>
            <button onClick={handleShare}>Share Image URL</button>
        </div>
    );
};

export default Detail;
