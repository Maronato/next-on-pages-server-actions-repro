"use client";

import { useFormState } from "react-dom";

import { myAction } from "@/actions";

export default function Hello() {
  const [formState, handleSubmit] = useFormState(myAction, null);

  return (
    <form
      action={handleSubmit}
      className="flex flex-col items-center justify-center min-h-screen py-2"
    >
      <span className="text-2xl text-center font-semibold mb-4 dark:text-white lg:text-4xl lg:mb-8">{`Result: ${formState}`}</span>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}
