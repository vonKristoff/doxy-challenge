import type { JSX } from "react";
import { useState } from "react";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  PhoneOff,
  Phone,
  Menu,
} from "lucide-react";
import { CallControlBar } from "./callControlBar";
import type { CallControl } from "./callControlBar";
import { Dialog } from "./dialog";
import { Settings } from "./settings";
import "./styles/index.css";

export const Shell = (): JSX.Element => {
  const [callActive, setCallActive] = useState(true);
  const [videoActive, setVideoActive] = useState(false);
  const [micActive, setMicActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const controls: CallControl[] = [
    {
      id: "call",
      label: "Leave call",
      icons: [<PhoneOff color="white" />, <Phone />],
      active: callActive,
      onClick: () => setCallActive((prev) => !prev),
    },
    {
      id: "video",
      label: videoActive ? "Turn off camera" : "Turn on camera",
      icons: [<VideoOff color="white" />, <Video />],
      active: videoActive,
      onClick: () => setVideoActive((prev) => !prev),
    },
    {
      id: "mic",
      label: micActive ? "Mute microphone" : "Unmute microphone",
      icons: [<MicOff color="white" />, <Mic />],
      active: micActive,
      onClick: () => setMicActive((prev) => !prev),
    },
    {
      id: "menu",
      label: menuActive ? "Close menu" : "More options",
      icons: [<Menu />, <Menu />],
      active: menuActive,
      onClick: () => setMenuActive((prev) => !prev),
    },
  ];

  return (
    <>
      <Dialog open={menuActive} onClose={() => setMenuActive(false)}>
        <Settings controls={controls} />
      </Dialog>
      <CallControlBar controls={controls} />
    </>
  );
};
