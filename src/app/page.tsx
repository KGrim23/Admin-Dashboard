import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import Navbar from "@/components/Navbar";
import UserCard from "@/components/UserCard";

const HomePage = () => {
  <div className="p-4 flex flex-col gap-4 md:flex-row">
    {/* LEFT */}
    <div className="w-full lg:w-2/3 flex flex-col gap-8">
      {/* USER CARDS */}
      <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type="Staff" />
        <UserCard type="Teacher" />
        <UserCard type="Student" />
        <UserCard type="Parent" />
      </div>
      {/* MIDDLE CHART */}
      <div className="flex gap-4 flex-col lg:flex-row">
        {/* COUNT CHART */}
        <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart />
        </div>
        {/* ATTENDANCE CHART */}
        <div className="w-full lg:w-2/2 h-[450px]">
          <AttendanceChart />
        </div>
      </div>
      {/* BOTTOM CHART */}
      <div className="w-full h-[500px]">
        <FinanceChart />
      </div>
    </div>

    {/* RIGHT */}
    <div className="w-full lg:w-1/3 flex flex-col gap-8">
      <EventCalendar />
      <Announcements />
    </div>
  </div>;
};

export default HomePage;
