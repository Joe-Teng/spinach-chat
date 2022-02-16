import React, { FC } from "react"

interface IconProps {
  active?: true | false | undefined | null,
  onClick?: () => void
}

const User: FC<IconProps> = ({ active, onClick }) => {
  return <svg onClick={() => { onClick && onClick() }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke={active ? "#009988" : "#9e9e9e"} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
  </svg>
}

const Message: FC<IconProps> = ({ active, onClick }) => {
  return <svg onClick={() => { onClick && onClick() }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle-2" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke={active ? "#009988" : "#9e9e9e"} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
    <line x1="12" y1="12" x2="12" y2="12.01" />
    <line x1="8" y1="12" x2="8" y2="12.01" />
    <line x1="16" y1="12" x2="16" y2="12.01" />
  </svg>
}

const Collect: FC<IconProps> = ({ active, onClick }) => {
  return <svg onClick={() => { onClick && onClick() }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke={active ? "#009988" : "#9e9e9e"} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
    <line x1="12" y1="12" x2="20" y2="7.5" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <line x1="12" y1="12" x2="4" y2="7.5" />
  </svg>
}

const Folder: FC<IconProps> = ({ active, onClick }) => {
  return <svg onClick={() => { onClick && onClick() }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-folder-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke={active ? "#009988" : "#9e9e9e"} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
    <line x1="12" y1="10" x2="12" y2="16" />
    <line x1="9" y1="13" x2="15" y2="13" />
  </svg>
}

const Cut: FC<IconProps> = ({ active, onClick }) => {
  return <svg onClick={() => { onClick && onClick() }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cut" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="7" cy="17" r="3" />
    <circle cx="17" cy="17" r="3" />
    <line x1="9.15" y1="14.85" x2="18" y2="4" />
    <line x1="6" y1="4" x2="14.85" y2="14.85" />
  </svg>
}

const Aperture: FC<IconProps> = ({ active, onClick }) => {
  return <svg onClick={() => { onClick && onClick() }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-aperture" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="9" />
    <line x1="3.6" y1="15" x2="14.15" y2="15" />
    <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)" />
    <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)" />
    <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)" />
    <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)" />
  </svg>
}

const Device: FC<IconProps> = ({ active, onClick }) => {
  return <svg onClick={() => { onClick && onClick() }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-devices" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke={active ? "#009988" : "#9e9e9e"} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <rect x="13" y="8" width="8" height="12" rx="1" />
    <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
    <line x1="16" y1="9" x2="18" y2="9" />
  </svg>
}

const Tool: FC<IconProps> = ({ active, onClick }) => {
  return <svg onClick={() => { onClick && onClick() }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tool" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke={active ? "#009988" : "#9e9e9e"} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
  </svg>
}

const Plus: FC<IconProps> = ({ active, onClick }) => {
  return <svg onClick={() => { onClick && onClick() }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
}

const Search: FC<IconProps> = ({ active, onClick }) => {
  return <svg onClick={() => { onClick && onClick() }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="10" cy="10" r="7" />
    <line x1="21" y1="21" x2="15" y2="15" />
  </svg>
}

const More: FC<IconProps> = ({ active, onClick }) => {
  return <svg onClick={() => { onClick && onClick() }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#333" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="5" cy="12" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
  </svg>
}

const Mute: FC<IconProps> = ({ active, onClick }) => {
  return <svg onClick={() => { onClick && onClick() }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell-x" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ccc" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
    <path d="M10.5 9.5l3 3m0 -3l-3 3" />
  </svg>
}

const Emoji: FC<IconProps> = ({ active, onClick }) => {
  return <svg onClick={() => { onClick && onClick() }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-happy" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="9" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
    <path d="M8 13a4 4 0 1 0 8 0m0 0h-8" />
  </svg>
}

const Message2: FC<IconProps> = ({ active, onClick }) => {
  return <svg onClick={() => { onClick && onClick() }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-messenger" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
    <path d="M8 13l3 -2l2 2l3 -2" />
  </svg>
}

const Video: FC<IconProps> = ({ active, onClick }) => {
  return <svg onClick={() => { onClick && onClick() }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-video-minus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
    <rect x="3" y="6" width="12" height="12" rx="2" />
    <line x1="7" y1="12" x2="11" y2="12" />
  </svg>
}

const Live: FC<IconProps> = ({ active, onClick }) => {
  return <svg onClick={() => { onClick && onClick() }} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-live-photo" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="12" r="5" />
    <line x1="15.9" y1="20.11" x2="15.9" y2="20.12" />
    <line x1="19.04" y1="17.61" x2="19.04" y2="17.62" />
    <line x1="20.77" y1="14" x2="20.77" y2="14.01" />
    <line x1="20.77" y1="10" x2="20.77" y2="10.01" />
    <line x1="19.04" y1="6.39" x2="19.04" y2="6.4" />
    <line x1="15.9" y1="3.89" x2="15.9" y2="3.9" />
    <line x1="12" y1="3" x2="12" y2="3.01" />
    <line x1="8.1" y1="3.89" x2="8.1" y2="3.9" />
    <line x1="4.96" y1="6.39" x2="4.96" y2="6.4" />
    <line x1="3.23" y1="10" x2="3.23" y2="10.01" />
    <line x1="3.23" y1="14" x2="3.23" y2="14.01" />
    <line x1="4.96" y1="17.61" x2="4.96" y2="17.62" />
    <line x1="8.1" y1="20.11" x2="8.1" y2="20.12" />
    <line x1="12" y1="21" x2="12" y2="21.01" />
  </svg>
}

export { User, Message, Message2, Collect, Device, Folder, Tool, Plus, Search, More, Mute, Emoji, Aperture, Cut, Video, Live }
