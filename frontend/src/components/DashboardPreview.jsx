import {
  BarChart3,
  Activity,
  CheckCircle2,
  Brain,
} from "lucide-react";

function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="bg-black text-white px-6 sm:px-10 lg:px-20 py-24"
    >
      <div className="mb-14 text-center flex flex-col items-center">
        <p className="text-violet-500 font-medium mb-4">
          STARTUP WORKSPACE
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold">
          Everything you need to build and scale.
        </h2>

        <p className="text-[#b3b3b3] mt-6 max-w-2xl leading-7 mx-auto">
          Generate startup ideas, validate markets, create investor pitches,
          and build growth strategies from one AI-powered workspace.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Card */}
        <div className="xl:col-span-2 bg-[#111] border border-[#222] rounded-3xl p-8 hover:border-violet-500 transition-all duration-300">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[#888] text-sm">
                Startup Growth Journey
              </p>

              <h3 className="text-3xl font-bold mt-2">
                From Idea to Scale
              </h3>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-violet-600/20 text-violet-400 flex items-center justify-center">
              <BarChart3 size={28} />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-end gap-4 h-[220px]">
              <div className="flex-1 flex flex-col items-center justify-end h-full">
                <div className="w-full bg-violet-600 rounded-t-2xl h-[20%]"></div>

                <p className="text-[11px] text-[#888] mt-3 text-center">
                  Idea
                </p>
              </div>

              <div className="flex-1 flex flex-col items-center justify-end h-full">
                <div className="w-full bg-violet-600 rounded-t-2xl h-[35%]"></div>

                <p className="text-[11px] text-[#888] mt-3 text-center">
                  Research
                </p>
              </div>

              <div className="flex-1 flex flex-col items-center justify-end h-full">
                <div className="w-full bg-violet-600 rounded-t-2xl h-[50%]"></div>

                <p className="text-[11px] text-[#888] mt-3 text-center">
                  MVP
                </p>
              </div>

    

              <div className="flex-1 flex flex-col items-center justify-end h-full">
                <div className="w-full bg-violet-600 rounded-t-2xl h-[75%]"></div>

                <p className="text-[11px] text-[#888] mt-3 text-center">
                  Launch
                </p>
              </div>

              <div className="flex-1 flex flex-col items-center justify-end h-full">
                <div className="w-full bg-violet-600 rounded-t-2xl h-[100%]"></div>

                <p className="text-[11px] text-[#888] mt-3 text-center">
                  Scale
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Side Cards */}
        <div className="space-y-8">
          <div className="bg-[#111] border border-[#222] rounded-3xl p-6 hover:border-violet-500 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#888] text-sm">
                  Investor Pitch
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  Ready
                </h3>
              </div>

              <Activity
                className="text-violet-400"
                size={32}
              />
            </div>
          </div>

          <div className="bg-[#111] border border-[#222] rounded-3xl p-6 hover:border-green-500 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#888] text-sm">
                  Market Analysis
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  Generated
                </h3>
              </div>

              <CheckCircle2
                className="text-green-400"
                size={32}
              />
            </div>
          </div>

          <div className="bg-[#111] border border-[#222] rounded-3xl p-6 hover:border-violet-500 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#888] text-sm">
                  Growth Strategy
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  Available
                </h3>
              </div>

              <Brain
                className="text-violet-400"
                size={32}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;