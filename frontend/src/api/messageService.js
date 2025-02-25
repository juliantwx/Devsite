import axios from "axios";

const API_URL = "http://localhost:5009/api/Message";

const messageService = {
  sendMessage: async (formData) => {
    try {
      const response = await axios.post(API_URL, formData);
      return response.data;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  },
};

export default messageService;
