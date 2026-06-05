function DashboardCard({
    title,
    value,
    icon,
  }) {
    return (
      <div className="bg-[#111] border border-[#222] rounded-3xl p-6 hover:border-violet-500 transition-all duration-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#888] text-sm">
              {title}
            </p>
  
            <h3 className="text-4xl font-bold mt-2 text-white">
              {value}
            </h3>
          </div>
  
          <div className="text-violet-400">
            {icon}
          </div>
        </div>
      </div>
    );
  }
  
  export default DashboardCard;