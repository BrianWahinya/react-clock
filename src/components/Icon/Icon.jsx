import { VscColorMode } from "react-icons/vsc";
import {
  MdOutlineDeleteSweep,
  MdDarkMode,
  MdLightMode,
  MdOutlineDelete,
  MdOutlineDarkMode,
  MdFamilyRestroom,
} from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { TfiBarChartAlt } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";
import { RiDeleteBin5Fill, RiCake2Line } from "react-icons/ri";
import {
  FaBirthdayCake,
  FaCar,
  FaHamburger,
  FaPizzaSlice,
} from "react-icons/fa";
import { GiNinjaStar, GiSelfLove } from "react-icons/gi";
import { SiGotomeeting } from "react-icons/si";
import { TbBeachOff } from "react-icons/tb";

const iconsObj = {
  light: <MdLightMode className="light" />,
  dark: <MdDarkMode />,
  clear: <MdOutlineDeleteSweep />,
  //   about: <BsFillInfoCircleFill />,
  about: <FcAbout />,
  chart: <TfiBarChartAlt />,
  settings: <IoSettingsOutline />,
  soundOn: <IoMdVolumeHigh />,
  soundOff: <IoMdVolumeOff />,
  delete: <RiDeleteBin5Fill />,
  birthday: <FaBirthdayCake />,
  important: <GiNinjaStar />,
  love: <GiSelfLove />,
  roadtrip: <FaCar />,
  vacation: <TbBeachOff />,
  meeting: <SiGotomeeting />,
  lovedate: <FaPizzaSlice />,
};

const Icon = ({ type }) => {
  return iconsObj[type];
};
export default Icon;
