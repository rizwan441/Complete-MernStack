import Client from "../models/ClientModel.js";
// Client Form
export const submitMessage = async (req, res) => {
  try {
    const { username, email, message } = req.body;

    // Check if there's an existing message from the same user
    const existingMessage = await Client.findOne({ email });

    if (existingMessage) {
      // Update the existing message
      existingMessage.message += `\n\n${message}`;
      await existingMessage.save();
      res.status(200).json({ message: "Message updated successfully" });
    } else {
      // Create a new message entry
      const newMessage = new Client({
        username,
        email,
        message,
      });
      await newMessage.save();
      res.status(200).json({ message: "Message submitted successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
