import { PlayCircle } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Player, BigPlayButton } from "video-react";

export function Section4() {
  return (
    <div className="mb-20 flex w-full flex-1 shrink-0 flex-col gap-4 self-stretch">
      <div className="mb-6 text-center lg:mb-12">
        <h3 className="mb-2 text-sm text-primary">Success stories</h3>
        <h2 className="mb-4 text-h2">Users love Panoramic</h2>
      </div>
      <AspectRatio ratio={16 / 9}>
        <div className="ac flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-[#D5D5D5]">
          <Player className="h-full w-full" fluid autoPlay showControls={false}>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            <BigPlayButton position="center" className="bg-primary !text-[#fff] !rounded-full !border-none">
              <PlayCircle className="h-10 w-10 text-primary" />
            </BigPlayButton>
          </Player>
        </div>
      </AspectRatio>
    </div>
  );
}
