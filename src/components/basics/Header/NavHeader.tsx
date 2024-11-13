'use client';
interface NavProps {
  text: string;
  href: string;
}

export function NavHeader({ href, text }: NavProps) {
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Seleciona o elemento de destino (seção com id="contato")
    const targetElement = document.getElementById(href.slice(1)); // Remove o "#" do href
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Rolagem suave
        block: 'start' // Alinha o topo da seção com o topo da janela
      });
    }
  };
  return (
    <a
      className="gap-2 text-center font-poppins text-sm font-medium text-black"
      href={href || '/'}
      onClick={handleClick}
      // target="_blank"
      // rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
