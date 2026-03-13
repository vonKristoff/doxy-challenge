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
  const [videoActive, setVideoActive] = useState(false);
  const [micActive, setMicActive] = useState(false);
  const [callActive, setCallActive] = useState(false);

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
