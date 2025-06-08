interface ImageMarqueeProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export const ImageMarquee = ({ images }: ImageMarqueeProps) => {
  return (
    <div className="relative flex overflow-x-hidden bg-white">
      <div className="animate-marquee whitespace-nowrap flex gap-12 mr-6">
        {images.map((image, index) => (
          <div key={index} className="">
            <img src={image.src} alt={image.alt} className="h-44 w-auto object-contain" />
          </div>
        ))}
        {images.map((image, index) => (
          <div key={`duplicate-${index}`} className="">
            <img src={image.src} alt={image.alt} className="h-44 w-auto object-contain" />
          </div>
        ))}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-12 mx-6">
        {images.map((image, index) => (
          <div key={`second-${index}`} className="">
            <img src={image.src} alt={image.alt} className="h-44 w-auto object-contain" />
          </div>
        ))}
        {images.map((image, index) => (
          <div key={`second-duplicate-${index}`} className="">
            <img src={image.src} alt={image.alt} className="h-44 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};
