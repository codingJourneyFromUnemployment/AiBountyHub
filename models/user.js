import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  walletAddress: {
    type: String,
    required: [true, "Wallet Address is required!"],
    unique: [true, "Wallet Address must be unique!"],
    match: [/^0x[a-fA-F0-9]{40}$/, "Please fill a valid Wallet Address!"],
  }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;