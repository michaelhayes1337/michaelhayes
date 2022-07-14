export interface IThreeBox {
  props?: any;
}

const ThreeBox: React.FC<IThreeBox> = ({ props }) => {
  return (
    <mesh rotateX={3} rotateY={0.2} recieveShadow={true} castShadow={true}>
      <boxBufferGeometry />
      <meshPhysicalMaterial color={'white'} />
    </mesh>
  );
};

export default ThreeBox;
