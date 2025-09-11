"use client";

import Link from "next/link";
import { startLoader } from "./TopLoader";

export default function LoaderLink({ href, children, ...props }) {
  return (
    <Link href={href} onClick={() => startLoader()} {...props}>
      {children}
    </Link>
  );
}
