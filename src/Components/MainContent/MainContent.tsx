import MonthlyReportCard from "../MonthlyReportCard/MonthlyReportCard";
import ReddyScoreCard from "../ReddyScoreCard/ReddyScoreCard";

const MainContent = () => {
  const monthlyCardItems = [
    {
      id: 1,
      title: "Handle Time",
      subTitle: "00:24:26",
      bottonTextPrefix: "12.2%",
      bottonText: "Decreased from last month",
    },
    {
      id: 2,
      title: "Quality Issue",
      subTitle: "725",
      bottonTextPrefix: "17.2%",
      bottonText: "Decreased from last month",
    },
    {
      id: 3,
      title: "Conversion Rate",
      subTitle: "25.9%",
      bottonTextPrefix: "12.2%",
      bottonText: "Increase from last month",
    },
  ];

  const reddyCardItems = [
    {
      id: 1,
      daysTitle: "Onboarding time reduced",
      daysCount: "50",
      days: "days",
      RoiTitle: "Estimated ROI",
      RoiAmount: "$253,515",
    },
    {
      id: 2,
      daysTitle: "Increase sales/CSAT",
      daysCount: "50",
      days: "days",
      RoiTitle: "Estimated ROI",
      RoiAmount: "$253,515",
    },
    {
      id: 3,
      daysTitle: "QA/compliance resolutions",
      daysCount: "50",
      days: "days",
      RoiTitle: "Estimated ROI",
      RoiAmount: "$253,515",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
        {monthlyCardItems.map((item) => (
          <MonthlyReportCard
            key={item.id}
            title={item.title}
            subTitle={item.subTitle}
            bottonTextPrefix={item.bottonTextPrefix}
            bottonText={item.bottonText}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
        <div className="lg:col-span-2 border p-5 rounded-2xl">
          <div className="flex flex-wrap items-center justify-between">
            <h3 className="text-[22px] lg:text-[36px] font-bold">Revenue</h3>
            <div className="flex items-center rounded-full p-1 bg-slate-100">
              <a
                href="javascript:"
                aria-current="page"
                className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-100 rounded-full hover:bg-custom-purple-400 hover:text-white focus:z-10 focus:bg-custom-purple-400 focus:text-white"
              >
                Monthly
              </a>
              <a
                href="javascript:"
                className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-100 rounded-full hover:bg-custom-purple-400 hover:text-white focus:z-10 focus:bg-custom-purple-400 focus:text-white"
              >
                Weekly
              </a>
              <a
                href="javascript:"
                className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-100 rounded-full hover:bg-custom-purple-400 hover:text-white focus:z-10 focus:bg-custom-purple-400 focus:text-white"
              >
                Today
              </a>
            </div>
          </div>
          <div className="imgBox mt-10">
            <img
              src="/revenue-chart.png"
              alt="chart"
              className="w-full pr-14"
            />
          </div>
        </div>
        <div className="border p-5 rounded-2xl">
          <h3 className="text-[22px] lg:text-[36px] font-bold">Reddy Score</h3>
          <p className="text-gray-400 font-semibold text-[13px]">Your...</p>
          <div className="px-5 py-3 bg-gray-50 rounded-2xl mt-4 divide-y">
            {reddyCardItems.map((item) => (
              <ReddyScoreCard
                key={item.id}
                daysTitle={item.daysTitle}
                daysCount={item.daysCount}
                days={item.days}
                RoiTitle={item.RoiTitle}
                RoiAmount={item.RoiAmount}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
