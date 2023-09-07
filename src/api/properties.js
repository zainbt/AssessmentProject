import axiosInstance from "../config/axios";
export const getProperties = async (req,res) => {
  try {
    const res = await axiosInstance.get("properties/paginated-properties");
    return res.data
  } catch (error) {
    return { error: error.message};
  }
};


export const upvotes = async (req,res) => {
  try {
    const res = await axiosInstance.post("properties/:id/upvote");
    return res.data
  } catch (error) {
    return { error: error.message};
  }
};
