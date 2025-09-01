import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Menu } from "./components/Menu";
import { useState } from "react";
import { Model } from "./components/Model";

export default function App() {
  const defaultModelUrl = "/models/cute_owo_mushroom_3d_model.glb";
  const [modelUrl, setModelUrl] = useState(defaultModelUrl);

  const handleModelUpload = (url) => {
    setModelUrl(url);
  };

  return (
    <div className="App">
      <Menu onModelUpload={handleModelUpload} currentModel={modelUrl} />
      <Canvas>
        <Suspense fallback={null}>
          <Model url={modelUrl} />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
