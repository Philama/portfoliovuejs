<script setup>
import { ref, onMounted, nextTick } from 'vue'
import {
  Cake, Camera, Pizza, CalendarDays, Clock, MapPin, UtensilsCrossed,
  Mail, Heart, Copy, Check, MessageCircle, Send, Sparkles, Star,
  Sun, PartyPopper, GlassWater, Users, Crown, ChevronDown
} from 'lucide-vue-next'

const polaroids = [
  { src: '/birthday/img/jackeline.jpg', caption: 'Jackeline y yo', icon: Heart, rot: -3 },
  { src: '/birthday/img/pony-maru.jpg', caption: 'Pony & Maru', icon: Users, rot: 2.5 },
  { src: '/birthday/img/amigos-cumbre.jpg', caption: 'De paseo juntos', icon: Star, rot: -1.5 },
  { src: '/birthday/img/sol-globos.png', caption: 'Sol', icon: Sun, rot: 4 },
  { src: '/birthday/img/josue-fiesta.png', caption: 'Josue', icon: PartyPopper, rot: -2.5 },
  { src: '/birthday/img/collage-pony.jpg', caption: 'Recuerdos con Pony', icon: Camera, rot: 3 },
]

const invitations = [
  { name: 'Jackeline', tag: 'Mi amor, mi todo', icon: Crown, color: '#ff4081', special: true,
    msg: 'Mi vida, gracias por llenar cada día de amor y felicidad. Sos lo mejor que me pasó. Celebrar mi cumple a tu lado es el mejor regalo que puedo tener. ¡Te amo infinito!',
    file: 'jackeline', inviteText: 'Sos mi invitada de honor', inviteIcon: Heart },
  { name: 'Pony & Maru', tag: 'Mi amiga y su novia', icon: Users, color: '#ff4081', special: true,
    msg: 'Pony, sos una de mis mejores amigas, gracias por estar siempre. Maru, gracias por hacer feliz a Pony y por sumarte al grupo. ¡Las espero a las dos para festejar juntas mi cumple!',
    file: 'pony-maru', inviteText: '¡Están oficialmente invitadas!', inviteIcon: Sparkles },
  { name: 'Sol', tag: 'Amiga de Jacke y mía también', icon: Sun, color: '#fbbf24',
    msg: 'Sol, llegaste a mi vida a través de Jacke y ya sos parte del grupo. Gracias por la buena onda, las risas y por siempre sumar. ¡Te espero en mi cumple!',
    file: 'sol', inviteText: '¡Estás oficialmente invitada!', inviteIcon: PartyPopper },
  { name: 'Mariela', tag: 'Amiga de Jacke y del grupo', icon: Sparkles, color: '#a78bfa',
    msg: 'Mariela, gracias por siempre estar y por ser tan buena onda. Sos amiga de Jacke pero ya sos parte de la familia. ¡Venite a celebrar conmigo!',
    file: 'mariela', inviteText: '¡Estás oficialmente invitada!', inviteIcon: PartyPopper },
  { name: 'Josue', tag: 'Un gran amigo', icon: GlassWater, color: '#34d399',
    msg: 'Josue, gracias por la buena onda, las juntadas y los buenos momentos. ¡Te espero en mi cumple para pasarla bien!',
    file: 'josue', inviteText: '¡Estás oficialmente invitado!', inviteIcon: PartyPopper },
]

const copiedIndex = ref(-1)

function copyLink(index, file) {
  const origin = window.location.origin
  const url = origin + '/birthday/' + file
  navigator.clipboard.writeText(url).then(() => {
    copiedIndex.value = index
    setTimeout(() => copiedIndex.value = -1, 2000)
  })
}

function shareWhatsApp(file) {
  const origin = window.location.origin
  const url = origin + '/birthday/' + file
  window.open('https://wa.me/?text=' + encodeURIComponent('Estás invitado/a a mi cumpleaños!\n\n' + url), '_blank')
}

