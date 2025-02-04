import { useState } from "react";
import { AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#FFF8E1] w-full">
      <div className="container mx-auto px-4 py-1 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AlertCircle className="h-4 w-4 text-[#2B547E]" />
          <p className="text-[#2B547E] font-normal text-sm">
            Loading may take 15 to 25 seconds. Please be patient. 🙃
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-[#2B547E] hover:text-[#1A365D] hover:bg-[#FFE082]"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
    </div>
  );
}
