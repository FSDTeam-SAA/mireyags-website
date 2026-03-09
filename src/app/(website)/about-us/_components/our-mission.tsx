import Image from "next/image";

export default function OurMissionSection() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="relative overflow-hidden rounded-xl">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/assets/images/our_mission.jpg"
                alt="Laboratory glassware with blue liquid"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-[520px]">
            <h2 className="text-3xl font-bold text-slate-900 md:text-[44px]">
              Our Mission
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-700">
              Research Peptides is dedicated to providing the highest quality
              research peptides to the scientific community. Our products
              undergo rigorous testing and quality control to ensure you receive
              only the best materials for your research.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-700">
              With years of experience in peptide synthesis and a commitment to
              customer satisfaction, we&apos;re your trusted partner in
              scientific discovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}