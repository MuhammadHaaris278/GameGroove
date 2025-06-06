"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Globe, Calendar, Tag, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/hooks/use-cart"

// Add this after the imports
const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

// Map game IDs to YouTube video IDs
const gameTrailers: Record<string, string> = {
  "hogwarts-legacy": "1O6Qstncpnc",
  "final-fantasy-xiv": "zTTtd6bnhFs",
  "horizon-forbidden-west": "Lq594XmpPBg",
  "god-of-war-ragnarok": "EE-4GvjKcfs",
  "resident-evil-4-remake": "j5Xv4zs1fAE",
  "cyberpunk-2077": "qIcTM8WXFjk",
  "elden-ring": "E3Huy2cdih0",
  "diablo-iv": "Ro26B394ZBM",
  "assassins-creed-valhalla": "ssrNcwxALS4",
}

// Add this before the GamePage component
function getYouTubeId(gameId: string): string {
  return gameTrailers[gameId] || "dQw4w9WgXcQ" // Default to Rick Roll if not found
}

// Add this before the GamePage component
function getSimilarGames(currentGameId: string) {
  // Get 3 random games that are not the current game
  const allGames = [
    {
      id: "1",
      title: "Cyberpunk 2077",
      genre: "RPG",
      image: "/images/games/cyberpunk.jpg",
      rating: 4.5,
      originalPrice: 59.99,
      salePrice: 39.99,
      onSale: true,
    },
    {
      id: "2",
      title: "The Witcher 3",
      genre: "RPG",
      image: "/images/games/witcher3.jpg",
      rating: 4.9,
      originalPrice: 39.99,
      salePrice: 19.99,
      onSale: true,
    },
    {
      id: "3",
      title: "Red Dead Redemption 2",
      genre: "Action-Adventure",
      image: "/images/games/rdr2.jpg",
      rating: 4.8,
      originalPrice: 59.99,
      salePrice: 39.99,
      onSale: true,
    },
    {
      id: "4",
      title: "God of War",
      genre: "Action-Adventure",
      image: "/images/games/godofwar.jpg",
      rating: 4.9,
      originalPrice: 49.99,
      salePrice: 29.99,
      onSale: true,
    },
    {
      id: "5",
      title: "The Last of Us Part II",
      genre: "Action-Adventure",
      image: "/images/games/lastofus2.jpg",
      rating: 4.7,
      originalPrice: 59.99,
      salePrice: 39.99,
      onSale: true,
    },
    {
      id: "6",
      title: "Horizon Zero Dawn",
      genre: "Action RPG",
      image: "/images/games/horizon.jpg",
      rating: 4.6,
      originalPrice: 49.99,
      salePrice: 19.99,
      onSale: true,
    },
    {
      id: "7",
      title: "Ghost of Tsushima",
      genre: "Action-Adventure",
      image: "/images/games/ghost.jpg",
      rating: 4.8,
      originalPrice: 59.99,
      salePrice: 39.99,
      onSale: true,
    },
    {
      id: "8",
      title: "Elden Ring",
      genre: "Action RPG",
      image: "/images/games/elden.jpg",
      rating: 4.9,
      originalPrice: 59.99,
      salePrice: 49.99,
      onSale: true,
    },
    {
      id: "9",
      title: "Hades",
      genre: "Roguelike",
      image: "/images/games/hades.jpg",
      rating: 4.8,
      originalPrice: 24.99,
      salePrice: 19.99,
      onSale: true,
    },
  ]

  const filteredGames = allGames.filter((game) => game.id !== currentGameId)
  const shuffled = [...filteredGames].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 3)
}

