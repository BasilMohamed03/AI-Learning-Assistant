import {
  initializePineconeClient,
  loadDocuments,
  createPineconeIndex,
  updatePinecone,
  queryPineconeVectorStoreAndQueryLLM,
} from "../util/pineconeUtil.js";

const client = await initializePineconeClient();
const docs = await loadDocuments();
const indexName = "software";
const vectorDimension = 1536;

const quizController = async (req, res) => {
  const quizMessage = req.body.message;

  // If the user message is empty, send an introductory message.
  if (!quizMessage) {
    res.send({
      messages: [
        {
          text: "what is the questions topic ?",
        },
      ],
    });
    return;
  }

  //  Check if Pinecone index exists and create if necessary
  await createPineconeIndex(client, indexName, vectorDimension);

  //  Update Pinecone vector store with document embeddings
  // await updatePinecone(client, indexName, docs);

  // Perform quiz-related operations
  const answer = await queryPineconeVectorStoreAndQueryLLM(
    client,
    indexName,
    quizMessage
  );

  // Send the response

  let messages = [{ text: answer }];

  if (messages.messages) {
    messages = messages.messages; // Ensure the format is consistent
  }

  res.send({ messages });
};

export { quizController };
