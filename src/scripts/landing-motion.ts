import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion) {
    const lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        wheelMultiplier: 0.85,
        touchMultiplier: 1,
    });

    lenis.on('scroll', ScrollTrigger.update);
    const updateLenis = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
        gsap.from('[data-hero-title] > span', {
            yPercent: 110,
            opacity: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: 'power4.out',
        });

        gsap.from('.hero-art', {
            xPercent: 9,
            yPercent: 4,
            opacity: 0,
            rotate: 2,
            duration: 1.15,
            ease: 'power3.out',
            delay: 0.18,
        });

        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
            if (element.closest('.hero')) return;
            gsap.from(element, {
                y: 34,
                opacity: 0,
                duration: 0.75,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 84%',
                    toggleActions: 'play none none reverse',
                },
            });
        });

        gsap.utils.toArray<HTMLElement>('[data-card]').forEach((element) => {
            gsap.from(element, {
                y: 48,
                opacity: 0,
                duration: 0.72,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 88%',
                    toggleActions: 'play none none reverse',
                },
            });
        });

        gsap.from('[data-process-step]', {
            y: 42,
            opacity: 0,
            duration: 0.65,
            stagger: 0.09,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.process-list',
                start: 'top 78%',
                toggleActions: 'play none none reverse',
            },
        });

        gsap.to('[data-parallax]', {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 0.7,
            },
        });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh, { once: true });
    document.fonts.ready.then(refresh);

    document.addEventListener(
        'astro:before-swap',
        () => {
            context.revert();
            lenis.destroy();
            gsap.ticker.remove(updateLenis);
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        },
        { once: true },
    );
}
