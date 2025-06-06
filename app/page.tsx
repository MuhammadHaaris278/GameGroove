"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import GameCard from "@/components/game-card"
import ReviewCard from "@/components/review-card"
import FeatureCard from "@/components/feature-card"
import { GamepadIcon as GameController, ListChecks, Sparkles, Heart, FolderKanban, ShieldCheck } from "lucide-react"
import * as THREE from "three"
import { Hero3D } from "@/components/3d-hero"

// Sample game data
const trendingGames = [
  {
    id: "hogwarts-legacy",
    title: "Hogwarts Legacy",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hogwartslegacy-dbWXnnRaTLRx4OT9qECWvzZ0BIxCRM.jpeg",
    rating: 4.5,
    platforms: ["PC", "PlayStation", "Xbox"],
    genre: "RPG",
    releaseYear: 2023,
    price: 14.99,
    onSale: true,
    salePrice: 12.99,
  },
  {
    id: "final-fantasy-xiv",
    title: "Final Fantasy XIV",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/finalfantasy.jpg-phdq9Jb17lWRvU3ulDMDz9fR2AXc12.jpeg",
    rating: 4.8,
    platforms: ["PC", "PlayStation"],
    genre: "MMORPG",
    releaseYear: 2013,
    price: 11.99,
  },
  {
    id: "horizon-forbidden-west",
    title: "Horizon Forbidden West",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Horizon_Forbidden_West_cover_art.jpg-vq37ZagQ877FrdQURDlksiztZ8cVjj.jpeg",
    rating: 4.7,
    platforms: ["PlayStation"],
    genre: "Action RPG",
    releaseYear: 2022,
    price: 14.99,
    onSale: true,
    salePrice: 9.99,
  },
  {
    id: "god-of-war-ragnarok",
    title: "God of War Ragnarök",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/God_of_War_Ragnar%C3%B6k_cover.jpg-x4BP11UoISDkxophaHec9VEj4ypIJE.jpeg",
    rating: 4.9,
    platforms: ["PlayStation"],
    genre: "Action-Adventure",
    releaseYear: 2022,
    price: 15.99,
  },
  {
    id: "resident-evil-4-remake",
    title: "Resident Evil 4",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/resident-evil-4-remake.jpg-6og20VGUNNGIy5N11GCwupHhPwuvmI.jpeg",
    rating: 4.6,
    platforms: ["PC", "PlayStation", "Xbox"],
    genre: "Survival Horror",
    releaseYear: 2023,
    price: 13.99,
    onSale: true,
    salePrice: 11.99,
  },
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cyberpunk_2077_box_art.jpg-WoH29dDt6Sn9cGXGL0bb6Gm7e0yrdF.jpeg",
    rating: 4.0,
    platforms: ["PC", "PlayStation", "Xbox"],
    genre: "Action RPG",
    releaseYear: 2020,
    price: 12.99,
  },
  {
    id: "elden-ring",
    title: "Elden Ring",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eldenring-JwndNOrOvhGqd9Dq2X3Yuv1xBPjLda.jpeg",
    rating: 4.9,
    platforms: ["PC", "PlayStation", "Xbox"],
    genre: "Action RPG",
    releaseYear: 2022,
    price: 14.99,
    onSale: true,
    salePrice: 10.99,
  },
  {
    id: "diablo-iv",
    title: "Diablo IV",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diabloIV-6tEgmHS5D0p9cBYNhzUwaHFFhwOH7m.jpeg",
    rating: 4.3,
    platforms: ["PC", "PlayStation", "Xbox"],
    genre: "Action RPG",
    releaseYear: 2023,
    price: 13.99,
  },
  {
    id: "assassins-creed-valhalla",
    title: "Assassin's Creed Valhalla",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AssassinCreedVallaha%20-%20Copy.jpg-huE4tG1yUYVrT6n2TCQjz0xbFqUGzx.jpeg",
    rating: 4.4,
    platforms: ["PC", "PlayStation", "Xbox"],
    genre: "Action RPG",
    releaseYear: 2020,
    price: 9.99,
    onSale: true,
    salePrice: 7.99,
  },
]

