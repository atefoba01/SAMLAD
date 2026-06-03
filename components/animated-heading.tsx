'use client'

import { useEffect, useState } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedHeading({ text, className = '', delay = 0 }: AnimatedHeadingProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        startTyping()
      }, delay)
      return () => clearTimeout(delayTimer)
    } else {
      startTyping()
    }
  }, [delay])

  const startTyping = () => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
        setIsComplete(true)
      }
    }, 50) // Typing speed - adjust as needed

    return () => clearInterval(typingInterval)
  }

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <span className="animate-pulse ml-1 inline-block w-1 h-[1em] bg-current" />
      )}
    </span>
  )
}

export function AnimatedHeadingWithLineBreak({
  mainText,
  accentText,
  mainClassName = '',
  accentClassName = '',
}: {
  mainText: string
  accentText: string
  mainClassName?: string
  accentClassName?: string
}) {
  const [mainComplete, setMainComplete] = useState(false)

  return (
    <div className="leading-tight">
      <div className={mainClassName}>
        <AnimatedHeading
          text={mainText}
          delay={0}
          className="inline-block"
        />
      </div>
      {mainComplete && (
        <div className={accentClassName}>
          <AnimatedHeading
            text={accentText}
            delay={300}
            className="inline-block"
          />
        </div>
      )}
      {/* Signal when main text is complete */}
      {!mainComplete && (
        <div style={{ display: 'none' }}>
          <AnimatedHeading
            text={mainText}
            delay={0}
            className="invisible"
            onComplete={() => setMainComplete(true)}
          />
        </div>
      )}
    </div>
  )
}

// Better version that properly tracks completion
export function AnimatedHeadingWithSequence({
  mainText,
  accentText,
  mainClassName = '',
  accentClassName = '',
}: {
  mainText: string
  accentText: string
  mainClassName?: string
  accentClassName?: string
}) {
  const [displayedMain, setDisplayedMain] = useState('')
  const [displayedAccent, setDisplayedAccent] = useState('')
  const [mainComplete, setMainComplete] = useState(false)
  const [accentComplete, setAccentComplete] = useState(false)

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < mainText.length) {
        setDisplayedMain(mainText.substring(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
        setMainComplete(true)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [mainText])

  useEffect(() => {
    if (!mainComplete) return

    const delayTimer = setTimeout(() => {
      let index = 0
      const typingInterval = setInterval(() => {
        if (index < accentText.length) {
          setDisplayedAccent(accentText.substring(0, index + 1))
          index++
        } else {
          clearInterval(typingInterval)
          setAccentComplete(true)
        }
      }, 50)

      return () => clearInterval(typingInterval)
    }, 300)

    return () => clearTimeout(delayTimer)
  }, [mainComplete, accentText])

  return (
    <div className="leading-tight">
      <div className={mainClassName}>
        {displayedMain}
        {!mainComplete && (
          <span className="animate-pulse ml-1 inline-block w-1 h-[1em] bg-white" />
        )}
      </div>
      {mainComplete && (
        <div className={accentClassName}>
          {displayedAccent}
          {!accentComplete && (
            <span className="animate-pulse ml-1 inline-block w-1 h-[1em] bg-white" />
          )}
        </div>
      )}
    </div>
  )
}
