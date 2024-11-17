import { FaPlus } from "react-icons/fa";

export default function EventsPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center px-4 py-6">
      {/* Header Section */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-8">
        <div className="flex items-center bg-white shadow rounded-lg overflow-hidden">
          {/* <div className="p-3">
            <FaSearch className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search for..."
            className="p-3 w-full text-sm text-gray-600 focus:outline-none"
          /> */}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full flex-1">
        <div className="mb-6">
          <img
            src="https://thumbs.dreamstime.com/b/girl-shows-sign-inscription-oops-to-demonstrate-bewilderment-causes-problems-misunderstanding-woman-hides-behind-word-319934828.jpg"
            alt="No Events Illustration"
            className="w-96"
          />
        </div>

        <p className="text-gray-600 text-center text-lg font-medium">
          Seems like you haven't created any event yet, Let's create one!
        </p>
      </div>

      <div className="fixed right-6 mr-4">
        <button className="bg-blue-500 text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow hover:bg-blue-600">
          <FaPlus className="h-4 w-4" />
          Add Event
        </button>
      </div>
    </div>
  );
}
