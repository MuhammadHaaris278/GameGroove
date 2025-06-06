"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMemberCardProps {
  name: string
  role: string
  image: string
  description: string
}

export function TeamMemberCard({ name, role, image, description }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative w-full h-80 mx-auto overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover object-center" />
      </div>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-cyan-400 mb-4">{role}</p>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}

export default TeamMemberCard
