import { DiscordIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YoutubeIcon } from "@/modules/landing/components/icons"

export const Footer = () => {
  return (

    <footer className="mt-24 bg-primary">
      <div className="max-w-[1200px] h-32 mx-auto px-8 py-4 flex flex-col md:flex-row items-center justify-around md:justify-between">
        <img src="/footer-logo.png" alt="ICP Brazil" className="h-6" />
        <div className="flex items-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-light hover:text-dark transition-colors">
            <DiscordIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-light hover:text-dark transition-colors">
            <InstagramIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-light hover:text-dark transition-colors">
            <TwitterIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-light hover:text-dark transition-colors">
            <LinkedInIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-light hover:text-dark transition-colors">
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
