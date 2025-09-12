"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { startLoader, finishLoader } from "./TopLoader";

export default function LoaderLink({ href, children, ...props }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    startLoader();
    router.push(href);
    setTimeout(() => finishLoader(), 800);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
