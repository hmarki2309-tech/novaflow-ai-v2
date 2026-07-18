import {
  Rocket,
  Briefcase,
  Bot,
  ShoppingCart,
  Palette,
  Zap,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Landing Pages",
      description:
        "High-converting landing pages built for startups and businesses.",
      icon: Rocket,
    },
    {
      title: "Business Websites",
      description:
        "Modern company websites with premium UI and responsive design.",
      icon: Briefcase,
    },
    {
      title: "AI Integrations",
      description:
        "Chatbots, automations and AI solutions for your business.",
      icon: Bot,
    },
    {
      title: "E-commerce",
      description:
        "Fast online stores with payment integrations and SEO optimization.",
      icon: ShoppingCart,
    },
    {
      title: "UI / UX Design",
      description:
        "Clean and modern interfaces focused on user experience.",
      icon: Palette,
    },
    {
      title: "Website Optimization",
      description:
        "Speed improvements, SEO and performance optimization.",
      icon: Zap,
    },
  ];

  return (
    <section
  id="services"
  className="bg-[#050505] py-24"
>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold text-white">
          Our Services
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-gray-400">
          Everything you need to launch and grow your business online.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-800 bg-[#111] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-600/10 p-4">
                  <Icon
                    size={30}
                    className="text-blue-400"
                  />
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="leading-7 text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
