import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense, useState } from "react";
import { Menu } from "./components/Menu";
import { Model } from "./components/Model";
import "./styles.css";
import { UserAuthModal } from "./components/UserAuthModal";
import { useAuth } from "./contexts/authContext";

export default function App() {
  const defaultModelUrl = "/models/cute_owo_mushroom_3d_model.glb";
  const [modelUrl, setModelUrl] = useState(defaultModelUrl);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const { userLoggedIn } = useAuth();

  const handleModelUpload = (url) => {
    setModelUrl(url);
  };

  return (
    <div className="App">
      <Menu
        onModelUpload={handleModelUpload}
        currentModel={modelUrl}
        setShowSignInModal={setShowSignInModal}
        isUserLoggedIn={userLoggedIn}
      />
      <Canvas data-testid="canvas">
        <Suspense fallback={null}>
          <Model url={modelUrl} />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
      {showSignInModal && (
        <UserAuthModal
          show={showSignInModal}
          onHide={() => setShowSignInModal(false)}
          isUserLoggedIn={userLoggedIn}
        />
      )}
    </div>
  );
}
