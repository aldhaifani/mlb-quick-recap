import { memo, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SeasonSelectProps {
  years: number[];
  selectedSeason: number | null;
  onSeasonChange: (year: number) => void;
}

function SeasonSelectComponent({
  years,
  selectedSeason,
  onSeasonChange,
}: SeasonSelectProps) {
  const memoizedYears = useMemo(() => years, [years]);
  const handleValueChange = useMemo(
    () => (value: string) => onSeasonChange(Number(value)),
    [onSeasonChange]
  );

  return (
    <Select
      onValueChange={handleValueChange}
      value={selectedSeason?.toString()}
    >
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a season" />
      </SelectTrigger>
      <SelectContent>
        {memoizedYears.map((year) => (
          <SelectItem key={year} value={year.toString()}>
            {year}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export const SeasonSelect = memo(SeasonSelectComponent);
