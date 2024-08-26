"use client";

import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";

const columns = [
  {
    Header: "info",
    accessor: "info",
  },
  {
    Header: "TeacherID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    Header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    Header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    Header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    Header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    Header: "Actions",
    accessor: "action",
  },
];

const TeachersList = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center text-xs rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="more dark" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-xs rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="more dark" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-xs rounded-full bg-lamaYellow">
              <Image src="/plus.png" alt="more dark" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="flex flex-col">
        <Table columns={columns} />
      </div>

      {/* Pagination - page numbers */}
      <Pagination />
    </div>
  );
};

export default TeachersList;
