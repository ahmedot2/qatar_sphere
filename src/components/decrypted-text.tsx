
"use client";

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const styles = {
  wrapper: {
    display: 'block', // Changed to block for stability
    position: 'relative',
  } as React.CSSProperties,
  hiddenText: {
    visibility: 'hidden',
    whiteSpace: 'pre-wrap',
  } as React.CSSProperties,
  visibleText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    whiteSpace: 'pre-wrap',
  } as React.CSSProperties,
  srOnly: {
    position: 'absolute' as const,
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    border: 0,
  },
}

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealedIndices, setRevealedIndices] = useState(new Set());
  const containerRef = useRef<HTMLParagraphElement>(null);

   useEffect(() => {
     let interval: NodeJS.Timeout | undefined;
     let currentIteration = 0

     const getNextIndex = (revealedSet: Set<number>) => {
       const textLength = text.length
       switch (revealDirection) {
         case 'start':
           return revealedSet.size
         case 'end':
           return textLength - 1 - revealedSet.size
         case 'center': {
           const middle = Math.floor(textLength / 2)
           const offset = Math.floor(revealedSet.size / 2)
           const nextIndex =
            revealedSet.size % 2 === 0
               ? middle + offset
               : middle - offset - 1

           if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
             return nextIndex
           }

           for (let i = 0; i < textLength; i++) {
             if (!revealedSet.has(i)) return i
           }
           return 0
         }
         default:
           return revealedSet.size
       }
     }

     const availableChars = useOriginalCharsOnly
       ? Array.from(new Set(text.split(''))).filter((char) => char !== ' ')
       : characters.split('')

     const shuffleText = (originalText: string, currentRevealed: Set<number>) => {
       if (useOriginalCharsOnly) {
         const positions = originalText.split('').map((char, i) => ({
           char,
           isSpace: char === ' ',
           index: i,
           isRevealed: currentRevealed.has(i),
         }))

         const nonSpaceChars = positions
           .filter((p) => !p.isSpace && !p.isRevealed)
           .map((p) => p.char)

          for (let i = nonSpaceChars.length - 1; i > 0; i--) {
           const j = Math.floor(Math.random() * (i + 1))
             ;[nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]]
         }

          let charIndex = 0
         return positions
           .map((p) => {
             if (p.isSpace) return ' '
             if (p.isRevealed) return originalText[p.index]
             return nonSpaceChars[charIndex++]
           })
           .join('')
       } else {
         return originalText
           .split('')
           .map((char, i) => {
             if (char === ' ') return ' '
             if (currentRevealed.has(i)) return originalText[i]
             return availableChars[Math.floor(Math.random() * availableChars.length)]
           })
           .join('')
       }
     }

     if (isAnimating) {
       interval = setInterval(() => {
         setRevealedIndices((prevRevealed) => {
           if (sequential) {
             if (prevRevealed.size < text.length) {
               const nextIndex = getNextIndex(prevRevealed)
               const newRevealed = new Set(prevRevealed)
               newRevealed.add(nextIndex)
               setDisplayText(shuffleText(text, newRevealed))
               return newRevealed
             } else {
               if(interval) clearInterval(interval)
               setIsAnimating(false)
               setDisplayText(text) // Ensure final text is set
               return prevRevealed
             }
           } else {
             setDisplayText(shuffleText(text, prevRevealed))
             currentIteration++
             if (currentIteration >= maxIterations) {
                if(interval) clearInterval(interval)
               setIsAnimating(false)
               setDisplayText(text)
             }
             return prevRevealed
           }
         })
       }, speed)
     } else {
       setDisplayText(text)
       setRevealedIndices(new Set())
     }

     return () => {
       if (interval) clearInterval(interval)
     }
   }, [
     isAnimating,
     text,
     speed,
     maxIterations,
     sequential,
     revealDirection,
     characters,
     useOriginalCharsOnly,
   ])

   useEffect(() => {
     if (animateOn !== 'view') return

     const observerCallback = (entries: IntersectionObserverEntry[]) => {
       entries.forEach((entry) => {
         if (entry.isIntersecting) {
            if (!isAnimating) {
                setIsAnimating(true);
            }
         } else {
            if (isAnimating) {
                setIsAnimating(false);
            }
         }
       })
     }

     const observerOptions = {
       root: null,
       rootMargin: '0px',
       threshold: 0.1,
     }

     const observer = new IntersectionObserver(observerCallback, observerOptions)
     const currentRef = containerRef.current
     if (currentRef) {
       observer.observe(currentRef)
     }

     return () => {
       if (currentRef) {
         observer.unobserve(currentRef)
       }
     }
   }, [animateOn, isAnimating])

   const hoverProps =
     animateOn === 'hover'
       ? {
         onMouseEnter: () => setIsAnimating(true),
         onMouseLeave: () => setIsAnimating(false),
       }
       : {}

   return (
     <motion.p className={parentClassName} ref={containerRef} style={styles.wrapper} {...hoverProps}>
       <span style={styles.srOnly}>{text}</span>
       <span style={styles.hiddenText} aria-hidden="true">{text}</span>
       <span style={styles.visibleText} aria-hidden="true">
         {displayText.split('').map((char, index) => {
           const isRevealedOrDone =
            revealedIndices.has(index) || (!isAnimating && displayText === text)

           return (
             <span
               key={index}
               className={isRevealedOrDone ? className : encryptedClassName}
             >
               {char}
             </span>
           )
         })}
       </span>
     </motion.p>
   )
}
