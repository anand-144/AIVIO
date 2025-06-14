import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';

const LoginReminder = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <IoWarningOutline className="text-yellow-500 text-6xl mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Login Required</h2>
        <p className="text-gray-600">
          You must be logged in to access this page.
        </p>
      </div>
    </div>
  );
};

export default LoginReminder;
