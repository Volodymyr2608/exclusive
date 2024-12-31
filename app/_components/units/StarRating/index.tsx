import { TStarRating } from '@/app/_lib/types/_components/units/StarRating';
import React, { FC } from 'react';
import StarSvg from '../../elements/Star';

const StarRating: FC<TStarRating> = ({ rating, reviews, maxRating = 5 }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = maxRating - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <StarSvg key={`full-${index}`} type="fill" />
        ))}
      
      {halfStar && (
        <StarSvg key="half" type="half-filled" />
      )}

      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <StarSvg key={`empty-${index}`} type="empty" />
        ))}

      <span className="ml-2 text-sm text-gray-400 font-semibold">({reviews} reviews)</span>
    </div>
  );
};

export default StarRating;
