import { cn } from "@/lib/utils";

type ProcessStep = {
  id: number;
  title: string;
  description: string;
};

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Synthesis",
    description:
      "Peptides are synthesized using state-of-the-art equipment and proven methodologies",
  },
  {
    id: 2,
    title: "Purification",
    description:
      "Advanced purification processes ensure 98%+ purity for all products",
  },
  {
    id: 3,
    title: "Testing",
    description:
      "Third-party laboratory testing verifies purity, identity, and quality",
  },
  {
    id: 4,
    title: "Certification",
    description:
      "All products ship with detailed certificates of analysis",
  },
];

export default function OurQualityProcessSection() {
  return (
    <section className="w-full py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Our Quality Process
          </h2>
          <p className="mt-2 text-sm text-slate-500 md:text-base">
            How we ensure excellence in every product
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative text-center">
              {index !== processSteps.length - 1 && (
                <div className="absolute left-[58%] top-5 hidden h-px w-[84%] -translate-y-1/2 bg-slate-300 lg:block" />
              )}

              <div
                className={cn(
                  "mx-auto flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white shadow-sm",
                  step.id === 4 ? "bg-[#1f3d73]" : "bg-[#3b82f6]"
                )}
              >
                {step.id}
              </div>

              <h3 className="mt-4 text-2xl font-semibold text-[#1f3d73]">
                {step.title}
              </h3>

              <p className="mx-auto mt-2 max-w-[240px] text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}