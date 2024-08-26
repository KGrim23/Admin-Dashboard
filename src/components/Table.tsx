const Table = ({
  columns,
}: {
  columns: { header: string; accessor: string; className?: string }[];
}) => {
  return (
    <table className="w-full mt-4 flex-row flex">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.accessor}>{col.header}</th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default Table;
