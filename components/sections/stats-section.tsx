import { cn } from "@/lib/utils";
import { STATS_DATA } from "@/lib/constants";

export default function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 bg-navy2">
      {STATS_DATA.map((s, i) => (
        <div
          key={s.label}
          className={cn(
            "reveal text-center py-14 px-5 border-white/5",
            i < STATS_DATA.length - 1 ? "md:border-r" : "",
            "border-b"
          )}
        >
          <div
            className={cn(
              "font-bebas text-[clamp(2rem,4vw,3.5rem)] leading-none mb-2 tracking-wider",
              s.red ? "text-red" : "text-sage"
            )}
            data-target={s.target}
            data-prefix={s.prefix}
            data-suffix={s.suffix}
          >
            {s.prefix}0{s.suffix}
          </div>
          <div className="text-[0.72rem] tracking-[0.18em] uppercase text-mid font-medium leading-relaxed max-w-[180px] mx-auto">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
