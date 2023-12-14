"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const PrivacyConsentBanner: React.FC = () => {
  const [accepted, setAccepted] = useState(false);
  const [cookie, setCookie] = useState(Cookies.get("privacy-consent"));

  useEffect(() => {
    const cookie = Cookies.get("privacy-consent");
    if (cookie === "accepted") {
      setAccepted(true);
    } else if (cookie === "rejected") {
      setAccepted(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const banner = document.querySelector(".privacy-banner");
      if (banner) {
        banner.classList.add("slide-up");
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    Cookies.set("privacy-consent", "accepted");
    setAccepted(true);
  };

  const handleReject = () => {
    Cookies.set("privacy-consent", "rejected");
    setAccepted(false);
  };

  return (
    <div className="fixed bottom-0 w-full bg-gray-200 border-t border-gray-300 p-4 transition-transform transform-gpu duration-500 ease-in-out privacy-banner">
      <div className="flex flex-col items-start">
        <h2 className="text-lg font-bold">We value your privacy.</h2>
        <p>This website uses cookies to improve your browsing experience.</p>
        <p>Please click Accept to continue.</p>
        <div>
          <button className="bg-green-600 px-4 py-2 m-4" onClick={handleAccept}>
            Accept
          </button>
          <button className="bg-green-600 px-4 py-2 m-4" onClick={handleReject}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyConsentBanner;
