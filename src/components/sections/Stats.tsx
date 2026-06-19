import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "8+", label: "Years of experience" },
  { value: "10+", label: "Pest services offered" },
  { value: "6+", label: "Manitoba cities served" },
  { value: "100%", label: "Satisfaction guarantee" },
];

export default function Stats() {
  return (
    <section className="bg-white">
      <Container className="pb-4">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-100 bg-slate-100 shadow-card lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 80}
              className="bg-white px-6 py-8 text-center"
            >
              <div className="text-4xl font-extrabold text-fort-green-600">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-600">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