onMounted(() => {
  nextTick(() => {
    const canvas = document.getElementById('confetti')
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let pieces = []
    const colors = ['#d4a017','#c2185b','#7c3aed','#e8b4f8','#ff6b9d','#fde68a','#34d399']
    const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight }
    resize(); window.addEventListener('resize', resize)
    for (let i = 0; i < 180; i++) {
      pieces.push({ x: Math.random()*canvas.width, y: Math.random()*-canvas.height*1.5,
        w: Math.random()*10+4, h: Math.random()*6+3, color: colors[Math.floor(Math.random()*7)],
        vy: Math.random()*3+1.2, vx: Math.random()*2-1, r: Math.random()*360,
        rs: Math.random()*6-3, o: 1 })
    }
    function draw() {
      ctx.clearRect(0,0,canvas.width,canvas.height)
      pieces = pieces.filter(c => {
        c.y += c.vy; c.x += c.vx; c.r += c.rs
        if (c.y > canvas.height*0.85) c.o -= 0.012
        if (c.o <= 0) return false
        ctx.save(); ctx.translate(c.x,c.y); ctx.rotate(c.r*Math.PI/180)
        ctx.globalAlpha = c.o; ctx.fillStyle = c.color
        ctx.fillRect(-c.w/2,-c.h/2,c.w,c.h); ctx.restore(); return true
      })
      if (pieces.length > 0) requestAnimationFrame(draw)
    }
    draw()
  })
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
})
</script>

<template>
  <div class="birthday-page">
    <canvas id="confetti"></canvas>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-glow"></div>
      <div class="hero-content">
        <div class="hero-icon-wrap">
          <Cake :size="64" :stroke-width="1.5" class="hero-icon" />
        </div>
        <h1>¡Feliz Cumpleaños!</h1>
        <p class="tagline">
          <Pizza :size="20" :stroke-width="1.8" class="inline-icon" />
          Noche de Pizzas & Brindis
          <GlassWater :size="20" :stroke-width="1.8" class="inline-icon" />
        </p>
        <div class="date-pill">
          <CalendarDays :size="16" :stroke-width="2" />
          <span>15 · MAYO · 2026</span>
        </div>
      </div>
      <div class="scroll-arrow"><ChevronDown :size="28" :stroke-width="1.5" /></div>
    </section>

    <!-- POLAROIDS -->
    <section class="section-polaroids">
      <h2 class="section-heading reveal">
        <span class="heading-icon"><Camera :size="28" :stroke-width="1.8" /></span>
        Nuestros Momentos
      </h2>
      <p class="section-sub reveal">Recuerdos que valen oro...</p>
      <div class="polaroid-grid">
        <div v-for="(p, i) in polaroids" :key="i" class="polaroid reveal"
             :style="{ '--rot': p.rot + 'deg', animationDelay: i * 0.1 + 's' }">
          <div class="tape"></div>
          <img :src="p.src" :alt="p.caption" loading="lazy" />
          <span class="caption">
            <component :is="p.icon" :size="15" :stroke-width="2" class="caption-icon" />
            {{ p.caption }}
          </span>
        </div>
      </div>
    </section>

    <!-- PARTY DETAILS -->
    <section class="section-details">
      <div class="details-card reveal">
        <div class="details-icon-wrap">
          <Pizza :size="42" :stroke-width="1.5" class="details-main-icon" />
        </div>
        <h2>Noche de Pizzas & Brindis</h2>
        <p class="details-sub">
          <Sparkles :size="16" :stroke-width="2" class="inline-icon" />
          ¡No te lo podés perder!
        </p>
        <div class="details-grid">
          <div class="det-box">
            <CalendarDays :size="26" :stroke-width="1.6" class="det-icon" />
            <span class="det-label">Fecha</span>
            <span class="det-val">15 de Mayo</span>
          </div>
          <div class="det-box">
            <Clock :size="26" :stroke-width="1.6" class="det-icon" />
            <span class="det-label">Hora</span>
            <span class="det-val">21:00 hs</span>
          </div>
          <div class="det-box">
            <MapPin :size="26" :stroke-width="1.6" class="det-icon" />
            <span class="det-label">Lugar</span>
            <span class="det-val">Tristán Narvaja 3053</span>
          </div>
          <div class="det-box">
            <UtensilsCrossed :size="26" :stroke-width="1.6" class="det-icon" />
            <span class="det-label">Menú</span>
            <span class="det-val">Pizzas & Brindis</span>
          </div>
        </div>
      </div>
    </section>

    <!-- INVITATIONS -->
    <section class="section-invitations">
      <h2 class="section-heading reveal">
        <span class="heading-icon"><Mail :size="28" :stroke-width="1.8" /></span>
        Cartitas para mis Amistades
      </h2>
      <p class="section-sub reveal">Cada uno de ustedes es especial para mí...</p>
      <div class="inv-grid">
        <div v-for="(inv, i) in invitations" :key="i"
             class="inv-card reveal" :class="{ special: inv.special }"
             :style="{ animationDelay: i * 0.12 + 's' }">
          <div class="inv-accent"></div>
          <div class="inv-icon-wrap" :style="{ '--accent': inv.color }">
            <component :is="inv.icon" :size="28" :stroke-width="1.8" />
          </div>
          <div class="inv-name">{{ inv.name }}</div>
          <div class="inv-tag">
            <component :is="inv.icon" :size="13" :stroke-width="2" class="tag-mini-icon" />
            {{ inv.tag }}
          </div>
          <div class="inv-msg">{{ inv.msg }}</div>
          <div class="inv-info">
            <div class="inv-row">
              <component :is="inv.inviteIcon" :size="16" :stroke-width="2" class="row-icon" />
              {{ inv.inviteText }}
            </div>
            <div class="inv-row">
              <CalendarDays :size="16" :stroke-width="2" class="row-icon" />
              15 de Mayo — 21:00 hs
            </div>
          </div>
          <div class="share-row">
            <button class="share-btn" :class="{ copied: copiedIndex === i }" @click="copyLink(i, inv.file)">
              <Check v-if="copiedIndex === i" :size="14" :stroke-width="2.5" />
              <Copy v-else :size="14" :stroke-width="2" />
              {{ copiedIndex === i ? '¡Copiado!' : 'Copiar link' }}
            </button>
            <a class="share-btn wa" @click.prevent="shareWhatsApp(inv.file)" href="#">
              <Send :size="14" :stroke-width="2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

    <footer class="bday-footer">
      <Heart :size="16" :stroke-width="2" class="footer-heart" />
      Hecho con amor — ¡Gracias por ser parte de mi vida!
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}

