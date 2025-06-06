import Image from "next/image"
import TeamMemberCard from "@/components/team-member-card"
import { Award, Users, Lightbulb, Target, Clock } from "lucide-react"

// Team members data with updated images and roles
const teamMembers = [
  {
    name: "Muhammad Haaris",
    role: "CEO",
    bio: "Strategic leadership and market scaling expert with a passion for gaming and community building.",
    image: "/images/muhammadhaaris.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "haaris@gamegroove.com",
  },
  {
    name: "Bilal Qureshi",
    role: "COO",
    bio: "Operations efficiency and logistics specialist focused on creating seamless user experiences.",
    image: "/images/bilalqureshi.jpg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "bilal@gamegroove.com",
  },
  {
    name: "Abubakar Sohail",
    role: "CCO",
    bio: "Marketing and branding strategist with a background in gaming community engagement.",
    image: "/images/abubakarsohail-new.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "abubakar@gamegroove.com",
  },
  {
    name: "Abdulrehman",
    role: "CTO",
    bio: "Tech infrastructure and security expert with a focus on scalable architecture and performance.",
    image: "/images/abdulrehman.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "abdulrehman@gamegroove.com",
  },
  {
    name: "Ahmad Ali Amjad",
    role: "CFO",
    bio: "Financial stability and growth specialist with experience in tech startups and gaming industry.",
    image: "/images/ahmadaliamjad.jpeg",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "ahmad@gamegroove.com",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      {/* Mission Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-gaming text-white mb-6">Our Mission</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            GameGroove is a student-built, community-driven platform designed to transform how gamers discover and
            organize their favorite games. We're passionate about creating a space where gaming enthusiasts can connect,
            share, and elevate their gaming experience.
          </p>
        </div>

        {/* Our Story Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-gaming text-white mb-8 text-center">Our Story</h2>
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <p className="text-gray-300 mb-6">
                  GameGroove was born from a shared passion for gaming and a vision to create a platform where gamers
                  could discover, discuss, and enjoy their favorite games. Founded in 2020 by a group of gaming
                  enthusiasts, we've grown from a small blog to a comprehensive gaming platform.
                </p>
                <p className="text-gray-300">
                  Our journey has been marked by a commitment to quality, community, and the celebration of gaming
                  culture. We believe that games are more than just entertainment—they're experiences that bring people
                  together, challenge our minds, and inspire our creativity.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-lg h-80 overflow-hidden rounded-lg border border-gaming-highlight">
                  <Image
                    src="/images/our-story.png"
                    alt="The GameGroove Team"
                    fill
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-gaming text-white mb-8 text-center">Meet Our Team</h2>
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMemberCard
                name="Muhammad Haaris"
                role="Founder & CEO"
                image="/images/muhammadhaaris.jpeg"
                description="Gaming enthusiast with a vision to create the ultimate gaming platform."
              />
              <TeamMemberCard
                name="Bilal Qureshi"
                role="Chief Operations Officer"
                image="/images/bilalqureshi.jpg"
                description="Tech wizard who ensures our platform runs smoothly and securely."
              />
              <TeamMemberCard
                name="Ahmad Ali Amjad"
                role="Chief Financial Officer"
                image="/images/ahmadaliamjad.jpeg"
                description="Creative genius behind our brand identity and visual aesthetics."
              />
              <TeamMemberCard
                name="Abdulrehman"
                role="Chief Technology Officer"
                image="/images/abdulrehman.jpeg"
                description="Content strategist who curates the best gaming content for our users."
              />
              <TeamMemberCard
                name="Abubakar Sohail"
                role="Chief Communications Officer"
                image="/images/abubakarsohail-new.jpeg"
                description="Community builder who fosters engagement and connection among our users."
              />
            </div>
          </div>
        </section>

        {/* Achievements Section - Replacing Tech Stack */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-gaming text-white mb-8 text-center">Our Achievements</h2>
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gaming-highlight transition-all duration-300 hover:bg-gaming-highlight/80">
                <div className="mb-3">
                  <Users className="h-8 w-8 text-neon-blue" />
                </div>
                <h3 className="font-bold text-white mb-2">50,000+</h3>
                <p className="text-sm text-gray-400">Active Users</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gaming-highlight transition-all duration-300 hover:bg-gaming-highlight/80">
                <div className="mb-3">
                  <Award className="h-8 w-8 text-neon-purple" />
                </div>
                <h3 className="font-bold text-white mb-2">Best Gaming Platform</h3>
                <p className="text-sm text-gray-400">Student Tech Awards 2023</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gaming-highlight transition-all duration-300 hover:bg-gaming-highlight/80">
                <div className="mb-3">
                  <Lightbulb className="h-8 w-8 text-neon-green" />
                </div>
                <h3 className="font-bold text-white mb-2">10,000+</h3>
                <p className="text-sm text-gray-400">Game Recommendations</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gaming-highlight transition-all duration-300 hover:bg-gaming-highlight/80">
                <div className="mb-3">
                  <Clock className="h-8 w-8 text-neon-blue" />
                </div>
                <h3 className="font-bold text-white mb-2">2+ Years</h3>
                <p className="text-sm text-gray-400">Serving Gamers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Plans Section - New section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-gaming text-white mb-8 text-center">Future Plans</h2>
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Expanding Our Platform</h3>
                <p className="text-gray-300 mb-4">
                  We're working on expanding GameGroove to include more platforms and services. Our goal is to create a
                  unified gaming experience that connects all your gaming accounts and libraries in one place.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Target className="h-5 w-5 text-neon-blue mr-2" />
                    Mobile app for iOS and Android
                  </li>
                  <li className="flex items-center">
                    <Target className="h-5 w-5 text-neon-blue mr-2" />
                    Enhanced recommendation algorithms
                  </li>
                  <li className="flex items-center">
                    <Target className="h-5 w-5 text-neon-blue mr-2" />
                    Integration with more gaming platforms
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Community Growth</h3>
                <p className="text-gray-300 mb-4">
                  Building a strong, inclusive gaming community is at the heart of what we do. We're planning several
                  initiatives to foster connections between gamers and create meaningful interactions.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Target className="h-5 w-5 text-neon-purple mr-2" />
                    Community events and tournaments
                  </li>
                  <li className="flex items-center">
                    <Target className="h-5 w-5 text-neon-purple mr-2" />
                    Expanded social features
                  </li>
                  <li className="flex items-center">
                    <Target className="h-5 w-5 text-neon-purple mr-2" />
                    Partnerships with game developers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-gaming text-white mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gaming-card rounded-lg border border-neon-blue p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]">
              <h3 className="text-xl font-bold text-white mb-3">Community First</h3>
              <p className="text-gray-300">
                We believe in the power of community. Every feature we build is designed to bring gamers together and
                create meaningful connections through shared gaming experiences.
              </p>
            </div>
            <div className="bg-gaming-card rounded-lg border border-neon-purple p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(157,0,255,0.3)]">
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-300">
                We're constantly pushing the boundaries of what's possible in game discovery and organization,
                leveraging cutting-edge technology to create new and exciting features.
              </p>
            </div>
            <div className="bg-gaming-card rounded-lg border border-neon-green p-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,102,0.3)]">
              <h3 className="text-xl font-bold text-white mb-3">Inclusivity</h3>
              <p className="text-gray-300">
                Gaming is for everyone. We're committed to creating a platform that welcomes gamers of all backgrounds,
                preferences, and skill levels.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
