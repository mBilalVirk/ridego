import steps from "../../data/steps";
import RevealSection from "../RevealSection";
import {
  BriefcaseBusiness,
  CarFront,
  ClipboardCheck,
  CreditCard,
  MapPin,
  ChevronRight,
} from "lucide-react";

const icons = {
  pin: MapPin,
  car: CarFront,
  clipboard: ClipboardCheck,
  briefcase: BriefcaseBusiness,
  card: CreditCard,
};

export default function HowItWorks() {
  return (
    <RevealSection>
      <div className="mx-auto max-w-[1180px] px-6 max-[720px]:px-[18px]">
        <h2 className="mb-8 text-[26px] font-extrabold text-slate-900">
          How It Works
        </h2>

        <div className="relative grid grid-cols-5 gap-3 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
          {steps.map(([icon, title, detail], index) => {
            const Icon = icons[icon];
            const isLast = index === steps.length - 1;

            return (
              <article key={title} className="relative z-10 text-center">
                {/* Connector Line & Arrow to Next Step (Desktop Only) */}
                {!isLast && (
                  <div
                    className="pointer-events-none absolute left-[calc(50%+32px)] right-[calc(-50%+32px)] top-[32px] -translate-y-1/2 items-center justify-center hidden min-[901px]:flex"
                    aria-hidden="true"
                  >
                    {/* Dashed Line */}
                    <div className="h-[2px] w-full border-t-2 border-dashed border-[#7C4DFF]/35" />
                    {/* Centered Arrow Badge */}
                    <div className="absolute flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F1EBFF] text-[#7C4DFF] shadow-xs">
                      <ChevronRight size={12} strokeWidth={2.5} />
                    </div>
                  </div>
                )}

                {/* Rounded-2xl White Box Icon Container */}
                <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-white text-[#7C4DFF] shadow-[0_12px_30px_-6px_rgba(124,77,255,0.22)]">
                  <Icon size={24} aria-hidden="true" />

                  {/* Step Badge Indicator */}
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#7C4DFF] text-[10.5px] font-bold text-white shadow-sm">
                    {index + 1}
                  </span>
                </div>

                <h3 className="mb-1.5 text-[15px] font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mx-auto max-w-[150px] text-xs leading-relaxed text-[#726E85]">
                  {detail}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
