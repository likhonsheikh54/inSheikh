import Header from "@/components/Header"
import Features from "@/components/Features"
import QuickStart from "@/components/QuickStart"
import Documentation from "@/components/Documentation"
import Dashboard from "@/components/Dashboard"
import DownloadSection from "@/components/DownloadSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Features />
        <QuickStart />
        <Documentation />
        <Dashboard />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}

