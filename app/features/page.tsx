import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  GamepadIcon as GameController,
  ListChecks,
  Sparkles,
  Heart,
  FolderKanban,
  ShieldCheck,
  BarChart3,
  Bell,
  Users,
  MessageSquare,
  Zap,
  Layers,
} from "lucide-react"

const features = [
  {
    title: "Steam Integration",
    description:
      "Connect your Steam library to automatically import and organize your games. Track your playtime, achievements, and more across platforms.",
    icon: GameController,
    color: "blue",
  },
  {
    title: "Game List Management",
    description:
      "Create custom lists for your backlog, favorites, currently playing, and completed games. Organize your collection your way.",
    icon: ListChecks,
    color: "purple",
  },
  {
    title: "Personalized AI Discovery",
    description:
      "Get intelligent game recommendations based on your play history and preferences. Discover new games you'll love.",
    icon: Sparkles,
    color: "green",
  },
  {
    title: "Wishlist Syncing",
    description:
      "Keep track of games you want to buy and get notified of sales and discounts. Never miss a deal on your wishlist again.",
    icon: Heart,
    color: "blue",
  },
  {
    title: "Curated Collections",
    description:
      "Explore hand-picked game collections for every genre, mood, and occasion. Find the perfect game for any situation.",
    icon: FolderKanban,
    color: "purple",
  },
  {
    title: "Secure Account System",
    description:
      "Your data is protected with state-of-the-art security and privacy controls. Control what you share and with whom.",
    icon: ShieldCheck,
    color: "green",
  },
  {
    title: "Advanced Analytics",
    description:
      "Track your gaming habits with detailed statistics and visualizations. See your most-played genres, completion rates, and more.",
    icon: BarChart3,
    color: "blue",
  },
  {
    title: "Price Alerts",
    description:
      "Set price thresholds for games you're interested in and receive notifications when they go on sale below your target price.",
    icon: Bell,
    color: "purple",
  },
  {
    title: "Community Features",
    description:
      "Connect with other gamers, share your collections, and discover what your friends are playing. Build your gaming network.",
    icon: Users,
    color: "green",
  },
  {
    title: "Game Reviews & Ratings",
    description:
      "Read and write reviews for your favorite games. Share your opinions and help others discover great games.",
    icon: MessageSquare,
    color: "blue",
  },
  {
    title: "Quick Launch",
    description:
      "Launch any game in your collection directly from GameGroove with a single click. Streamline your gaming experience.",
    icon: Zap,
    color: "purple",
  },
  {
    title: "Multi-Platform Support",
    description:
      "Support for PC, PlayStation, Xbox, Nintendo Switch, and mobile games. Manage your entire gaming library in one place.",
    icon: Layers,
    color: "green",
  },
]

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-gaming text-white mb-6">Features</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            GameGroove offers a comprehensive suite of tools and features designed to enhance your gaming experience.
            Discover, organize, and share your games like never before.
          </p>
        </div>

        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden neon-border mb-8">
          <Image
            src="/images/featurespage.jpg"
            alt="GameGroove Features"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gaming-dark/80 to-transparent flex items-center">
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">All Your Games in One Place</h2>
              <p className="text-gray-300 mb-6 max-w-md">
                GameGroove brings together all your games from different platforms into a single, beautifully organized
                library.
              </p>
              <Button className="neon-button">Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-gaming text-white mb-8 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gaming-card rounded-lg border p-6 transition-all duration-300 ${
                feature.color === "blue"
                  ? "border-neon-blue hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                  : feature.color === "purple"
                    ? "border-neon-purple hover:shadow-[0_0_15px_rgba(157,0,255,0.3)]"
                    : "border-neon-green hover:shadow-[0_0_15px_rgba(0,255,102,0.3)]"
              }`}
            >
              <div className="flex items-center mb-4">
                <feature.icon
                  className={`h-6 w-6 mr-3 ${
                    feature.color === "blue"
                      ? "text-neon-blue"
                      : feature.color === "purple"
                        ? "text-neon-purple"
                        : "text-neon-green"
                  }`}
                />
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-gaming text-white mb-8 text-center">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Free</h3>
              <div className="text-3xl font-bold text-white mb-2">$0</div>
              <p className="text-gray-400">Forever free</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-300">
                <div className="h-5 w-5 rounded-full bg-neon-blue text-black flex items-center justify-center mr-3 flex-shrink-0">
                  ✓
                </div>
                Basic game library management
              </li>
              <li className="flex items-center text-gray-300">
                <div className="h-5 w-5 rounded-full bg-neon-blue text-black flex items-center justify-center mr-3 flex-shrink-0">
                  ✓
                </div>
                Up to 100 games
              </li>
              <li className="flex items-center text-gray-300">
                <div className="h-5 w-5 rounded-full bg-neon-blue text-black flex items-center justify-center mr-3 flex-shrink-0">
                  ✓
                </div>
                Limited community features
              </li>
              <li className="flex items-center text-gray-300">
                <div className="h-5 w-5 rounded-full bg-neon-blue text-black flex items-center justify-center mr-3 flex-shrink-0">
                  ✓
                </div>
                Basic recommendations
              </li>
            </ul>
            <Button className="neon-button w-full">Get Started</Button>
          </div>

          <div className="bg-gaming-card rounded-lg border border-neon-purple p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(157,0,255,0.3)] relative">
            <div className="absolute top-0 right-0 bg-neon-purple text-white text-xs font-bold px-3 py-1 rounded-bl rounded-tr">
              POPULAR
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
              <div className="text-3xl font-bold text-white mb-2">$4.99</div>
              <p className="text-gray-400">per month</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-300">
                <div className="h-5 w-5 rounded-full bg-neon-purple text-black flex items-center justify-center mr-3 flex-shrink-0">
                  ✓
                </div>
                Advanced game library management
              </li>
              <li className="flex items-center text-gray-300">
                <div className="h-5 w-5 rounded-full bg-neon-purple text-black flex items-center justify-center mr-3 flex-shrink-0">
                  ✓
                </div>
                Unlimited games
              </li>
              <li className="flex items-center text-gray-300">
                <div className="h-5 w-5 rounded-full bg-neon-purple text-black flex items-center justify-center mr-3 flex-shrink-0">
                  ✓
                </div>
                Full community features
              </li>
              <li className="flex items-center text-gray-300">
                <div className="h-5 w-5 rounded-full bg-neon-purple text-black flex items-center justify-center mr-3 flex-shrink-0">
                  ✓
                </div>
                Advanced AI recommendations
              </li>
              <li className="flex items-center text-gray-300">
                <div className="h-5 w-5 rounded-full bg-neon-purple text-black flex items-center justify-center mr-3 flex-shrink-0">
                  ✓
                </div>
                Price alerts
              </li>
            </ul>
            <Button className="neon-purple-button w-full">Subscribe Now</Button>
          </div>

          <div className="bg-gaming-card rounded-lg border border-neon-green p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,102,0.3)]">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Ultimate</h3>
              <div className="text-3xl font-bold text-white mb-2">$9.99</div>
              <p className="text-gray-400">per month</p>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-300">
                <div className="h-5 w-5 rounded-full bg-neon-green text-black flex items-center justify-center mr-3 flex-shrink-0">
                  ✓
                </div>
                Everything in Pro
              </li>
              <li className="flex items-center text-gray-300">
                <div className="h-5 w-5 rounded-full bg-neon-green text-black flex items-center justify-center mr-3 flex-shrink-0">
                  ✓
                </div>
                Priority support
              </li>
              <li className="flex items-center text-gray-300">
                <div className="h-5 w-5 rounded-full bg-neon-green text-black flex items-center justify-center mr-3 flex-shrink-0">
                  ✓
                </div>
                Early access to new features
              </li>
              <li className="flex items-center text-gray-300">
                <div className="h-5 w-5 rounded-full bg-neon-green text-black flex items-center justify-center mr-3 flex-shrink-0">
                  ✓
                </div>
                Exclusive game deals
              </li>
              <li className="flex items-center text-gray-300">
                <div className="h-5 w-5 rounded-full bg-neon-green text-black flex items-center justify-center mr-3 flex-shrink-0">
                  ✓
                </div>
                Custom themes
              </li>
            </ul>
            <Button className="bg-neon-green text-black hover:bg-neon-green/80 w-full">Get Ultimate</Button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden neon-border mb-8">
          <Image
            src="/images/community.jpg"
            alt="GameGroove Community"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gaming-dark/80 to-transparent flex items-center">
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Join Our Community</h2>
              <p className="text-gray-300 mb-6 max-w-md">
                Connect with over 50,000 gamers, share your experiences, and discover new games together.
              </p>
              <Button className="neon-button">Sign Up Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-gaming text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6">
            <h3 className="text-lg font-bold text-white mb-3">How do I connect my Steam account?</h3>
            <p className="text-gray-300">
              You can connect your Steam account by going to your profile settings and clicking on "Connect Accounts."
              Follow the prompts to authorize GameGroove to access your Steam library.
            </p>
          </div>
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6">
            <h3 className="text-lg font-bold text-white mb-3">Can I use GameGroove on mobile?</h3>
            <p className="text-gray-300">
              Yes! GameGroove is available on iOS and Android. You can download the app from the App Store or Google
              Play Store to manage your game library on the go.
            </p>
          </div>
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6">
            <h3 className="text-lg font-bold text-white mb-3">How accurate are the game recommendations?</h3>
            <p className="text-gray-300">
              Our AI-powered recommendation system learns from your gaming habits and preferences. The more you use
              GameGroove, the more accurate your recommendations will become.
            </p>
          </div>
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6">
            <h3 className="text-lg font-bold text-white mb-3">Can I cancel my subscription anytime?</h3>
            <p className="text-gray-300">
              You can cancel your subscription at any time from your account settings. You'll continue to have access to
              premium features until the end of your billing cycle.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
