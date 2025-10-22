import { useEffect } from "react";

interface GoogleAdProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  adLayout?: string;
}

const GoogleAd = ({ 
  adSlot, 
  adFormat = "auto",
  fullWidthResponsive = true,
  adLayout
}: GoogleAdProps) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="my-8 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1088683909010630"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
        {...(adLayout && { "data-ad-layout": adLayout })}
      />
    </div>
  );
};

export default GoogleAd;
