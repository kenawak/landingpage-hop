import { useState, useEffect } from 'react';

export function BetaToast() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded shadow-lg animate-fade-in">
      <p className="flex items-center">
        🚀 <strong>Hey there!</strong> This project is in <strong>beta</strong> and we're excited to have you on board! 🌟
      </p>
      <p className="mt-2">
        Help us improve by sharing your feedback! 💬
      </p>
      <button
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
        onClick={() => alert("Thanks for your feedback!")}
      >
        Give Feedback
      </button>
    </div>
  );
}

export function ContributionToast() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 15000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white z-10 p-4 rounded shadow-lg animate-fade-in">
      <p className="mt-2">
        Contribute to our open-source project on GitHub and make a difference! 💻
      </p>
      <a
        href="https://github.com/kenawak/homeofproject"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
        >
        Contribute Now
      </a>
    </div>
  );
}