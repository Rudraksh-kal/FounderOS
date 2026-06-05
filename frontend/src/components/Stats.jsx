function Stats() {
  const stats = [
    {
      number: "24/7",
      label: "AI Availability",
    },
    {
      number: "10+",
      label: "Startup Tools",
    },
    {
      number: "100%",
      label: "Cloud Based",
    },
    {
      number: "1",
      label: "Unified Workspace",
    },
  ];

  return (
    <section className="bg-black text-white px-6 sm:px-10 lg:px-20 py-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-8 text-center hover:border-violet-500 hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-4xl font-bold text-violet-500">
              {item.number}
            </h2>

            <p className="text-[#b3b3b3] mt-3">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;