/**
 * Hero Scroll Animation
 * Renders 80-frame sequence as user scrolls
 * Logo is now fixed in top-left corner (no fade animation)
 */

export function initHero() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const context = canvas.getContext('2d');

    const frameCount = 80;
    const currentFrame = index => (
        `/assets/hero-sequence/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
    );

    const images = [];
    const sequence = {
        frame: 0
    };

    let imagesLoaded = 0;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Preload images with progress tracking
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === 1) {
                // Render first frame immediately
                render();
            }
        };
        images.push(img);
    }

    // Set canvas dimensions with retina support
    const setCanvasSize = () => {
        const dpr = window.devicePixelRatio || 1;

        // Use dynamic viewport height for mobile browsers (accounts for address bar)
        const viewportHeight = window.visualViewport?.height || window.innerHeight;
        const viewportWidth = window.innerWidth;

        canvas.width = viewportWidth * dpr;
        canvas.height = viewportHeight * dpr;
        canvas.style.width = `${viewportWidth}px`;
        canvas.style.height = `${viewportHeight}px`;
        context.scale(dpr, dpr);
        render();
    };

    window.addEventListener('resize', setCanvasSize);

    // Also listen to visual viewport changes (important for mobile)
    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', setCanvasSize);
    }

    setCanvasSize();

    // Render logic with object-fit: cover behavior
    function render() {
        const img = images[sequence.frame];
        if (!img || !img.complete) return;

        context.clearRect(0, 0, canvas.width, canvas.height);

        // Use dynamic viewport for consistent sizing
        const viewportHeight = window.visualViewport?.height || window.innerHeight;
        const viewportWidth = window.innerWidth;

        // Calculate dimensions for cover effect
        const imgRatio = img.width / img.height;
        const canvasRatio = viewportWidth / viewportHeight;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = viewportWidth;
            drawHeight = viewportWidth / imgRatio;
            offsetX = 0;
            offsetY = (viewportHeight - drawHeight) / 2;
        } else {
            drawWidth = viewportHeight * imgRatio;
            drawHeight = viewportHeight;
            offsetX = (viewportWidth - drawWidth) / 2;
            offsetY = 0;
        }

        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }

    // Scroll listener with optimized frame calculation
    let ticking = false;

    function updateOnScroll() {
        const scrollTop = document.documentElement.scrollTop;

        // Sequence plays over exactly one viewport height
        const scrollFraction = Math.min(scrollTop / window.innerHeight, 1);
        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(scrollFraction * frameCount)
        );

        sequence.frame = frameIndex;
        render();

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });

    // Reduced motion fallback: show static first frame
    if (prefersReducedMotion) {
        sequence.frame = 0;
        render();
    }

    // Initial render
    if (images[0] && images[0].complete) {
        render();
    } else {
        images[0].onload = render;
    }
}
