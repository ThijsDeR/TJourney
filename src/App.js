import "./App.css";
import { Canvas } from "@react-three/fiber";
import Environments from "./assets/Environment/Environment";
import { Suspense } from "react";
import { Environment, PresentationControls, View, Stars, OrbitControls } from "@react-three/drei";
import { Physics, usePlane } from "@react-three/cannon";
import 'bulma/css/bulma.min.css';
// import { useState, useEffect } from "react";
// import { getCurrentUser, logout } from "./services/auth-service.js";
// import Login from "./pages/login/Login";


function Plane() {
  const [ref, api] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -1, 0]
  }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightgreen" />
    </mesh>
  );
}

function App() {
  return (
    <div className="canvasContainer">
      <div className="App">
        <Canvas camera={{ position: [0, -0.2, 1.2] }}>
          <OrbitControls target={[0, -0.4, 0]}/>
          {/* <PresentationControls global zoom={4} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]}> */}
            <Stars />
            <ambientLight intensity={0.5} />
            {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
            <Suspense fallback={null}>
              <Physics>
                <mesh position={[1.5, -1, 0]} scale={1}>
                  <Environments />
                </mesh>
                <Plane />
              </Physics>
            </Suspense>
            <Environment preset="sunset" />
          {/* </PresentationControls> */}
        </Canvas>
      </div>
      <div className="progress">
        <div className="progress-value"><h3 className="level">Level 50</h3></div>
      </div>
      <div className="parent">
        <button className="ButtonHome">&#9816;</button>
        <button className="ButtonHome">&#9728;</button>
        <button className="ButtonHome">&#9731;</button>
      </div>
    </div>
  );
}

// function App2() {
//     const [currentUser, setCurrentUser] = useState(undefined);

//   useEffect(() => {
//     getCurrentUser().then((data) => {
//         setCurrentUser(data)
//     });
//   }, []);

//   const logoutHandler = async () => {
//     await logout()
//     setCurrentUser(undefined)
//     window.location.reload()
//   }

//     return (
//         <>
//             {currentUser ? (
//                 <div>
//                     <h2>{currentUser.username}</h2>
//                     <button onClick={() => logoutHandler()}>Logout</button>
//                 </div>
//             ) : <Login />}
//         </>
//     )
// }

export default App;