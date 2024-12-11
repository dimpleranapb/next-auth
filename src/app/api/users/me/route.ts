import { connect } from "@/dbConfig/dbConnect";
import User from "@/models/userModel.js";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export async function GET(request: NextRequest) {
    const userId = await getDataFromToken(request)
    const user = await User.findOne({_id:userId}).select("-password")
    
    return NextResponse.json({
        message: "User Found",
        data:user
    })
}