:root {
  --midnight: #080510;
  --surface: #161030;
  --amber: #d4a017;
  --amber-light: #fde68a;
  --rose: #c2185b;
  --rose-glow: #ff4081;
  --violet: #7c3aed;
  --lavender: #e8b4f8;
  --cream: #faf5eb;
  --font-display: 'Playfair Display', serif;
  --font-hand: 'Caveat', cursive;
  --font-body: 'DM Sans', sans-serif;
}

html{scroll-behavior:smooth}
body{font-family:var(--font-body);background:var(--midnight);color:var(--cream);overflow-x:hidden}

#confetti{position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999}

.reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}
.reveal.visible{opacity:1;transform:translateY(0)}

/* Inline icon helper */
.inline-icon{vertical-align:middle;opacity:.7;margin:0 2px}

/* ---- HERO ---- */
.hero{position:relative;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:2rem;
  background:radial-gradient(ellipse at 50% 20%,rgba(124,58,237,.12),transparent 65%),radial-gradient(ellipse at 80% 75%,rgba(194,24,91,.08),transparent 55%),var(--midnight)}
.hero-glow{position:absolute;top:15%;left:50%;transform:translateX(-50%);width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(212,160,23,.08),transparent 70%);filter:blur(60px);pointer-events:none}
.hero-content{position:relative;z-index:2}

.hero-icon-wrap{
  display:inline-flex;align-items:center;justify-content:center;
  width:110px;height:110px;border-radius:50%;margin-bottom:1.5rem;
  background:linear-gradient(135deg,rgba(212,160,23,.12),rgba(194,24,91,.1));
  border:1.5px solid rgba(212,160,23,.25);
  box-shadow:0 0 40px rgba(212,160,23,.1),0 0 80px rgba(194,24,91,.06);
  animation:cakeBounce 1s ease-out,cakePulse 2.5s ease-in-out 1s infinite;
}
.hero-icon{color:var(--amber-light)}
@keyframes cakeBounce{0%{transform:scale(0) rotate(-20deg);opacity:0}60%{transform:scale(1.1) rotate(3deg)}100%{transform:scale(1) rotate(0);opacity:1}}
@keyframes cakePulse{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}

.hero h1{font-family:var(--font-display);font-size:clamp(2.8rem,7.5vw,5.5rem);font-weight:700;line-height:1.05;letter-spacing:-.02em;
  background:linear-gradient(135deg,var(--amber-light),var(--rose-glow),var(--lavender));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:fadeUp 1.1s ease-out .3s both}
