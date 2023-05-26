import { FaTwitter,  } from "react-icons/fa";
import { BiHomeCircle, } from "react-icons/bi";
import { AiFillTwitterSquare } from 'react-icons/ai'
import { HiEllipsisHorizontalCircle } from "react-icons/hi2";
import {
    HiHashtag,
    HiOutlineMail,
    HiOutlineUser,
    HiUser,
    HiOutlineDotsCircleHorizontal,
    HiOutlineHashtag,
    HiMail
} from "react-icons/hi";
import {
    RiNotification2Line,
    RiNotification2Fill,
    RiFileList2Line,
    RiHome7Fill,
    RiFileList2Fill } from "react-icons/ri";
import {
    MdBookmarkBorder,
    MdBookmark } from "react-icons/md";

export const ITEMS = [
    { text: 'Inicio', off: <BiHomeCircle />, on: <RiHome7Fill /> },
    { text: 'Explorar', off: <HiOutlineHashtag />, on: <HiHashtag />},
    { text: 'Notificaciones', off: <RiNotification2Line />, on: <RiNotification2Fill />},
    { text: 'Mensajes', off: <HiOutlineMail />, on: <HiMail />},
    { text: 'Listas', off: <RiFileList2Line />, on: <RiFileList2Fill />},
    { text: 'Guardados', off: <MdBookmarkBorder />, on: <MdBookmark />},
    { text: 'Twitter Blue', off: <FaTwitter size='1.2rem' />, on: <AiFillTwitterSquare />},
    { text: 'Perfil',off: <HiOutlineUser />, on: <HiUser />},
    { text: 'Más Opciones', off: <HiOutlineDotsCircleHorizontal />, on: <HiEllipsisHorizontalCircle />},
]