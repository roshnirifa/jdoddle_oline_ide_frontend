import React from 'react';
import { FaStar } from 'react-icons/fa';
import "./Reviwe.css"

const Review = (props) => {
    const { name, picture, ratings, review } = props.review
    return (
        <div className='review-container'>
            <div className="customer-img-name">
                <img className='customer-pic' src={picture} alt="" />
                <h3>{name}</h3>
            </div>
            <div className='review' >
                <p>{review}</p>
                <p>ratings:<small>{ratings} </small>
                    <FaStar className='icon' />
                    <FaStar className='icon' />
                    <FaStar className='icon' />
                    <FaStar className='icon' />
                    <FaStar className='icon' />

                </p>
            </div>

        </div>
    );
};

export default Review;