import {
  ArrowRight,
  Check,
  ChevronDown,
  Crosshair,
  MapPin,
  Plus,
  UserRound,
} from "lucide-react";

export default function BookingCard() {
  const submit = (event) => event.preventDefault();
  return (
    <form
      onSubmit={submit}
      className="rounded-[22px] border border-[rgba(27,24,48,.08)] bg-white p-[22px] shadow-[0_20px_45px_-22px_rgba(76,49,163,.25)]"
    >
      {/* Pickup Location Row */}
      <div className="flex items-center gap-3.5 border-b border-[rgba(27,24,48,.08)] px-1.5 py-3">
        <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-[#7C4DFF]" />
        <label className="flex-1">
          <span className="block text-[11.5px] text-[#726E85]">
            Pickup Location
          </span>
          <input
            className="w-full bg-transparent text-[14.5px] font-medium outline-none"
            placeholder="Enter pickup location"
          />
        </label>
        {/* Increased size to 22 */}
        <Crosshair
          size={22}
          className="shrink-0 text-[#6934E0]"
          aria-hidden="true"
        />
      </div>

      {/* Drop-off Location Row */}
      <div className="flex items-center gap-3.5 px-1.5 py-3">
        {/* Increased size to 22 */}
        <MapPin
          size={22}
          className="shrink-0 text-[#F2894A]"
          aria-hidden="true"
        />
        <label className="flex-1">
          <span className="block text-[11.5px] text-[#726E85]">
            Drop-off Location
          </span>
          <input
            className="w-full bg-transparent text-[14.5px] font-medium outline-none"
            placeholder="Where to?"
          />
        </label>
        {/* Increased size to 20 */}
        <Plus
          size={20}
          className="shrink-0 text-[#726E85]"
          aria-hidden="true"
        />
      </div>

      {/* Time & Passenger Selector Grid */}
      <div className="my-3.5 grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex items-center justify-between rounded-xl border border-[rgba(27,24,48,.08)] bg-[#FBFAFD] px-3.5 py-2.5 text-[13.5px] font-medium"
        >
          {/* Increased Check to 18, Chevron to 16 */}
          <span className="flex items-center gap-2 text-[#2A1070]">
            <Check size={18} className="text-[#6934E0]" aria-hidden="true" />{" "}
            Now
          </span>
          <ChevronDown
            size={16}
            className="text-[#726E85]"
            aria-hidden="true"
          />
        </button>
        <button
          type="button"
          className="flex items-center justify-between rounded-xl border border-[rgba(27,24,48,.08)] bg-[#FBFAFD] px-3.5 py-2.5 text-[13.5px] font-medium"
        >
          {/* Increased UserRound to 18, Chevron to 16 */}
          <span className="flex items-center gap-2 text-[#2A1070]">
            <UserRound
              size={18}
              className="text-[#6934E0]"
              aria-hidden="true"
            />{" "}
            1 Passenger
          </span>
          <ChevronDown
            size={16}
            className="text-[#726E85]"
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Submit 3D Button */}
      <button
        type="button"
        className="relative flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#9B6BFF] via-[#6934E0] to-[#3F1A9E] border-b-[3.5px] border-[#2A1070] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_16px_-2px_rgba(63,26,158,0.45)] transition-all duration-150 ease-out hover:brightness-110 hover:-translate-y-[1px] hover:shadow-[0_10px_20px_-2px_rgba(63,26,158,0.5)] active:translate-y-[2px] active:border-b-0 active:mt-[3.5px] active:shadow-[0_2px_4px_rgba(63,26,158,0.3)]"
      >
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/45 to-transparent" />

        {/* Increased ArrowRight to 20 */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          Find a Ride <ArrowRight size={20} aria-hidden="true" />
        </span>
      </button>
    </form>
  );
}
