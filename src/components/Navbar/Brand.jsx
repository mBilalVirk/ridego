export default function Brand() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center">
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="pinBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#9B6BFF" />
              <stop offset="40%" stop-color="#6934E0" />
              <stop offset="100%" stop-color="#3F1A9E" />
            </linearGradient>

            <linearGradient
              id="pinHighlight"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.45" />
              <stop offset="60%" stop-color="#FFFFFF" stop-opacity="0" />
            </linearGradient>

            <filter id="shadow" x="-30%" y="-20%" width="160%" height="160%">
              <feDropShadow
                dx="0"
                dy="2.5"
                stdDeviation="1.8"
                flood-color="#3F1A9E"
                flood-opacity="0.45"
              />
            </filter>
          </defs>

          <path
            d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8Z"
            fill="url(#pinBody)"
            filter="url(#shadow)"
          />

          <path
            d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8Z"
            fill="url(#pinHighlight)"
          />

          <circle cx="12" cy="10" r="3.2" fill="#E8E0FF" />
          <circle cx="12" cy="10" r="2.6" fill="white" />
        </svg>
      </span>
      <span>
        <b className="block text-[16.5px]">RideGo</b>
        <span className="block text-[11px] text-[#726E85]">
          Every Ride, Your Way
        </span>
      </span>
    </span>
  );
}
