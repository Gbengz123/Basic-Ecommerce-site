import React from 'react';
import { CircleAlert } from 'lucide-react';

function Notification({ message }) {
  const isVisible = Boolean(message);
  return (
    <div
      role="alert"
      className={`alert alert-error xs:w-80 fixed -top-12 left-1/2 z-20 flex w-75 -translate-x-1/2 gap-2 rounded-xl border bg-red-400 p-4 text-red-800 opacity-0 transition-all duration-200 ease-in-out ${isVisible ? `translate-y-[55px] opacity-100` : ``}`}
    >
      <CircleAlert />
      <span>Error! {message.message}</span>
    </div>
  );
}

export default Notification;
