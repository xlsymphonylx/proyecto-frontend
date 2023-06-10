import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5000";

const submitFeedback = async (comment) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/comment_classifier`, {
      comment,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
const getComments = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/comments`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { submitFeedback, getComments };
