// This file contains helper functions for scrolling

// Snaps to the top of the webpage immediately
export function snapToTop() {
  window.scrollTo(0, 0);
}

// Scrolls to the bottom of the webpage smoothly
export function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}
