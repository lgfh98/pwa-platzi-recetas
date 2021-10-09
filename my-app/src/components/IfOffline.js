import React, { useState, useEffect } from "react";

export const IfOffline = () => {
  const [onLine, setOnLine] = useState(navigator ? navigator.onLine : true);

  useEffect(() => {
    window.addEventListener("online", () => setOnLine(true));
    window.addEventListener("offline", () => setOnLine(false));
    return () => {
      window.removeEventListener("online");
      window.removeEventListener("offline");
    };
  }, []);

  return <>{!onLine && <span>Offline</span>}</>;
};
