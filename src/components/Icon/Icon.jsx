import { VscColorMode } from "react-icons/vsc";
import { MdOutlineDeleteSweep, MdDarkMode, MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { TfiBarChartAlt } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";

const iconsObj = {
  light: <MdLightMode className="light" />,
  dark: <MdDarkMode />,
  clear: <MdOutlineDeleteSweep />,
  //   about: <BsFillInfoCircleFill />,
  about: <FcAbout />,
  chart: <TfiBarChartAlt />,
  settings: <IoSettingsOutline />,
  soundOn: <IoMdVolumeHigh />,
  soundOff: <IoMdVolumeOff />
};

const Icon = ({ type }) => {
  return iconsObj[type];
};
export default Icon;
