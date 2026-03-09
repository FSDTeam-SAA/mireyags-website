export default function ExpertTeamSection() {
  const stats = [
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "50+",
      label: "Team Members",
    },
    {
      value: "10,000+",
      label: "Satisfied Researchers",
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Expert Team
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 md:text-base">
            Our team consists of PhD-level biochemists, quality assurance
            specialists, and customer support professionals dedicated to your
            research success.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]">

           <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center px-6 py-7 text-center border-none"
              >
                <h3 className="text-3xl font-bold text-[#1f3d73] md:text-4xl">
                  {item.value}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}