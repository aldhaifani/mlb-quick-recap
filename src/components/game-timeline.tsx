import type { GameEvent } from "@/lib/types";

interface GameTimelineProps {
  events: GameEvent[];
}

export function GameTimeline({ events }: GameTimelineProps) {
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-secondary before:to-transparent">
      {events.map((event, index) => (
        <div
          key={index}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-secondary text-slate-500 group-[.is-active]:text-secondary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            {event.inning}
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="font-bold text-slate-900">{event.title}</div>
            <div className="text-slate-500">{event.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
