import React, { useState } from 'react';

export default function TabSystem() {
  const [activeTab, setActiveTab] = useState("Expense");

    const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="tab-buttons">
        <button
          onClick={() => handleTabClick("Expense")}
          className={activeTab === "Expense" ? "active" : ""}
        >
          Expense
        </button>
        <button
          onClick={() => handleTabClick("Income")}
          className={activeTab === "Income" ? "active" : ""}
        >
          Income
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "Expense" && <div>Expense Form</div>}
        {activeTab === "Income" && <div>Income Form</div>}
      </div>
    </div>
  );
}
