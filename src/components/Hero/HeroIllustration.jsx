import useMouseTilt from "../../hooks/useMouseTilt";

// High-resolution photo of the car
const carPhoto =
  "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1200&auto=format&fit=crop";

// Driver avatar
const driverAvatar =
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop";

export default function HeroIllustration() {
  const { holderRef, illustrationRef } = useMouseTilt();

  return (
    <div ref={holderRef} className="[perspective:1400px]">
      <div
        ref={illustrationRef}
        className="relative h-[540px] w-full transform-gpu [transform-style:preserve-3d] transition-transform duration-150 ease-out max-[960px]:h-[420px]"
      >
        {/* Ground Platform Base */}
        <div className="absolute inset-x-[2%] bottom-[0%] h-[45%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,#E4E1F0_0%,#D6D2EB_60%,transparent_100%)] [transform:translateZ(-50px)_rotateX(72deg)]" />

        {/* Photorealistic Car Base Layer */}
        <div className="absolute bottom-[8%] left-[2%] w-[82%] max-w-[560px] overflow-hidden rounded-[24px] [transform:translateZ(40px)] [filter:drop-shadow(0_30px_35px_rgba(40,20,80,0.35))] z-10">
          <img
            src={carPhoto}
            alt="RideGo Tesla"
            className="w-full object-cover rounded-[24px]"
            loading="eager"
          />
        </div>

        {/* Extra Large 3D Location Pin - Positioned Directly ON TOP of the Car */}
        <div className="absolute left-[38%] top-[12%] w-[140px] h-[170px] [transform:translateZ(110px)] [filter:drop-shadow(0_20px_20px_rgba(30,10,80,0.6))] z-40 pointer-events-none">
          <svg viewBox="0 0 100 120" className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="pinBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B388FF" />
                <stop offset="45%" stopColor="#7C4DFF" />
                <stop offset="100%" stopColor="#3F1A9E" />
              </linearGradient>
            </defs>
            {/* Main Pin Body */}
            <path
              d="M 50,5 C 22,5 0,27 0,55 C 0,90 50,120 50,120 C 50,120 100,90 100,55 C 100,27 78,5 50,5 Z"
              fill="url(#pinBody)"
            />
            {/* Top Gloss Highlight */}
            <path
              d="M 50,5 C 22,5 0,27 0,55 C 0,70 15,85 30,100 C 20,80 15,60 25,40 C 35,20 60,10 80,10 C 70,7 60,5 50,5 Z"
              fill="white"
              fillOpacity="0.45"
            />
            {/* Inner Ring Core */}
            <circle cx="50" cy="52" r="20" fill="#200566" />
            <circle cx="50" cy="52" r="13" fill="white" />
          </svg>
        </div>

        {/* Mobile Phone Mockup */}
        <div className="absolute bottom-[-2%] right-[-2%] w-[34%] max-w-[190px] rounded-[28px] bg-[#0F0D1A] p-1.5 shadow-[0_35px_50px_-10px_rgba(30,15,60,0.6)] [transform:translateZ(90px)] border border-slate-800 z-20">
          <div className="relative aspect-[9/18.5] w-full overflow-hidden rounded-[22px] bg-[#EAE8F2]">
            {/* Vector City Map View */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 200 360"
            >
              {/* City Blocks / Landmass Styling */}
              <rect width="200" height="360" fill="#F0EEF8" />
              <rect
                x="10"
                y="20"
                width="80"
                height="60"
                rx="8"
                fill="#E2DFEE"
              />
              <rect
                x="105"
                y="15"
                width="80"
                height="85"
                rx="8"
                fill="#E2DFEE"
              />
              <rect
                x="15"
                y="95"
                width="75"
                height="110"
                rx="8"
                fill="#E2DFEE"
              />
              <rect
                x="100"
                y="115"
                width="85"
                height="90"
                rx="8"
                fill="#E2DFEE"
              />
              <rect
                x="15"
                y="220"
                width="170"
                height="130"
                rx="8"
                fill="#E2DFEE"
              />

              {/* City Road Network */}
              <g
                stroke="#FFFFFF"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Horizontal Avenues */}
                <path d="M -10,88 L 210,88" />
                <path d="M -10,210 L 210,210" />
                {/* Vertical Streets */}
                <path d="M 95,-10 L 95,370" />
                <path d="M 188,-10 L 188,370" />
                {/* Diagonal Connector */}
                <path d="M 20,40 Q 60,120 150,180" />
              </g>

              {/* Highlighted Ride Navigation Route Path */}
              <path
                d="M 45,260 L 45,210 L 95,210 L 95,88 L 150,88"
                fill="none"
                stroke="#7C4DFF"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Pickup Point Pin (A) */}
              <g transform="translate(45, 260)">
                <circle r="9" fill="#111827" />
                <circle r="4" fill="#FFFFFF" />
              </g>

              {/* En-Route Car Icon */}
              <g transform="translate(95, 140)">
                <circle
                  r="8"
                  fill="#7C4DFF"
                  opacity="0.25"
                  className="animate-ping"
                />
                <circle r="6" fill="#7C4DFF" />
                <circle r="2.5" fill="#FFFFFF" />
              </g>

              {/* Destination Point Pin (B) */}
              <g transform="translate(150, 88)">
                <path
                  d="M 0,-16 C -6,-16 -10,-12 -10,-6 C -10,2 0,10 0,10 C 0,10 10,2 10,-6 C 10,-12 6,-16 0,-16 Z"
                  fill="#FF3B30"
                />
                <circle cx="0" cy="-6" r="3.5" fill="#FFFFFF" />
              </g>
            </svg>

            {/* Driver Overlay Card */}
            <div className="absolute inset-x-1.5 bottom-2 flex items-center gap-1.5 rounded-xl border border-slate-100 bg-white/95 p-1.5 shadow-md">
              <img
                src={driverAvatar}
                alt="Driver"
                className="h-7 w-7 shrink-0 rounded-full object-cover border border-purple-200"
                loading="lazy"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold text-slate-800">
                    3 min away
                  </span>
                  <span className="text-[8px] font-bold text-amber-500">
                    ★ 4.9
                  </span>
                </div>
                <p className="truncate text-[8px] font-medium text-slate-500">
                  White Tesla Model 3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
