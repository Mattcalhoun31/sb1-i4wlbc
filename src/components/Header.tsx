import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-[#02293b] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://boomi.com/wp-content/themes/bsphere/images/boomi-logo.svg"
              alt="Boomi Logo"
              className="h-[58px] w-[160px]"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}