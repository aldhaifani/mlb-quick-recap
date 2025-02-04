import { memo, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Team } from "@/lib/types";

interface TeamSelectProps {
  teams: Team[];
  selectedTeam: number | null;
  onTeamChange: (teamId: number) => void;
}

function TeamSelectComponent({
  teams,
  selectedTeam,
  onTeamChange,
}: TeamSelectProps) {
  const memoizedTeams = useMemo(() => teams, [teams]);
  const handleValueChange = useMemo(
    () => (value: string) => onTeamChange(Number(value)),
    [onTeamChange]
  );

  return (
    <Select onValueChange={handleValueChange} value={selectedTeam?.toString()}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a team" />
      </SelectTrigger>
      <SelectContent>
        {memoizedTeams.map((team) => (
          <SelectItem key={team.id} value={team.id.toString()}>
            {team.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export const TeamSelect = memo(TeamSelectComponent);
