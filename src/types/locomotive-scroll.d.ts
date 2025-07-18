declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el?: HTMLElement;
    smooth?: boolean;
    multiplier?: number;
    lerp?: number;
    smartphone?: {
      smooth?: boolean;
      multiplier?: number;
      lerp?: number;
    };
    tablet?: {
      smooth?: boolean;
      multiplier?: number;
      lerp?: number;
    };
  }

  class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions);
    destroy(): void;
    on(event: string, callback: (e: any) => void): void;
    off(event: string, callback: (e: any) => void): void;
    update(): void;
    scrollTo(target: string | number, options?: any): void;
  }

  export default LocomotiveScroll;
} 