import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {

    try {
        // const testid = "65f1c72a03115ff9106e9209" 
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id; //can get this because it has been added via the routeProtector

        //Get conversation between users
        let conversation = await Conversation.findOne({

            participants: { $all: [senderId, receiverId] },
        })

        //can add new members to chat and make group chat just add their ids here
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        await Promise.all([conversation.save(), newMessage.save()]);
        //message has reached the db

        //--------Socket Io functionality---------//

        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            //using "to" instead of "emit" straight away because this event is meant for one user
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }





        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in the message controller", error.message)
        res.status(500).json({ error: "Internal server error" })
    }

}

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatWithId } = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatWithId] },
        }).populate("messages"); //these are the actual message objects not references to them

        if (!conversation) return res.status(200).json([]);
        const messages = conversation.messages;
        res.status(200).json(messages);
    }

    catch (error) {
        console.log("Error in the message controller", error.message)
        res.status(500).json({ error: "Internal server error" })

    }
}