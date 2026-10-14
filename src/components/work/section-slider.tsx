import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  label: string;
  src: string;
  description: string;
};

type Props = {
  slides: Slide[];
};

const control =
  "inline-flex h-11 w-11 items-center justify-center border border-white/15 text-foreground outline-none transition-colors hover:border-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

const SectionSlider = ({ slides }: Props) => {
  return (
    <div className="space-y-6 outline-none" data-gallery>
      <div className="flex justify-end gap-2">
        <button type="button" data-gallery-prev aria-label="Previous section" className={control}>
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button type="button" data-gallery-next aria-label="Next section" className={control}>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="overflow-hidden">
        <div data-gallery-track className="flex touch-pan-y gap-6">
          {slides.map((slide) => (
            <figure
              key={slide.label}
              data-slide
              data-full={slide.src}
              className="w-[86%] shrink-0 sm:w-[68%] lg:w-[58%]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border border-white/15 bg-card">
                <Image
                  src={slide.src}
                  alt={slide.label}
                  fill
                  quality={90}
                  draggable={false}
                  className="object-cover"
                  sizes="(min-width: 1024px) 820px, 90vw"
                />
              </div>
              <figcaption className="border border-t-0 border-white/15 px-4 py-4">
                <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                  {slide.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{slide.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <script src="/slider.js" defer />
    </div>
  );
};

export default SectionSlider;