// Sample review data with updated avatars
const reviews = [
  {
    name: "Alex Johnson",
    avatar: "/images/reviews-1.png",
    rating: 5,
    review: "GameGroove completely changed how I discover new games. The recommendations are spot on!",
    date: "2 days ago",
  },
  {
    name: "Sarah Miller",
    avatar: "/images/reviews-2.png",
    rating: 4,
    review: "I love how easy it is to organize my game library and track what I want to play next.",
    date: "1 week ago",
  },
  {
    name: "David Chen",
    avatar: "/images/reviews-3.png",
    rating: 5,
    review:
      "The community features are amazing. I've found so many like-minded gamers to discuss my favorite titles with.",
    date: "2 weeks ago",
  },
  {
    name: "Emma Wilson",
    avatar: "/images/reviews-4.png",
    rating: 5,
    review: "The Steam integration works flawlessly. It's so convenient having everything in one place!",
    date: "3 weeks ago",
  },
]

// 3D Animation Component with enhanced effects
const HeroAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Set up scene
    const scene = new THREE.Scene()

    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 3000 // Increased particle count

    const posArray = new Float32Array(particlesCount * 3)
    const colorsArray = new Float32Array(particlesCount * 3)
    const sizesArray = new Float32Array(particlesCount)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position - create a sphere of particles
      const radius = 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      posArray[i] = radius * Math.sin(phi) * Math.cos(theta)
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
      posArray[i + 2] = radius * Math.cos(phi)

      // Colors - create a gradient from blue to purple to green
      const colorChoice = Math.random()
      if (colorChoice < 0.33) {
        // Blue
        colorsArray[i] = 0
        colorsArray[i + 1] = 0.8
        colorsArray[i + 2] = 1
      } else if (colorChoice < 0.66) {
        // Purple
        colorsArray[i] = 0.6
        colorsArray[i + 1] = 0
        colorsArray[i + 2] = 1
      } else {
        // Green
        colorsArray[i] = 0
        colorsArray[i + 1] = 1
        colorsArray[i + 2] = 0.4
      }

      // Random sizes for particles
      sizesArray[i / 3] = Math.random() * 0.1 + 0.03
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colorsArray, 3))
    particlesGeometry.setAttribute("size", new THREE.BufferAttribute(sizesArray, 1))

    // Material with custom shader
    const particlesMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5, 0.5));
          if (dist > 0.5) discard;
          gl_FragColor = vec4(vColor, 1.0 - (dist * 2.0));
        }
      `,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    })

    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Add some 3D objects
    const geometry = new THREE.IcosahedronGeometry(1.5, 1)
    const material = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
    const icosahedron = new THREE.Mesh(geometry, material)
    icosahedron.position.x = -3
    icosahedron.position.y = 1
    scene.add(icosahedron)

    const torusGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100)
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x9d00ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
    const torus = new THREE.Mesh(torusGeometry, torusMaterial)
    torus.position.x = 3
    torus.position.y = -1
    scene.add(torus)

    const octahedronGeometry = new THREE.OctahedronGeometry(1.2, 1)
    const octahedronMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff66,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
    const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial)
    octahedron.position.x = -2
    octahedron.position.y = -2
    scene.add(octahedron)

    // Add a glowing sphere in the center
    const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32)
    const sphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          vec3 color1 = vec3(0.0, 0.95, 1.0); // Neon blue
          vec3 color2 = vec3(0.61, 0.0, 1.0); // Neon purple
          vec3 color = mix(color1, color2, sin(time * 0.5) * 0.5 + 0.5);
          gl_FragColor = vec4(color, 1.0) * intensity;
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.set(0, 0, 0)
    scene.add(sphere)

    // Mouse movement effect
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0
    const windowHalfX = window.innerWidth / 2
    const windowHalfY = window.innerHeight / 2

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - windowHalfX
      mouseY = event.clientY - windowHalfY
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()

      // Update sphere glow
      if (sphere.material instanceof THREE.ShaderMaterial) {
        sphere.material.uniforms.time.value = elapsedTime
      }

      // Smooth camera movement following mouse
      targetX = mouseX * 0.001
      targetY = mouseY * 0.001
      camera.position.x += (targetX - camera.position.x) * 0.05
      camera.position.y += (-targetY - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      // Rotate objects
      particlesMesh.rotation.x = elapsedTime * 0.05
      particlesMesh.rotation.y = elapsedTime * 0.03

      icosahedron.rotation.x = elapsedTime * 0.2
      icosahedron.rotation.y = elapsedTime * 0.1

      torus.rotation.x = elapsedTime * 0.15
      torus.rotation.y = elapsedTime * 0.25

      octahedron.rotation.x = elapsedTime * 0.3
      octahedron.rotation.y = elapsedTime * 0.2

      // Pulse effect for wireframe objects
      const pulse = Math.sin(elapsedTime * 2) * 0.1 + 0.9
      icosahedron.scale.set(pulse, pulse, pulse)
      torus.scale.set(pulse * 0.8, pulse * 0.8, pulse * 0.8)
      octahedron.scale.set(pulse * 1.2, pulse * 1.2, pulse * 1.2)

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)

      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Dispose resources
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      geometry.dispose()
      material.dispose()
      torusGeometry.dispose()
      torusMaterial.dispose()
      octahedronGeometry.dispose()
      octahedronMaterial.dispose()
      sphereGeometry.dispose()
      sphereMaterial.dispose()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 z-0" />
}

// Animated Feature Section
const AnimatedFeatureSection = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const features = [
    {
      title: "Steam Integration",
      description: "Seamlessly connect your Steam library to automatically import and organize your games.",
      icon: GameController,
      color: "blue",
    },
    {
      title: "Game List Management",
      description: "Create custom lists for your backlog, favorites, currently playing, and completed games.",
      icon: ListChecks,
      color: "purple",
    },
    {
      title: "Personalized AI Discovery",
      description: "Get intelligent game recommendations based on your play history and preferences.",
      icon: Sparkles,
      color: "green",
    },
    {
      title: "Wishlist Syncing",
      description: "Keep track of games you want to buy and get notified of sales and discounts.",
      icon: Heart,
      color: "blue",
    },
    {
      title: "Curated Collections",
      description: "Explore hand-picked game collections for every genre, mood, and occasion.",
      icon: FolderKanban,
      color: "purple",
    },
    {
      title: "Secure Account System",
      description: "Your data is protected with state-of-the-art security and privacy controls.",
      icon: ShieldCheck,
      color: "green",
    },
  ]

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {features.map((feature, index) => (
        <motion.div key={index} variants={itemVariants}>
          <FeatureCard
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            color={feature.color as "blue" | "purple" | "green"}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

// Parallax Game Cards
const ParallaxGameCards = ({ games }: { games: typeof trendingGames }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6"
    >
      {games.map((game, index) => (
        <motion.div key={game.id} variants={itemVariants}>
          <GameCard {...game} />
        </motion.div>
      ))}
    </motion.div>
  )
}

// Floating 3D Game Controller
const FloatingController = () => {
  return (
    <motion.div
      className="absolute -right-20 top-40 w-64 h-64 opacity-30 hidden lg:block"
      animate={{
        y: [0, 20, 0],
        rotateZ: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-neon-blue">
        <path
          d="M6 11H10M8 9V13M14.5 11H14.51M17.5 8H17.51M17.5 14H17.51M6.2 17.501L7.2 19.001C7.68 19.801 8.16 20.001 9.2 20.001H14.8C15.84 20.001 16.32 19.801 16.8 19.001L17.8 17.501C18.28 16.701 18.28 16.301 17.8 15.501L17.4 14.701C17.12 14.101 16.64 13.901 16 13.901H8C7.36 13.901 6.88 14.101 6.6 14.701L6.2 15.501C5.72 16.301 5.72 16.701 6.2 17.501Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 12C22 16.714 22 19.071 20.535 20.535C19.071 22 16.714 22 12 22C7.286 22 4.929 22 3.464 20.535C2 19.071 2 16.714 2 12C2 7.286 2 4.929 3.464 3.464C4.929 2 7.286 2 12 2C16.714 2 19.071 2 20.535 3.464C21.509 4.438 21.836 5.807 21.945 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  )
}

// Floating 3D Console
const FloatingConsole = () => {
  return (
    <motion.div
      className="absolute -left-20 bottom-40 w-64 h-64 opacity-30 hidden lg:block"
      animate={{
        y: [0, -20, 0],
        rotateZ: [0, -5, 0, 5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay: 1,
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-neon-purple"
      >
        <path
          d="M12 17H12.01M8.2 17H8.21M15.8 17H15.81M10 13H14M6.2 7H17.8C18.9201 7 19.4802 7 19.908 7.21799C20.2843 7.40973 20.5903 7.71569 20.782 8.09202C21 8.51984 21 9.0799 21 10.2V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V10.2C3 9.0799 3 8.51984 3.21799 8.09202C3.40973 7.71569 3.71569 7.40973 4.09202 7.21799C4.51984 7 5.0799 7 6.2 7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  )
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Hero3D />
      {/* Rest of the component */}

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-up">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight animate-glow">
                  Discover Your Next Gaming Adventure
                </h1>
                <p className="text-xl text-gray-300 mb-8 animate-fade-in">
                  Explore a vast collection of games, connect with fellow gamers, and elevate your gaming experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/games">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-none animate-pulse"
                    >
                      Explore Games
                    </Button>
                  </Link>
                  <Link href="/community">
                    <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                      Join Community
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 relative animate-float">{/* Removed featured game section */}</div>
            </div>
          </div>
        </section>

        {/* Trending Games Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <motion.h2
              className="text-2xl md:text-3xl font-gaming text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Trending Games
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/games" className="text-neon-blue hover:text-neon-blue/80 flex items-center">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <ParallaxGameCards games={trendingGames.slice(0, 8)} />
        </section>

        {/* Community Reviews Section */}
        <section className="py-16 bg-gaming-dark/50">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-2xl md:text-3xl font-gaming text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Community Reviews
            </motion.h2>

            <div className="overflow-x-auto pb-4">
              <motion.div
                className="flex space-x-6 min-w-max md:min-w-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {reviews.map((review, index) => (
                  <motion.div
                    key={index}
                    className="w-80 md:w-auto flex-shrink-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <ReviewCard {...review} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="py-16 container mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-gaming text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Feature Highlights
          </motion.h2>

          <AnimatedFeatureSection />
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gaming-dark/50 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.05)_0,rgba(10,10,20,0.2)_100%)]" />

            {/* Animated grid lines */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,243,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,243,255,0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
                transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)`,
                transition: "transform 0.2s ease-out",
              }}
            />
          </div>

          <motion.div
            className="container mx-auto px-4 max-w-3xl text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-gaming text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Stay in the Loop
            </motion.h2>

            <motion.p
              className="text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Subscribe to our newsletter for the latest gaming news, updates, and exclusive offers.
            </motion.p>

            <motion.form
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue flex-grow"
              />
              <Button className="neon-button whitespace-nowrap relative overflow-hidden group">
                <span className="relative z-10">Subscribe Now</span>
                <span className="absolute inset-0 bg-neon-blue/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
              </Button>
            </motion.form>
          </motion.div>
        </section>
      </div>
    </main>
  )
}
