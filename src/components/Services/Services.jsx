import services from "../../data/services";
import RevealSection from "../RevealSection";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <RevealSection>
      <div
        id="services"
        className="mx-auto max-w-[1180px] px-6 max-[720px]:px-[18px]"
      >
        <h2 className="mb-7 text-[26px] font-extrabold">Our Services</h2>
        <div className="grid grid-cols-5 gap-4 max-[960px]:grid-cols-3 max-[600px]:grid-cols-2">
          {services.map(([title, description, image, active]) => (
            <article
              key={title}
              className={`flex flex-col justify-between rounded-[18px] border bg-white p-[18px] shadow-[0_20px_45px_-22px_rgba(76,49,163,.25)] transition-transform hover:-translate-y-1.5 ${
                active
                  ? "border-2 border-[#7C4DFF]"
                  : "border-[rgba(27,24,48,.08)]"
              }`}
            >
              <div>
                <div className="mb-3.5 flex h-[88px] items-center justify-center overflow-hidden rounded-xl bg-[#F3F1FA]">
                  <img
                    src={image}
                    alt={`${title} service`}
                    className="h-full w-full object-contain p-2"
                    loading="lazy"
                  />
                </div>
                <h3 className="mb-2 text-[15px] font-bold">{title}</h3>
              </div>

              {/* Side-by-Side Description & Arrow Action Button */}
              <div className="mt-2 flex items-center justify-between gap-2.5">
                <p className="min-h-[32px] text-[12.5px] leading-tight text-[#726E85]">
                  {description}
                </p>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    active
                      ? "bg-[#7C4DFF] text-white"
                      : "bg-[#F1EBFF] text-[#7C4DFF]"
                  }`}
                >
                  <ArrowRight size={15} aria-hidden="true" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
