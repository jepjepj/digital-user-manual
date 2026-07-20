import ManualService from "@/services/ManualServices";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const keyword = searchParams.get("type") ?? ""

    const manuals = await ManualService.getManuals(keyword)
    return NextResponse.json(manuals)
}

export async function POST() {
    
}