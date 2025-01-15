import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const HF_API_TOKEN = process.env.HUGGING_FACE_API;

  try {
    if (!payload.message) throw new Error("Message is required.");
    const API_URL = `https://adityasharmatech-intentjs-ai.hf.space/prompt/?message=${
      payload.message
    }&sessionid=${Math.random()}`;
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${HF_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Response:", response.data);
    return NextResponse.json(
      {
        message: "Success",
        success: true,
        data: {
          ...response.data,
        },
      },
      { status: 200 }
    );
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
