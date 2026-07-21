import ManualService from "@/services/ManualServices";
import { NextRequest, NextResponse } from "next/server";

interface routerProps {
    params: Promise<{ id: string }>
}

export async function GET(req: NextRequest, { params }: routerProps ) {
    const { id } = await params

    const language = req.nextUrl.searchParams.get("language") ?? "en";

    const manual = await ManualService.getManualById(Number(id), language)
    return NextResponse.json(manual)
}