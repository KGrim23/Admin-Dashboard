"use client";

import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, parentsData, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Parent = {
  id: number;
  parentId: string;
  students: string[];
  name: string;
  email?: string;
  phone?: string;
  address?: string;
};

// HEADINGS
const columns = [
  {
    header: "Parent Name",
    accessor: "info",
  },
  {
    header: "Children",
    accessor: "studentData",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ParentListPage = () => {
  const renderRow = (item: Parent) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-gray-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="items-center gap-4 flex p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.students}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="view" width={16} height={16} />
            </button>
          </Link>
          {/* If role is admin  */}
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
              <Image src="/delete.png" alt="delete" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP HEADINGS */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
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
        <Table columns={columns} renderRow={renderRow} data={parentsData} />
      </div>

      {/* Pagination - page numbers */}
      <Pagination />
    </div>
  );
};

export default ParentListPage;
