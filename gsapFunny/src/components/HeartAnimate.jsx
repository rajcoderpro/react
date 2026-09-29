import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const HeartAnimate = () => {
  const containerRef = useRef(null)
  const heartRef = useRef(null)
  const auraRef = useRef(null)
  const particlesRef = useRef(null)
  const sparklesRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heart = heartRef.current
      const aura = auraRef.current
      const glow = glowRef.current
      const particles = gsap.utils.toArray('.heart-particle')
      const sparkles = gsap.utils.toArray('.heart-sparkle')
      const miniHearts = gsap.utils.toArray('.mini-heart')

      // Initial cinematic state
      gsap.set(heart, {
        scale: 0,
        opacity: 0,
        rotationY: -90,
        filter: 'blur(18px)',
      })

      gsap.set([aura, glow], {
        scale: 0.5,
        opacity: 0,
      })

      gsap.set([...particles, ...sparkles, ...miniHearts], {
        opacity: 0,
      })

      // Cinematic entrance
      const intro = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      intro
        .to(glow, {
          scale: 1,
          opacity: 0.8,
          duration: 1.5,
        })
        .to(
          aura,
          {
            scale: 1,
            opacity: 0.75,
            duration: 1.2,
          },
          '-=1.1'
        )
        .to(
          heart,
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            filter: 'blur(0px)',
            duration: 1.8,
            ease: 'elastic.out(1, 0.55)',
          },
          '-=1'
        )
        .to(
          [...particles, ...sparkles, ...miniHearts],
          {
            opacity: 1,
            duration: 1.2,
            stagger: 0.025,
          },
          '-=1'
        )

      // Realistic heartbeat
      const heartbeat = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.08,
      })

      heartbeat
        .to(heart, {
          scale: 1.14,
          duration: 0.18,
          ease: 'power2.out',
        })
        .to(heart, {
          scale: 1,
          duration: 0.22,
          ease: 'power2.inOut',
        })
        .to(heart, {
          scale: 1.25,
          duration: 0.16,
          ease: 'power2.out',
        })
        .to(heart, {
          scale: 1,
          duration: 0.5,
          ease: 'elastic.out(1, 0.55)',
        })

      // Aura follows the heartbeat
      const auraPulse = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.08,
      })

      auraPulse
        .to(aura, {
          scale: 1.2,
          opacity: 1,
          duration: 0.18,
          ease: 'power2.out',
        })
        .to(aura, {
          scale: 1,
          opacity: 0.65,
          duration: 0.22,
          ease: 'power2.inOut',
        })
        .to(aura, {
          scale: 1.3,
          opacity: 0.95,
          duration: 0.16,
          ease: 'power2.out',
        })
        .to(aura, {
          scale: 1,
          opacity: 0.55,
          duration: 0.5,
          ease: 'power2.inOut',
        })

      // Slow 360° rotation
      gsap.to(heart, {
        rotationY: 360,
        duration: 18,
        repeat: -1,
        ease: 'none',
        transformPerspective: 1200,
      })

      // Subtle floating motion
      gsap.to(heart, {
        y: -18,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Background parallax glow
      gsap.to(glow, {
        x: 35,
        y: -25,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      // Floating particles
      particles.forEach((particle, index) => {
        const angle = (index / particles.length) * Math.PI * 2
        const radius = 150 + Math.random() * 280
        const duration = 3 + Math.random() * 4

        gsap.set(particle, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          scale: 0.3 + Math.random() * 1.2,
        })

        gsap.to(particle, {
          x: `+=${gsap.utils.random(-90, 90)}`,
          y: `+=${gsap.utils.random(-150, -40)}`,
          opacity: gsap.utils.random(0.25, 0.9),
          duration,
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 2,
          ease: 'sine.inOut',
        })
      })

      // Floating mini hearts
      miniHearts.forEach((miniHeart, index) => {
        const angle = (index / miniHearts.length) * Math.PI * 2
        const radius = 180 + Math.random() * 250

        gsap.set(miniHeart, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          scale: 0.45 + Math.random() * 0.65,
          rotation: gsap.utils.random(-25, 25),
        })

        gsap.to(miniHeart, {
          y: `-= ${gsap.utils.random(50, 140)}`,
          x: `+= ${gsap.utils.random(-70, 70)}`,
          rotation: `+=${gsap.utils.random(-30, 30)}`,
          opacity: gsap.utils.random(0.25, 0.8),
          duration: gsap.utils.random(4, 7),
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 3,
          ease: 'sine.inOut',
        })
      })

      // Sparkles
      sparkles.forEach((sparkle, index) => {
        gsap.set(sparkle, {
          x: gsap.utils.random(-300, 300),
          y: gsap.utils.random(-300, 300),
          scale: gsap.utils.random(0.3, 1.2),
        })

        gsap.to(sparkle, {
          scale: gsap.utils.random(0.4, 1.8),
          opacity: gsap.utils.random(0.2, 1),
          rotation: 180,
          duration: gsap.utils.random(1.2, 2.5),
          repeat: -1,
          yoyo: true,
          delay: index * 0.08,
          ease: 'sine.inOut',
        })
      })

      // Mouse parallax
      const handleMouseMove = (event) => {
        const x = event.clientX / window.innerWidth - 0.5
        const y = event.clientY / window.innerHeight - 0.5

        gsap.to(containerRef.current, {
          rotateX: y * -5,
          rotateY: x * 5,
          duration: 1.2,
          ease: 'power3.out',
        })

        gsap.to(glow, {
          x: x * 80,
          y: y * 80,
          duration: 1.5,
          ease: 'power2.out',
        })
      }

      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const particles = Array.from({ length: 34 })
  const sparkles = Array.from({ length: 18 })
  const miniHearts = Array.from({ length: 10 })

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#120611]">
      {/* Deep cinematic gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,20,100,0.24)_0%,rgba(151,12,71,0.18)_22%,rgba(48,5,39,0.8)_55%,#09030c_100%)]" />

      {/* Crimson / purple atmospheric layers */}
      <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-fuchsia-700/20 blur-[140px]" />
      <div className="absolute -bottom-52 -right-40 h-[650px] w-[650px] rounded-full bg-rose-700/20 blur-[150px]" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/10 blur-[120px]" />

      {/* Moving parallax glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/30 blur-[100px]"
      />

      {/* Decorative vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.58)_100%)]" />

      {/* Particle field */}
      <div
        ref={particlesRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-0 w-0"
      >
        {particles.map((_, index) => (
          <span
            key={`particle-${index}`}
            className="heart-particle absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-pink-200 shadow-[0_0_12px_4px_rgba(255,105,180,0.8)]"
          />
        ))}

        {miniHearts.map((_, index) => (
          <span
            key={`mini-heart-${index}`}
            className="mini-heart absolute left-0 top-0 text-xl text-pink-300 drop-shadow-[0_0_12px_rgba(255,20,147,0.9)]"
          >
            ♥
          </span>
        ))}

        {sparkles.map((_, index) => (
          <span
            key={`sparkle-${index}`}
            className="heart-sparkle absolute left-0 top-0 h-1 w-1 rotate-45 bg-white shadow-[0_0_14px_5px_rgba(255,255,255,0.9)]"
          />
        ))}
      </div>

      {/* Main 3D scene */}
      <div
        ref={containerRef}
        className="relative z-10 flex h-[min(85vw,720px)] w-[min(85vw,720px)] items-center justify-center [perspective:1200px]"
      >
        {/* Pink aura */}
        <div
          ref={auraRef}
          className="pointer-events-none absolute h-[55%] w-[55%] rounded-full bg-pink-500/40 blur-[65px] mix-blend-screen"
        />

        {/* Secondary bloom */}
        <div className="pointer-events-none absolute h-[42%] w-[42%] rounded-full bg-rose-400/30 blur-[35px] mix-blend-screen" />

        {/* Heart */}
        <div
          ref={heartRef}
          className="relative z-20 flex items-center justify-center transform-gpu will-change-transform"
        >
          <div className="absolute inset-[15%] rounded-full bg-pink-500/20 blur-[35px] mix-blend-screen" />

          <img
            src="https://pngimg.com/uploads/heart/heart_PNG51337.png"
            alt="Realistic glowing 3D heart"
            draggable="false"
            className="relative h-[min(55vw,430px)] w-[min(55vw,430px)] select-none object-contain drop-shadow-[0_0_18px_rgba(255,40,130,0.95)] drop-shadow-[0_0_60px_rgba(255,0,100,0.55)]"
          />
        </div>

        {/* Outer cinematic ring */}
        <div className="pointer-events-none absolute h-[68%] w-[68%] rounded-full border border-pink-300/10 shadow-[inset_0_0_80px_rgba(255,0,120,0.08),0_0_80px_rgba(255,0,120,0.08)]" />

        <div className="pointer-events-none absolute h-[82%] w-[82%] rounded-full border border-fuchsia-300/[0.04]" />
      </div>

      {/* Subtle foreground glass glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Ambient top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-2/3 -translate-x-1/2 bg-pink-500/10 blur-[90px]" />
    </div>
  )
}

export default HeartAnimate
