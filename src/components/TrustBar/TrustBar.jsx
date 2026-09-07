import items from "../../data/trustItems";
import RevealSection from "../RevealSection";
import {
  Check,
  Clock3,
  Headphones,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const icons = {
  shield: ShieldCheck,
  clock: Clock3,
  user: UserRound,
  check: Check,
  headphones: Headphones,
};

export default function TrustBar() {
  return (
    <RevealSection>
      <div className="mx-auto max-w-[1180px] px-6 max-[720px]:px-[18px]">
        <div className="grid grid-cols-5 gap-4 rounded-[20px] border border-[rgba(27,24,48,.08)] bg-white p-[26px_20px] shadow-[0_20px_45px_-22px_rgba(76,49,163,.25)] max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
          {items.map(([icon, title, detail]) => {
            const Icon = icons[icon];
            return (
              <div key={title} className="flex items-center gap-3.5">
                {/* White Background Badge with Drop Shadow */}
                <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-2xl bg-white text-[#7C4DFF] shadow-[0_8px_20px_-4px_rgba(124,77,255,0.2)] border border-slate-100/80">
                  {/* Increased Icon Size */}
                  <Icon size={24} aria-hidden="true" />
                </span>
                <span>
                  <b className="block text-[13.5px] font-bold text-slate-900">
                    {title}
                  </b>
                  <span className="text-xs text-[#726E85]">{detail}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
