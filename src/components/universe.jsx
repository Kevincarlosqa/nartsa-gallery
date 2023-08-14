import React, { Suspense } from "react";
import { useThree, Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./canvas/The_universe";
import { PointLight, DirectionalLight } from "three";
import CanvasLoader from "./canvas/Loader";
const Universe = () => {
  return (
    <Canvas
      // className="mt"
      // className="overflow-visible z-10"
      shadows
      // frameloop="frame"
      camera={{
        fov: 45,
        near: 1,
        far: 200,
        position: [1, 0, 0],
        rotation: [0, Math.PI / 2, 0],
      }}
    >
      <OrbitControls
        // autoRotate
        enableZoom={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      {/* <ambientLight intensity={0.5} /> */}
      {/* <pointLight intensity={0.7} />
      <directionalLight intensity={0.3} /> */}
      <ambientLight intensity={1} />
      <spotLight
        intensity={5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      <pointLight position={[0, 1, 0]} intensity={5} />
      <pointLight position={[1, 0, 0]} intensity={5} />
      <pointLight position={[0, 0, 1]} intensity={5} />
      <Environment preset="night" />
      {/* <directionalLight intensity=  {1} /> */}
      <directionalLight
        // position={[0.5, 0.5, 0.5]}
        intensity={1}
        castShadow={true}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* <ContactShadows position={[0, -0.8, 0]} color="#ffffff" /> */}
      <Suspense fallback={<CanvasLoader />} className="">
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Universe;
