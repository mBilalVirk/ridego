import stats from "../../data/stats";
import RevealSection from "../RevealSection";
import { Building2, CarFront, Star, Users } from "lucide-react";
const icons = { users: Users, car: CarFront, building: Building2, star: Star };
export default function Stats() {
  return (
    <RevealSection>
      <div className="mx-auto max-w-[1180px] px-6 max-[720px]:px-[18px]">
        <div className="grid grid-cols-4 gap-5 rounded-[22px] bg-gradient-to-br from-[#7C4DFF] to-[#5324B8] p-[30px_34px] text-white max-[800px]:grid-cols-2">
          {stats.map(([icon, value, label]) => {
            const Icon = icons[icon];
            return (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Icon
                    size={18}
                    aria-hidden="true"
                    fill={icon === "star" ? "currentColor" : "none"}
                  />
                </span>
                <span>
                  <b className="block text-xl font-extrabold">{value}</b>
                  <span className="text-xs opacity-85">{label}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
