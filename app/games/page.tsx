"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import GameCard from "@/components/game-card"
import { Search, Filter, SlidersHorizontal } from "lucide-react"

// Sample game data
const allGames = [
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
    originalPrice: 14.99,
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
    originalPrice: 14.99,
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
    originalPrice: 13.99,
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
    originalPrice: 14.99,
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
    originalPrice: 9.99,
  },
]

// Get unique genres
const genres = Array.from(new Set(allGames.map((game) => game.genre)))

// Get unique platforms
const platforms = Array.from(new Set(allGames.flatMap((game) => game.platforms)))

export default function GamesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20])
  const [onSaleOnly, setOnSaleOnly] = useState(false)
  const [filteredGames, setFilteredGames] = useState(allGames)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Apply filters
  useEffect(() => {
    let result = allGames

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter((game) => game.title.toLowerCase().includes(query))
    }

    // Genre filter
    if (selectedGenres.length > 0) {
      result = result.filter((game) => selectedGenres.includes(game.genre))
    }

    // Platform filter
    if (selectedPlatforms.length > 0) {
      result = result.filter((game) => game.platforms.some((platform) => selectedPlatforms.includes(platform)))
    }

    // Price range filter
    result = result.filter((game) => {
      const price = game.onSale ? game.salePrice || game.price : game.price
      return price >= priceRange[0] && price <= priceRange[1]
    })

    // On sale filter
    if (onSaleOnly) {
      result = result.filter((game) => game.onSale)
    }

    setFilteredGames(result)
  }, [searchQuery, selectedGenres, selectedPlatforms, priceRange, onSaleOnly])

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]))
  }

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) => (prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]))
  }

  const handlePriceRangeChange = (values: number[]) => {
    setPriceRange([values[0], values[1]])
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedGenres([])
    setSelectedPlatforms([])
    setPriceRange([0, 20])
    setOnSaleOnly(false)
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-gaming text-white mb-4 md:mb-0">Games</h1>
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0 md:w-64">
            <Input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <Button
            variant="outline"
            className="md:hidden"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            aria-label="Toggle filters"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters - Desktop */}
        <div className="hidden lg:block">
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6 sticky top-24">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <SlidersHorizontal className="mr-2 h-5 w-5" />
                Filters
              </h2>
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm">
                Clear All
              </Button>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-4">Price Range</h3>
              <Slider
                defaultValue={[0, 20]}
                max={20}
                step={1}
                value={[priceRange[0], priceRange[1]]}
                onValueChange={handlePriceRangeChange}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-gray-400">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            {/* On Sale */}
            <div className="mb-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="on-sale" checked={onSaleOnly} onCheckedChange={() => setOnSaleOnly(!onSaleOnly)} />
                <Label htmlFor="on-sale" className="text-gray-300">
                  On Sale Only
                </Label>
              </div>
            </div>

            {/* Genres */}
            <div className="mb-6">
              <h3 className="font-medium mb-4">Genres</h3>
              <div className="space-y-2">
                {genres.map((genre) => (
                  <div key={genre} className="flex items-center space-x-2">
                    <Checkbox
                      id={`genre-${genre}`}
                      checked={selectedGenres.includes(genre)}
                      onCheckedChange={() => toggleGenre(genre)}
                    />
                    <Label htmlFor={`genre-${genre}`} className="text-gray-300">
                      {genre}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Platforms */}
            <div>
              <h3 className="font-medium mb-4">Platforms</h3>
              <div className="space-y-2">
                {platforms.map((platform) => (
                  <div key={platform} className="flex items-center space-x-2">
                    <Checkbox
                      id={`platform-${platform}`}
                      checked={selectedPlatforms.includes(platform)}
                      onCheckedChange={() => togglePlatform(platform)}
                    />
                    <Label htmlFor={`platform-${platform}`} className="text-gray-300">
                      {platform}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filters - Mobile */}
        {isFilterOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex justify-end">
            <div className="bg-gaming-dark border-l border-gaming-highlight w-full max-w-xs overflow-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold flex items-center">
                  <SlidersHorizontal className="mr-2 h-5 w-5" />
                  Filters
                </h2>
                <Button variant="ghost" size="sm" onClick={() => setIsFilterOpen(false)}>
                  Close
                </Button>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider
                  defaultValue={[0, 20]}
                  max={20}
                  step={1}
                  value={[priceRange[0], priceRange[1]]}
                  onValueChange={handlePriceRangeChange}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-400">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* On Sale */}
              <div className="mb-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="on-sale-mobile"
                    checked={onSaleOnly}
                    onCheckedChange={() => setOnSaleOnly(!onSaleOnly)}
                  />
                  <Label htmlFor="on-sale-mobile" className="text-gray-300">
                    On Sale Only
                  </Label>
                </div>
              </div>

              {/* Genres */}
              <div className="mb-6">
                <h3 className="font-medium mb-4">Genres</h3>
                <div className="space-y-2">
                  {genres.map((genre) => (
                    <div key={`mobile-${genre}`} className="flex items-center space-x-2">
                      <Checkbox
                        id={`genre-mobile-${genre}`}
                        checked={selectedGenres.includes(genre)}
                        onCheckedChange={() => toggleGenre(genre)}
                      />
                      <Label htmlFor={`genre-mobile-${genre}`} className="text-gray-300">
                        {genre}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platforms */}
              <div className="mb-6">
                <h3 className="font-medium mb-4">Platforms</h3>
                <div className="space-y-2">
                  {platforms.map((platform) => (
                    <div key={`mobile-${platform}`} className="flex items-center space-x-2">
                      <Checkbox
                        id={`platform-mobile-${platform}`}
                        checked={selectedPlatforms.includes(platform)}
                        onCheckedChange={() => togglePlatform(platform)}
                      />
                      <Label htmlFor={`platform-mobile-${platform}`} className="text-gray-300">
                        {platform}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="neon-button w-full" onClick={() => setIsFilterOpen(false)}>
                  Apply Filters
                </Button>
                <Button variant="outline" className="w-full" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Games Grid */}
        <div className="lg:col-span-3">
          {filteredGames.length === 0 ? (
            <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-8 text-center">
              <h2 className="text-xl font-bold mb-4">No games found</h2>
              <p className="text-gray-400 mb-6">Try adjusting your filters or search query.</p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {filteredGames.slice(0, 9).map((game) => (
                <GameCard key={game.id} {...game} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
