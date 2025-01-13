/**
 * @file StarRating component that displays a star rating based on a given rating.
 * @name StarRating
 * @param {object} props - The props object containing the rating to display
 * @returns JSX.Element
 *
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

function StarRating({ rating }) {
  const fullStars = Math.floor(rating); // Number of full stars
  const halfStar = rating % 1 >= 0.5; // Check if there's a half star
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining stars

  return (
    <div className="flex space-x-1 text-yellow-400 text-center">
      {/* Render full stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FontAwesomeIcon key={`full-${index}`} icon={faStar} />
        ))}

      {/* Render half star if applicable */}
      {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} />}

      {/* Render empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FontAwesomeIcon
            key={`empty-${index}`}
            icon={faStar}
            className="text-gray-300"
          />
        ))}
    </div>
  );
}

export default StarRating;
