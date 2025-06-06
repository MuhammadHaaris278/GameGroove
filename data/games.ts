export interface Game {
  id: string
  title: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  rating: number
  releaseYear: number
  platforms: string[]
  genres: string[]
  publisher: string
  developer: string
  image: string
  screenshots: string[]
  trailerVideoId: string
  features: string[]
}

export const games: Game[] = [
  {
    id: "1",
    title: "Cyberpunk 2077",
    description:
      "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
    price: 59.99,
    originalPrice: 69.99,
    discount: 14,
    rating: 4.5,
    releaseYear: 2020,
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["RPG", "Action", "Adventure"],
    publisher: "CD Projekt",
    developer: "CD Projekt RED",
    image: "/placeholder.svg?height=300&width=400",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    trailerVideoId: "qIcTM8WXFjk",
    features: ["Open World", "First-Person Perspective", "Character Customization", "Multiple Endings"],
  },
  {
    id: "2",
    title: "The Witcher 3: Wild Hunt",
    description:
      "The Witcher 3: Wild Hunt is a story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.",
    price: 39.99,
    originalPrice: 49.99,
    discount: 20,
    rating: 4.9,
    releaseYear: 2015,
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    genres: ["RPG", "Action", "Adventure"],
    publisher: "CD Projekt",
    developer: "CD Projekt RED",
    image: "/placeholder.svg?height=300&width=400",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    trailerVideoId: "c0i88t0Kacs",
    features: ["Open World", "Third-Person Perspective", "Character Development", "Multiple Endings"],
  },
  {
    id: "3",
    title: "Red Dead Redemption 2",
    description:
      "Red Dead Redemption 2 is an epic tale of life in America's unforgiving heartland. The game's vast and atmospheric world also provides the foundation for a brand new online multiplayer experience.",
    price: 49.99,
    originalPrice: 59.99,
    discount: 17,
    rating: 4.8,
    releaseYear: 2018,
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["Action", "Adventure", "Western"],
    publisher: "Rockstar Games",
    developer: "Rockstar Studios",
    image: "/placeholder.svg?height=300&width=400",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    trailerVideoId: "eaW0tYpxyp0",
    features: ["Open World", "Third-Person Perspective", "Character Development", "Online Multiplayer"],
  },
  {
    id: "4",
    title: "God of War",
    description:
      "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive... and teach his son to do the same.",
    price: 39.99,
    originalPrice: 49.99,
    discount: 20,
    rating: 4.9,
    releaseYear: 2018,
    platforms: ["PlayStation", "PC"],
    genres: ["Action", "Adventure"],
    publisher: "Sony Interactive Entertainment",
    developer: "Santa Monica Studio",
    image: "/placeholder.svg?height=300&width=400",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    trailerVideoId: "K0u_kAWLJOA",
    features: ["Third-Person Perspective", "Character Development", "Cinematic Storytelling", "Combat System"],
  },
  {
    id: "5",
    title: "The Legend of Zelda: Breath of the Wild",
    description:
      "Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series.",
    price: 59.99,
    rating: 4.9,
    releaseYear: 2017,
    platforms: ["Switch", "Wii U"],
    genres: ["Action", "Adventure"],
    publisher: "Nintendo",
    developer: "Nintendo",
    image: "/placeholder.svg?height=300&width=400",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    trailerVideoId: "zw47_q9wbBE",
    features: ["Open World", "Third-Person Perspective", "Puzzle Solving", "Exploration"],
  },
  {
    id: "6",
    title: "Elden Ring",
    description:
      "Elden Ring is an action RPG which takes place in the Lands Between, sometime after the Shattering of the titular Elden Ring. It is ruled over by the demigod children of Queen Marika the Eternal, each possessing a shard of the Ring, known as a Great Rune.",
    price: 59.99,
    rating: 4.8,
    releaseYear: 2022,
    platforms: ["PC", "PlayStation", "Xbox"],
    genres: ["RPG", "Action", "Adventure"],
    publisher: "Bandai Namco Entertainment",
    developer: "FromSoftware",
    image: "/placeholder.svg?height=300&width=400",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    trailerVideoId: "E3Huy2cdih0",
    features: ["Open World", "Third-Person Perspective", "Character Customization", "Challenging Combat"],
  },
  {
    id: "7",
    title: "Horizon Forbidden West",
    description:
      "Horizon Forbidden West continues Aloy's story as she moves west to a far-future America to brave a majestic, but dangerous frontier where she'll face awe-inspiring machines and mysterious new threats.",
    price: 69.99,
    originalPrice: 79.99,
    discount: 13,
    rating: 4.7,
    releaseYear: 2022,
    platforms: ["PlayStation"],
    genres: ["Action", "Adventure", "RPG"],
    publisher: "Sony Interactive Entertainment",
    developer: "Guerrilla Games",
    image: "/placeholder.svg?height=300&width=400",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    trailerVideoId: "Lq594XmpPBg",
    features: ["Open World", "Third-Person Perspective", "Character Development", "Combat System"],
  },
  {
    id: "8",
    title: "Ghost of Tsushima",
    description:
      "In the late 13th century, the Mongol empire has laid waste to entire nations along their campaign to conquer the East. Tsushima Island is all that stands between mainland Japan and a massive Mongol invasion fleet led by the ruthless and cunning general, Khotun Khan.",
    price: 49.99,
    originalPrice: 59.99,
    discount: 17,
    rating: 4.8,
    releaseYear: 2020,
    platforms: ["PlayStation"],
    genres: ["Action", "Adventure"],
    publisher: "Sony Interactive Entertainment",
    developer: "Sucker Punch Productions",
    image: "/placeholder.svg?height=300&width=400",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    trailerVideoId: "rTNfgIAi3pY",
    features: ["Open World", "Third-Person Perspective", "Character Development", "Combat System"],
  },
  {
    id: "9",
    title: "Hades",
    description:
      "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.",
    price: 24.99,
    rating: 4.9,
    releaseYear: 2020,
    platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    genres: ["Action", "Indie", "RPG"],
    publisher: "Supergiant Games",
    developer: "Supergiant Games",
    image: "/placeholder.svg?height=300&width=400",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    trailerVideoId: "mD8x5xLHRho",
    features: ["Rogue-like", "Isometric Perspective", "Character Development", "Fast-paced Combat"],
  },
]

export function getGameById(id: string): Game | undefined {
  return games.find((game) => game.id === id)
}
