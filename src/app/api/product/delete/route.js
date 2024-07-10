import connectDB from "@/app/lib/db";
import product from "@/model/productModel";
import { NextResponse } from "next/server";


connectDB();


export async function DELETE(request) {
    try {
        const {  } = await request.json();

        if (!name) {
            return NextResponse.json({ error: "name is required" }, { status: 400 });
        }

        const deletedProduct = await product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "product deleted successfully",
            data: deletedUser,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
