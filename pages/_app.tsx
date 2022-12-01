import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useLayoutEffect, useState } from "react";
import { Loader } from "./Loader1";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleTransitionEnd = () => {
    console.log("animation end!");
    const root = document.getElementById("__next");
    const loader = document.getElementById("loader");
    root?.removeChild(loader!);
  };

  useLayoutEffect(() => {
    setTimeout(() => setIsLoading(false), 1400);
  }, []);

  return (
    <>
      <Loader onTransitionEnd={handleTransitionEnd} isLoading={isLoading} />
      <Component {...pageProps} />
    </>
  );
}
