import { useGLTF, OrbitControls, Center, Bounds } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'

export default function ModelViewer({ color, modelUrl }) {
    const { scene } = useGLTF(modelUrl)

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.rotation.set(0, 0, 0)
                if (child.name === 'Body') {
                    child.material.color.set(color)
                }
            }
        })
    }, [scene, color])

    return (
        <Canvas camera={{ fov: 50 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[3, 3, 3]} intensity={1} />
            <OrbitControls makeDefault />
            <Bounds fit clip observe margin={1.2}>
                <Center>
                    <primitive object={scene} />
                </Center>
            </Bounds>
        </Canvas>
    )
}