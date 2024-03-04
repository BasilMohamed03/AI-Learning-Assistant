import {
  initializePineconeClient,
  loadDocuments,
  createPineconeIndex,
  updatePinecone,
  queryPineconeVectorStoreAndQueryLLM,
} from "../util/pineconeUtil.js";

import {
  audioFileToBase64,
  readJsonTranscript,
} from "../util/audioUtil.js";

import { lipSyncMessage } from "../util/lipSyncUtil.js";
import voice from "elevenlabs-node";

const elevenLabsApiKey = process.env.ELEVEN_LABS_API_KEY;
const voiceID = process.env.ELEVENLABS_VOICE_ID; 

const client = await initializePineconeClient();
const docs = await loadDocuments();
const indexName = "software";
const vectorDimension = 1536;


const chatController = async (req, res) => {
  const userMessage = req.body.message;

  // If the user message is empty, send an introductory message.
  if (!userMessage) {
    res.send({
      messages: [
        {
          text: "Hey... How can I assist you today?",
          audio: await audioFileToBase64("audios/intro_0.wav"),
          lipsync: await readJsonTranscript("audios/intro_0.json"),
          facialExpression: "smile",
          animation: "Talking_1",
        },
      ],
    });
    return;
  }
   if (!elevenLabsApiKey ) {
     res.send({
       messages: [
         {
           text: "Please my dear, don't forget to add your API keys!",
           audio: await audioFileToBase64("audios/api_0.wav"),
           lipsync: await readJsonTranscript("audios/api_0.json"),
           facialExpression: "angry",
           animation: "Angry",
         },

       ],
     });
     return;
   }



  //  Check if Pinecone index exists and create if necessary
  await createPineconeIndex(client, indexName, vectorDimension);

  //  Update Pinecone vector store with document embeddings
  // await updatePinecone(client, indexName, docs);

  // Perform chat-related operations

  const answer = await queryPineconeVectorStoreAndQueryLLM(
    client,
    indexName,
    userMessage
  );

  let messages = [
    { text: answer, facialExpression: "smile", animation: "Talking_1" },
  ];

  if (messages.messages) {
    messages = messages.messages; // Ensure the format is consistent
  }

  console.log(messages.messages);

  for (let i = 0; i < messages.length; i++) {
    const message = messages[i];

    // Generate an audio file for the message using Eleven Labs' voice service.
    const fileName = `audios/message_${i}.mp3`;
    const textInput = message.text;
    console.log(textInput);

    // Generate voice data for the message.
    await voice.textToSpeech(elevenLabsApiKey, voiceID, fileName, textInput);

    // Generate lip sync data for the message.
    await lipSyncMessage(i);

    message.audio = await audioFileToBase64(fileName);
    message.lipsync = await readJsonTranscript(`audios/message_${i}.json`);
  }

  res.send({ messages });
};

export { chatController };
