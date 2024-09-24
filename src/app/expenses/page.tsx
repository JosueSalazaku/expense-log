import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import React from "react";

export default function Page() {


  return (
    <div className="flex">
      <section className="w-[230px] h-screen border ">SIDE NAV</section>
      <section className="w-[1100px] h-screen px-10 pt-10">
        <div className="flex flex-row gap-2">
          <Input type="numbers" className="w-[250px] bg-black" />
          <Button className="bg-zinc-800">Add</Button>
        </div>
      </section>
    </div>
  );
}
