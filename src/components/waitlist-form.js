"use client";

import React, { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import joinWaitlist from "@/server-action/joinwaitlist";
import { useFormState, useFormStatus } from "react-dom";

const FormWaitlist = () => {
  const { toast } = useToast();

  const { pending } = useFormStatus();

  const [state, formAction] = useFormState(joinWaitlist, {
    error: null,
    email: null,
  });

  useEffect(() => {
    if (state.error) {
      toast({
        title: "Uppss",
        description: state.error,
      });
    } else {
      toast({
        title: `Thank you! ${state.email}`,
        description: `Your success to join the waitlist 💖`,
      });
    }
  }, [toast, state]);

  return (
    <form
      action={formAction}
      className="flex w-full py-1 pl-4 pr-1 rounded-full md:max-w-md bg-secondary-50/80"
    >
      <input
        className="flex-1 py-1 text-sm bg-transparent focus:outline-none text-primary-950 min-w-lg"
        name="email"
        type="email"
        id="name"
        required
        placeholder="luke.zkywalker@starwa.rz"
      />
      <button
        className="px-4 text-sm font-semibold tracking-tight rounded-full shadow-md bg-secondary-400 text-primary-900 disabled:bg-secondary-900"
        type="submit"
        aria-disabled={pending}
      >
        Join the Waitlist
      </button>
    </form>
  );
};

export default FormWaitlist;
