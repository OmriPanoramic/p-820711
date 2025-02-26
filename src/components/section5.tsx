import dashboardPro from "@/assets/dashboard-pro.png";
import customDevice from "@/assets/custom-device.png";
import timeViewPro from "@/assets/time-view-pro.png";
import alerts from "@/assets/alerts.png";

export function Section5() {
  return (
    <div className="mb-24 flex flex-col gap-4">
      <h2 className="mb-16 text-center text-h2">
        The <span className="text-primary">Optimize</span> experience
      </h2>
      <div className="flex flex-col gap-8 lg:gap-40">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-1 flex-col gap-2 py-10">
            <span className="text-sm text-primary">The new dashboards</span>
            <h3 className="text-h3">
              Smarter decisions with customizable widgets
            </h3>
          </div>
          <div className="flex flex-1">
            <img src={dashboardPro} alt="dashboard-pro" className="w-full" />
          </div>
        </div>

        <div className="flex flex-col gap-10 md:flex-row-reverse">
          <div className="flex flex-1 flex-col gap-2 py-10">
            <span className="text-sm text-primary">The new Timeview</span>
            <h3 className="text-h3">
              Multiple Views, Smarter Insights, and Deep Data
              Exploration
            </h3>
          </div>
          <div className="flex flex-1">
            <img src={timeViewPro} alt="time-view-pro" className="w-full" />
          </div>
        </div>

        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-1 flex-col gap-2 py-10">
            <span className="text-sm text-primary">Advanced Incident management</span>
            <h3 className="text-h3">
            Incident management for better teamwork
            </h3>
          </div>
          <div className="flex flex-1">
            <img src={alerts} alt="alerts" className="w-full" />
          </div>
        </div>

        <div className="flex flex-col gap-10 md:flex-row-reverse">
          <div className="flex flex-1 flex-col gap-2 py-10">
            <span className="text-sm text-primary">
              Customizable categories and device types
            </span>
            <h3 className="text-h3">
              Endless ways to monitor and manage your energy setup
            </h3>
          </div>
          <div className="flex flex-1">
            <img src={customDevice} alt="custom-device" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
