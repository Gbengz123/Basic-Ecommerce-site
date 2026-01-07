import { useId } from 'react';

function StarRating({ rating, maxStars = 5, size = 18, productId }) {
  // Create an array for stars
  const stars = Array.from({ length: maxStars }, (_, i) => i);
  const uniqueId = useId();

  return (
    <div
      className="flex items-center"
      role="img"
      aria-label={`Rating: ${rating} out of ${maxStars}`}
    >
      {stars.map((i) => {
        // Determine fill level of this star (0 to 1)
        const fillLevel = Math.min(Math.max(rating - i, 0), 1);
        const clipId = `${uniqueId}-clip-${i}`;

        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative"
          >
            {/* Empty star */}
            <path
              d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
              fill="#e5e7eb" // Tailwind gray-300
            />
            {/* Filled portion */}
            <clipPath id={clipId}>
              <rect width={`${fillLevel * 24}`} height="24" />
            </clipPath>
            <path
              d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
              fill="oklch(76.9% 0.188 70.08)"
              clipPath={`url(#${clipId})`}
            />
          </svg>
        );
      })}
    </div>
  );
}

export default StarRating;
