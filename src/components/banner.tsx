import React from 'react';

export function BetaBanner() {
  return (
    <div className="bg-yellow-500 text-black text-center py-2 fixed top-0 w-full z-50">
      <p>
        🚀 This project is in <strong>beta</strong> and is an ongoing community effort. Data is continuously being updated & migth be <strong className="underline">inaccurate</strong>.
      </p>
    </div>
  );
} 