import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const stats = [
  {
    wordmark: true,
    label: "Years of Experience",
    desc: "Trusted by families and businesses across Manitoba."
  },
  {
    num: "10",
    suffix: "+", 
    label: "Pest Services", 
    desc: "Comprehensive solutions for any type of infestation." 
  },
  {
    num: "3",
    suffix: "Month",
    label: "Quality Guarantee",
    desc: "We stand behind every treatment with a 3-month guarantee of lasting results."
  },
  {
    num: "100",
    suffix: "%",
    label: "Satisfaction Guaranteed",
    desc: "Fully licensed & insured — we don't stop until the pests are completely gone."
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
              
              {/* Fixed-height zone so every card's big anchor word/number
                  bottoms out at the same line, whether it's one line or two. */}
              <div className="flex min-h-17.5 flex-col justify-end sm:min-h-22 md:min-h-27">
                {s.wordmark ? (
                  <>
                    <span className="text-2xl font-bold leading-none tracking-tight text-fort-green sm:text-3xl md:text-4xl">
                      Over a
                    </span>
                    <span className="text-4xl font-black leading-none tracking-tighter text-slate-900 sm:text-5xl md:text-6xl">
                      Decade
                    </span>
                  </>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl md:text-6xl">
                      {s.num}
                    </span>
                    <span className="text-2xl font-bold text-fort-green sm:text-3xl md:text-4xl">
                      {s.suffix}
                    </span>
                  </div>
                )}
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
