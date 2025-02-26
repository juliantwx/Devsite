import axios from "axios";

const API_URL = "http://localhost:5009/api/Message";

const messageService = {
  getMessages: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Unable to get messages at this time", error);
    }
  },
  sendMessage: async (formData) => {
    try {
      const response = await axios.post(API_URL, formData);
      return response.data;
    } catch (error) {
      console.error("Error sending message:", error);
    }
  },
  deleteMessage: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error("Unable to delete message.", error);
    }
  },
};

export default messageService;
