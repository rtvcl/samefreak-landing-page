"use client";

import React from "react";
import { useToast } from "@/components/ui/use-toast";

const FormWaitlist = () => {
  const { toast } = useToast();

  return (
    <form className="flex w-full py-1 pl-4 pr-1 rounded-full md:max-w-md bg-secondary-50/80">
      <input
        className="flex-1 py-1 text-sm bg-transparent focus:outline-none text-primary-950 min-w-lg"
        type="text"
        placeholder="luke.zkywalker@starwa.rz"
      />
      <button
        className="px-4 text-sm font-semibold tracking-tight rounded-full shadow-md bg-secondary-400 text-primary-900"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
        }}
      >
        Join the Waitlist
      </button>
    </form>
  );
};

export default FormWaitlist;
