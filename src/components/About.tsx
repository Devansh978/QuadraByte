import { Award, Clock, Heart, Zap } from "lucide-react"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import harshdesai from "../assets/harshdesai.jpg"
import yashnema from "../assets/yashnema.jpg"
import aman from "../assets/aman.jpg"
import devansh from "../assets/devanshchourey.png"

const team = [
  {
    name: "Yash Nema",
    role: "Backend Engineer",
    skills: "APIs & Databases",
    initials: "YN",
    photo: yashnema,
  },
  {
    name: "Devansh Chourey",
    role: "UI/UX Designer",
    skills: "Design & User Experience",
    initials: "DC",
    photo: devansh,
  },
  {
    name: "Harsh Desai",
    role: "Backend Engineer",
    skills: "APIs & Databases",
    initials: "HD",
    photo: harshdesai,
  },
  {
    name: "Aman Singh Rajput",
    role: "Frontend Developer",
    skills: "React & Modern Web",
    initials: "AR",
    photo: aman,
  },
]

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on code quality",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Your deadlines are our priority",
  },
  {
    icon: Heart,
    title: "Client-Focused",
    description: "Your success is our success",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Optimized for peak performance",
  },
]

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14 md:mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 text-balance px-4">Meet The Team</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A passionate team of developers and designers dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {team.map((member, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bg-card border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${index * 100 + 100}ms` }}
            >
              {/* Decorative glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 right-0 h-40 w-40 rounded-full bg-primary/15 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60"
              />
              <CardHeader className="items-center text-center">
                <div className="relative">
                  <img
                    src={member.photo || "/placeholder.svg"}
                    alt={`${member.name} portrait`}
                    width={160}
                    height={160}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border border-border ring-2 ring-transparent transition-all duration-300 group-hover:ring-primary/30"
                  />
                  {/* Subtle shine on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-full [mask-image:radial-gradient(transparent_55%,black)] bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <CardTitle className="mt-4 text-xl text-foreground">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">{member.skills}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-10 md:mb-12 px-4">
            Why Work With Us?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                  <p className="text-white/80 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}