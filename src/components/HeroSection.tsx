import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center mb-12 animate-fade-in">
      <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/50 backdrop-blur-sm">
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-accent-foreground">AI-Powered Name Generation</span>
      </div>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
        Name Finder
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Generate creative, brandable names for YouTube channels, startups, gaming IDs, 
        podcasts, and fashion brands—instantly and for free.
      </p>
    </div>
  );
};

export default HeroSection;
