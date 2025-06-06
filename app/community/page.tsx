import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, MessageSquare, Trophy, Calendar, Heart, Star, Clock, ArrowRight } from "lucide-react"

// Update the community members avatars
const communityMembers = [
  {
    name: "Alex Johnson",
    avatar: "/images/reviews-1.png",
    role: "Moderator",
    games: 156,
    reviews: 42,
    joined: "2 years ago",
  },
  {
    name: "Sarah Miller",
    avatar: "/images/reviews-2.png",
    role: "Game Curator",
    games: 203,
    reviews: 78,
    joined: "1 year ago",
  },
  {
    name: "David Chen",
    avatar: "/images/reviews-3.png",
    role: "Community Leader",
    games: 312,
    reviews: 104,
    joined: "3 years ago",
  },
  {
    name: "Emma Wilson",
    avatar: "/images/reviews-4.png",
    role: "Content Creator",
    games: 178,
    reviews: 56,
    joined: "1.5 years ago",
  },
  {
    name: "Michael Brown",
    avatar: "/images/reviews-1.png",
    role: "Game Developer",
    games: 89,
    reviews: 23,
    joined: "6 months ago",
  },
  {
    name: "Jessica Lee",
    avatar: "/images/reviews-2.png",
    role: "Esports Player",
    games: 145,
    reviews: 37,
    joined: "1 year ago",
  },
]

// Update the forum discussions avatars
const forumDiscussions = [
  {
    title: "What's your favorite RPG of all time?",
    author: "Alex Johnson",
    avatar: "/images/reviews-1.png",
    replies: 42,
    views: 156,
    lastActivity: "2 hours ago",
    tags: ["RPG", "Discussion"],
  },
  {
    title: "Elden Ring vs Dark Souls: Which is harder?",
    author: "Sarah Miller",
    avatar: "/images/reviews-2.png",
    replies: 78,
    views: 203,
    lastActivity: "5 hours ago",
    tags: ["Souls-like", "Difficulty"],
  },
  {
    title: "Best co-op games to play with friends",
    author: "David Chen",
    avatar: "/images/reviews-3.png",
    replies: 35,
    views: 142,
    lastActivity: "1 day ago",
    tags: ["Co-op", "Multiplayer"],
  },
  {
    title: "PC vs Console: The eternal debate",
    author: "Emma Wilson",
    avatar: "/images/reviews-4.png",
    replies: 104,
    views: 312,
    lastActivity: "3 days ago",
    tags: ["PC", "Console", "Debate"],
  },
  {
    title: "Hidden gems you need to play in 2023",
    author: "Michael Brown",
    avatar: "/images/reviews-1.png",
    replies: 27,
    views: 98,
    lastActivity: "4 days ago",
    tags: ["Indie", "Recommendations"],
  },
]

// Sample events
const upcomingEvents = [
  {
    title: "Summer Game Tournament",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hogwartslegacy-dbWXnnRaTLRx4OT9qECWvzZ0BIxCRM.jpeg",
    date: "July 15-17, 2023",
    description: "Join our annual summer gaming tournament with prizes and live streaming.",
    participants: 128,
    games: ["Fortnite", "Valorant", "Rocket League"],
  },
  {
    title: "Game Developer AMA",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eldenring-JwndNOrOvhGqd9Dq2X3Yuv1xBPjLda.jpeg",
    date: "August 5, 2023",
    description: "Ask Me Anything session with indie game developers from around the world.",
    participants: 56,
    games: ["Various Indie Games"],
  },
  {
    title: "Retro Gaming Night",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diabloIV-6tEgmHS5D0p9cBYNhzUwaHFFhwOH7m.jpeg",
    date: "August 20, 2023",
    description: "A nostalgic evening playing classic games from the 80s and 90s.",
    participants: 42,
    games: ["Super Mario Bros", "Sonic the Hedgehog", "Street Fighter II"],
  },
]

