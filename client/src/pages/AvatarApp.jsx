import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "../components/Experience";
import { AavatarUI } from "../components/UI";

import React from "react";

import { ChatProvider } from "../hooks/useChat";
import "./index.css";

function AvatarApp() {
  return (
    <>
      <React.StrictMode>
        <ChatProvider>
          <Loader />
          <Leva hidden />
          <AavatarUI />
          <Canvas shadows camera={{ position: [0, 0, 1], fov: 30 }}>
            <Experience />
          </Canvas>
        </ChatProvider>
      </React.StrictMode>
    </>
  );
}

export default AvatarApp;
