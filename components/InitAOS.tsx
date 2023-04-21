"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export default function InitAOS({ children }: Props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return <>{children}</>;
}
