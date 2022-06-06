import { useState, useEffect } from "react";

const useInfiniteScroll = (callback: any) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, []);

  useEffect(() => {
    console.log("isFetching", isFetching);

    if (!isFetching) return;
    callback();
  }, [isFetching]);

  function isScrolling() {
    const innerHeightAndScrollTop = Math.round(
      window.innerHeight + document.documentElement.scrollTop
    );

    if (
      innerHeightAndScrollTop !== document.documentElement.offsetHeight ||
      innerHeightAndScrollTop > document.documentElement.offsetHeight ||
      isFetching
    )
      return;

    setIsFetching(true);
  }

  return [isFetching, setIsFetching] as const;
};

export default useInfiniteScroll;
