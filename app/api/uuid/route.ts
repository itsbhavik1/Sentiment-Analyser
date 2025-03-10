import { NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"

export async function GET() {
  return NextResponse.json({ uuid: uuidv4() })
}

