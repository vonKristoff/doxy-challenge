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
import "./styles/index.css";

export const Shell = (): JSX.Element => {
  const [videoActive, setVideoActive] = useState(true);
  const [micActive, setMicActive] = useState(true);
  const [callActive, setCallActive] = useState(true);

  const controls: CallControl[] = [
    {
      id: "hangup",
      label: "Leave call",
      icons: [<PhoneOff />, <Phone />],
      active: callActive,
      onClick: () => setCallActive((prev) => !prev),
    },
    {
      id: "video",
      label: videoActive ? "Turn off camera" : "Turn on camera",
      icons: [<VideoOff />, <Video />],
      active: videoActive,
      onClick: () => setVideoActive((prev) => !prev),
    },
    {
      id: "mic",
      label: micActive ? "Mute microphone" : "Unmute microphone",
      icons: [<MicOff />, <Mic />],
      active: micActive,
      onClick: () => setMicActive((prev) => !prev),
    },
    {
      id: "menu",
      label: "More options",
      icons: [<Menu />, <Menu />],
      active: false,
      onClick: () => {},
    },
  ];

  return (
    <>
      <CallControlBar controls={controls} />
    </>
  );
};
