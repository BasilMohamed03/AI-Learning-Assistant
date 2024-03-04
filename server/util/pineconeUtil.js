// pineconeUtil.js

import { PineconeClient } from "@pinecone-database/pinecone";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { createPineconeIndex } from "./1-createPineconeIndex.js";
import { updatePinecone } from "./2-updatePinecone.js";
import { queryPineconeVectorStoreAndQueryLLM } from "./3-queryPineconeAndQueryGPT.js";

import * as dotenv from "dotenv";

dotenv.config(); //  environment variables

const initializePineconeClient = async () => {
  // Initialize Pinecone client with API key and environment
  const client = new PineconeClient();
  await client.init({
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENVIRONMENT,
  });
  return client;
};

const loadDocuments = async () => {
  // Set up DirectoryLoader to load documents from the ./documents directory
  const loader = new DirectoryLoader("./documents", {
    ".txt": (path) => new TextLoader(path),
    ".pdf": (path) => new PDFLoader(path),
  });
  return await loader.load();
};

export {
  initializePineconeClient,
  loadDocuments,
  createPineconeIndex,
  updatePinecone,
  queryPineconeVectorStoreAndQueryLLM,
};
