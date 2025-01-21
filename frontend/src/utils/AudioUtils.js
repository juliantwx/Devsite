// This file contains helper functions for audio

// Plays the given audio once
export function playAudioOneShot(audioURL, volume = 1.0) {
  let audio = new Audio(audioURL);
  audio.volume = volume;
  audio.play();
}
