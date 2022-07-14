export interface IThreePointLight {
  props?: any;
}

const ThreePointLight: React.FC<IThreePointLight> = ({ props }) => {
  return (
    <mesh position={[0, 3, 0]}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={'yellow'} />
    </mesh>
  );
};

export default ThreePointLight;
