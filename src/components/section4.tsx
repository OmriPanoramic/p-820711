import { PlayCircle } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function Section4() {
  return (
    <div className="flex w-full flex-1 shrink-0 flex-col gap-4 self-stretch mb-20">
      <div className="mb-6 text-center lg:mb-12">
        <h3 className="mb-2 text-sm text-primary">Success stories</h3>
        <h2 className="mb-4 text-h2">Customers love Panoramic</h2>
      </div>
      <AspectRatio ratio={16 / 9}>
        <div className="ac flex h-full w-full items-center justify-center rounded-lg bg-[#D5D5D5] p-4">
          <PlayCircle className="h-10 w-10 text-primary" />
        </div>
      </AspectRatio>
    </div>
  );
}
