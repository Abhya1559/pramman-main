import { FaPlus } from "react-icons/fa";

export default function OrganizationsTable() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen rounded-lg">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-4 ">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Organizations</h2>
          <button className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600">
            <FaPlus className="h-5 w-5" />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-600 font-medium">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-600 font-medium">
                  Type
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-600 font-medium">
                  Mobile
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-600 font-medium">
                  Email
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-600 font-medium">
                  Website
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-600 font-medium">
                  Controls
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center py-4 text-gray-500" colSpan="6">
                  Showing 1 - 0 of 0
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-600">Showing 1 - 0 of 0</span>
          <div className="flex items-center gap-2">
            <button className="text-gray-500 p-2 hover:text-gray-700 disabled:opacity-50">
              &laquo;
            </button>
            <button className="text-gray-500 p-2 hover:text-gray-700 disabled:opacity-50">
              &lsaquo;
            </button>
            <button className="text-gray-500 p-2 hover:text-gray-700 disabled:opacity-50">
              &rsaquo;
            </button>
            <button className="text-gray-500 p-2 hover:text-gray-700 disabled:opacity-50">
              &raquo;
            </button>
            <select
              className="border border-gray-300 text-gray-600 rounded-lg px-3 py-2"
              defaultValue={10}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
