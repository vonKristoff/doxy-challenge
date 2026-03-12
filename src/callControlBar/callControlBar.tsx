import type { JSX } from "react";
import { Video, Mic, PhoneIcon, Menu } from "lucide-react";

export const CallControlBar = (): JSX.Element => {
  return (
    <div data-hover-layout>
      <nav>
        <button type="button">
          <PhoneIcon />
        </button>
        <button type="button">
          <Video />
        </button>
        <button type="button">
          <Mic />
        </button>
        <button type="button">
          <Menu />
        </button>
      </nav>
    </div>
  );
};
