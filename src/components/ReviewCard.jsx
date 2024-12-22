/**
 * @fileoverview ReviewCard component that displays a user's review with their username, description, and rating.
 * @name ReviewCard
 * @param {object} props - The props object containing the username, description, and rating of the review
 * @returns JSX.Element
 */

import React from 'react';
import StarRating from './StarRating';

function ReviewCard({ username, description, rating }) {
  return (
    <div className="border-gray-400 border-2 p-4 mb-4 rounded-lg">
      <h3 className="font-bold text-lg">{username}</h3>
      <p className="italic text-gray-600">{description}</p>
      <div className="flex items-center">
        // Display the star rating
        <StarRating rating={rating} />
      </div>
    </div>
  );
}

export default ReviewCard;