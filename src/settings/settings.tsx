import type { JSX } from "react";
import type { CallControl } from "../callControlBar";
import { videoConfig } from "./videoConfig";

interface SettingsProps {
  controls: CallControl[];
}

export const Settings = ({ controls }: SettingsProps): JSX.Element => {
  let options = controls.filter(({ id }) => id !== "menu");
  options = [...options, ...videoConfig];
  return (
    <section data-settings aria-label="Settings">
      <ul role="list">
        {options.map(({ id, active }) => (
          <li key={id}>
            <div className="status">
              <span>{id}</span>
              <span data-status={active}></span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
