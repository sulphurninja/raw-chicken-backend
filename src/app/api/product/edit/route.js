export async function PATCH(request) {
    try {
        const { id, updateData } = await request.json();

        if (!name || !updateData) {
            return NextResponse.json({ error: "name and update data are required" }, { status: 400 });
        }

        const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true }).select("-password");

        if (!updatedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "User updated successfully",
            data: updatedUser,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function DELETE(request) {
    try {
        const { name } = await request.json();

        if (!name) {
            return NextResponse.json({ error: "name is required" }, { status: 400 });
        }

        const deletedUser = await User.findByIdAndDelete(name).select("-password");

        if (!deletedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({
            message: "User deleted successfully",
            data: deletedUser,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
