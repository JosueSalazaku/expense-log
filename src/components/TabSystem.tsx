"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ToggleTabSystem() {
  const [activeTab, setActiveTab] = useState("Expense");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-4 border h-fit w-fit p-4">
        <Button
          onClick={() => handleTabClick("Expense")}
          className={`px-4 py-2 ${
            activeTab === "Expense"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Expense
        </Button>
        <Button
          onClick={() => handleTabClick("Income")}
          className={`px-4 py-2 ${
            activeTab === "Income"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Income
        </Button>
      </div>

      <div className="tab-content mt-4">
        {activeTab === "Expense" && <div>Expense Form</div>}
        {activeTab === "Income" && <div>Income Form</div>}
      </div>
    </div>
  );
}
