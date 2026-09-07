import BookingCard from "./BookingCard";
import HeroIllustration from "./HeroIllustration";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Hero() {
  const reveal = useScrollReveal();
  return (
    <section
      id="home"
      ref={reveal.ref}
      className={`flyover-section transition-all duration-700 ease-out ${reveal.className}`}
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-[1fr_1.05fr] items-center gap-10 px-6 pt-5 max-[960px]:grid-cols-1 max-[720px]:px-[18px]">
        <div>
          <div className="mb-4 text-[13px] font-bold tracking-[1.5px] text-[#7C4DFF]">
            SAFE. RELIABLE. EVERYWHERE
          </div>
          <h1 className="mb-[18px] text-[clamp(38px,5vw,52px)] font-extrabold leading-[1.08] tracking-[-1px]">
            Your <span className="text-[#7C4DFF]">Ride,</span>
            <br />
            Your <span className="text-[#7C4DFF]">Way</span>
          </h1>
          <p className="mb-7 max-w-[400px] text-[15.5px] text-[#726E85]">
            Book a ride in minutes and reach your destination safely with
            professional drivers.
          </p>
          <BookingCard />
        </div>
        <HeroIllustration />
      </div>
    </section>
  );
}
