import React from 'react';

export default function EventDetails() {
  return (
    <div className="space-y-6">
      <div className="text-lg font-medium text-blue-600">
        November 7th, 11:30 AM - 1:30 PM
      </div>
      <h1 className="text-3xl font-bold text-gray-900">
        Executive Lunch & Learn Scottsdale: The Boomi Difference
      </h1>
      <div className="prose prose-blue max-w-none">
        <p className="text-lg text-gray-700">
          Join Boomi and our partner Techstone on Thursday, November 7, 2024 at STK Steakhouse 
          in Scottsdale, Arizona for an engaging discussion on the Boomi Difference: Unlocking 
          the Future of Integration and Automation.
        </p>
        
        <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-4">You'll learn:</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>The transformative power of AI in enhancing integration and orchestration</li>
          <li>How Boomi's scalable solutions meet your enterprise's demands</li>
          <li>The top-rated features that make Boomi easy to use and effective</li>
        </ul>

        <p className="text-lg text-gray-700 mt-6">
          This event is ideal for leaders eager to enhance their integration strategies while 
          networking with Boomi executives and industry peers for shared insights and collaboration.
        </p>
      </div>
    </div>
  );
}