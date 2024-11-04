import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import EventDetails from './components/EventDetails';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <EventDetails />
              <RegistrationForm />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}