"use client";

import { useState } from "react";
import { profile, socials } from "@/data/resume";
import { useReveal } from "@/lib/useReveal";

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case "LinkedIn":
      return <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" /></svg>;
    case "Email":
      return <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" /></svg>;
    default:
      return <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z" /></svg>;
  }
};

export default function Contact() {
  const scope = useReveal<HTMLElement>();
  const [form, setForm] = useState({ name: "", email: "", type: "Mobile Engineering", budget: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.type}] Signal from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}\nBudget: ${form.budget || "n/a"}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" ref={scope} className="relative min-h-screen py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-primary/20 rounded-full mix-blend-screen blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-secondary/10 rounded-full mix-blend-screen blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDelay: "1s", animationDuration: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-500/5 rounded-full blur-[60px] md:blur-[100px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* left */}
          <div className="w-full lg:w-5/12 order-1 flex flex-col">
            <div className="reveal-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 mb-8 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-xs font-mono text-primary tracking-widest uppercase">System Online</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 md:mb-8 text-white tracking-tight leading-none">
                Let&apos;s<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-white">Sync.</span>
              </h2>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed font-light border-l-2 border-primary/30 pl-4 md:pl-6">
                Bridging product intent with mobile engineering. Send a signal to start a conversation about your next app,
                platform, or team.
              </p>
            </div>

            <div className="reveal-left mt-10 space-y-8" data-delay="0.15">
              <div className="space-y-4">
                <a href={`mailto:${profile.email}`} className="group flex items-center gap-4 p-4 rounded-xl glass-panel border border-white/5 hover:border-primary/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors text-primary"><Icon name="Email" /></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-white font-medium truncate group-hover:text-primary transition-colors">{profile.email}</p>
                  </div>
                </a>
                <a href={`tel:${profile.phoneHref}`} className="group flex items-center gap-4 p-4 rounded-xl glass-panel border border-white/5 hover:border-secondary/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors text-secondary"><Icon name="Phone" /></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-white font-medium truncate group-hover:text-secondary transition-colors">{profile.phone}</p>
                  </div>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-xl glass-panel border border-white/5 hover:border-sky-500/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors text-sky-400"><Icon name="LinkedIn" /></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">LinkedIn</p>
                    <p className="text-white font-medium truncate group-hover:text-sky-400 transition-colors">{profile.linkedinLabel}</p>
                  </div>
                </a>
              </div>
              <div className="flex gap-4 justify-center lg:justify-start">
                {socials.map((s) => (
                  <a key={s.name} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" title={s.name} className={`w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 border border-white/5 ${s.hover}`}>
                    <Icon name={s.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* form */}
          <div className="reveal-right w-full lg:w-7/12 relative group mx-auto order-2">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/30 to-secondary/30 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-500" />
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-2xl border border-white/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-bl-[100px] -mr-12 -mt-12 blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-tr-[100px] -ml-12 -mb-12 blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-8 relative z-10">
                <h3 className="text-xl md:text-2xl font-display font-bold text-white">Transmission Data</h3>
                <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase hidden sm:block">Secure Channel: Encrypted</span>
              </div>

              <form onSubmit={submit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input name="name" value={form.name} onChange={onChange} required placeholder="Identify Yourself / Entity" className="glass-input w-full rounded-xl px-5 py-4 text-sm" />
                  <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="Email Address" className="glass-input w-full rounded-xl px-5 py-4 text-sm" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <select name="type" value={form.type} onChange={onChange} className="glass-input w-full rounded-xl px-5 py-4 text-sm appearance-none">
                    {["Mobile Engineering", "Platform / SDK", "AI & Data", "Leadership Role", "Other Inquiry"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <input name="budget" value={form.budget} onChange={onChange} placeholder="Est. Budget / Timeline" className="glass-input w-full rounded-xl px-5 py-4 text-sm" />
                </div>
                <textarea name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Message Payload" className="glass-input w-full rounded-xl px-5 py-4 text-sm resize-none" />
                <button type="submit" className="relative w-full h-14 rounded-xl overflow-hidden group/btn cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary bg-[length:200%_auto] animate-gradient" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shine" />
                  <span className="relative z-10 flex items-center justify-center gap-2 text-white font-bold tracking-wider text-sm">
                    {sent ? "SIGNAL SENT" : "TRANSMIT SIGNAL"}
                    <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor" className="group-hover/btn:translate-x-1 transition-transform"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" /></svg>
                  </span>
                </button>
                <p className="text-center text-[10px] font-mono tracking-widest text-slate-600 uppercase">Opens your mail client · 256-bit AES in transit</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
