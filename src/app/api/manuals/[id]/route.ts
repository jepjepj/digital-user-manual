import ManualService from "@/services/ManualServices";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> } ) {
    const { id } = await params

    const manual = await ManualService.getManualById(Number(id))
    return NextResponse.json(manual)
}