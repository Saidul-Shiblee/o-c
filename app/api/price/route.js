import dbConnect from "@/lib/monogConnect";
const { ObjectId } = require("mongodb");
import { create, findAndDelete} from "@/services/groupServices";
import { findAll, findAndUpdate } from "@/services/priceServices";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
    try {
        await dbConnect()
        let state = await request.json()
        const createdGroup = await create(state,'price')
        return NextResponse.json(
            {
                data: createdGroup._doc,
                Message:"Category wise price has been created successfully"
            },
            { status: 200 }
        );
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return NextResponse.json(
                {
                    message: Object.values(error.errors).map(val => val.message),
                },
                { status: 400 }
            );
        } else if (error.name === "MongoError" && error.code === 11000) {
            return NextResponse.json(
                {
                    message: `Duplicate record found`,
                },
                { status: 409 }
            );
        }
        else {
            return NextResponse.json(
                {
                    message: `Something went wrong`,
                },
                { status: 500 }
            );

        }

    }
}


export async function PUT(request) {
    const { searchParams } = new URL(request.url);
    try {
        await dbConnect()
        let state = await request.json()
        const filter = { _id: new ObjectId(searchParams.get("id")) };
        const editedGroup = await findAndUpdate(filter, { $set: state })

        return NextResponse.json(
            {
                data: editedGroup,
                Message: "Price Category has been edited successfully"
            },
            { status: 200 }
        );

    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return NextResponse.json(
                {
                    message: Object.values(error.errors).map(val => val.message),
                },
                { status: 400 }
            );
        } else if (error.name === "MongoError" && error.code === 11000) {
            return NextResponse.json(
                {
                    message: `Duplicate record found`,
                },
                { status: 409 }
            );
        }
        else {
            return NextResponse.json(
                {
                    message: `Something went wrong`,
                },
                { status: 500 }
            );

        }

    }
}


export async function GET() {
    try {
        await dbConnect()
        const groups = await findAll({})
        return NextResponse.json(
            {
                data: groups
            },
            { status: 200 }
        );

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message: `Something went wrong`,
            },
            { status: 500 }
        );

    }
}

export async function DELETE(request){
    const { searchParams } = new URL(request.url);
    try {
        await dbConnect()
        const filter = { _id: new ObjectId(searchParams.get("id")) };
        await findAndDelete(filter,'price')
        return NextResponse.json(
            {
                Message: "Category wise price has been deleted successfully"
            },
            { status: 200 }
        );

    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message: `Something went wrong`,
            },
            { status: 500 }
        );

    }

}




