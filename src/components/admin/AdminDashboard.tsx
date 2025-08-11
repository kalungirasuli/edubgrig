import React, { useState } from 'react';
import { 
  Users, 
  Building2, 
  BookOpen, 
  FileText, 
  Handshake,
  BarChart3,
  Settings,
  LogOut
} from 'lucide-react';
import StudentManagement from './StudentManagement';
import InstitutionManagement from './InstitutionManagement';
import ResourceManagement from './ResourceManagement';
import BlogManagement from './BlogManagement';
import PartnerManagement from './PartnerManagement';
import DashboardOverview from './DashboardOverview';
// TypeScript cache refresh trigger

type TabType = 'overview' | 'students' | 'institutions' | 'resources' | 'blogs' | 'partners';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'institutions', label: 'Institutions', icon: Building2 },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'blogs', label: 'Blogs', icon: FileText },
    { id: 'partners', label: 'Partners', icon: Handshake },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'students':
        return <StudentManagement />;
      case 'institutions':
        return <InstitutionManagement />;
      case 'resources':
        return <ResourceManagement />;
      case 'blogs':
        return <BlogManagement />;
      case 'partners':
        return <PartnerManagement />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Settings className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-lg shadow-sm mr-8">
            <nav className="p-4">
              <ul className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <li key={tab.id}>
                      <button
                        onClick={() => setActiveTab(tab.id as TabType)}
                        className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                          activeTab === tab.id
                            ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-700'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <Icon className="h-5 w-5 mr-3" />
                        {tab.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;