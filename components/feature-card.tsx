import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  color: "blue" | "purple" | "green"
}

export default function FeatureCard({ title, description, icon: Icon, color }: FeatureCardProps) {
  const colorClasses = {
    blue: "border-neon-blue text-neon-blue hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]",
    purple: "border-neon-purple text-neon-purple hover:shadow-[0_0_15px_rgba(157,0,255,0.3)]",
    green: "border-neon-green text-neon-green hover:shadow-[0_0_15px_rgba(0,255,102,0.3)]",
  }

  return (
    <div className={`bg-gaming-card rounded-lg border p-6 transition-all duration-300 ${colorClasses[color]}`}>
      <div className="flex items-center mb-4">
        <Icon className="h-6 w-6 mr-3" />
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
