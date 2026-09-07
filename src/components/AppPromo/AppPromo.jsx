import { useEffect, useRef } from "react";

// Photorealistic luxury vehicle photo
const carPhoto =
  "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop";

export default function AppPromo() {
  const canvasRef = useRef(null);

  // Render an active RideGo mobile app interface onto the phone screen canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 300;
    canvas.height = 600;

    // Background Map Layer
    ctx.fillStyle = "#EAE7F2";
    ctx.fillRect(0, 0, 300, 600);

    // Map City Blocks
    ctx.fillStyle = "#DDD8EB";
    ctx.beginPath();
    ctx.roundRect(15, 20, 120, 100, 12);
    ctx.roundRect(150, 20, 135, 80, 12);
    ctx.roundRect(15, 140, 270, 110, 12);
    ctx.roundRect(15, 260, 120, 140, 12);
    ctx.roundRect(150, 260, 135, 140, 12);
    ctx.fill();

    // Map Roads
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 18;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    // Grid lines
    ctx.moveTo(-10, 128);
    ctx.lineTo(310, 128);
    ctx.moveTo(-10, 254);
    ctx.lineTo(310, 254);
    ctx.moveTo(140, -10);
    ctx.lineTo(140, 420);
    ctx.stroke();

    // Active Route Path
    ctx.strokeStyle = "#7C4DFF";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(60, 320);
    ctx.lineTo(60, 254);
    ctx.lineTo(140, 254);
    ctx.lineTo(140, 128);
    ctx.lineTo(220, 128);
    ctx.stroke();

    // Pickup Marker
    ctx.fillStyle = "#1B1830";
    ctx.beginPath();
    ctx.arc(60, 320, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(60, 320, 4, 0, Math.PI * 2);
    ctx.fill();

    // Destination Pin (B)
    ctx.fillStyle = "#FF3B30";
    ctx.beginPath();
    ctx.arc(220, 128, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.arc(220, 128, 5, 0, Math.PI * 2);
    ctx.fill();

    // App Navigation Bar (Top Header)
    ctx.fillStyle = "#FFFFFF";
    ctx.shadowColor = "rgba(0,0,0,0.08)";
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 4;
    ctx.beginPath();
    ctx.roundRect(15, 15, 270, 48, 14);
    ctx.fill();
    ctx.shadowColor = "transparent"; // Reset shadow

    // Header Text
    ctx.fillStyle = "#1B1830";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("Current Location", 30, 35);
    ctx.fillStyle = "#726E85";
    ctx.font = "11px sans-serif";
    ctx.fillText("Downtown Tech Hub", 30, 50);

    // Bottom Ride Booking Drawer Overlay
    ctx.fillStyle = "#FFFFFF";
    ctx.shadowColor = "rgba(0,0,0,0.15)";
    ctx.shadowBlur = 20;
    ctx.shadowOffsetY = -6;
    ctx.beginPath();
    ctx.roundRect(0, 400, 300, 200, [24, 24, 0, 0]);
    ctx.fill();
    ctx.shadowColor = "transparent";

    // Drawer Handle Pill
    ctx.fillStyle = "#E2E0EB";
    ctx.beginPath();
    ctx.roundRect(130, 410, 40, 4, 2);
    ctx.fill();

    // Ride Option Row - Active Selected Option
    ctx.fillStyle = "#F3EFFF";
    ctx.strokeStyle = "#7C4DFF";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(15, 426, 270, 54, 14);
    ctx.fill();
    ctx.stroke();

    // Ride Title & Details
    ctx.fillStyle = "#1B1830";
    ctx.font = "bold 14px sans-serif";
    ctx.fillText("RideGo Comfort", 30, 452);
    ctx.fillStyle = "#726E85";
    ctx.font = "11px sans-serif";
    ctx.fillText("4 mins away • Top rated drivers", 30, 468);

    // Price Badge
    ctx.fillStyle = "#1B1830";
    ctx.font = "bold 15px sans-serif";
    ctx.fillText("$14.50", 225, 458);

    // Confirm Booking CTA Button
    ctx.fillStyle = "#7C4DFF";
    ctx.beginPath();
    ctx.roundRect(15, 492, 270, 46, 14);
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Confirm RideGo", 150, 520);
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-[1180px] px-6 max-[720px]:px-[18px]">
        <div className="grid grid-cols-2 items-center gap-[30px] overflow-hidden rounded-[26px] bg-gradient-to-br from-[#EFE9FF] to-[#E4DBFB] p-11 max-[900px]:grid-cols-1 max-[900px]:text-center">
          {/* Left Text Content & Official Store Badges */}
          <div>
            <h2 className="mb-3 text-[28px] font-extrabold text-slate-900">
              Ride Smarter. Save More.
            </h2>
            <p className="mb-[22px] max-w-[380px] text-[14.5px] leading-relaxed text-[#726E85] max-[900px]:mx-auto">
              Download the RideGo app for exclusive offers, faster bookings, and
              a seamless ride-hailing experience.
            </p>

            <div className="flex flex-wrap items-center gap-3 max-[900px]:justify-center">
              {/* Apple App Store — official badge asset */}
              <a
                href="#download"
                className="inline-block rounded-xl transition-transform hover:scale-[1.03]"
                aria-label="Download on the App Store"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-[46px] w-auto"
                  loading="lazy"
                />
              </a>

              {/* Google Play — official badge asset */}
              <a
                href="#download"
                className="inline-block overflow-hidden rounded-xl transition-transform hover:scale-[1.03]"
                aria-label="Get it on Google Play"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-[68px] w-auto -my-3"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* Right Visual Section: Photorealistic Car + Canvas Mobile Phone Screen */}
          <div className="relative flex h-[280px] items-center justify-center">
            {/* Photorealistic Car Base Image */}
            <div className="absolute left-0 bottom-2 w-[62%] overflow-hidden rounded-2xl shadow-[0_20px_35px_-10px_rgba(30,15,60,0.35)] transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={carPhoto}
                alt="RideGo luxury vehicle"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Mobile Device Mockup with HTML5 Canvas App Display */}
            <div className="absolute right-[4%] top-[-10px] w-[42%] max-w-[195px] rounded-[30px] bg-[#0F0D1A] p-2 shadow-[0_25px_50px_-12px_rgba(20,10,50,0.5)] border border-slate-700/60 z-10">
              {/* Speaker & Camera Notch */}
              <div className="absolute left-1/2 top-3 h-3.5 w-16 -translate-x-1/2 rounded-full bg-[#0F0D1A] z-20" />

              {/* Screen Container */}
              <div className="relative aspect-[9/18.5] w-full overflow-hidden rounded-[22px] bg-white">
                {/* Canvas element rendering real working map UI */}
                <canvas
                  ref={canvasRef}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