.tagline{font-family:var(--font-hand);font-size:clamp(1.4rem,3.5vw,2.2rem);color:var(--amber-light);opacity:.8;margin-top:.4rem;animation:fadeUp 1.1s ease-out .55s both;display:flex;align-items:center;justify-content:center;gap:.5rem}
.date-pill{display:inline-flex;align-items:center;gap:.6rem;margin-top:2rem;padding:.7rem 2.2rem;border:1.5px solid var(--amber);border-radius:40px;font-weight:600;font-size:.95rem;color:var(--amber);letter-spacing:4px;position:relative;overflow:hidden;animation:fadeUp 1.1s ease-out .8s both}
.date-pill::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(212,160,23,.12),transparent);animation:shimmer 3.5s ease-in-out infinite}
@keyframes shimmer{0%,100%{transform:translateX(-100%)}50%{transform:translateX(100%)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:translateY(0)}}

.scroll-arrow{position:absolute;bottom:2rem;opacity:.4;animation:arrowBounce 2s ease-in-out infinite;color:var(--amber-light)}
@keyframes arrowBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}

/* ---- SECTIONS ---- */
section{position:relative;z-index:1;padding:5rem 1.5rem}
.section-heading{font-family:var(--font-display);font-size:clamp(1.8rem,4.5vw,3rem);text-align:center;color:var(--amber-light);margin-bottom:.6rem;display:flex;align-items:center;justify-content:center;gap:.7rem}
.heading-icon{display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:12px;background:linear-gradient(135deg,rgba(212,160,23,.12),rgba(124,58,237,.08));border:1px solid rgba(212,160,23,.2);color:var(--amber-light)}
.section-sub{font-family:var(--font-hand);font-size:1.4rem;text-align:center;color:var(--lavender);opacity:.7;margin-bottom:3rem}

