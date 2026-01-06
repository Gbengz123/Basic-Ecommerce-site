import { Link } from 'react-router';
import { Skeleton } from '@/components/ui/skeleton';

function CategoryItem({
  showSkeleton,
  image,
  label,
  className,
  categoryStyle,
  bgImage,
}) {
  if (showSkeleton) {
    return <Skeleton className={`${className}`} />;
  }

  return (
    <Link
      style={{ backgroundImage: bgImage(image) }}
      className={`${className} ${categoryStyle}`}
    >
      <span className="absolute top-4 left-8 transition-transform duration-100 ease-linear group-hover:translate-x-1.5">
        {label}
      </span>
    </Link>
  );
}

export default CategoryItem;