// Sample game collections
const popularCollections = [
  {
    title: "Must-Play RPGs",
    creator: "Alex Johnson",
    games: 15,
    likes: 342,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/finalfantasy.jpg-phdq9Jb17lWRvU3ulDMDz9fR2AXc12.jpeg",
  },
  {
    title: "Cozy Games for Relaxing",
    creator: "Sarah Miller",
    games: 12,
    likes: 278,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Horizon_Forbidden_West_cover_art.jpg-vq37ZagQ877FrdQURDlksiztZ8cVjj.jpeg",
  },
  {
    title: "Adrenaline-Pumping Action",
    creator: "David Chen",
    games: 18,
    likes: 203,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/God_of_War_Ragnar%C3%B6k_cover.jpg-x4BP11UoISDkxophaHec9VEj4ypIJE.jpeg",
  },
]

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-gaming text-white mb-6">Community</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Connect with fellow gamers, join discussions, participate in events, and share your gaming experiences with
            the GameGroove community.
          </p>
        </div>

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

      {/* Community Tabs */}
      <section className="mb-16">
        <Tabs defaultValue="members" className="w-full">
          <TabsList className="mb-8 w-full justify-start overflow-x-auto">
            <TabsTrigger value="members" className="flex items-center">
              <Users className="h-4 w-4 mr-2" /> Members
            </TabsTrigger>
            <TabsTrigger value="forum" className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" /> Forum
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" /> Events
            </TabsTrigger>
            <TabsTrigger value="collections" className="flex items-center">
              <Heart className="h-4 w-4 mr-2" /> Collections
            </TabsTrigger>
          </TabsList>

          {/* Members Tab */}
          <TabsContent value="members">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-2xl font-bold text-white">Community Members</h2>
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <div className="relative flex-grow sm:w-64">
                  <Input
                    type="text"
                    placeholder="Search members..."
                    className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue pr-10"
                  />
                  <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gaming-card rounded-lg border border-gaming-highlight p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]"
                >
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{member.name}</h3>
                      <p className="text-sm text-neon-blue">{member.role}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">{member.games}</p>
                      <p className="text-xs text-gray-400">Games</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">{member.reviews}</p>
                      <p className="text-xs text-gray-400">Reviews</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">{Math.floor(Math.random() * 500) + 100}</p>
                      <p className="text-xs text-gray-400">Friends</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-400">Joined {member.joined}</p>
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline">Load More Members</Button>
            </div>
          </TabsContent>

          {/* Forum Tab */}
          <TabsContent value="forum">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-2xl font-bold text-white">Forum Discussions</h2>
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <div className="relative flex-grow sm:w-64">
                  <Input
                    type="text"
                    placeholder="Search discussions..."
                    className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue pr-10"
                  />
                  <MessageSquare className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                <Button className="neon-button whitespace-nowrap">New Topic</Button>
              </div>
            </div>

            <div className="bg-gaming-card rounded-lg border border-gaming-highlight overflow-hidden">
              {forumDiscussions.map((discussion, index) => (
                <div
                  key={index}
                  className={`p-6 hover:bg-gaming-highlight/50 transition-colors ${
                    index < forumDiscussions.length - 1 ? "border-b border-gaming-highlight" : ""
                  }`}
                >
                  <div className="flex items-start">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      <Image
                        src={discussion.avatar || "/placeholder.svg"}
                        alt={discussion.author}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-white hover:text-neon-blue transition-colors mb-2">
                        <Link href="#">{discussion.title}</Link>
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {discussion.tags.map((tag) => (
                          <span key={tag} className="bg-gaming-highlight text-white text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center text-sm text-gray-400 gap-x-4 gap-y-2">
                        <span>By {discussion.author}</span>
                        <span className="flex items-center">
                          <MessageSquare className="h-3 w-3 mr-1" /> {discussion.replies} replies
                        </span>
                        <span className="flex items-center">
                          <Users className="h-3 w-3 mr-1" /> {discussion.views} views
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> {discussion.lastActivity}
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="flex-shrink-0">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline">Load More Discussions</Button>
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
              <Button className="neon-purple-button">
                <Calendar className="mr-2 h-4 w-4" /> View Calendar
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-gaming-card rounded-lg border border-gaming-highlight overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]"
                >
                  <div className="relative h-48">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <div className="flex items-center text-white">
                        <Calendar className="h-4 w-4 mr-2 text-neon-blue" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center text-gray-400">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{event.participants} participants</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Trophy className="h-4 w-4 mr-1" />
                        <span>{event.games.length} games</span>
                      </div>
                    </div>
                    <Button className="w-full">Join Event</Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6">
              <h3 className="text-xl font-bold text-white mb-4">Past Events</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden mr-4 flex-shrink-0">
                      <Image
                        src={`/placeholder.svg?height=64&width=64`}
                        alt={`Past event ${i}`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-white">Spring Gaming Tournament {2023 - i}</h4>
                      <p className="text-sm text-gray-400">
                        April {10 + i}, {2023 - i} • {120 + i * 10} participants
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Recap
                    </Button>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="ghost">View All Past Events</Button>
              </div>
            </div>
          </TabsContent>

          {/* Collections Tab */}
          <TabsContent value="collections">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Popular Collections</h2>
              <Button className="neon-green-button">
                <Heart className="mr-2 h-4 w-4" /> Create Collection
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {popularCollections.map((collection, index) => (
                <div
                  key={index}
                  className="bg-gaming-card rounded-lg border border-gaming-highlight overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]"
                >
                  <div className="relative h-40">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                      <h3 className="text-lg font-bold text-white">{collection.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-400 mb-3">By {collection.creator}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-400">
                        <Star className="h-4 w-4 mr-1" />
                        <span>{collection.games} games</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Heart className="h-4 w-4 mr-1" />
                        <span>{collection.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6">
                <h3 className="text-xl font-bold text-white mb-4">Featured Collection</h3>
                <div className="relative h-48 rounded-md overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Featured Collection"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                    <h4 className="text-lg font-bold text-white">Best Games of 2023 (So Far)</h4>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  A curated selection of the best games released in 2023, featuring titles across all genres and
                  platforms.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-400">By GameGroove Staff</p>
                  <Button variant="outline" size="sm" className="flex items-center">
                    View Collection <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6">
                <h3 className="text-xl font-bold text-white mb-4">Your Collections</h3>
                <div className="space-y-4 mb-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center">
                      <div className="relative w-12 h-12 rounded-md overflow-hidden mr-3 flex-shrink-0">
                        <Image
                          src={`/placeholder.svg?height=48&width=48`}
                          alt={`Collection ${i}`}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-white">My Favorite Games {i}</h4>
                        <p className="text-xs text-gray-400">
                          {5 + i} games • {20 + i * 5} likes
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  ))}
                </div>
                <Button className="w-full">View All Your Collections</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Community Stats */}
      <section>
        <h2 className="text-2xl md:text-3xl font-gaming text-white mb-8 text-center">Community Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gaming-card rounded-lg border border-neon-blue p-6 text-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]">
            <Users className="h-10 w-10 text-neon-blue mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">50,000+</div>
            <p className="text-gray-400">Active Members</p>
          </div>
          <div className="bg-gaming-card rounded-lg border border-neon-purple p-6 text-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(157,0,255,0.3)]">
            <MessageSquare className="h-10 w-10 text-neon-purple mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">25,000+</div>
            <p className="text-gray-400">Forum Posts</p>
          </div>
          <div className="bg-gaming-card rounded-lg border border-neon-green p-6 text-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,102,0.3)]">
            <Star className="h-10 w-10 text-neon-green mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">100,000+</div>
            <p className="text-gray-400">Game Reviews</p>
          </div>
          <div className="bg-gaming-card rounded-lg border border-neon-blue p-6 text-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]">
            <Heart className="h-10 w-10 text-neon-blue mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">15,000+</div>
            <p className="text-gray-400">Collections Created</p>
          </div>
        </div>
      </section>
    </div>
  )
}
