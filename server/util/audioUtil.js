import { promises as fs } from "fs";

// Function to convert an audio file to base64 encoding.
const audioFileToBase64 = async (file) => {
  const data = await fs.readFile(file);
  return data.toString("base64");
};

// Function to read and parse JSON transcript from a file.
const readJsonTranscript = async (file) => {
  const data = await fs.readFile(file, "utf8");
  return JSON.parse(data);
};


export { audioFileToBase64, readJsonTranscript };
