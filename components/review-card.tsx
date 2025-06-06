import Image from "next/image"
import { Star } from "lucide-react"

interface ReviewCardProps {
  name: string
  avatar: string
  rating: number
  review: string
  date: string
}

export default function ReviewCard({ name, avatar, rating, review, date }: ReviewCardProps) {
  return (
    <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={avatar || "/placeholder.svg?height=48&width=48"}
            alt={name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>

      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`} />
        ))}
      </div>

      <p className="text-gray-300">{review}</p>
    </div>
  )
}
