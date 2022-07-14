import { Canvas } from '@react-three/fiber';
import ThreeBox from '../box/ThreeBox';
import OrbitControls from '../controls/OrbitControls';
import ThreeFloor from '../floor/ThreeFloor';
import Draggable from '../interactions/Draggable';
import ThreePointLight from '../pointlight/ThreePointLight';
import styles from './TestThree.module.css';
export interface ITestThree {}
const TestThree: React.FC<ITestThree> = () => {
  return (
    <div className={styles.scene}>
      <Canvas
        shadows={true}
        className={styles.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color="white" intensity={0.3} />
        <ThreeFloor />
        <ThreeBox />
        <ThreePointLight />
        <OrbitControls></OrbitControls>
        <Draggable></Draggable>
      </Canvas>
    </div>
  );
};

export default TestThree;
