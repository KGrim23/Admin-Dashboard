"use client";

const Announcements = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-gray-400 text-xs">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Pentamine Trip</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              12-12-2024
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            30.01.2024 Dear Parent/Carer In December we have booked for the
            children in Years 1 to Year 6 to watch Dick Whittington at the LBT
            in Huddersfield. Years 1,2 and 3 will go on the 4th of December and
            Years 4,5 and 6 will go on the 5th of December. We will leave school
            promptly at 12.45pm and return by approx.4.30pm. The cost of the
            trip will be £20 which includes ice cream and transport. Please
            reply via the Ping form by Friday the 7th of February to the office
            and pay via Parent Pay in 3 instalments. We reserve the right to
            cancel the trip should insufficient contributions be received to
            cover the cost. Your child will not need to bring any spending
            money. The children will be required to wear full school uniform on
            the day. Kind Regards Mrs Sanders
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Year 6 PE Days</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              Wednesday and Friday
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              01-01-2024
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
