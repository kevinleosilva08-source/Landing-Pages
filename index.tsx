import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Scale,
  TrendingUp,
  AlertCircle,
  XCircle,
  Mail,
  Instagram,
  Clock,
  Phone,
  ArrowRight,
  Award,
  Users,
  MessageCircle,
} from "lucide-react";
import pedroPhoto from "@/assets/pedro-almeida.jpg";
import { Counter } from "@/components/Counter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Pedro Almeida | Advogado Especialista em Pensão Alimentícia" },
      {
        name: "description",
        content:
          "Dr. Pedro Almeida (OAB/GO 50.910) — soluções seguras em pensão alimentícia: pedido, revisão, cobrança e exoneração. Anápolis e todo o estado.",
      },
      { property: "og:title", content: "Pedro Almeida | Advogado Especialista" },
      {
        property: "og:description",
        content: "Orientação jurídica especializada em pensão alimentícia.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Montserrat:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
});

const WHATSAPP_URL = "https://wa.link/d4usly";
const WHATSAPP_NUMBER = "5562992541175";

const openWhatsApp = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const w = window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  if (!w) window.location.href = WHATSAPP_URL;
};

const openWhatsAppWith =
  (message: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const w = window.open(url, "_blank", "noopener,noreferrer");
    if (!w) window.location.href = url;
  };

const quickQuestions = [
  "Estou grávida e o genitor disse que não vai me ajudar com nada, tenho direito a pensão?",
  "Meu filho nasceu e o pai disse que não vai registrar e nem pagar pensão, o que fazer?",
  "O genitor não está pagando a pensão, o que posso fazer?",
];

const fallbackQuestion = "Olá Dr. Pedro, gostaria de tirar uma dúvida sobre pensão alimentícia.";

const services = [
  {
    icon: Scale,
    title: "Pedido de Pensão",
    desc: "Garanta o sustento e os direitos do seu filho após a separação.",
  },
  {
    icon: TrendingUp,
    title: "Revisão de Valores",
    desc: "Ajuste a pensão para um valor justo se sua renda mudou ou se o responsável ostenta um padrão de vida incompatível com o que paga.",
  },
  {
    icon: AlertCircle,
    title: "Cobrança de Atrasados",
    desc: "Recupere valores não pagos e garanta que a justiça seja feita contra o descumprimento do dever.",
  },
  {
    icon: XCircle,
    title: "Fim do Pagamento",
    desc: "Cancele legalmente o pagamento da pensão quando a obrigação não for mais necessária por lei.",
  },
];

