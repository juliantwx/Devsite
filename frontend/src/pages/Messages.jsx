// NOTE: This is a temporary page just to view the messages that were submitted by the users.

import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import messageService from "../api/messageService";

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Load messages from backend on load
    const loadMessages = async () => {
      const result = await messageService.getMessages();
      setMessages(result);
    };

    loadMessages();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0"); // Day (dd)
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month (mm)
    const year = date.getFullYear(); // Year (yyyy)
    const hours = String(date.getHours()).padStart(2, "0"); // Hour (hh)
    const minutes = String(date.getMinutes()).padStart(2, "0"); // Minutes (mm)

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const handleDelete = async (id) => {
    try {
      // Call the delete API
      await messageService.deleteMessage(id);

      // Reload the messages after deletion
      const updatedMessages = await messageService.getMessages();
      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-24 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col gap-3">
        {messages.map((message) => (
          <div key={message.id} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex flex-col items-start">
              {/* Display Email and Date */}
              <p>{message.content}</p>
              <div className="mb-4 pl-0.5 text-xs text-gray italic">
                <p>{message.email}</p>
                <p>{formatDate(message.dateReceived)}</p>
              </div>
              <Button
                href={`mailto:${message.email}`}
                variant="contained"
                color="primary"
                sx={{ height: "30px", marginBottom: "3px" }}
                fullWidth
              >
                Reply
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(message.id)}
                sx={{ height: "30px" }}
                fullWidth
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
      {messages.length === 0 && <p>No messages to display at this time.</p>}
    </div>
  );
}

export default Messages;
