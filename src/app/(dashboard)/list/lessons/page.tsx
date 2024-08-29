"use client";

import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, parentsData, lessonsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

// HEADINGS
const columns = [
  {
    header: "Lesson Name",
    accessor: "lesson",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const LessonPage = () => {
  const renderRow = (item: Lesson) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-gray-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="items-center gap-4 flex p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.subject}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="view" width={16} height={16} />
            </button>
          </Link>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            <Image src="/delete.png" alt="delete" width={16} height={16} />
          </button>
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP HEADINGS */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
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
        <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      </div>

      {/* Pagination - page numbers */}
      <Pagination />
    </div>
  );
};

export default LessonPage;