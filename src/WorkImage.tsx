type WorkImageProps = {
  image: string;
  alt: string;
  href?: string;
};

const WorkImage = ({ image, alt, href }: WorkImageProps) => {
  const content = (
    <div className="work-image-in">
      <img src={image} alt={alt} />
      {href && (
        <span className="work-link" aria-hidden="true">
          ↗
        </span>
      )}
    </div>
  );

  return href ? (
    <a className="work-image" href={href} target="_blank" rel="noopener noreferrer" aria-label={'View ' + alt + ' on GitHub'}>
      {content}
    </a>
  ) : (
    <div className="work-image">{content}</div>
  );
};

export default WorkImage;
