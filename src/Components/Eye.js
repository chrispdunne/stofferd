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
import fav1 from "../img/favicon-1.png"
import fav2 from "../img/favicon-2.png"
import fav3 from "../img/favicon-3.png"
import fav4 from "../img/favicon-4.png"
import fav5 from "../img/favicon-5.png"
import fav6 from "../img/favicon-6.png"

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
    const lidOpen = [5, 0, 1.56]
    const bottomLidClosed = [3.15, 0, 1.56]
    const topLidClosed = [6.175, 0, 1.56]
    const [pupilExpanded, setPupilExpanded] = React.useState(false)

    const [{ rotation }, set] = useSpring(() => ({
        config: {
            mass: 1,
            tension: 170,
            friction: 26,
        },
        rotation: [0, 0, 0],
    }))

    const [{ rotation: topLidRotation }, setTopLid] = useSpring(() => ({
        config: {
            mass: 1,
            tension: 100,
            friction: 26,
        },
        rotation: [5, 0, 1.56],
    }))

    const [{ rotation: bottomLidRotation }, setBottomLid] = useSpring(() => ({
        config: {
            mass: 1,
            tension: 100,
            friction: 26,
        },
        rotation: [5, 0, 1.56],
    }))

    const [{ scale }, setPupilScale] = useSpring(() => ({
        config: {
            mass: 1,
            tension: 50,
            friction: 26,
        },
        scale: [1, 1, 1],
    }))

    const onClick = React.useCallback(() => {
        setBottomLid({ rotation: lidOpen })
        setTopLid({ rotation: lidOpen })
        setPupilScale({
            scale: pupilExpanded ? [0.5, 0.5, 0.5] : [1.5, 1.5, 1.5],
        })
        setPupilExpanded(!pupilExpanded)
    }, [
        lidOpen,
        setBottomLid,
        setPupilScale,
        setTopLid,
        setPupilExpanded,
        pupilExpanded,
    ])

    const favX = React.useRef(0)

    const setFav = React.useCallback(
        (newFavX) => {
            if (newFavX === favX.current) return
            const fav = document.getElementById("fav")
            if (newFavX <= 1) fav.href = fav1
            if (newFavX > 1 && newFavX <= 2) fav.href = fav2
            if (newFavX > 2 && newFavX <= 3) fav.href = fav3
            if (newFavX > 3 && newFavX <= 4) fav.href = fav4
            if (newFavX > 4 && newFavX <= 5) fav.href = fav5
            if (newFavX > 5) fav.href = fav6
            favX.current = newFavX
        },
        [favX]
    )

    const onMouseMove = React.useCallback(
        ({ clientX: x, clientY: y }) => {
            if (!window) return

            setFav((x / window.innerHeight) * 4.2)

            const yPosition =
                (y + window.scrollY - window.innerHeight / 2) /
                (window.innerHeight / 2)
            const xPosition =
                (x - window.innerWidth / 2) / (window.innerWidth / 2)

            if (
                yPosition < 0.1 &&
                yPosition > -0.1 &&
                xPosition < 0.1 &&
                xPosition > -0.1
            ) {
                setBottomLid({ rotation: bottomLidClosed })
                setTopLid({ rotation: topLidClosed })
            } else {
                setBottomLid({ rotation: lidOpen })
                setTopLid({ rotation: lidOpen })
            }

            set({
                rotation: [yPosition, xPosition, 0],
            })
        },
        [
            set,
            setFav,
            setTopLid,
            setBottomLid,
            bottomLidClosed,
            topLidClosed,
            lidOpen,
        ]
    )

    // const debugRef = React.useRef(null)

    // const deviceRotate = React.useCallback(()=>{

    // },[]);
    const handleClickAnywhere = React.useCallback(
        (e) => {
            if (!window) return
            const yPosition =
                (e.y - window.innerHeight / 2) / (window.innerHeight / 2)

            const xPosition =
                (e.x - window.innerWidth / 2) / (window.innerWidth / 2)
            set({
                rotation: [yPosition, xPosition, 0],
            })
        },
        [set]
    )

    const deviceOrientationHandler = React.useCallback(
        (e) => {
            // debugRef.current.innerText =
            //     (Math.round(e.beta) / 180).toFixed(3) +
            //     ", " +
            //     (Math.round(e.gamma) / 90).toFixed(3)

            requestAnimationFrame(function () {
                set({
                    rotation: [
                        (Math.round(e.beta) / 180).toFixed(3),

                        (Math.round(e.gamma) / 90).toFixed(3),

                        0,
                    ],
                })
            })
        },
        [set]
    )

    React.useEffect(() => {
        if (document && !window.DeviceOrientationEvent) {
            // listen for clicks/touches elsewhere to move the eye
            document.addEventListener("click", handleClickAnywhere)
        }
        if (window && window.DeviceOrientationEvent) {
            window.addEventListener(
                "deviceorientation",
                deviceOrientationHandler,
                false
            )
        }
        return () => {
            // cleanup
            window.removeEventListener("click", handleClickAnywhere)
            window.removeEventListener(
                "deviceorientation",
                deviceOrientationHandler
            )
        }
    }, [])

    return (
        <>
            {/* <h3 style={{ height: "40px" }} ref={debugRef}>
                motion:
            </h3> */}
            <Canvas
                gl={{ antialias: true, alpha: false }}
                camera={{
                    fov: 75,
                    position: [0, 0, 5],
                }}
                onMouseMove={onMouseMove}
                onClick={onClick}
                style={{ background: "#000" }}
            >
                <ambientLight intensity={2} color="#fff" />

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
                    <a.mesh
                        scale={scale}
                        position={[0, 0, 0.92]}
                        rotation={[0, 0, 0]}
                    >
                        <circleBufferGeometry
                            attach="geometry"
                            args={[0.2, 32]}
                        />
                        <meshStandardMaterial
                            attach="material"
                            color="#000"
                            side={THREE.DoubleSide}
                        />
                    </a.mesh>
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

                {/* eye lid */}
                <a.mesh position={[0, 0, 0]} rotation={topLidRotation}>
                    <sphereBufferGeometry
                        attach="geometry"
                        args={[1, 32, 32, 1.6, 3]}
                    />
                    <meshLambertMaterial attach="material" color="#666" />
                </a.mesh>

                <a.mesh position={[0, 0, 0]} rotation={bottomLidRotation}>
                    <sphereBufferGeometry
                        attach="geometry"
                        args={[1, 32, 32, 1.6, 3]}
                    />
                    <meshLambertMaterial attach="material" color="#5a5a5a" />
                </a.mesh>

                <Effect />
            </Canvas>
        </>
    )
}

export default Eye
