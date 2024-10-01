import TabSystem from "@/components/TabSystem";
import React from "react";

export default function Page() {
  return (
    <div className="flex h-screen w-screen justify-center items-start">
      <div className="flex gap-2"></div>
      <TabSystem />
    </div>
  );
}
