import Image from "next/image";
import { ShieldCheck, Lightbulb, ShoppingCart } from "lucide-react";

type ValueItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
};

const values: ValueItem[] = [
  {
    id: 1,
    title: "Customer Support",
    description:
      "Our knowledgeable team is always ready to assist with product selection and technical questions.",
    image: "/assets/images/cat_1.jpg",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Innovation",
    description:
      "We continuously invest in research and development to bring cutting-edge peptides to the market.",
    image: "/assets/images/cat_2.jpg",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "Responsibility",
    description:
      "We ensure all products are used ethically and responsibly for legitimate research purposes only.",
    image: "/assets/images/cat_3.jpg",
    icon: ShoppingCart,
  },
];

export default function OurCoreValuesSection() {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-2 text-sm text-slate-500 md:text-base">
            The principles that guide everything we do
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group overflow-hidden rounded-xl border border-[#8ed1ea] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Image */}
                <div className="p-3 pb-0">
                  <div className="relative h-[180px] overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col items-center px-6 pb-7 pt-5 text-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100">
                    <Icon className="h-5 w-5 text-slate-700" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}