function Landing() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? "glass shadow-card" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-burgundy sm:text-2xl">
              Pedro <span className="text-gradient-gold">Almeida</span>
            </span>
          </a>
          <a
            href="#cta-pensao"
            className="group inline-flex items-center gap-2 rounded-full bg-burgundy px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-sand shadow-card transition-all hover:bg-burgundy-deep hover:shadow-luxe sm:px-6 sm:text-sm"
          >
            <span className="hidden sm:inline">Falar com Especialista</span>
            <span className="sm:hidden">Falar agora</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden gradient-hero pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-32 lg:pt-44"
      >
        {/* Decorative blurs */}
        <div
          className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-gold)" }}
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "oklch(0.50 0.15 25)" }}
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-8">
          <div className="animate-float-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 glass-dark px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
              <Award className="h-3.5 w-3.5" /> OAB/GO 50.910
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-sand sm:text-5xl lg:text-6xl">
              Pedro Almeida
              <span className="mt-2 block text-2xl font-medium text-gold sm:text-3xl lg:text-4xl">
                Especialista em soluções seguras para pedidos, revisões e exoneração de pensão alimentícia.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-sand/80 sm:text-lg lg:mx-0">
              Orientação jurídica especializada para quem busca agilidade em processos de pensão alimentícia.
              Atendimento presencial em <span className="text-gold">Anápolis</span> e on-line em todo o estado.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#cta-pensao"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full gradient-gold px-7 py-4 text-sm font-bold uppercase tracking-wider text-burgundy-deep shadow-gold transition-all hover:scale-[1.03] sm:w-auto"
              >
                Falar com o Dr. Pedro agora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#sobre"
                className="text-sm font-medium text-sand/80 underline-offset-4 transition hover:text-gold hover:underline"
              >
                Conheça meu trabalho
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Atuação especializada
            </p>
            <h2 className="font-display text-3xl font-bold text-burgundy sm:text-5xl">
              Como posso te ajudar?
            </h2>
            <div className="mx-auto mt-5 h-px w-24 gradient-gold" />
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-luxe"
              >
                <div
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 gradient-gold transition-transform duration-500 group-hover:scale-x-100"
                />
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl gradient-burgundy text-gold shadow-card transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <s.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold text-burgundy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Authority counters */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 gradient-hero" />
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, oklch(0.76 0.13 85 / 0.4), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.50 0.15 25 / 0.4), transparent 50%)",
          }}
        />
        <div className="relative mx-auto grid max-w-5xl gap-10 px-5 sm:grid-cols-2 sm:px-8">
          {[
            { icon: Award, end: 15, label: "anos de experiência", prefix: "+" },
            { icon: Users, end: 1000, label: "clientes atendidos", prefix: "+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl glass-dark p-8 text-center shadow-luxe sm:p-10"
            >
              <stat.icon className="mx-auto mb-4 h-10 w-10 text-gold" strokeWidth={1.5} />
              <div className="font-display text-5xl font-bold text-gold sm:text-6xl">
                <Counter end={stat.end} prefix={stat.prefix} />
              </div>
              <p className="mt-3 text-sm font-medium uppercase tracking-widest text-sand/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-5 lg:items-center">
          <div className="relative lg:col-span-2">
            <div className="absolute -inset-4 rounded-3xl gradient-gold opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-gold/30 shadow-luxe">
              <img
                src={pedroPhoto}
                alt="Dr. Pedro Almeida"
                loading="lazy"
                width={896}
                height={1152}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Sobre mim
            </p>
            <h2 className="font-display text-3xl font-bold text-burgundy sm:text-4xl lg:text-5xl">
              Atendimento humanizado, respaldo técnico de excelência.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/80">
              <p>
                Sou o <strong className="text-burgundy">Dr. Pedro Almeida</strong> (OAB/GO 50.910),
                advogado com mais de 15 anos de experiência atuando no meio jurídico. Minha missão é
                oferecer um atendimento humanizado e técnico para todos.
              </p>
              <p>
                Sou <strong className="text-burgundy">Mestre em Ciências Sociais</strong> pela
                Universidade Estadual de Goiás e <strong className="text-burgundy">Pós-graduado pelo UniCEUB</strong>,
                qualificações que somadas aos mais de 1.000 clientes atendidos, me permitem entregar
                soluções seguras e eficazes para garantir que você exerça seus direitos.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "OAB/GO 50.910",
                "Mestre · UEG",
                "Pós-graduado · UniCEUB",
              ].map((tag) => (
                <div
                  key={tag}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-center text-sm font-medium text-burgundy shadow-card"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section id="cta-pensao" className="px-5 pb-20 sm:px-8 scroll-mt-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl gradient-burgundy p-10 shadow-luxe sm:p-16">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-gold)" }}
          />
          <div className="relative flex flex-col gap-10">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-3xl font-bold leading-tight text-sand sm:text-4xl">
                Pronto para resolver sua questão de{" "}
                <span className="text-gradient-gold">pensão alimentícia?</span>
              </h3>
              <p className="mt-4 text-base text-sand/80">
                Atendimento ágil, sigiloso e direto com o advogado responsável.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {quickQuestions.map((q) => (
                <a
                  key={q}
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(q)}`}
                  onClick={openWhatsAppWith(q)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-2xl border border-gold/30 bg-sand/5 p-5 text-left text-sm leading-snug text-sand transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:bg-gold/10"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold transition group-hover:scale-110">
                    <MessageCircle className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="flex-1">“{q}”</span>
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                onClick={openWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl gradient-gold p-5 text-left text-sm leading-snug font-bold uppercase tracking-wider text-burgundy-deep shadow-gold transition-all hover:-translate-y-0.5 hover:scale-[1.02] sm:col-span-2"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-burgundy-deep/15 text-burgundy-deep transition group-hover:scale-110">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="flex-1">Sua dúvida não está aqui? Fale comigo agora</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden gradient-hero pt-16">
        <div
          className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-gold)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 pb-12 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <p className="font-display text-2xl font-bold text-sand">
                Pedro <span className="text-gradient-gold">Almeida</span>
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-sand/70">
                Advocacia especializada em direito de família, com foco em pensão alimentícia.
                Atendimento presencial em Anápolis e on-line em todo o estado de Goiás.
              </p>
            </div>

            <div className="grid gap-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">Contato</p>
              <a
                href="mailto:pedroalmeidacosta.advocacia@gmail.com"
                className="group flex items-start gap-3 text-sm text-sand/80 transition hover:text-gold"
              >
                <span className="rounded-lg glass-dark p-2 text-gold transition group-hover:scale-110">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="break-all pt-1.5">pedroalmeidacosta.advocacia@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/pedroalmeida_costa"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-sand/80 transition hover:text-gold"
              >
                <span className="rounded-lg glass-dark p-2 text-gold transition group-hover:scale-110">
                  <Instagram className="h-4 w-4" />
                </span>
                @pedroalmeida_costa
              </a>
            </div>

            <div className="grid gap-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">Atendimento</p>
              <div className="flex items-center gap-3 text-sm text-sand/80">
                <span className="rounded-lg glass-dark p-2 text-gold">
                  <Clock className="h-4 w-4" />
                </span>
                Seg à Sex: 08h às 18h
              </div>
              <a
                href={WHATSAPP_URL}
                onClick={openWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-sand/80 transition hover:text-gold"
              >
                <span className="rounded-lg glass-dark p-2 text-gold transition group-hover:scale-110">
                  <Phone className="h-4 w-4" />
                </span>
                (62) 9254-1175
              </a>
            </div>
          </div>

          <div className="border-t border-gold/20 py-6 text-center text-xs text-sand/60">
            © 2026 Pedro Almeida Costa Advocacia. Todos os direitos reservados. OAB/GO 50.910
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
}
