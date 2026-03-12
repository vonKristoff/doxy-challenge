import type { JSX } from "react";
import { Video, Mic, PhoneIcon, Menu, Plus } from "lucide-react";

export const CallControlBar = (): JSX.Element => {
  return (
    <div data-controls>
      <nav>
        <div data-controls-icon>
          <Plus />
        </div>
        <ul>
          <li>
            <button data-bounce="padding">
              <span>
                <PhoneIcon />
              </span>
            </button>
          </li>
          <li>
            <button data-bounce="padding">
              <span>
                <Video />
              </span>
            </button>
          </li>
          <li>
            <button data-bounce="padding">
              <span>
                <Mic />
              </span>
            </button>
          </li>
          <li>
            <button data-bounce="padding">
              <span>
                <Menu />
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
