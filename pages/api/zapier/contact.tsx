import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        "https://hooks.zapier.com/hooks/catch/***REMOVED***",
        req.body
      );
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: "Error forwarding request to Zapier" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
