import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Features() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Built with Next.js 16 for maximum performance.",
    },
    {
      title: "AI Integrations",
      description: "Chatbots, automations and smart business tools.",
    },
    {
      title: "Premium Design",
      description: "Modern UI that helps convert visitors into customers.",
    },
  ];

  return (
    <AnimatedSection>
      <section className="bg-[#050505] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center text-4xl font-bold text-white">
            Why choose NovaFlow AI?
          </h2>

          <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
            We combine modern design, AI and performance to build websites that
            actually grow businesses.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-800 bg-[#0c0c0c] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
              >
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
