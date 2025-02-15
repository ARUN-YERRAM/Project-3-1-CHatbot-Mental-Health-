

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Character from "./Character";
import { OrbitControls } from "@react-three/drei";

const Model = () => {
  const [allAnimation, setAllAnimation] = useState([
    "golf",
    "idle",
    "jump",
    "pockets",
    "react",
    "rope",
    "shrug",
    "swingdance",
    "wave",
  ]);

  const [currentAnimationName, setCurrentAnimationName] = useState("golf");

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-5, 5, 5]} />
        <Character
          glbPath="/stacy.glb"
          texturePath="/stacy.jpg"
          currentAnimationName={currentAnimationName}
          position={[-8, -1, 0]} // Leftmost position
          scale={0.01}
        />
        <Character
          glbPath="/Character1.glb"
          texturePath="/stacy.jpg"
          currentAnimationName={currentAnimationName}
          position={[0, -1, 0]} // Center position
          scale={0.01}
        />
        <Character
          glbPath="/Character2.glb"
          texturePath="/stacy.jpg"
          currentAnimationName={currentAnimationName}
          position={[8, -1, 0]} // Rightmost position
          scale={0.01}
        />
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        {allAnimation.map((name, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "green",
              color: "white",
              margin: "0.5rem",
              borderRadius: "1rem",
            }}
          >
            <button
              onClick={() => setCurrentAnimationName(name)}
              style={{ color: "white", padding: "1rem", width: "100%" }}
            >
              {name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Model;

