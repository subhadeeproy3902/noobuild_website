import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type Props = {
  large?: boolean;
  className?: string;
  [key: string]: any;
};
export default function Avatar({
  large = false,
  className,
  ...props
}: Props): JSX.Element {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
      {...props}
    >
      <Image
        src="/logo.png"
        alt=""
        width={64}
        height={64}
        sizes={large ? "4rem" : "2.25rem"}
        className={clsx(
          "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
          large ? "h-16 w-16" : "h-12 w-12"
        )}
        priority
      />
    </Link>
  );
}