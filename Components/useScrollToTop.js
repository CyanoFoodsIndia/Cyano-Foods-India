import { useEffect } from "react";

// Call this at the top of any page component.
export default function useScrollToTop() {
  useEffect(() => {
    // jump to top when the page mounts
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);
}
