import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const cookieStore = await cookies();
  const HF_API_TOKEN = process.env.HUGGING_FACE_API;
  console.log("payload:", payload)

  try {
    if (!payload.message) throw new Error("Message is required field.");
    const cookieSessionId = cookieStore.get('sessionId');
    console.log(cookieSessionId)
    const newSessionId = crypto.randomUUID().toString();
    const API_URL = `https://adityasharmatech-intentjs-ai.hf.space/prompt/?message=${
      payload.message
    }&sessionid=${cookieSessionId?.value ?? newSessionId}`;

    const streamRes = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${HF_API_TOKEN}`,
        "Content-Type": "application/json",
      }
    })
    if(!streamRes.body){
      throw new Error("No response body from the API.")
    }

    const stream = new ReadableStream({
      async start(controller){
        const reader = streamRes.body?.getReader();
        const decoder = new TextDecoder("utf-8");

        try {
          while (true) {
            const readerRes  = await reader?.read();
            if(readerRes){ 
              const { done, value} = readerRes
              if(done) break;
              const chunk = decoder.decode(value, { stream: true });
              console.log("Chunk received:", chunk);
              controller.enqueue(value)
            }
          }
        } catch(error: any) {
          console.error("Error reading stream:", error);
          controller.error(error);
        } finally {
          controller.close();
        }
      }
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "text/plain",
        "Set-Cookie": `sessionId=${cookieSessionId?.value ?? newSessionId}`
      }
    })
  } catch (error: any) {
    console.error(`Error occured: ${error.message}`);
    return NextResponse.json(
      {
        message: error.message ?? "Some error occured.",
        success: false,
        data: null,
      },
      { status: 400 }
    );
  }
}
