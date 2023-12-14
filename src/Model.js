import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function Model({ scroll, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/DamagedHelmet.glb");

  useFrame(() => {
    if (group.current) {
      const rotationY = Math.PI * 2 * scroll.current;
      group.current.rotation.y = rotationY;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="node_damagedHelmet_-6514"
          castShadow
          receiveShadow
          geometry={nodes["node_damagedHelmet_-6514"].geometry}
          material={materials.Material_MR}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: "node_damagedHelmet_-6514" }}
          scale={[1.5, 1.5, 1.5]}
        />
      </group>
    </group>

  );
}

useGLTF.preload("/DamagedHelmet.glb");
