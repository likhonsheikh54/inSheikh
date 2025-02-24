import { FaTelegramPlane, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; ২০২৪ ইনশেখ। MIT লাইসেন্স।</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/likhonsheikh54/inSheikh"
              className="hover:text-accent-foreground transition-colors duration-200"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://t.me/RecentCoders" className="hover:text-accent-foreground transition-colors duration-200">
              <FaTelegramPlane className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

