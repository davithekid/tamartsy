"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronUp, Clock, InstagramIcon, LucideIcon, MapPin, Phone } from "lucide-react";
import { Fragment } from "react";
import { Controller, useForm } from "react-hook-form";
import { siInstagram } from "simple-icons";
import z from "zod";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const LINK_TYPES = {
  NO_LINK: "NO_LINK",
  PHONE_LINK: "PHONE_LINK",
  EMAIL_LINK: "EMAIL_LINK",
};


const NEWSLETTER_DATA = {
  title: "Newsletter",
};

const FOOTER_LINKS = [
  {
    title: "Produtos",
    items: [
      {
        text: "Bolsas",
        link: "/bolsas",
      },
      {
        text: "Tops",
        link: "/tops",
      },
      {
        text: "Headpieces",
        link: "/headpiece",
      },
      {
        text: "Variados",
        link: "/variados",
      }, {
        text: "Unissex",
        link: "/unissex",
      }, {
        text: "Todos os Produtos",
        link: "/produtos",
      },
    ],
  },
  {
    title: "Coleções",
    items: [
      {
        text: "Carnaval",
        link: "#",
      },
    ],
  }, {
    title: "tam artsy",
    items: [
      {
        text: "Sobre",
        link: "/sobre",
      },
      {
        text: "Contato",
        link: "/contato",
      },
    ],
  },
];

const CONTACT_LINKS = {
  contactDetails: [
    {
      icon: MapPin,
      text: "tamartsy@gmail.com",
      link: "support@store.com",
      type: LINK_TYPES.EMAIL_LINK,
    },
  ],
  socialMedia: [
    {
      icon: siInstagram,
      link: "#",
    },
  ],
};

const Footer = ({
  newsletter = NEWSLETTER_DATA,
  footerLinks = FOOTER_LINKS,
  contactLinks = CONTACT_LINKS,
  className,
}) => {
  return (
    <section className={cn("pt-8 pb-8 xl:pt-12 bg-black", className)}>
      <div className=" space-y-10">
        <div className="ms-6 grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2 xl:grid-cols-5">
          <div>
            <NewsletterSection {...newsletter} />
          </div>
          <FooterLinksSection sections={footerLinks} />
          <ContactSection links={contactLinks} />
        </div>
        <div className="flex justify-between pt-4">
        </div>
        <div>
          <div className="flex items-center justify-between gap-4 md:gap-12.5">
            <Separator className="flex-1" />
            <div className="basis-30 md:basis-37.5">
              <a href="/">
                <img
                  className="block dark:hidden"
                  src="./mini-logo.svg"
                  alt="Logo"
                />
                <img
                  className="hidden dark:block"
                  src="./mini-logo.svg"
                  alt="Logo"
                />
              </a>
            </div>
            <Separator className="flex-1" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <p className="text-muted max-md:text-xs">
            Copyright © 2026 Tam Artsy
          </p>
          <Separator
            orientation="vertical"
            className="!h-4.5 bg-foreground/60 max-sm:hidden"
          />
          <p className="max-md:text-xs">Todos os Direitos Reservados</p>

        </div>
      </div>
    </section>
  );
};

const newsletterFormSchema = z.object({
  email: z.string().email(),
});


const NewsletterSection = ({ title, description }) => {
  const form = useForm({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-serif text-3xl leading-none font-medium">
          {title}
        </h3>
        <p className="leading-normal font-light">{description}</p>
      </div>
      <form className="space-y-6 mr-3" onSubmit={form.handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="seuemail@exemplo.com"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button className="w-full">Enviar</Button>
      </form>
    </div>
  );
};

const FooterLinksSection = ({ sections }) => {
  return (
    <Fragment>
      {sections.map(({ title, items }) => (
        <div key={crypto.randomUUID()}>
          <h2 className="mb-6 text-sm leading-tight font-medium text-muted-foreground uppercase">
            {title}
          </h2>
          <ul className="space-y-3">
            {items.map(({ text, link }) => (
              <li key={crypto.randomUUID()}>
                <a href={link} className="underline-offset-4 hover:underline">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Fragment>
  );
};

const ContactSection = ({ links }) => {
  const { socialMedia, contactDetails } = links;

  return (
    <div>
      <h2 className="mb-6 text-sm leading-tight font-medium text-muted-foreground uppercase">
        Contato
      </h2>
      <div className="space-y-6">
        <ul className="space-y-3">
          {contactDetails.map((item) => (
            <li className="flex items-center gap-3" key={crypto.randomUUID()}>
              <item.icon className="size-4 shrink-0 basis-4" />
              <div className="flex-1">
                {item.type === LINK_TYPES.NO_LINK ? (
                  <p>{item.text}</p>
                ) : (
                  <a
                    href={
                      LINK_TYPES.EMAIL_LINK
                        ? `mailto:${item.link}`
                        : `tel:${item.link}`
                    }
                    className="underline-offset-4 hover:underline"
                  >
                    {item.text}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-3">
          {socialMedia.map(({ icon, link }) => (
            <li key={crypto.randomUUID()}>
              <div className="flex items-center gap-5 text-muted dark:text-primary">
                <Link href="https://www.instagram.com/tam.artsy/" target="_blank">
                  <InstagramIcon className="h-5 w-5" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Footer };
