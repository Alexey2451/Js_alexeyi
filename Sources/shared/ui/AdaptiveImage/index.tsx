interface AdaptiveImageProps {
    src: string;
    alt?: string;
}

export const AdaptiveImage = ({ src, alt }: AdaptiveImageProps) => {
    return (
        <picture>
            <source srcSet={`${src}.webp 1x, ${src}@2x.webp 2x`} type='image/webp' />
            <source srcSet={`${src}.jpg, ${src}@2x.jpg 2x`} />
            <img src={src + '.jpg'} alt={alt} />
        </picture>
    );
};
