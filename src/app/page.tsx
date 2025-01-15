"use client";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import axios from "axios";
import React from "react";

export default function Home() {
  const placeholders = [
    "What is IntentJS, and how does it work?",
    "How do I use transformers in IntentJS?",
    "Can you explain the role of providers in IntentJS?",
    "What are helpers in IntentJS, and when should I use them?",
    "How can I integrate IntentJS with my existing project?",
  ];

  const [message, setMessage] = React.useState("")

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post("/api", {
      message
    })
    console.log(response.data)
  };
  return (
    <main className="flex justify-center items-center h-[calc(70vh)]">
      <div className="w-[50%]">
        <div className="pb-5">
          <span className="text-left text-3xl">Let's start the chat...</span>
        </div>
        <div className="h-56">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </main>
  );
}
