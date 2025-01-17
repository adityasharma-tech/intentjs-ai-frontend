"use client"
import React from "react";
import Markdown from "react-markdown";
//  @ts-ignore
import codeBlock from 'remark-code-blocks'
import { Roboto } from "next/font/google";
import rehypeHighlight from "rehype-highlight";
import "@/highlight/styles/agate.css";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"]
})

export default function ChatList({ chats }: { chats: {
  bot: boolean;
  content: string
}[] }) {
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
        p {
          padding-bottom: 5px;
        }
          ul {
           padding-left: 10px;
           padding-right: 10px;
          }

          ul li {
            padding-top: 5px;
            padding-bottom: 5px;
            font-size: 14px
          }
        `}
      </style>
      <div className="flex flex-col gap-y-5">
        {chats.map((chat, index) => {
          return (
            <div className={`flex font-light ${chat.bot ? "justify-end" : "justify-start"}`} key={index}>
              <div className={`w-full md:max-w-[70%] rounded-xl px-6 py-4 ${chat.bot ? "bg-neutral-900": "bg-black"}`}>
                <Markdown rehypePlugins={[rehypeHighlight]} className={'text-neutral-300 overflow-x-scroll'} remarkPlugins={[codeBlock]} >{chat.content}</Markdown>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
