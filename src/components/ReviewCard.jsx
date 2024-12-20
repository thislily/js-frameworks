import React from 'react';
import StarRating from './StarRating';  // Assuming you have the StarRating component from earlier

function ReviewCard({ username, description, rating }) {
  return (
    <div className="border-gray-400 border-2 p-4 mb-4 rounded-lg">
      <h3 className="font-bold text-lg">{username}</h3>
      <p className="italic text-gray-600">{description}</p>
      <div className="flex items-center">
        <StarRating rating={rating} />
      </div>
    </div>
  );
}

export default ReviewCard;
