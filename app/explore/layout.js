"use client";

import SideNavElement from "@/components/SideNavElement";

export default function Menu({ children }) {
  return (
    <>
      <SideNavElement>{children}</SideNavElement>
    </>
  );
}
