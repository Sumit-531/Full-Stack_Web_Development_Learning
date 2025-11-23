import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";
import User from "../models/user.model.js";

export const signUp = async (req, res, next) => {
  // mongoose transaction
  // A transaction lets it execute multiple operations in isolation and potentially undo all the operations if one of them fails.
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { username, password, role } = req.body;

    // check if a user already exist
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      const error = new Error("User already exist");
      error.statusCode = 409;
      throw error;
    }

    // Hash password for new user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a user
    // Adding a session means that if something goes wrong and if abort the session is needed, a user will not be created.
    const newUser = await User.create(
      [{ username, password: hashedPassword, role }],
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        user: newUser[0],
      },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      const error = new Error("User not found.");
      error.statuscode = 404;
      throw error;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      const error = new Error("Invalid password");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.status(200).json({
      success: true,
      message: "Signed in successfully",
      data: {
        token,
        user: {
          id: user._id,
          username: user.username,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};
