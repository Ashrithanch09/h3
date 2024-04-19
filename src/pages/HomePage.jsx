import Background from "@/components/homepage/Background";
import ContentWrapper from "@/components/homepage/ContentWrapper";
import SideNav from "@/components/homepage/SideNav";
import React from "react";

export default function HomePage() {
  return (
    <div className="w-full h-dvh flex">
      <Background />
      <SideNav />
      <ContentWrapper />
    </div>
  );
}