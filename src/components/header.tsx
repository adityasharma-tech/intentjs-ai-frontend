import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 md:px-10 px-3 bg-black/50 backdrop-blur md:py-10 py-3 flex justify-between">
        <div className='flex flex-col justify-center'>
          <span className="text-2xl">IntentJS AI</span>
        </div>
        <div>
          <button className="inline-flex h-12 animate-shimmer group gap-x-5 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-neutral-200 transition-colors focus:outline-none focus:ring-none focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span>Support</span>
            <div className="border-l h-6 my-auto border-neutral-500" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              fill="none"
              viewBox="0 0 24 24"
              className="group-hover:bg-neutral-700 py-0.5 rounded-md transition"
            >
              <path
                className="stroke-neutral-200"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C16.602 3 17.068 3 18 3c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 4.602 21 5.068 21 6c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 9 18.932 9 18 9c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C15 7.398 15 6.932 15 6ZM3 6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 3 5.068 3 6 3c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C9 4.602 9 5.068 9 6c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C7.398 9 6.932 9 6 9c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 7.398 3 6.932 3 6ZM3 18c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 15 5.068 15 6 15c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C9 16.602 9 17.068 9 18c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C7.398 21 6.932 21 6 21c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 19.398 3 18.932 3 18Z"
              />
              <path
                className="stroke-neutral-200"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v3M18 18h-3M21 15h-3M9 12H3M21 12h-8v0a1 1 0 0 1-1-1v0-2M14.5 21H20v0a1 1 0 0 0 1-1v0-2M12 21v-5a1 1 0 0 1 1-1v0h2"
              />
            </svg>
          </button>
        </div>
      </header>
  )
}
