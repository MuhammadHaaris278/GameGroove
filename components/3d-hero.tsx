"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000

    const posArray = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.8,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Create a glowing sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32)
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.3,
    })

    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    scene.add(sphere)

    // Position camera
    camera.position.z = 5

    // Mouse movement effect
    let mouseX = 0
    let mouseY = 0

    function onDocumentMouseMove(event: MouseEvent) {
      mouseX = (event.clientX - window.innerWidth / 2) / 100
      mouseY = (event.clientY - window.innerHeight / 2) / 100
    }

    document.addEventListener("mousemove", onDocumentMouseMove)

    // Handle window resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", onWindowResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      particlesMesh.rotation.x += 0.001
      particlesMesh.rotation.y += 0.001

      sphere.rotation.y += 0.005

      // Follow mouse with some lag
      particlesMesh.rotation.x += (mouseY * 0.1 - particlesMesh.rotation.x) * 0.05
      particlesMesh.rotation.y += (mouseX * 0.1 - particlesMesh.rotation.y) * 0.05

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener("resize", onWindowResize)
      document.removeEventListener("mousemove", onDocumentMouseMove)
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 -z-10" aria-hidden="true" />
}
