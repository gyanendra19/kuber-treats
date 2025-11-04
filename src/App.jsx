import "./App.css";
import LandingPage from "./Components/LandingPage";
import AboutUs from "./Components/AboutUs";
import Portfolio from "./Components/Portfolio";
import { useEffect, useRef, useState } from "react";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";

function App() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const scrollAccumulator = useRef(0);
  const scrollTimeout = useRef(null);

  // Smooth scroll animation function
  const smoothScrollTo = (targetPosition, duration = 1200) => {
    const container = containerRef.current;
    if (!container) return;

    const startPosition = container.scrollTop;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      container.scrollTop = startPosition + distance * ease;

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animation);
  };

  // Smooth slide up animation for last section
  const slideUpLastSection = (duration = 1200) => {
    const lastSection = sectionsRef.current[sectionsRef.current.length - 1];
    if (!lastSection) return;

    let startTime = null;
    const startTransform = 0;
    const endTransform = -100;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const currentTransform =
        startTransform + (endTransform - startTransform) * ease;
      lastSection.style.transform = `translateY(${currentTransform}%)`;

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        setIsAnimating(false);
        setIsAtEnd(true);
        setCurrentSection(0);

        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.scrollTop = 0;
          }
        }, 50);
      }
    };

    requestAnimationFrame(animation);
  };

  // Slide down last section (reverse)
  const slideDownLastSection = (duration = 1200) => {
    const lastSection = sectionsRef.current[sectionsRef.current.length - 1];
    if (!lastSection) return;

    let startTime = null;
    const startTransform = -100;
    const endTransform = 0;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const currentTransform =
        startTransform + (endTransform - startTransform) * ease;
      lastSection.style.transform = `translateY(${currentTransform}%)`;

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        setIsAnimating(false);
        setIsAtEnd(false);
        setCurrentSection(sectionsRef.current.length - 1);

        setTimeout(() => {
          if (sectionsRef.current[sectionsRef.current.length - 1]) {
            const targetPosition =
              sectionsRef.current[sectionsRef.current.length - 1].offsetTop;
            containerRef.current.scrollTop = targetPosition;
          }
        }, 50);
      }
    };

    requestAnimationFrame(animation);
  };

  // Scroll to specific section - EXPOSED FOR NAVBAR
  const scrollToSection = (index) => {
    const sections = sectionsRef.current;
    if (index < 0 || index >= sections.length || isAnimating) return;

    // Reset end state if navigating from navbar
    if (isAtEnd) {
      const lastSection = sectionsRef.current[sectionsRef.current.length - 1];
      if (lastSection) {
        lastSection.style.transform = "translateY(0%)";
      }
      setIsAtEnd(false);
    }

    setIsAnimating(true);
    setCurrentSection(index);
    const targetPosition = sections[index].offsetTop;
    smoothScrollTo(targetPosition);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Handle wheel events
    const handleWheel = (e) => {
      e.preventDefault();

      if (isAnimating) return;

      scrollAccumulator.current += e.deltaY;

      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        const threshold = 100;

        if (Math.abs(scrollAccumulator.current) > threshold) {
          if (
            scrollAccumulator.current > 0 &&
            currentSection === sectionsRef.current.length - 1 &&
            !isAtEnd
          ) {
            setIsAnimating(true);
            slideUpLastSection();
          } else if (
            scrollAccumulator.current > 0 &&
            isAtEnd &&
            currentSection === 0
          ) {
            setIsAnimating(true);
            scrollToSection(1);
            setIsAtEnd(false);
            const lastSection =
              sectionsRef.current[sectionsRef.current.length - 1];
            if (lastSection) {
              lastSection.style.transform = "translateY(0%)";
            }
          } else if (scrollAccumulator.current < 0 && isAtEnd) {
            setIsAnimating(true);
            slideDownLastSection();
          } else if (
            scrollAccumulator.current > 0 &&
            currentSection < sectionsRef.current.length - 1 &&
            !isAtEnd
          ) {
            scrollToSection(currentSection + 1);
          } else if (
            scrollAccumulator.current < 0 &&
            currentSection > 0 &&
            !isAtEnd
          ) {
            scrollToSection(currentSection - 1);
          }
          scrollAccumulator.current = 0;
        }
      }, 100);
    };

    // Handle touch events for mobile
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (isAnimating) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      const threshold = 50;

      if (Math.abs(diff) > threshold) {
        if (
          diff > 0 &&
          currentSection === sectionsRef.current.length - 1 &&
          !isAtEnd
        ) {
          setIsAnimating(true);
          slideUpLastSection();
        } else if (diff > 0 && isAtEnd && currentSection === 0) {
          setIsAnimating(true);
          scrollToSection(1);
          setIsAtEnd(false);
          const lastSection =
            sectionsRef.current[sectionsRef.current.length - 1];
          if (lastSection) {
            lastSection.style.transform = "translateY(0%)";
          }
        } else if (diff < 0 && isAtEnd) {
          setIsAnimating(true);
          slideDownLastSection();
        } else if (
          diff > 0 &&
          currentSection < sectionsRef.current.length - 1 &&
          !isAtEnd
        ) {
          scrollToSection(currentSection + 1);
        } else if (diff < 0 && currentSection > 0 && !isAtEnd) {
          scrollToSection(currentSection - 1);
        }
      }
    };

    // Handle keyboard
    const handleKeyDown = (e) => {
      if (isAnimating) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        if (currentSection === sectionsRef.current.length - 1 && !isAtEnd) {
          setIsAnimating(true);
          slideUpLastSection();
        } else if (isAtEnd && currentSection === 0) {
          setIsAnimating(true);
          scrollToSection(1);
          setIsAtEnd(false);
          const lastSection =
            sectionsRef.current[sectionsRef.current.length - 1];
          if (lastSection) {
            lastSection.style.transform = "translateY(0%)";
          }
        } else if (
          currentSection < sectionsRef.current.length - 1 &&
          !isAtEnd
        ) {
          scrollToSection(currentSection + 1);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        if (isAtEnd) {
          setIsAnimating(true);
          slideDownLastSection();
        } else if (currentSection > 0) {
          scrollToSection(currentSection - 1);
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection, isAnimating, isAtEnd]);

  return (
    <>
      <Navbar
        currentSection={currentSection}
        scrollToSection={scrollToSection}
      />

      <div
        className={`fixed top-0 left-0 w-full h-screen ${
          currentSection !== 0 ? "z-0" : "z-20"
        }`}
      >
        <LandingPage
          currentSection={currentSection}
          scrollToSection={scrollToSection}
        />
      </div>

      <div
        ref={containerRef}
        className="relative h-screen overflow-y-scroll z-10"
        style={{ scrollBehavior: "auto" }}
      >
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="h-screen w-full"
        ></div>

        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="h-screen w-full"
        >
          <AboutUs />
        </div>

        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="h-screen w-full"
        >
          <Portfolio />
        </div>

        <div
          ref={(el) => (sectionsRef.current[3] = el)}
          className="h-screen w-full"
        >
          <Gallery />
        </div>

        <div
          ref={(el) => (sectionsRef.current[4] = el)}
          className="h-screen w-full transition-transform duration-1000"
          style={{ transform: "translateY(0%)" }}
        >
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
