import React from 'react';
import { CircleAlert } from 'lucide-react';

function Notification({ message }) {
  const isVisible = Boolean(message);
  const displayMessage =
    message?.message === 'Failed to fetch'
      ? 'Unable to load. Please check your internet connection.'
      : message?.message;
  return (
    <div
      role="alert"
      className={`alert alert-error fixed left-1/2 z-20 flex w-fit min-w-70 -translate-x-1/2 gap-2 rounded-xl border bg-red-400 p-4 text-center text-red-800 transition-all duration-200 ease-in-out ${isVisible ? 'top-3 opacity-100' : '-top-12 opacity-0'} `}
    >
      <CircleAlert />
      <span>Error! {displayMessage}</span>
    </div>
  );
}

export default Notification;
