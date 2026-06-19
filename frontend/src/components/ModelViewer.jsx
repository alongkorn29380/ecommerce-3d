import { useGLTF, OrbitControls, Center } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useEffect } from 'react'

export default function ModelViewer({ color, modelUrl }) {
    const { scene } = useGLTF(modelUrl)

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.material.color.set(color)
            }
        })
    }, [scene, color])

    return (
        <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[3, 3, 3]} intensity={1} />
            <OrbitControls />
            <Center>
                <primitive object={scene} />
            </Center>
        </Canvas>
    )
}