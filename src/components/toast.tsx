"use client";

import { useState, useEffect } from 'react';
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";

export function BetaToast() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white z-10 p-4 rounded shadow-lg animate-fade-in">
      <Toaster />
      <p className="flex items-center">
        🚀 <strong>Hey there!</strong> This project is in <strong>beta</strong> and we're excited to have you on board! 🌟
      </p>
      <p className="mt-2">
        Help us improve by sharing your feedback! 💬
      </p>
      <Button
        variant="outline"
        onClick={() =>
          toast("Thanks for your feedback!", {
            description: "Your input is valuable to us.",
          })
        }
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
      >
        Give Feedback
      </Button>
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
      <Toaster />
      <p className="mt-2">
        Contribute to our open-source project on GitHub and make a difference! 💻
      </p>
      <Button
        variant="outline"
        onClick={() =>
          toast("Thank you for considering a contribution!", {
            description: "Visit our GitHub repository to get started.",
            action: {
              label: "Contribute Now",
              onClick: () => window.open("https://github.com/kenawak/homeofproject", "_blank"),
            },
          })
        }
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
      >
        Contribute Now
      </Button>
    </div>
  );
}