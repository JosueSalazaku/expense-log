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
    <div>
      <div className="flex justify-center items-center  rounded-lg h-fit w-fit">
        <Button
          onClick={() => handleTabClick("Expense")}
          className={`rounded-l-lg rounded-r-none px-4 py-2 ${
            activeTab === "Expense"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Expense
        </Button>
        <Button
          onClick={() => handleTabClick("Income")}
          className={`rounded-r-lg rounded-l-none px-4 py-2 ${
            activeTab === "Income"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Income
        </Button>
      </div>


      <div className="tab-content mt-4">
        {activeTab === "Expense" && 
        <div>
                      <Card className='w-[550px] h-[700px] bg-none '>
                          <h1 className='text-2xl text-white'>Exspenses</h1>
                <Input className='bg-none w- border' />
            </Card>
        </div>}
        {activeTab === "Income" && 
        <div>
        <Card className='w-[350px]'>
            
        </Card>
    </div>}
      </div>
    </div>
  );
}

