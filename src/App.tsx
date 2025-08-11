import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import components
import Home from './components/Home';
import SupportWidget from './components/SupportWidget';
import Footer from './components/Footer';
import DailyPosts from './components/DailyPosts';
import InstitutionSelector from './components/InstitutionSelector';
import SchoolDetail from './components/SchoolDetail';
import ResourcesPage from './components/ResourcesPage';
import NotFound from './components/NotFound';
import SignIn from './components/SignIn';
import AdminRoute from './components/admin/AdminRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <span className="text-2xl font-bold text-indigo-600">EduBridge</span>
                </Link>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-indigo-500">
                    Home
                  </Link>
                  <Link to="/institutions" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent">
                    Institutions
                  </Link>
                  <Link to="/resources" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent">
                    Resources
                  </Link>
                  <Link to="/daily-posts" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-gray-300 border-b-2 border-transparent">
                    Daily Posts
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <Link to="/signin" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/institutions" element={<InstitutionSelector />} />
          <Route path="/institutions/:id" element={<SchoolDetail />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/daily-posts" element={<DailyPosts />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/admin" element={<AdminRoute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <SupportWidget />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
