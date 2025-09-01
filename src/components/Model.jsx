import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export const Model = ({ url }) => {
    const { scene, nodes, materials, animations } = useGLTF(url, true);
  
    // Cleanup cached resources
    useEffect(() => {
      return () => {
        if (url.startsWith("blob:")) {
          // 1. Clean up URL
          URL.revokeObjectURL(url);
  
          // 2. Clean up 3D resources
          if (scene) {
            scene.traverse((obj) => {
              // 3. Dispose geometries
              if (obj.geometry) {
                obj.geometry.dispose();
              }
              // 4. Dispose materials and textures
              if (obj.material) {
                Object.values(obj.material).forEach((value) => {
                  if (value && typeof value.dispose === "function") {
                    value.dispose();
                  }
                });
              }
            });
          }
        }
      };
    }, [url, scene]);
  
    return <primitive object={scene} />;
  };
