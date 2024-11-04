import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#02293b] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <img
            src="https://boomi.com/wp-content/themes/bsphere/images/boomi-logo.svg"
            alt="Boomi Logo"
            className="h-[58px] w-[160px]"
          />
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Boomi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}