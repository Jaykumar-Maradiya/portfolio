import axios from "axios";

export const sendContact = async (data) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/contact`,
      data
    );
    return res.data;
  } catch (error) {
    console.error("Contact API Error:", error);
    throw error;
  }
};
