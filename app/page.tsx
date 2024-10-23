"use client"

import { useState, useRef, useEffect } from "react";
import { Jolly_Lodger } from 'next/font/google';

import styles from "./page.module.css"

const jollyLodger = Jolly_Lodger({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false); // Audio is not muted by default

  // Play audio on component mount
  useEffect(() => {
    if (audioRef.current) { // Ensure audioRef.current is not null
      audioRef.current.play().catch((error) => {
        console.log("Autoplay prevented by browser. Play manually.");
      });
    }
  }, []);

  // Toggle mute/unmute function
  const toggleMute = () => {
    if (audioRef.current) { // Ensure audioRef.current is not null
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted); // Update the mute state
    }
  };
    
  return (
    <div className={`${styles['bg-image']}`}>
      <audio ref={audioRef} src="/bites-the-dust.mp3" autoPlay loop />
      <div className={`container ${jollyLodger.className}`}>
        <div className="title-text">
          GB
        </div>
      </div>
      <button className={styles['mute-button']} onClick={toggleMute}>
        {isMuted ? "Unmute Audio" : "Mute Audio"}
      </button>
    </div>
  );
}
