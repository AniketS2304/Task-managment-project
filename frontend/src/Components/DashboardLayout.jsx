import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar or Navigation */}
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-bold mb-4">Task Manager</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/tasks" className="hover:underline">
                Task List
              </Link>
            </li>
            <li>
              <Link to="/add-task" className="hover:underline">
                Add Task
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet /> {/* Nested routes will render here */}
      </main>
    </div>
  );
};

export default DashboardLayout;
