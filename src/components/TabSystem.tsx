"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';

export default function ToggleTabSystem() {
  const [activeTab, setActiveTab] = useState("Expense");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center rounded-lg h-fit w-fit border-2 border-gray-300 p-1 mb-6">
        <Button
          onClick={() => handleTabClick("Expense")}
          className={`rounded-l-lg rounded-r-none px-4 py-2 transition ${
            activeTab === "Expense"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Expense
        </Button>
        <Button
          onClick={() => handleTabClick("Income")}
          className={`rounded-r-lg rounded-l-none px-4 py-2 transition ${
            activeTab === "Income"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Income
        </Button>
      </div>

      <div className="tab-content mt-4">
        {activeTab === "Expense" && (
          <Card className="w-[550px] p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-gray-700 mb-6">Add Expense</h2>
            <form className="space-y-4">
              <div>
                <label className="text-gray-600">Date</label>
                <Input
                  type="date"
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-gray-600">Amount</label>
                <Input
                  type="number"
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <label className="text-gray-600">Category</label>
                <select className="w-full p-2 mt-1 border border-gray-300 rounded">
                  <option value="Food">Food</option>
                  <option value="Transport">Transport</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-gray-600">Notes</label>
                <textarea
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                  placeholder="Enter additional notes"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <Button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Add Expense
                </Button>
              </div>
            </form>
          </Card>
        )}

        {activeTab === "Income" && (
          <Card className="w-[550px] p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl text-gray-700 mb-6">Add Income</h2>
            <form className="space-y-4">
              <div>
                <label className="text-gray-600">Date</label>
                <Input
                  type="date"
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="text-gray-600">Amount</label>
                <Input
                  type="number"
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <label className="text-gray-600">Source of Income</label>
                <Input
                  type="text"
                  className="w-full p-2 mt-1 border border-gray-300 rounded"
                  placeholder="Enter source of income"
                />
              </div>
              <div className="flex justify-end">
                <Button className="bg-green-500 text-white px-4 py-2 rounded">
                  Add Income
                </Button>
              </div>
            </form>
          </Card>
        )}
      </div>
    </div>
  );
}
