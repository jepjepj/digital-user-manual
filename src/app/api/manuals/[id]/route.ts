import ManualService from "@/services/ManualServices";
import { NextRequest, NextResponse } from "next/server";

interface routerProps {
    params: Promise<{ id: string }>
}

export async function GET(req: NextRequest, { params }: routerProps ) {
    const { id } = await params

    const manual = await ManualService.getManualById(Number(id))
    return NextResponse.json(manual)
}