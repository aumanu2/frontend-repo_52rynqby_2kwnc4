import React from 'react'
import Spline from '@splinetool/react-spline'
import { Menu, X, Rocket, Palette, Globe, Cpu, Mail, Linkedin, Github, Phone } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = React.useState(false)
  const toggle = () => setOpen(o => !o)

  const NavLink = ({ href, children }) => (
    <a href={href} className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:underline underline-offset-4">
      {children}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500" />
          <span className="font-semibold tracking-tight text-slate-800">Samuel Gang</span>
        </a>
        <nav className="hidden md:flex items-center">
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <button onClick={toggle} className="md:hidden p-2 rounded-md border border-slate-200 text-slate-700">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          <a onClick={() => setOpen(false)} href="#work" className="py-2">Work</a>
          <a onClick={() => setOpen(false)} href="#services" className="py-2">Services</a>
          <a onClick={() => setOpen(false)} href="#about" className="py-2">About</a>
          <a onClick={() => setOpen(false)} href="#contact" className="py-2">Contact</a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* subtle gradient overlay for contrast - make sure it doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-full md:w-1/2 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-600">
            <Rocket className="h-4 w-4 text-indigo-600" /> Aerospace Engineer @ WSU
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Samuel Gang
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-700 max-w-xl">
            Portfolio for my web and graphic design practice — and the home of Jevon & Zenola, the tech company I founded to build playful, modern digital experiences.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#work" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-slate-900 text-white shadow hover:shadow-md transition">See my work</a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 hover:bg-slate-50">Start a project</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-slate-600">
            <a href="mailto:samuel@example.com" className="hover:text-slate-900" aria-label="Email"><Mail size={20} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900" aria-label="GitHub"><Github size={20} /></a>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[60vh] md:h-[70vh]" />
      </div>
    </section>
  )
}

function Services() {
  const items = [
    {
      icon: Globe,
      title: 'Web Design & Build',
      desc: 'High-performing websites with modern aesthetics, responsive layouts, and strong UX.'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      desc: 'Logos, brand systems, and visual assets that communicate clearly and look great.'
    },
    {
      icon: Cpu,
      title: 'Tech Services (Jevon & Zenola)',
      desc: 'Consulting, prototypes, and digital products built with reliable, scalable tech.'
    },
  ]

  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Services</h2>
          <span className="text-sm text-slate-500">CEO & Founder — Jevon & Zenola</span>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group relative rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl grid place-items-center bg-gradient-to-br from-indigo-500 to-blue-500 text-white">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{it.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700">Let’s talk →</a>
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  const projects = [
    {
      title: 'Aerospace Research Microsite',
      tag: 'Web Design',
      image: 'https://images.unsplash.com/photo-1466354424719-343280fe118b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Brand System — Jevon & Zenola',
      tag: 'Identity',
      image: 'https://images.unsplash.com/photo-1583922560876-3bfef1f5ee03?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcmFuZCUyMFN5c3RlbSUyMCVFMiU4MCU5NCUyMEpldm9uJTIwJTI2JTIwWmVub2xhfGVufDB8MHx8fDE3NjI4MTcwNTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Interactive Product Demo',
      tag: 'Prototype',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <section id="work" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Selected Work</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">A quick look at design and tech projects that blend clarity, craft, and a bit of play.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <span className="text-xs uppercase tracking-wide text-indigo-600">{p.tag}</span>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">About</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            I’m Samuel Gang, an aerospace engineering student at Washington State University. I bring an engineer’s rigor to design — combining systems-thinking with a love for clear, modern visuals. Through my studio work and my company, Jevon & Zenola, I help brands craft engaging websites, identities, and interactive experiences.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Outside of client work, I explore prototypes at the intersection of 3D, web, and human-centered design.
          </p>
        </div>
        <div className="md:col-span-1">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 text-white grid place-items-center text-3xl font-bold">SG</div>
            <ul className="mt-6 space-y-3 text-slate-700 text-sm">
              <li className="flex items-center gap-3"><Rocket className="h-4 w-4 text-indigo-600" /> Aerospace Engineering — WSU</li>
              <li className="flex items-center gap-3"><Palette className="h-4 w-4 text-indigo-600" /> Web + Visual Design</li>
              <li className="flex items-center gap-3"><Cpu className="h-4 w-4 text-indigo-600" /> CEO — Jevon & Zenola</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Let’s build something great</h3>
              <p className="mt-2 text-slate-600">Tell me a bit about your project and timeline. I’ll respond within 24–48 hours.</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-slate-700">
                <a href="mailto:samuel@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white"><Mail size={18}/> samuel@example.com</a>
                <a href="tel:+11234567890" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 bg-white"><Phone size={18}/> +1 (123) 456-7890</a>
              </div>
            </div>
            <form className="space-y-4">
              <input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
              <input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email" type="email" />
              <textarea className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Project details" />
              <button type="submit" onClick={(e)=>{e.preventDefault(); window.location.href='mailto:samuel@example.com'}} className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} Samuel Gang — All rights reserved.</p>
        <div className="flex items-center gap-4 text-slate-600">
          <a className="hover:text-slate-900" href="mailto:samuel@example.com" aria-label="Email"><Mail size={18} /></a>
          <a className="hover:text-slate-900" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a className="hover:text-slate-900" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Work />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
