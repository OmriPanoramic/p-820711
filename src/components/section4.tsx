import { PlayCircle } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Player, BigPlayButton } from "video-react";
import video_mobile from "@/assets/videos/panoramic_optimize 2025_web_720.mp4";
import video_desktop from "@/assets/videos/panoramic_optimize 2025_web_720.mp4";
import { useEffect } from "react";
import { useState } from "react";

export function Section4() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const video = isMobile ? video_mobile : video_desktop;

  return (
    <div className="mb-20 flex w-full flex-1 shrink-0 flex-col gap-4 self-stretch">
      <div className="mb-6 text-center lg:mb-12">
        <h3 className="mb-2 text-sm text-primary">Panoramic Optimize Video</h3>
        <h2 className="mb-4 text-h2">
          Panoramic Optimize: Premium insights,
          <br />
          peak performance
        </h2>
      </div>
      <AspectRatio ratio={16 / 9}>
        <div className="ac flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-[#D5D5D5]">
          <Player
            className="h-full w-full"
            fluid
            autoPlay={false}
            showControls={false}
          >
            <source src={video} />
            <BigPlayButton
              position="center"
              className="!rounded-full !border-none bg-primary !text-[#fff]"
              data-fs-track="play-video-button"
            >
              <PlayCircle className="h-10 w-10 text-primary" />
            </BigPlayButton>
          </Player>
        </div>
      </AspectRatio>
    </div>
  );
}
