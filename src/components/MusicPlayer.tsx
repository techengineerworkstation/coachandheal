import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tracks = [
  {
    title: 'Meditation',
    artist: 'Pixabay Music',
    src: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=meditation-music-149430.mp3',
  },
  {
    title: 'Serene Ambience',
    artist: 'SoundHelix',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    title: 'Calm Reflection',
    artist: 'SoundHelix',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
]

export default function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(0.3)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio()
    audio.volume = 0.3
    audio.loop = false
    audioRef.current = audio

    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    })

    audio.addEventListener('ended', () => {
      setCurrentTrack((prev) => (prev + 1) % tracks.length)
    })

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.src = tracks[currentTrack].src
    audio.load()
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false))
    }
  }, [currentTrack])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false))
    } else {
      audio.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => setIsPlaying(!isPlaying)

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length)
  }

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length)
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    audio.currentTime = percent * audio.duration
  }

  return (
    <div className="music-player">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="music-player__panel"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="music-player__header">
              <span className="music-player__label">Now Playing</span>
              <button
                className="music-player__close"
                onClick={() => setIsOpen(false)}
                aria-label="Close player"
              >
                ✕
              </button>
            </div>

            <div className="music-player__track-info">
              <div className="music-player__track-title">{tracks[currentTrack].title}</div>
              <div className="music-player__track-artist">{tracks[currentTrack].artist}</div>
            </div>

            <div className="music-player__progress" onClick={handleProgressClick}>
              <div className="music-player__progress-fill" style={{ width: `${progress}%` }} />
            </div>

            <div className="music-player__controls">
              <button onClick={prevTrack} className="music-player__btn" aria-label="Previous track">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                </svg>
              </button>
              <button onClick={togglePlay} className="music-player__btn music-player__btn--play" aria-label={isPlaying ? 'Pause' : 'Play'}>
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
              <button onClick={nextTrack} className="music-player__btn" aria-label="Next track">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>
            </div>

            <div className="music-player__volume">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" className="music-player__volume-icon">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
              </svg>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="music-player__slider"
                aria-label="Volume"
              />
            </div>

            <div className="music-player__tracklist">
              {tracks.map((track, i) => (
                <button
                  key={i}
                  className={`music-player__track ${i === currentTrack ? 'music-player__track--active' : ''}`}
                  onClick={() => { setCurrentTrack(i); setIsPlaying(true) }}
                >
                  {i === currentTrack && isPlaying && <span className="music-player__eq">♫</span>}
                  <span>{track.title}</span>
                  <span className="music-player__track-artist-sm">{track.artist}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="music-player__toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close music player' : 'Open music player'}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        )}
      </motion.button>
    </div>
  )
}
