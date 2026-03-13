import type { JSX, ReactNode } from "react";
import { Plus } from "lucide-react";

export interface CallControl {
  id: string;
  label: string;
  icons: [active: ReactNode, inactive: ReactNode];
  active: boolean;
  onClick: () => void;
}

interface CallControlBarProps {
  controls: CallControl[];
}

export const CallControlBar = ({
  controls,
}: CallControlBarProps): JSX.Element => {
  return (
    <div data-controls>
      <nav aria-label="Call controls">
        <div data-controls-icon aria-hidden="true">
          <Plus color="white" />
        </div>
        <ul role="list">
          {controls.map(({ id, label, icons, active, onClick }) => (
            <li key={id}>
              <button
                data-action={id}
                type="button"
                data-bounce="padding"
                aria-label={label}
                aria-pressed={active}
                onClick={onClick}
              >
                <span aria-hidden="true">{active ? icons[0] : icons[1]}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
