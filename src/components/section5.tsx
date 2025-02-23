import dashboardPro from "@/assets/dashboard-pro.png";
import customDevice from "@/assets/custom-device.png";
import timeViewPro from "@/assets/time-view-pro.png";
import alerts from "@/assets/alerts.png";

export function Section5() {
  return (
    <div className="flex flex-col gap-4 mb-24">
      <h2 className="mb-16 text-center text-h2">
        The <span className="text-primary">Optimize</span> experience
      </h2>
      <div className="flex flex-col gap-8 lg:gap-20">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-1 flex-col gap-2 py-10">
            <span className="text-sm text-primary">Dashboard Pro</span>
            <h3 className="text-h3">
              Smarter decisions with customizable widgets
            </h3>
          </div>
          <div className="flex flex-1">
            <img src={dashboardPro} alt="dashboard-pro" className="w-full" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-10">
          <div className="flex flex-1 flex-col gap-2 py-10">
            <span className="text-sm text-primary">
              Custom device types and categories
            </span>
            <h3 className="text-h3">
              Endless ways to monitor and manage your energy setup
            </h3>
          </div>
          <div className="flex flex-1">
            <img src={customDevice} alt="custom-device" className="w-full" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-1 flex-col gap-2 py-10">
            <span className="text-sm text-primary">Advanced alerting</span>
            <h3 className="text-h3">
              Collaborate alerts and insights for better teamwork
            </h3>
          </div>
          <div className="flex flex-1">
            <img src={alerts} alt="alerts" className="w-full" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-10">
          <div className="flex flex-1 flex-col gap-2 py-10">
            <span className="text-sm text-primary">Time-view Pro</span>
            <h3 className="text-h3">
              This title will change to something related
            </h3>
          </div>
          <div className="flex flex-1">
            <img src={timeViewPro} alt="time-view-pro" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
