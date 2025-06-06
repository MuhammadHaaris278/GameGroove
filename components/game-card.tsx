"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"

interface GameCardProps {
  id: string
  title: string
  coverImage: string
  rating: number
  platforms: string[]
  genre: string
  releaseYear: number
  price: number
  onSale?: boolean
  salePrice?: number
  originalPrice?: number
}

export default function GameCard({
  id,
  title,
  coverImage,
  rating,
  platforms = [], // Default to empty array
  genre,
  releaseYear,
  price,
  onSale = false,
  salePrice,
  originalPrice,
}: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  // Use nullish coalescing to handle undefined values
  const displayPrice = onSale ? (salePrice ?? price) : price
  const displayOriginalPrice = onSale ? (originalPrice ?? price) : undefined

  const handleAddToCart = () => {
    addItem({
      id,
      title,
      coverImage,
      price: displayPrice,
      originalPrice: displayOriginalPrice,
      quantity: 1,
    })
  }

  // Format price safely
  const formatPrice = (value: number | undefined): string => {
    return typeof value === "number" ? `$${value.toFixed(2)}` : "$0.00"
  }

  return (
    <div
      className="bg-gaming-card rounded-lg overflow-hidden border border-gaming-highlight transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Link href={`/games/${id}`} className="block relative aspect-[3/4] overflow-hidden">
          <Image
            src={coverImage || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>

        {/* Sale Badge */}
        {onSale && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</div>
        )}

        {/* Rating - Only show if rating is defined */}
        {typeof rating === "number" && (
          <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded flex items-center">
            <Star className="h-3 w-3 text-yellow-400 mr-1" />
            {rating.toFixed(1)}
          </div>
        )}

        {/* Platforms */}
        <div className="absolute bottom-2 right-2 flex space-x-1">
          {platforms.map((platform) => (
            <span key={platform} className="bg-gaming-highlight text-white text-xs font-bold px-2 py-1 rounded">
              {platform}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <Link href={`/games/${id}`} className="block">
          <h3 className="font-bold text-white hover:text-neon-blue transition-colors line-clamp-2">{title}</h3>
        </Link>
        <div className="mt-2 text-sm text-gray-400">
          <span>{genre}</span> • <span>{releaseYear}</span>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="flex items-center">
            {onSale ? (
              <>
                <span className="font-bold text-neon-blue">{formatPrice(displayPrice)}</span>
                <span className="text-gray-400 line-through ml-2 text-sm">{formatPrice(originalPrice ?? price)}</span>
              </>
            ) : (
              <span className="font-bold text-white">{formatPrice(price)}</span>
            )}
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="text-white hover:text-neon-blue"
            onClick={handleAddToCart}
            aria-label={`Add ${title} to cart`}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
