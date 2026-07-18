export default function Testimonials() {
  const reviews = [
    {
      name: "Michael Johnson",
      company: "Startup Founder",
      text: "NovaFlow AI delivered an incredible website that increased our conversions by over 40%.",
    },
    {
      name: "Emily Davis",
      company: "Marketing Agency",
      text: "Fast communication, beautiful design and everything worked perfectly.",
    },
    {
      name: "David Wilson",
      company: "E-commerce Owner",
      text: "Exactly what we needed. Modern, clean and optimized for performance.",
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-4xl font-bold text-white">
          What clients say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-gray-800 bg-[#111] p-8"
            >
              <p className="mb-6 text-gray-400">"{review.text}"</p>

              <h3 className="font-semibold text-white">
                {review.name}
              </h3>

              <p className="text-sm text-blue-400">
                {review.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
