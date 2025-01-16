"use client";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { PlaceholdersAndVanishTextArea } from "@/components/ui/placeholders-and-vanish-textarea";
import axios from "axios";
import React, { useCallback } from "react";

export default function Home() {
  const placeholders = [
    "What is IntentJS, and how does it work?",
    "How do I use transformers in IntentJS?",
    "Can you explain the role of providers in IntentJS?",
    "What are helpers in IntentJS, and when should I use them?",
    "How can I integrate IntentJS with my existing project?",
  ];

  const [message, setMessage] = React.useState("");
  const [chat, setChat] = React.useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const response = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      if (!response.body) throw new Error("No response body found.");
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;
      setChat((chat) => [...chat, ""]);
      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          setChat((chat) => {
            const updatedChat = [...chat];
            updatedChat[updatedChat.length - 1] += chunk;
            return updatedChat;
          });
        }
      }
    },
    [axios, message, setChat, setMessage, TextDecoder]
  );
  if (chat.length <= 0) {
    return (
      <main className="flex justify-center items-center h-[calc(70vh)] overflow-x-hidden flex-grow">
        <div className="md:w-[50%]">
          <div className="pb-5">
            <span className="text-left text-3xl">Let's start the chat...</span>
          </div>
          <div className="h-56">
            <PlaceholdersAndVanishTextArea
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            {chat.map((text) => (
              <span>{text}</span>
            ))}
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main className="h-[calc(92vh+6px)] md:h-[calc(87vh)] flex flex-col py-5 md:py-10 md:px-20 px-5">
        <div className="flex-grow">
          <div className="flex flex-grow flex-col gap-y-2 w-full">
            {chat.map((c, i) => {
              return (
                <div key={i} className="text-white">
                  {c}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={(e) => setMessage(e.target.value)}
            onSubmit={onSubmit}
          />
        </div>
      </main>
    );
  }
}
