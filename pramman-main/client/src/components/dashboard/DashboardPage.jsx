export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header */}
          <header className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back!</h2>
            <p className="text-gray-600">Here’s what’s happening today:</p>
          </header>

          {/* Statistics */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold text-gray-700">Users</h3>
              <p className="text-2xl font-bold text-gray-800">1,230</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold text-gray-700">Revenue</h3>
              <p className="text-2xl font-bold text-gray-800">$12,450</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold text-gray-700">Orders</h3>
              <p className="text-2xl font-bold text-gray-800">340</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold text-gray-700">Feedback</h3>
              <p className="text-2xl font-bold text-gray-800">95%</p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-700 mb-4">
              Analytics Overview
            </h3>
            <p className="text-gray-600">[Add your chart or graph here]</p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold text-gray-700">View Reports</h3>
              <p className="text-gray-600">
                Access detailed reports for analysis
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Go to Reports
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold text-gray-700">Settings</h3>
              <p className="text-gray-600">Update your preferences</p>
              <a href="#" className="text-blue-500 hover:underline">
                Manage Settings
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-bold text-gray-700">
                Contact Support
              </h3>
              <p className="text-gray-600">Get help from our team</p>
              <a href="#" className="text-blue-500 hover:underline">
                Contact Us
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