// Sample game data
const gamesData = {
  "hogwarts-legacy": {
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
    originalPrice: 14.99,
    description:
      "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. Embark on a journey through familiar and new locations as you explore and discover magical beasts, customize your character and craft potions, master spell casting, upgrade talents and become the wizard you want to be.",
    developer: "Avalanche Software",
    publisher: "Warner Bros. Games",
    releaseDate: "February 10, 2023",
    tags: ["Open World", "Magic", "Fantasy", "Adventure"],
    trailerUrl: "https://www.youtube.com/embed/1O6Qstncpnc",
    features: [
      "Explore an open world Hogwarts and surrounding areas",
      "Learn powerful spells and master combat",
      "Brew magical potions to aid your journey",
      "Tame and ride fantastic beasts",
      "Choose your house and forge your own path",
      "Uncover the mysteries of ancient magic",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10",
        processor: "Intel Core i5-6600 | AMD Ryzen 5 1400",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 960 4GB | AMD Radeon RX 470 4GB",
        storage: "85 GB available space",
      },
      recommended: {
        os: "Windows 10",
        processor: "Intel Core i7-8700 | AMD Ryzen 5 3600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1080 Ti | AMD Radeon RX 5700 XT",
        storage: "85 GB available space",
      },
    },
    similarGames: ["elden-ring", "god-of-war-ragnarok", "horizon-forbidden-west"],
  },
  "final-fantasy-xiv": {
    id: "final-fantasy-xiv",
    title: "Final Fantasy XIV",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/finalfantasy.jpg-phdq9Jb17lWRvU3ulDMDz9fR2AXc12.jpeg",
    rating: 4.8,
    platforms: ["PC", "PlayStation"],
    genre: "MMORPG",
    releaseYear: 2013,
    price: 11.99,
    description:
      "Final Fantasy XIV is a massively multiplayer online role-playing game (MMORPG) that invites you to explore the realm of Eorzea with friends from around the world. Form a party and adventure with a multitude of players from across the globe. Forge friendships, mount chocobos, and board airships as you and your companions create your own unique stories in the fantasy land of Eorzea.",
    developer: "Square Enix",
    publisher: "Square Enix",
    releaseDate: "August 27, 2013",
    tags: ["MMORPG", "Fantasy", "Adventure", "Multiplayer"],
    trailerUrl: "https://www.youtube.com/embed/zTTtd6bnhFs",
    features: [
      "Explore a vast and ever-expanding world",
      "Play as multiple character classes and jobs",
      "Engage in epic boss battles and dungeons",
      "Join player guilds called Free Companies",
      "Experience an emotional story spanning multiple expansions",
      "Customize your character with hundreds of gear options",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 8.1 64-bit",
        processor: "Intel Core i5 2.4GHz",
        memory: "4 GB RAM",
        graphics: "NVIDIA GeForce GTX 750 or higher",
        storage: "60 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7 3.4GHz",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 970 or higher",
        storage: "60 GB available space",
      },
    },
    similarGames: ["elden-ring", "cyberpunk-2077", "diablo-iv"],
  },
  "horizon-forbidden-west": {
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
    originalPrice: 14.99,
    description:
      "Horizon Forbidden West continues Aloy's story as she moves west to a far-future America to brave a majestic, but dangerous frontier where she'll face awe-inspiring machines and mysterious new threats. Explore distant lands, fight bigger and more awe-inspiring machines, and encounter astonishing new tribes as you return to the far-future, post-apocalyptic world of Horizon.",
    developer: "Guerrilla Games",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "February 18, 2022",
    tags: ["Open World", "Post-Apocalyptic", "Action", "Adventure"],
    trailerUrl: "https://www.youtube.com/embed/Lq594XmpPBg",
    features: [
      "Explore a vast open world spanning from Utah to the Pacific coast",
      "Engage in strategic combat with unique machines",
      "Discover new tribes and make decisions that impact their fate",
      "Upgrade your gear and abilities through an extensive skill tree",
      "Dive underwater to explore submerged ruins and discover new machines",
      "Use the Pullcaster and Shieldwing to traverse the environment in new ways",
    ],
    systemRequirements: {
      minimum: {
        os: "PlayStation 4",
        processor: "N/A",
        memory: "N/A",
        graphics: "N/A",
        storage: "100 GB available space",
      },
      recommended: {
        os: "PlayStation 5",
        processor: "N/A",
        memory: "N/A",
        graphics: "N/A",
        storage: "100 GB available space",
      },
    },
    similarGames: ["god-of-war-ragnarok", "assassins-creed-valhalla", "hogwarts-legacy"],
  },
  "god-of-war-ragnarok": {
    id: "god-of-war-ragnarok",
    title: "God of War Ragnarök",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/God_of_War_Ragnar%C3%B6k_cover.jpg-x4BP11UoISDkxophaHec9VEj4ypIJE.jpeg",
    rating: 4.9,
    platforms: ["PlayStation"],
    genre: "Action-Adventure",
    releaseYear: 2022,
    price: 15.99,
    description:
      "God of War Ragnarök is an action-adventure game that continues the story of Kratos and his teenage son Atreus as they journey through the Nine Realms, facing Norse gods and monsters while Ragnarök, the end of the world, approaches. Set three years after the events of God of War (2018), Fimbulwinter is drawing to a close, and the prophesied Ragnarök is about to begin.",
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "November 9, 2022",
    tags: ["Action", "Adventure", "Norse Mythology", "Story-Rich"],
    trailerUrl: "https://www.youtube.com/embed/EE-4GvjKcfs",
    features: [
      "Experience a heart-pounding, epic narrative across the Nine Realms",
      "Master devastating combat with the Leviathan Axe and Blades of Chaos",
      "Face fearsome Norse gods and monsters in breathtaking battles",
      "Explore stunning, mythical landscapes and solve intricate puzzles",
      "Upgrade and customize your gear and abilities",
      "Forge deep relationships between Kratos and Atreus as they face their destiny",
    ],
    systemRequirements: {
      minimum: {
        os: "PlayStation 4",
        processor: "N/A",
        memory: "N/A",
        graphics: "N/A",
        storage: "110 GB available space",
      },
      recommended: {
        os: "PlayStation 5",
        processor: "N/A",
        memory: "N/A",
        graphics: "N/A",
        storage: "110 GB available space",
      },
    },
    similarGames: ["horizon-forbidden-west", "elden-ring", "resident-evil-4-remake"],
  },
  "resident-evil-4-remake": {
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
    originalPrice: 13.99,
    description:
      "Resident Evil 4 is a remake of the 2005 original game, reimagined for 2023 with modernized gameplay, a reimagined storyline, and vividly detailed graphics. Six years after the biological disaster in Raccoon City, agent Leon S. Kennedy is dispatched to rescue the president's kidnapped daughter in a remote European village, where he faces new horrors and challenges.",
    developer: "Capcom",
    publisher: "Capcom",
    releaseDate: "March 24, 2023",
    tags: ["Horror", "Survival", "Action", "Third-Person"],
    trailerUrl: "https://www.youtube.com/embed/j5Xv4zs1fAE",
    features: [
      "Experience the horror classic completely rebuilt with modern technology",
      "Engage in intense combat with a variety of weapons and tactics",
      "Solve intricate puzzles to progress through the story",
      "Face terrifying enemies including the villagers infected by Las Plagas",
      "Manage your inventory and resources to survive",
      "Experience the story with enhanced character development and narrative",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10 (64 bit)",
        processor: "AMD Ryzen 3 1200 / Intel Core i5-7500",
        memory: "8 GB RAM",
        graphics: "AMD Radeon RX 560 with 4GB VRAM / NVIDIA GeForce GTX 1050 Ti with 4GB VRAM",
        storage: "60 GB available space",
      },
      recommended: {
        os: "Windows 10 (64 bit)",
        processor: "AMD Ryzen 5 3600 / Intel Core i7 8700",
        memory: "16 GB RAM",
        graphics: "AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070",
        storage: "60 GB available space",
      },
    },
    similarGames: ["hogwarts-legacy", "diablo-iv", "cyberpunk-2077"],
  },
  "cyberpunk-2077": {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cyberpunk_2077_box_art.jpg-WoH29dDt6Sn9cGXGL0bb6Gm7e0yrdF.jpeg",
    rating: 4.0,
    platforms: ["PC", "PlayStation", "Xbox"],
    genre: "Action RPG",
    releaseYear: 2020,
    price: 12.99,
    description:
      "Cyberpunk 2077 is an open-world, action-adventure RPG set in Night City, a megalopolis obsessed with power, glamour, and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character's cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    releaseDate: "December 10, 2020",
    tags: ["Cyberpunk", "Open World", "RPG", "Futuristic"],
    trailerUrl: "https://www.youtube.com/embed/qIcTM8WXFjk",
    features: [
      "Explore the sprawling metropolis of Night City",
      "Customize your character with cyberware and abilities",
      "Make choices that impact the story and world",
      "Engage in fast-paced combat with a variety of weapons",
      "Drive vehicles through detailed city streets",
      "Interact with complex characters and factions",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10",
        processor: "Intel Core i5-3570K or AMD FX-8310",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 970 or AMD Radeon RX 470",
        storage: "70 GB available space",
      },
      recommended: {
        os: "Windows 10",
        processor: "Intel Core i7-4790 or AMD Ryzen 3 3200G",
        memory: "12 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 or AMD Radeon R9 Fury",
        storage: "70 GB SSD",
      },
    },
    similarGames: ["elden-ring", "assassins-creed-valhalla", "final-fantasy-xiv"],
  },
  "elden-ring": {
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
    originalPrice: 14.99,
    description:
      "Elden Ring is an action RPG which takes place in the Lands Between, sometime after the Shattering of the titular Elden Ring. The game is played from a third-person perspective, with players freely roaming its interactive open world. Gameplay elements include combat featuring various types of weapons and magic spells, horseback riding, and crafting.",
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    releaseDate: "February 25, 2022",
    tags: ["Open World", "Souls-like", "Fantasy", "Difficult"],
    trailerUrl: "https://www.youtube.com/embed/E3Huy2cdih0",
    features: [
      "Explore a vast open world with seamless transitions",
      "Engage in challenging combat with a variety of weapons and spells",
      "Discover the rich lore created by Hidetaka Miyazaki and George R.R. Martin",
      "Customize your character and playstyle with numerous options",
      "Face formidable bosses that test your skills and strategy",
      "Experience dynamic weather and day/night cycles that affect gameplay",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10",
        processor: "Intel Core i5-8400 | AMD Ryzen 3 3300X",
        memory: "12 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 3GB | AMD Radeon RX 580 4GB",
        storage: "60 GB available space",
      },
      recommended: {
        os: "Windows 10/11",
        processor: "Intel Core i7-8700K | AMD Ryzen 5 3600X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1070 8GB | AMD Radeon RX Vega 56 8GB",
        storage: "60 GB available space",
      },
    },
    similarGames: ["hogwarts-legacy", "god-of-war-ragnarok", "diablo-iv"],
  },
  "diablo-iv": {
    id: "diablo-iv",
    title: "Diablo IV",
    coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diabloIV-6tEgmHS5D0p9cBYNhzUwaHFFhwOH7m.jpeg",
    rating: 4.3,
    platforms: ["PC", "PlayStation", "Xbox"],
    genre: "Action RPG",
    releaseYear: 2023,
    price: 13.99,
    description:
      "Diablo IV is an action RPG where players battle against the demonic forces of Lilith, the daughter of Mephisto. Set many years after the events of Diablo III, the game takes place in a dark, gothic world where players can choose from five classes: Barbarian, Sorceress, Druid, Rogue, and Necromancer. The game features an open world, extensive character customization, and both PvE and PvP gameplay.",
    developer: "Blizzard Entertainment",
    publisher: "Blizzard Entertainment",
    releaseDate: "June 6, 2023",
    tags: ["Dungeon Crawler", "Dark Fantasy", "Multiplayer", "Loot-based"],
    trailerUrl: "https://www.youtube.com/embed/Ro26B394ZBM",
    features: [
      "Explore a vast, seamless open world with five distinct regions",
      "Choose from five unique character classes with extensive customization",
      "Engage in visceral combat against hordes of demons",
      "Collect and customize powerful loot to enhance your character",
      "Play solo or team up with friends in cooperative multiplayer",
      "Participate in world events and PvP combat in designated areas",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-2500K or AMD FX-8100",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 660 or AMD Radeon R9 280",
        storage: "90 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4670K or AMD Ryzen 1300X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 970 or AMD Radeon RX 470",
        storage: "90 GB SSD",
      },
    },
    similarGames: ["elden-ring", "cyberpunk-2077", "assassins-creed-valhalla"],
  },
  "assassins-creed-valhalla": {
    id: "assassins-creed-valhalla",
    title: "Assassin's Creed Valhalla",
    coverImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AssassinCreedVallaha%20-%20Copy.jpg-huE4tG1yUYVrT6n2TCQjz0xbFqUGzx.jpeg",
    rating: 4.4,
    platforms: ["PC", "PlayStation", "Xbox"],
    genre: "Action RPG",
    releaseYear: 2020,
    price: 9.99,
    description:
      "Assassin's Creed Valhalla is an action RPG that lets you raid, conquer, and fight for glory as Eivor, a legendary Viking warrior. Driven from Norway by endless wars and dwindling resources, you lead your clan of Norsemen across the icy North Sea to the rich lands of England's broken kingdoms. You must carve out a new future for your clan while uncovering the secrets of a mysterious ancient order.",
    developer: "Ubisoft Montreal",
    publisher: "Ubisoft",
    releaseDate: "November 10, 2020",
    tags: ["Vikings", "Open World", "Historical", "Stealth"],
    trailerUrl: "https://www.youtube.com/embed/ssrNcwxALS4",
    features: [
      "Lead epic Viking raids against Saxon troops and fortresses",
      "Dual-wield powerful weapons and experience brutal combat",
      "Shape the growth of your settlement by constructing and upgrading buildings",
      "Influence the world around you by forging alliances with neighboring kingdoms",
      "Explore a vast open world from Norway to England",
      "Customize your character's appearance, gear, and tattoos",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10 (64-bit)",
        processor: "Intel Core i5-4460 or AMD Ryzen 3 1200",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 960 or AMD Radeon R9 380",
        storage: "50 GB available space",
      },
      recommended: {
        os: "Windows 10 (64-bit)",
        processor: "Intel Core i7-4790 or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 or AMD Radeon RX 570",
        storage: "50 GB available space",
      },
    },
    similarGames: ["horizon-forbidden-west", "cyberpunk-2077", "god-of-war-ragnarok"],
  },
}

