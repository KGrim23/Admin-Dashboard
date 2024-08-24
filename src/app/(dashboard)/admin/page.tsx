import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Staff" />
          <UserCard type="Teacher" />
          <UserCard type="Student" />
          <UserCard type="Parent" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3"></div>
    </div>
  );
};

export default AdminPage;
