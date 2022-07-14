export interface IThreeFloor {
  position?: any;
}

const ThreeFloor: React.FC<IThreeFloor> = ({ position }) => {
  return (
    <mesh position={[0, -1, 0]} receiveShadow={true}>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
};

export default ThreeFloor;
