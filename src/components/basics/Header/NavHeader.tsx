interface NavProps {
  text: string;
  href: string;
}

export function NavHeader({ href, text }: NavProps) {
  return (
    <a
      className="font-poppins gap-2 text-center text-sm font-medium text-black"
      href={href || '/'}
      // target="_blank"
      // rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
