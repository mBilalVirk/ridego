import testimonials from "../../data/testimonials";
import { Star } from "lucide-react";
export default function Testimonials() {
  return (
    <section>
      <div className="mx-auto max-w-[1180px] px-6 max-[720px]:px-[18px]">
        <h2 className="mb-7 text-[26px] font-extrabold">What Our Users Say</h2>
        <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-1">
          {testimonials.map(([quote, image, name, location]) => (
            <article
              key={name}
              className="rounded-[18px] border border-[rgba(27,24,48,.08)] bg-white p-6 shadow-[0_20px_45px_-22px_rgba(76,49,163,.25)]"
            >
              <div
                className="mb-2.5 flex gap-0.5 text-[#F5B400]"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    size={14}
                    fill="currentColor"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mb-[18px] text-[13.5px] opacity-85">{quote}</p>
              <div className="flex items-center gap-2.5">
                <img
                  src={image}
                  alt={name}
                  className="h-[38px] w-[38px] rounded-full object-cover"
                  loading="lazy"
                />
                <span>
                  <b className="block text-[13px]">{name}</b>
                  <span className="text-[11.5px] text-[#726E85]">
                    {location}
                  </span>
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-1.5">
          <span className="h-1.5 w-[18px] rounded bg-[#7C4DFF]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[rgba(27,24,48,.08)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[rgba(27,24,48,.08)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[rgba(27,24,48,.08)]" />
        </div>
      </div>
    </section>
  );
}
