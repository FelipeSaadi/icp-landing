interface ImageMarqueeProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export const ImageMarquee = ({ images }: ImageMarqueeProps) => {
  return (
    <div className="relative flex overflow-x-hidden bg-white">
      <div className="animate-marquee whitespace-nowrap flex my-8 gap-16 pr-16">
        {images.map((image, index) => (
          <div key={index} className="min-w-[100px] sm:min-w-[140px] lg:min-w-[160px]">
            <img src={image.src} alt={image.alt} className="h-20 sm:h-32 lg:h-24 w-auto object-contain" />
          </div>
        ))}
        {images.map((image, index) => (
          <div key={index} className="min-w-[100px] sm:min-w-[140px] lg:min-w-[160px]">
            <img src={image.src} alt={image.alt} className="h-20 sm:h-32 lg:h-24 w-auto object-contain" />
          </div>
        ))}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex my-8 gap-16 pr-16">
        {images.map((image, index) => (
          <div key={`second-${index}`} className="min-w-[100px] sm:min-w-[140px] lg:min-w-[160px]">
            <img src={image.src} alt={image.alt} className="h-20 sm:h-32 lg:h-24 w-auto object-contain" />
          </div>
        ))}
        {images.map((image, index) => (
          <div key={`second-${index}`} className="min-w-[100px] sm:min-w-[140px] lg:min-w-[160px]">
            <img src={image.src} alt={image.alt} className="h-20 sm:h-32 lg:h-24 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};
