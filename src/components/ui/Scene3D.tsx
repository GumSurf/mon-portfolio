'use client'

import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function D20() {
  const meshRef = useRef<THREE.Mesh>(null)
  const wireRef = useRef<THREE.Mesh>(null)
  const { mouse } = useThree()

  useFrame(() => {
    if (!meshRef.current || !wireRef.current) return
    meshRef.current.rotation.y += (mouse.x * Math.PI - meshRef.current.rotation.y) * 0.05
    meshRef.current.rotation.x += (-mouse.y * Math.PI * 0.5 - meshRef.current.rotation.x) * 0.05
    wireRef.current.rotation.y = meshRef.current.rotation.y
    wireRef.current.rotation.x = meshRef.current.rotation.x
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 0]} />
        <meshStandardMaterial color="#111008" roughness={0.2} metalness={0.9} />
      </mesh>
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.84, 0]} />
        <meshBasicMaterial color="#ffffff" wireframe opacity={0.7} transparent />
      </mesh>
    </group>
  )
}

export function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <D20 />
      </Canvas>
    </div>
  )
}