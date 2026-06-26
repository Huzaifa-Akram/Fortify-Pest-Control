import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { 
    num: "8", 
    suffix: "+", 
    label: "Years of Experience", 
    desc: "Trusted by families and businesses since 2018." 
  },
  { 
    num: "10", 
    suffix: "+", 
    label: "Pest Services", 
    desc: "Comprehensive solutions for any type of infestation." 
  },
  { 
    num: "6", 
    suffix: "+", 
    label: "Cities Served", 
    desc: "Local experts covering the Southern Manitoba region." 
  },
  { 
    num: "100", 
    suffix: "%", 
    label: "Satisfaction", 
    desc: "We don't stop until the pests are completely gone." 
  },
];

export default function Stats() {
  return (
    <section className="relative z-10 bg-white pb-12 pt-44 sm:pb-16 sm:pt-52 lg:pb-24 lg:pt-8">
      <Container>
        {/* 2 per row, kept on the left so the overlapping hero form sits to the right */}
        <div className="grid max-w-md grid-cols-2 gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-12 sm:gap-y-12 lg:max-w-[600px] lg:gap-x-16 lg:gap-y-14">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              className="group flex flex-col"
            >
              {/* Accent line: permanently visible on mobile, expands on hover on desktop */}
              <div className="mb-4 h-[3px] w-6 rounded-full bg-fort-green/40 transition-all duration-500 ease-out group-hover:w-16 group-hover:bg-fort-green sm:mb-6 sm:w-8 sm:group-hover:w-20" />
              
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl md:text-6xl">
                  {s.num}
                </span>
                <span className="text-2xl font-bold text-fort-green sm:text-3xl md:text-4xl">
                  {s.suffix}
                </span>
              </div>
              
              <h3 className="mt-3 text-sm font-bold leading-tight text-slate-900 sm:mt-4 sm:text-lg">
                {s.label}
              </h3>
              
              <p className="mt-1.5 max-w-[260px] text-xs leading-relaxed text-slate-500 sm:mt-2 sm:text-sm">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
