import type { NextApiRequest, NextApiResponse } from "next";

type ErrorData = {
  error: string;
  message: string;
  errors: { error: string; message: string }[];
};

export default (req: NextApiRequest, res: NextApiResponse<ErrorData>) => {
  res.statusCode = 500;
  res.json({
    error: "error",
    message: "message of error",
    errors: [{ error: "error", message: "message of error" }],
  });
};
