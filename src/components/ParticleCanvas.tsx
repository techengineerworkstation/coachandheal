import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null!)
  const count = 2000

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const palette = [
      new THREE.Color('#6366f1'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#ec4899'),
      new THREE.Color('#06b6d4'),
    ]

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20

      const color = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return { positions, colors }
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.02
      meshRef.current.rotation.x = Math.sin(time * 0.01) * 0.1
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function FloatingOrbs() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh
        mesh.position.y = Math.sin(time * 0.3 + i * 1.5) * 0.5
        mesh.position.x = Math.cos(time * 0.2 + i * 2) * 0.3
        mesh.rotation.x = time * 0.1 + i
        mesh.rotation.z = time * 0.05 + i
      })
    }
  })

  const orbData = useMemo(
    () => [
      { pos: [-3, 0, -2] as [number, number, number], color: '#6366f1', scale: 0.8 },
      { pos: [2, 1, -3] as [number, number, number], color: '#a855f7', scale: 0.6 },
      { pos: [-1, -1, -1] as [number, number, number], color: '#ec4899', scale: 0.5 },
      { pos: [3, -0.5, -2.5] as [number, number, number], color: '#06b6d4', scale: 0.7 },
      { pos: [0, 2, -4] as [number, number, number], color: '#8b5cf6', scale: 0.4 },
    ],
    []
  )

  return (
    <group ref={groupRef}>
      {orbData.map((orb, i) => (
        <mesh key={i} position={orb.pos} scale={orb.scale}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color={orb.color}
            wireframe
            transparent
            opacity={0.3}
            emissive={orb.color}
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function ParticleCanvas() {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <ParticleField />
        <FloatingOrbs />
      </Canvas>
    </div>
  )
}
