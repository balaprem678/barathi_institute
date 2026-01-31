'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const ScriptReinitializer = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Function to re-initialize legacy jQuery plugins
        const initPlugins = () => {
            if (typeof window !== 'undefined' && (window as any).jQuery) {
                const $ = (window as any).jQuery;

                // Re-init Owl Carousel
                if ($('.testimonial-carousel2').length) {
                    $('.testimonial-carousel2').owlCarousel({
                        loop: true,
                        margin: 30,
                        nav: true,
                        dots: false,
                        autoplay: true,
                        autoplayTimeout: 5000,
                        smartSpeed: 1000,
                        responsive: {
                            0: { items: 1 },
                            600: { items: 2 },
                            1000: { items: 3 }
                        }
                    });
                }

                // Re-init Counter
                if ($('.count-text').length) {
                    $('.count-text').each(function (this: HTMLElement) {
                        const $this = $(this);
                        const stop = parseInt($this.attr('data-stop') || '0', 10);
                        const speed = parseInt($this.attr('data-speed') || '3000', 10);

                        $this.text('0'); // Reset to 0

                        $({ countNum: 0 }).animate(
                            { countNum: stop },
                            {
                                duration: speed,
                                easing: 'linear',
                                step: function () {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                    $this.text(this.countNum);
                                }
                            }
                        );
                    });
                }

                // Re-init WOW.js if it exists
                if ((window as any).WOW) {
                    new (window as any).WOW().init();
                }
            }
        };

        // Small timeout to ensure DOM is ready after navigation
        const timer = setTimeout(initPlugins, 500);

        return () => clearTimeout(timer);
    }, [pathname]); // Re-run whenever pathname changes

    return null; // This component renders nothing
};

export default ScriptReinitializer;
