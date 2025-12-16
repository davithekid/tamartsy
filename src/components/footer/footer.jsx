import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
  InstagramIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Produtos",
    href: "#",
  },
  {
    title: "Sobre",
    href: "#",
  },
  {
    title: "Contato",
    href: "#",
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col bg-black ">
      <div className="grow bg-muted" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col justify-start items-center">
            <Image
              src={'/logo-minimalista.png'}
              width={80}
              height={80}
              alt="logo"
            />
            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link href={href} className="text-muted dark:text-primary hover:text-muted-foreground">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div
            className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted dark:text-primary">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                tam artsy
              </Link>
              . Todos os direitos reservados.
            </span>

            <div className="flex items-center gap-5 text-muted dark:text-primary">
              <Link href="#" target="_blank">
                <InstagramIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
