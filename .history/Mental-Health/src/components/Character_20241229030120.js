

// import React, { useEffect, useRef } from "react";
// import { useGLTF, useAnimations } from "@react-three/drei";

// // Component to render a single character
// const Character = ({ glbPath, currentAnimationName, position }) => {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF(glbPath);
//   const { actions } = useAnimations(animations, group);

//   useEffect(() => {
//     if (actions[currentAnimationName]) {
//       actions[currentAnimationName].reset().fadeIn(0.5).play();
//       return () => actions[currentAnimationName].fadeOut(0.5);
//     } else {
//       console.warn(`Animation "${currentAnimationName}" not found in ${glbPath}`);
//     }
//   }, [currentAnimationName, actions, glbPath]);

//   return (
//     <group ref={group} position={position} dispose={null}>
//       <primitive object={nodes.Hips} />
//       {Object.keys(nodes).map((key) => (
//         nodes[key].type === "SkinnedMesh" && (
//           <skinnedMesh
//             key={key}
//             name={key}
//             geometry={nodes[key].geometry}
//             material={materials[nodes[key].material.name]}
//             skeleton={nodes[key].skeleton}
//             morphTargetDictionary={nodes[key].morphTargetDictionary}
//             morphTargetInfluences={nodes[key].morphTargetInfluences}
//           />
//         )
//       ))}
//     </group>
//   );
// };

// // Scene to render multiple characters
// const Scene = () => {
//   return (
//     <>
//       {/* First Character */}
//       <Character
//         glbPath="/6758799f130072afa6b4b6da.glb"
//         currentAnimationName="Idle"
//         position={[-2, -1, 0]}
//       />
//       {/* Second Character */}
//       <Character
//         glbPath="/Character2.glb"
//         currentAnimationName="Wave"
//         position={[2, -1, 0]}
//       />
//     </>
//   );
// };

// export default Scene;

// // Preload GLTF models
// useGLTF.preload("/6758799f130072afa6b4b6da.glb");
// useGLTF.preload("/Character2.glb");