/* ---- POLAROIDS ---- */
.section-polaroids{background:radial-gradient(ellipse at center,rgba(124,58,237,.06),transparent 70%)}
.polaroid-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:2.8rem;max-width:1150px;margin:0 auto}
.polaroid{background:var(--cream);padding:10px 10px 46px;position:relative;box-shadow:0 8px 30px rgba(0,0,0,.5),0 2px 6px rgba(0,0,0,.3);transform:rotate(var(--rot,-2deg));cursor:pointer;transition:transform .45s cubic-bezier(.34,1.56,.64,1),box-shadow .4s}
.polaroid:hover{transform:rotate(0) scale(1.04) translateY(-6px);box-shadow:0 18px 50px rgba(212,160,23,.18),0 6px 20px rgba(0,0,0,.4);z-index:10}
.polaroid img{width:100%;aspect-ratio:1;object-fit:cover;display:block;filter:saturate(1.05) contrast(1.04);transition:filter .4s}
.polaroid:hover img{filter:saturate(1.15) contrast(1.08) brightness(1.04)}
.caption{font-family:var(--font-hand);font-size:1.2rem;color:#2a2a2a;text-align:center;position:absolute;bottom:10px;left:10px;right:10px;display:flex;align-items:center;justify-content:center;gap:.3rem}
.caption-icon{color:#c2185b;flex-shrink:0}
.tape{position:absolute;width:70px;height:24px;background:rgba(255,230,160,.65);top:-10px;left:50%;transform:translateX(-50%) rotate(-1.5deg);box-shadow:0 1px 3px rgba(0,0,0,.12)}

/* ---- DETAILS ---- */
.section-details{display:flex;justify-content:center}
.details-card{max-width:660px;width:100%;text-align:center;padding:3rem 2rem;background:rgba(255,255,255,.025);border:1px solid rgba(212,160,23,.12);border-radius:20px;backdrop-filter:blur(8px)}
.details-icon-wrap{display:inline-flex;align-items:center;justify-content:center;width:80px;height:80px;border-radius:50%;margin-bottom:1rem;background:linear-gradient(135deg,rgba(212,160,23,.1),rgba(194,24,91,.08));border:1px solid rgba(212,160,23,.2);box-shadow:0 0 30px rgba(212,160,23,.08)}
.details-main-icon{color:var(--amber-light)}
.details-card h2{font-family:var(--font-display);font-size:1.8rem;color:var(--amber-light)}
.details-sub{font-family:var(--font-hand);font-size:1.2rem;color:var(--lavender);opacity:.7;margin:.5rem 0 1.8rem;display:flex;align-items:center;justify-content:center;gap:.4rem}
.details-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.det-box{display:flex;flex-direction:column;align-items:center;gap:.3rem;padding:1.2rem;background:rgba(255,255,255,.035);border:1px solid rgba(212,160,23,.1);border-radius:12px;transition:background .3s,border-color .3s}
.det-box:hover{background:rgba(255,255,255,.06);border-color:rgba(212,160,23,.2)}
.det-icon{color:var(--amber-light);opacity:.8}
.det-label{font-family:var(--font-hand);font-size:.9rem;color:var(--lavender)}
.det-val{font-family:var(--font-display);font-size:1.1rem;color:var(--amber-light);font-weight:600}

/* ---- INVITATIONS ---- */
.section-invitations{background:linear-gradient(180deg,transparent,rgba(194,24,91,.03),transparent)}
.inv-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(310px,1fr));gap:2.2rem;max-width:1100px;margin:0 auto}
.inv-card{background:linear-gradient(145deg,rgba(22,16,48,.92),rgba(12,8,28,.96));border:1px solid rgba(212,160,23,.18);border-radius:18px;padding:2.2rem 1.8rem;text-align:center;position:relative;overflow:hidden;transition:transform .4s,border-color .4s,box-shadow .4s}
.inv-card:hover{transform:translateY(-5px);border-color:var(--amber);box-shadow:0 10px 35px rgba(212,160,23,.12)}
.inv-accent{position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--amber),var(--rose),var(--lavender))}
.inv-card.special .inv-accent{height:5px;background:linear-gradient(90deg,var(--rose),var(--rose-glow),#ff85a2)}
.inv-card.special{border-color:rgba(194,24,91,.3)}

.inv-icon-wrap{
  display:inline-flex;align-items:center;justify-content:center;
  width:56px;height:56px;border-radius:50%;margin-bottom:.8rem;
  background:linear-gradient(135deg,color-mix(in srgb,var(--accent) 12%,transparent),color-mix(in srgb,var(--accent) 6%,transparent));
  border:1px solid color-mix(in srgb,var(--accent) 30%,transparent);
  color:var(--accent,var(--amber-light));
  box-shadow:0 0 20px color-mix(in srgb,var(--accent) 10%,transparent);
}

.inv-name{font-family:var(--font-display);font-size:1.7rem;font-weight:600;color:var(--amber-light)}
.inv-tag{font-family:var(--font-hand);font-size:1.05rem;color:var(--rose-glow);margin-bottom:1.2rem;display:flex;align-items:center;justify-content:center;gap:.3rem}
.tag-mini-icon{opacity:.7}
.inv-msg{font-family:var(--font-hand);font-size:1.15rem;line-height:1.55;opacity:.82;margin-bottom:1.4rem}
.inv-info{display:flex;flex-direction:column;gap:.4rem;padding-top:1rem;border-top:1px solid rgba(212,160,23,.1)}
.inv-row{font-size:.9rem;color:var(--lavender);display:flex;align-items:center;justify-content:center;gap:.4rem}
.row-icon{opacity:.7;flex-shrink:0}

/* ---- SHARE ---- */
.share-row{display:flex;gap:.6rem;justify-content:center;margin-top:1rem;padding-top:.8rem;border-top:1px solid rgba(212,160,23,.08)}
.share-btn{display:inline-flex;align-items:center;gap:.4rem;padding:.5rem 1rem;border:1px solid rgba(212,160,23,.25);border-radius:8px;background:rgba(255,255,255,.04);color:var(--amber-light);font-family:var(--font-body);font-size:.82rem;cursor:pointer;transition:all .3s;text-decoration:none}
.share-btn:hover{background:rgba(212,160,23,.12);border-color:var(--amber)}
.share-btn.wa{border-color:rgba(37,211,102,.35);color:#25d366}
.share-btn.wa:hover{background:rgba(37,211,102,.12)}
.share-btn.copied{color:#34d399;border-color:#34d399}

/* ---- FOOTER ---- */
.bday-footer{text-align:center;padding:3rem 2rem;font-family:var(--font-hand);font-size:1.25rem;color:var(--lavender);opacity:.5;display:flex;align-items:center;justify-content:center;gap:.5rem}
.footer-heart{color:var(--rose-glow);animation:heartbeat 1.5s ease-in-out infinite}
@keyframes heartbeat{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}

/* ---- RESPONSIVE ---- */
@media(max-width:600px){
  .polaroid-grid{grid-template-columns:1fr 1fr;gap:1.3rem}
  .polaroid{padding:7px 7px 36px}
  .caption{font-size:.95rem}
  .inv-grid{grid-template-columns:1fr}
  .share-row{flex-direction:column}
  .section-heading{flex-direction:column;gap:.4rem}
}
</style>
