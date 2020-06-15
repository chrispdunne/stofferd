import * as THREE from "three"
import {
    LineSegments,
    LineBasicMaterial,
    EdgesGeometry,
    MeshPhongMaterial,
    SphereBufferGeometry,
    SphereGeometry,
    MeshStandardMaterial,
    MeshDepthMaterial,
    CircleBufferGeometry,
} from "three"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import React from "react"
import { Canvas, extend, useFrame, useThree } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { DotScreenShader } from "three/examples/jsm/shaders/DotScreenShader"
import { useSpring, a } from "react-spring/three"

import sunUrl from "../img/sun-texture.jpg"
import veinUrl from "../img/veins.jpg"

extend({
    CircleBufferGeometry,
    OrbitControls,
    EdgesGeometry,
    LineSegments,
    LineBasicMaterial,
    MeshPhongMaterial,
    SphereBufferGeometry,
    SphereGeometry,
    MeshStandardMaterial,
    MeshDepthMaterial,
    EffectComposer,
    RenderPass,
    ShaderPass,
    FilmPass,
    UnrealBloomPass,
})

const sunTexture = new THREE.TextureLoader().load(sunUrl)
const veinTexture = new THREE.TextureLoader().load(veinUrl)

function Effect() {
    const dotRef = React.useRef(null)
    const composer = React.useRef()
    const { scene, gl, size, camera } = useThree()
    const aspect = React.useMemo(
        () => new THREE.Vector2(size.width, size.height),
        [size]
    )
    React.useEffect(
        () => void composer.current.setSize(size.width, size.height),
        [size]
    )
    useFrame(() => composer.current.render(), 1)

    return (
        <effectComposer ref={composer} args={[gl]}>
            <renderPass
                attachArray="passes"
                scene={scene}
                camera={camera}
                antialias={true}
            />
            {/* <unrealBloomPass
                attachArray="passes"
                args={[aspect]}
                strength={2}
                radius={0.1}
                threshold={0.7}
            /> */}
            <filmPass attachArray="passes" args={[0.25, 1, 1500, false]} />

            <shaderPass
                ref={dotRef}
                attachArray="passes"
                args={[DotScreenShader]}
                renderToScreen
                uniforms-tSize-value-x={512}
                uniforms-tSize-value-y={512}
            />
        </effectComposer>
    )
}

const Eye = () => {
    const [{ rotation }, set] = useSpring(() => ({
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        },
        rotation: [0, 0, 0],
    }))

    const onMouseMove = React.useCallback(
        ({ clientX: x, clientY: y }) => {
            set({
                rotation: [
                    (y - window.innerHeight / 2) / (window.innerHeight / 2),
                    (x - window.innerWidth / 2) / (window.innerWidth / 2),
                    0,
                ],
            })
        },
        [set]
    )

    return (
        <Canvas
            gl={{ antialias: true, alpha: false }}
            camera={{
                fov: 75,
                position: [0, 0, 5],
            }}
            onMouseMove={onMouseMove}
            style={{ background: "#000" }}
        >
            <ambientLight intensity={0.8} color="#fff" />

            <a.group rotation={rotation}>
                <mesh>
                    <sphereBufferGeometry
                        attach="geometry"
                        args={[0.9, 32, 32]}
                    />
                    <meshStandardMaterial
                        attach="material"
                        color="#999"
                        map={veinTexture}
                    />
                </mesh>

                {/* iris */}
                <mesh position={[0, 0, 0.72]} scale={[1, 1, 0.4]}>
                    <sphereBufferGeometry
                        attach="geometry"
                        args={[0.5, 32, 32, 0, 3]}
                    />
                    <meshStandardMaterial
                        attach="material"
                        color="#075"
                        emissive="#700"
                        bumpMap={sunTexture}
                    />
                </mesh>

                {/* pupil */}
                <mesh position={[0, 0, 0.92]} rotation={[0, 0, 0]}>
                    <circleBufferGeometry attach="geometry" args={[0.2, 32]} />
                    <meshStandardMaterial
                        attach="material"
                        color="#000"
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </a.group>

            {/* eye glow */}
            <mesh position={[0, 0, -1]}>
                <circleBufferGeometry attach="geometry" args={[1.15, 32]} />
                <meshStandardMaterial
                    attach="material"
                    color="#fff"
                    side={THREE.DoubleSide}
                />
            </mesh>

            <Effect />
        </Canvas>
    )
}

export default Eye
