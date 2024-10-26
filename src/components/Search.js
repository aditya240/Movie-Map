import { useEffect, useRef } from "react";
import { useKeyDown } from "../useKeyDown";

export default function Search({ query, setQuery }) {
  const inputElememt = useRef(null);

  useKeyDown("Enter", function () {
    if (document.activeElement === inputElememt.current) return;
    inputElememt.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputElememt}
    />
  );
}
