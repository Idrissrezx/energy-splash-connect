
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, MessageSquare, FileText, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-energy-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-energy-primary">
                Energy Guelma - Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Site
                </Button>
              </Link>
              <Button variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-energy-primary mb-2">Welcome, Admin</h2>
          <p className="text-energy-text">Manage your swimming club from this dashboard.</p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-energy-accent" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-energy-primary">Members</h3>
                <p className="text-2xl font-bold text-energy-accent">127</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center">
              <MessageSquare className="w-8 h-8 text-energy-accent" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-energy-primary">Messages</h3>
                <p className="text-2xl font-bold text-energy-accent">23</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center">
              <FileText className="w-8 h-8 text-energy-accent" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-energy-primary">Reports</h3>
                <p className="text-2xl font-bold text-energy-accent">8</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center">
              <Settings className="w-8 h-8 text-energy-accent" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-energy-primary">Settings</h3>
                <p className="text-sm text-energy-text">System Config</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-energy-primary mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="bg-energy-accent hover:bg-energy-accent/90 text-white">
              Add New Member
            </Button>
            <Button variant="outline" className="border-energy-primary text-energy-primary hover:bg-energy-primary hover:text-white">
              Send Announcement
            </Button>
            <Button variant="outline" className="border-energy-primary text-energy-primary hover:bg-energy-primary hover:text-white">
              View Reports
            </Button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-energy-primary mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-energy-text">New member registration: Ahmed Ali</span>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-energy-text">Payment received from Sara Benali</span>
              <span className="text-sm text-gray-500">5 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-energy-text">Coach Mohamed updated training schedule</span>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
