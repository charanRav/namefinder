import { Copy, ExternalLink, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface NameCardProps {
  name: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const NameCard = ({ name, isFavorite, onToggleFavorite }: NameCardProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(name);
    toast.success("Name copied to clipboard!");
  };

  const domainCheckUrl = `https://namecheap.pxf.io/Bn7A10?domain=${name.toLowerCase()}.com`;

  return (
    <div className="group bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm rounded-xl p-6 shadow-[var(--shadow-soft)] border border-border/50 hover:shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-exo font-bold text-foreground break-all">
          {name}
        </h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleFavorite}
          className="shrink-0 hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
          />
        </Button>
      </div>
      
      <div className="flex gap-2">
        <Button
          onClick={handleCopy}
          variant="outline"
          size="sm"
          className="flex-1 gap-2"
        >
          <Copy className="w-4 h-4" />
          Copy
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="flex-1 gap-2"
        >
          <a href={domainCheckUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4" />
            Check Domain
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NameCard;
