// lipSyncUtil.js

import { exec } from "child_process";
import { promises as fs } from "fs";

// Define a function to execute shell commands and return a promise.
const execCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) reject(error);
      resolve(stdout);
    });
  });
};

// Define a function to perform lip sync processing for a given message.
const lipSyncMessage = async (message) => {
  const time = new Date().getTime();
  console.log(`Starting conversion for message ${message}`);

  // Convert an audio file from MP3 to WAV using FFmpeg.
  await execCommand(
    `ffmpeg -y -i audios/message_${message}.mp3 audios/message_${message}.wav`
    // -y to overwrite the file
  );

  console.log(`Conversion done in ${new Date().getTime() - time}ms`);

  // Perform lip sync analysis using Rhubarb.
  await execCommand(
    `/Rhubarb-Lip-Sync-1.13.0-Windows/rhubarb.exe -f json -o audios/message_${message}.json audios/message_${message}.wav -r phonetic`
  ); // -r phonetic is faster but less accurate

  console.log(`Lip sync done in ${new Date().getTime() - time}ms`);
};

export { lipSyncMessage };
