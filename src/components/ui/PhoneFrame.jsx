import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { YOUTUBE_VIDEO_ID } from '../../config/site';

// Vertical phone mockup that tilts in 3D as it passes; tapping play swaps the
// screenshot for the YouTube embed.
export default function PhoneFrame({ screenSrc, screenAlt = '', videoId = YOUTUBE_VIDEO_ID, entrance = {} }) {
  const wrapRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start end', 'end start'],
  });
  const rotateY = useTransform(scrollYProgress, [0, 1], [-14, 10]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [4, -3]);

  return (
    <motion.div className="phone-wrap" ref={wrapRef} {...entrance}>
      <motion.div className="phone" style={{ rotateY, rotateX }}>
        <div className="screen" id="screen">
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
              title="How my coaching works"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <div className="notch" />
              <img src={screenSrc} alt={screenAlt} />
              <button
                className="play"
                aria-label="Play: how my coaching works"
                onClick={() => setPlaying(true)}
              >
                <span><svg viewBox="0 0 24 24"><path d="M6 3l15 9-15 9z" /></svg></span>
              </button>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
