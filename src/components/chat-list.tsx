"use client"
import React from "react";
import Markdown from "react-markdown";
//  @ts-ignore
import codeBlock from 'remark-code-blocks'
import capitalizeHeadings from 'remark-capitalize-headings'
import { Roboto } from "next/font/google";
import "@/highlight/styles/agate.css";
import rehypeHighlight from "rehype-highlight";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"]
})

export default function ChatList({ chats }: { chats: string[] }) {
  React.useEffect(()=>{
    if(window){
      let content = document.getElementById('content')
      if(content){
        content.scrollTop = content.scrollHeight
      }
    }
  }, [chats])
  return (
    <div id="content" className={`max-h-full transition-all overflow-y-scroll py-3 px-5 flex-grow ${roboto.className}`}>
      <style>
        {`
        code {
        border-radius: 10px;
        }
        pre {
        padding-top: 5px;
        padding-bottom: 5px;
        }
        `}
      </style>
      <div className="flex flex-col gap-y-5">
        {chats.map((chat, index) => {
          return (
            <div className="flex justify-end font-light" key={index}>
              <div className="bg-neutral-900 w-full md:max-w-[70%] rounded-xl px-6 py-4">
                <Markdown rehypePlugins={[rehypeHighlight]} className={'text-neutral-300 overflow-x-scroll'} remarkPlugins={[codeBlock, capitalizeHeadings]} >{chat}</Markdown>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
