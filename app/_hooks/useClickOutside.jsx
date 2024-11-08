"use client";
const { useRef, useEffect } = require("react");

function useClickOutside(callback = null) {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }

    // call the function when one clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // cleanup function
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [callback]);

  // ref to attach with the element
  return ref;
}

export default useClickOutside;
