import { PlayCircle } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function Section4() {
  return (
    <div className="flex flex-col gap-4 w-full flex-1 shrink-0 self-stretch">
      <div className="text-center mb-12">
        <h3 className="text-orange-500 font-semibold mb-2">Success stories</h3>
        <h2 className="text-4xl font-bold mb-4">Customers love Panoramic</h2>
      </div>
      <AspectRatio ratio={16 / 9}>
        <div className="bg-[#D5D5D5] rounded-lg p-4 flex justify-center items-center w-full h-full ac">
          <PlayCircle className="w-10 h-10 text-primary" />
        </div>
      </AspectRatio>
    </div>
  );
}
