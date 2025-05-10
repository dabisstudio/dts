import { useRef, useEffect } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  width?: string | number;
  height?: string | number;
}

export default function LottieAnimation({
  animationData,
  loop = true,
  autoplay = true,
  className = '',
  width = '100%',
  height = '100%'
}: LottieAnimationProps) {
  const animationContainer = useRef<HTMLDivElement>(null);
  const anim = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!animationContainer.current) return;

    anim.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop,
      autoplay,
      animationData
    });

    return () => {
      if (anim.current) {
        anim.current.destroy();
      }
    };
  }, [animationData, loop, autoplay]);

  return (
    <div
      ref={animationContainer}
      className={className}
      style={{ width, height }}
    />
  );
}