export default function GameDetailPage({ params }: { params: { id: string } }) {
  const { addItem } = useCart()

  // Get game data or use a default if not found
  const game = gamesData[params.id as keyof typeof gamesData] || {
    id: params.id,
    title: "Game Not Found",
    coverImage: "/placeholder.svg?height=600&width=400",
    rating: 0,
    platforms: [],
    genre: "Unknown",
    releaseYear: 0,
    price: 0,
    description: "This game could not be found in our database.",
    developer: "Unknown",
    publisher: "Unknown",
    releaseDate: "Unknown",
    tags: [],
    trailerUrl: "",
    features: [],
    systemRequirements: {
      minimum: {
        os: "",
        processor: "",
        memory: "",
        graphics: "",
        storage: "",
      },
      recommended: {
        os: "",
        processor: "",
        memory: "",
        graphics: "",
        storage: "",
      },
    },
    similarGames: [],
  }

  const displayPrice = game.onSale ? game.salePrice || game.price : game.price
  const displayOriginalPrice = game.onSale ? game.originalPrice || game.price : undefined

  const handleAddToCart = () => {
    addItem({
      id: game.id,
      title: game.title,
      coverImage: game.coverImage,
      price: displayPrice,
      originalPrice: displayOriginalPrice,
      quantity: 1,
    })
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <Link href="/games" className="inline-flex items-center text-gray-400 hover:text-neon-blue mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Games
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Cover Image and Purchase */}
        <div>
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-4 mb-6">
            <div className="relative aspect-[3/4] rounded-md overflow-hidden mb-6">
              <Image
                src={game.coverImage || "/placeholder.svg"}
                alt={game.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {game.onSale && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  SALE
                </div>
              )}
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {game.onSale ? (
                    <>
                      <span className="text-2xl font-bold text-neon-blue">${displayPrice.toFixed(2)}</span>
                      <span className="text-gray-400 line-through ml-2">${displayOriginalPrice?.toFixed(2)}</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-white">${game.price.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex items-center bg-gaming-highlight px-2 py-1 rounded">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="text-white font-bold">{game.rating.toFixed(1)}</span>
                </div>
              </div>

              {game.onSale && displayOriginalPrice && (
                <div className="text-sm text-red-500 mb-4">
                  Save ${(displayOriginalPrice - displayPrice).toFixed(2)} (
                  {Math.round((1 - displayPrice / displayOriginalPrice) * 100)}% off)
                </div>
              )}

              <Button className="neon-button w-full mb-3" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>

              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" /> Wishlist
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Developer</h3>
                <p className="text-white">{game.developer}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Publisher</h3>
                <p className="text-white">{game.publisher}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Release Date</h3>
                <p className="text-white">{game.releaseDate}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((platform) => (
                    <span key={platform} className="bg-gaming-highlight text-white text-xs font-bold px-2 py-1 rounded">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {game.tags.map((tag) => (
                    <span key={tag} className="bg-gaming-highlight text-white text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Game Details */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{game.title}</h1>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-gray-400">
              <Globe className="h-4 w-4 mr-1" />
              <span>{game.genre}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{game.releaseYear}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Tag className="h-4 w-4 mr-1" />
              <span>{game.onSale ? "On Sale" : "Regular Price"}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Users className="h-4 w-4 mr-1" />
              <span>Single Player</span>
            </div>
          </div>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="system">System Requirements</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6">
                <h2 className="text-xl font-bold mb-4">About {game.title}</h2>
                <p className="text-gray-300 leading-relaxed">{game.description}</p>
              </div>

              {/* Game Trailer */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Game Trailer</h2>
                <YouTubeEmbed videoId={getYouTubeId(game.id)} />
              </section>
            </TabsContent>

            <TabsContent value="features">
              <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6">
                <h2 className="text-xl font-bold mb-4">Game Features</h2>
                <ul className="space-y-2">
                  {game.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-neon-blue text-black flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="system">
              <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6">
                <h2 className="text-xl font-bold mb-6">System Requirements</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-neon-blue">Minimum</h3>
                    <ul className="space-y-3">
                      <li className="flex flex-col">
                        <span className="text-sm text-gray-400">OS</span>
                        <span className="text-white">{game.systemRequirements.minimum.os}</span>
                      </li>
                      <li className="flex flex-col">
                        <span className="text-sm text-gray-400">Processor</span>
                        <span className="text-white">{game.systemRequirements.minimum.processor}</span>
                      </li>
                      <li className="flex flex-col">
                        <span className="text-sm text-gray-400">Memory</span>
                        <span className="text-white">{game.systemRequirements.minimum.memory}</span>
                      </li>
                      <li className="flex flex-col">
                        <span className="text-sm text-gray-400">Graphics</span>
                        <span className="text-white">{game.systemRequirements.minimum.graphics}</span>
                      </li>
                      <li className="flex flex-col">
                        <span className="text-sm text-gray-400">Storage</span>
                        <span className="text-white">{game.systemRequirements.minimum.storage}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-4 text-neon-purple">Recommended</h3>
                    <ul className="space-y-3">
                      <li className="flex flex-col">
                        <span className="text-sm text-gray-400">OS</span>
                        <span className="text-white">{game.systemRequirements.recommended.os}</span>
                      </li>
                      <li className="flex flex-col">
                        <span className="text-sm text-gray-400">Processor</span>
                        <span className="text-white">{game.systemRequirements.recommended.processor}</span>
                      </li>
                      <li className="flex flex-col">
                        <span className="text-sm text-gray-400">Memory</span>
                        <span className="text-white">{game.systemRequirements.recommended.memory}</span>
                      </li>
                      <li className="flex flex-col">
                        <span className="text-sm text-gray-400">Graphics</span>
                        <span className="text-white">{game.systemRequirements.recommended.graphics}</span>
                      </li>
                      <li className="flex flex-col">
                        <span className="text-sm text-gray-400">Storage</span>
                        <span className="text-white">{game.systemRequirements.recommended.storage}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Add this after the description section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Overview</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300">
                {game.title} is an award-winning game that takes players on an epic journey through a beautifully
                crafted world. With stunning visuals, immersive gameplay, and a compelling narrative, it has captivated
                gamers worldwide.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Features</h2>
            <div className="bg-gray-800 p-6 rounded-lg">
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Immersive open-world environment with dynamic weather and day/night cycles</li>
                <li>Deep character progression system with multiple skill trees</li>
                <li>Engaging storyline with meaningful choices and consequences</li>
                <li>Stunning visual effects and realistic character animations</li>
                <li>Original soundtrack that adapts to gameplay situations</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">System Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Minimum</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>
                    <span className="font-semibold">OS:</span> Windows 10 64-bit
                  </li>
                  <li>
                    <span className="font-semibold">Processor:</span> Intel Core i5-4670K or AMD Ryzen 3 1300X
                  </li>
                  <li>
                    <span className="font-semibold">Memory:</span> 8 GB RAM
                  </li>
                  <li>
                    <span className="font-semibold">Graphics:</span> NVIDIA GTX 960 or AMD Radeon R9 280
                  </li>
                  <li>
                    <span className="font-semibold">Storage:</span> 50 GB available space
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Recommended</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>
                    <span className="font-semibold">OS:</span> Windows 10 64-bit
                  </li>
                  <li>
                    <span className="font-semibold">Processor:</span> Intel Core i7-8700K or AMD Ryzen 5 3600X
                  </li>
                  <li>
                    <span className="font-semibold">Memory:</span> 16 GB RAM
                  </li>
                  <li>
                    <span className="font-semibold">Graphics:</span> NVIDIA RTX 2070 or AMD Radeon RX 5700 XT
                  </li>
                  <li>
                    <span className="font-semibold">Storage:</span> 50 GB SSD
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Update the similar games section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Similar Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getSimilarGames(game.id).map((similarGame) => (
                <Link key={similarGame.id} href={`/games/${similarGame.id}`}>
                  <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative h-48 w-full">
                      <Image
                        src={similarGame.image || "/placeholder.svg"}
                        alt={similarGame.title}
                        fill
                        className="object-cover"
                      />
                      {similarGame.onSale && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          SALE
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-1">{similarGame.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{similarGame.genre}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          {similarGame.onSale ? (
                            <div className="flex items-center gap-2">
                              <span className="text-gray-400 line-through">
                                ${similarGame.originalPrice.toFixed(2)}
                              </span>
                              <span className="text-cyan-400 font-bold">${similarGame.salePrice.toFixed(2)}</span>
                            </div>
                          ) : (
                            <span className="text-cyan-400 font-bold">${similarGame.originalPrice.toFixed(2)}</span>
                          )}
                        </div>
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">★</span>
                          <span className="text-white">{similarGame.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
