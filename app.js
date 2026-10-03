/**
 * Ewusiwaa — Luxury Editorial Celebration Application Script
 * High Fashion & Quiet Luxury Edition
 */

// Initial Curated Tributes from Friends
const initialWishes = [
  {
    id: 'tribute-3',
    author: 'Baffour Kwadwo Senkyire',
    relation: 'Childhood friend',
    type: 'video',
    avatar: 'SK',
    videoUrl: 'videos/baffvideo.mp4',
    videoDuration: '00:31',
    videoTitle: 'To the Queen of Grace',
    quote: 'To our queen who carries blue with more elegance than the sky itself.',
    fullMessage: "Ewusiwaa my dearest! Watching you step into rooms with that effortless poise and warmth is a masterclass in elegance. Thank you for bringing joy, boundless laughter, and honest friendship everywhere you go. Here is to celebrating you in style!",
  },
  {
    id: 'tribute-1',
    author: 'Mercylina Naa Yemoley Tetteh',
    relation: 'Soul Sister & Confidante',
    type: 'video',
    avatar: 'MT',
    videoDuration: '00:45',
    videoTitle: 'A Decade of Sisterhood',
    quote: 'Ewusiwaa, you have this superpower of making every person around you feel seen, worthy, and loved.',
    fullMessage: "Oh my! Oh my! OhGray!🩷How rare it is to find selfless people in this present time, but the GRACE of God found me and blessed me with someone as GRACEFUL as you. [Just deep am😏] [Have you seen what I did there?🤣😏] Ewusiwaa, I see you as a blessing and I am extremely grateful for you. You’ve been a genuine friend and that  has set  standards for what I need my friendships to look like in my life. The distance didn’t alter anything between us. You still made sure to show up in unexpected ways and you have no idea how that  alone has been keeping me grounded. I can be going through the toughest time and all it takes is for me to answer your call and I’ve forgotten I was not feeling the best. Our story is being written Ewusiwaa, and I believe there’s more to come. I see your persistence and I am so proud of you. I pray that your effort will be blessed, you’ll reach that destination and surpass your plans and dreams. We’ll have that Doctor with accent. You’ll open that hospital. You’ll have the recognition beyond the title. You’ll see the blessings and GRACE of God in your life forever. God bless you. God bless your heart. You’ve shown me so much love and I appreciate you so much. These aren’t just words. I mean it. Embed every word deep in your heart. I’ll forever love you and appreciate you. Happy birthday Ewusiwaa❤️ have the best day ever. 🎉❤️",
  },
  {
    id: 'tribute-2',
    author: 'Kwaku Brobbey',
    relation: 'Close friend',
    type: 'text',
    avatar: 'KB',
    fullMessage: "happy happy birthday stepper❤️. Thank you for being an amazing friend. God bless you. I love and appreciate you so much. Have the best day ever. i got you for life",

  },

  {
    id: 'tribute-4',
    author: 'Adwoa Odei Dankyi(O.B)',
    relation: 'Close friends',
    type: 'text',
    avatar: 'OB',
    quote: null,
    fullMessage: "HAPPY BIRTHDAY EWUSIWAA💋,We are already 21st, It feels like just yesterday when we were throwing tantrums in class, and now look at us! I'm so incredibly grateful that our friendship has lasted long after those school days. You've been such an amazing friend, and watching you grow into the beautiful, strong woman you are today has been a true blessing.I hope your 21st is filled with all the joy, laughter, and love you deserve. Cheers to you, Ewurabena Here's to many more years of our friendship and celebrating life's big moments together. I pray for more doors to open for you🥹. And can't wait for see what 21 has for you❤️. I love you ",

  },
  {
    id: 'tribute-5',
    author: 'Jude Hammond',
    relation: 'Close friend',
    type: 'text',
    avatar: 'JH',
    fullMessage: 'Happy birthday Twinnn.You are sucha sweet person and truly one of the best people to talk to.Even though you are not in the same country as me, you are close to my heart.I love you so much and I am grateful to have you in my life.I pray this becomes your best year yet,filled with happiness,love,success,good health and answered prayers.May all your dreams come true.Keep shining and being the amazing person you are.Happy Birthday Doc.Ewusiwaa❤️',
  },
  {
    id: 'tribute-6',
    author: 'Owura Kwame',
    relation: 'Close friend',
    type: 'text',
    avatar: 'OK',
    quote: null,
    fullMessage: "Happy birthday Ewusiwaa! I hope you have a day and life filled with love and kindness. God bless you and grant you all your heart desires. From Ghana Meteorological Service!🙏🏼❤️ ",

  },
  {
    id: 'tribute-7',
    author: 'Agya Kwesi Adom',
    relation: 'Close friend',
    type: 'text',
    avatar: 'AKA',
    quote: null,
    fullMessage: "Happy birthday Ewusiwaa! It’s hard to meet someone who has a brilliant mind and such a vivid, soulful way with her words. You really are that entire spectrum of light and you are unstoppable. I hope this year brings you as much growth, clarity, and genuine joy as the energy you pour into everything you do. Have an incredible year❤️",

  },
  {
    id: 'tribute-8',
    author: 'Hillary Kuukua Bentum',
    relation: 'Close friend ',
    type: 'video',
    avatar: 'HB',
    videoDuration: '00:31',
    videoTitle: 'A Birthday Toast to Radiance',
    videoUrl: 'videos/hilvideo.mp4',
    quote: 'Keep glowing, keep dancing, and never let anything dim your sparkle!',
    fullMessage: "Ewusiwaa! Happy, happy birthday. You deserve all the peace, luxury, and laughter the world can offer. Keep glowing, keep dancing, and never let anything dim your sparkle!",
  },
  {
    id: 'tribute-9',
    author: 'N.K Antwi',
    relation: 'Very Close friend and SRC Vice President',
    type: 'video',
    avatar: 'NK',
    videoDuration: '00:52',
    videoTitle: 'To Our Timeless Ewusiwaa',
    videoUrl: 'videos/NanaKwame.mp4',
    quote: "Remember when we promised that no matter where life leads us, we would pause every year to celebrate each other's existence?",
    fullMessage: "To our timeless Ewusiwaa: remember when we promised that no matter where life leads us, we would pause every year to celebrate each other's existence? Here we are, and you are more stunning and inspiring than ever.",
  },
  {
    id: 'tribute-10',
    author: 'Kofi Ackah',
    relation: 'Close Friend',
    type: 'text',
    avatar: 'KA',
    quote: null,
    fullMessage: "happy birthdayyy girliee Ewusiwaa❤️🎂it’s actually funny how we’ve never met in person, but we’ve still managed to build such a lovely friendship. you have such a fun personality, and i genuinely enjoy the energy you bring. on your special day, i pray that God blesses you with happiness, peace, good health, endless opportunities and everything your heart desires. may this new chapter bring you beautiful memories, genuine love, answered prayers, and countless reasons to smile every single day. ❤️i hope life continues to be beautiful to you, and i hope we get the chance to meet in person someday and create even more memories together. until then, keep being the amazing, fun, and beautiful soul you are. enjoy your day to the fullest. you deserve all the love and happiness coming your way. happy birthday once againnn! 🎉❤️",

  },
  {
    id: 'tribute-11',
    author: 'Amar (AJ Honey)',
    relation: 'The smartest,coolest,funniest and best person you know',
    type: 'text',
    avatar: 'AJ',
    quote: 'Nobody matches your effortless rhythm and presence. Today is dedicated wholly to you.',
    fullMessage: "Happy Birthday Ewusiwaa,I really hope you enjoy your day, I might not be able to be there phyiscally but just know that I'm there with you in spirit. I do not also show it all the time but i really appreciate you and admire how far you've come. I'm so proud of you and I can't wait to see what you do next. I love you and once again happy birthday ❤️",

  },

];

// The Anthology: 21 Reflections for Ewusiwaa's 21st Birthday
const anthologyData = [
  { roman: 'I', title: 'Her Luminous Serenity', prose: 'You carry a rare stillness that effortlessly diffuses tension the moment you step into any room.' },
  { roman: 'II', title: 'An Impeccable Eye & Ear', prose: 'From music to literature, your aesthetic taste is thoughtful, curated, and quietly exquisite.' },
  { roman: 'III', title: 'The Sanctuary of Her Friendship', prose: 'Conversations with you feel like a deep, reassuring breath. You listen without judgment.' },
  { roman: 'IV', title: 'The Unrivaled Cheerleader', prose: 'Whenever a loved one takes a leap, you are always the first and most genuine voice championing their courage.' },
  { roman: 'V', title: 'A Gentle, Unshakable Strength', prose: 'You navigate life’s complex seasons with an understated poise and dignity that inspires everyone around you.' },
  { roman: 'VI', title: 'The Warmth of Her Laughter', prose: 'Those unprompted moments when you laugh with your whole soul—pure, contagious joy that lifts an entire room.' },
  { roman: 'VII', title: 'Effortless Poise & Style', prose: 'A natural couture elegance. You carry yourself with quiet confidence, timeless posture, and intentional grace.' },
  { roman: 'VIII', title: 'Wisdom Beyond Her Years', prose: 'At twenty-one, you already offer perceptive counsel wrapped in genuine humility, always guiding with gentle clarity.' },
  { roman: 'IX', title: 'The Art of Remembering', prose: 'You recall the subtle things—a small milestone, a favorite melody, or a quiet hope someone shared months ago.' },
  { roman: 'X', title: 'Quiet Ambition & Focus', prose: 'You build toward your dreams with focused patience and perseverance, letting your quiet diligence speak volumes.' },
  { roman: 'XI', title: 'Light in Overcast Hours', prose: 'A phone call, a thoughtful check-in, or a warm note from you has an uncanny way of brightening the heaviest afternoon.' },
  { roman: 'XII', title: 'An Inquiring & Brilliant Mind', prose: 'Your curiosity is vast and sharp; you engage with ideas, culture, and life with keen insight and sparkling intellect.' },
  { roman: 'XIII', title: 'Fierce Loyalty & Generosity', prose: 'To have you in one’s corner is a rare privilege. You stand firmly by those you love through every season.' },
  { roman: 'XIV', title: 'The Courage to Be Authentic', prose: 'You never bend to fit temporary molds; you remain steadfastly, beautifully yourself in all circumstances.' },
  { roman: 'XV', title: 'Radiance in Simplicity', prose: 'You find magic in the understated—a coastal sunset, a quiet moment, heartfelt words, and shared smiles.' },
  { roman: 'XVI', title: 'The Gift of Empathy', prose: 'You read the unsaid emotions between words, offering solace, warmth, and understanding before anyone even needs to ask.' },
  { roman: 'XVII', title: 'A Resilient Spirit', prose: 'When unexpected challenges arise, you face them with a centered calm, turning obstacles into stepping stones of character.' },
  { roman: 'XVIII', title: 'Playful Wit & Infectious Humor', prose: 'Behind the elegant composure lies a delightfully sharp wit and a sense of humor that catches us all happily off guard.' },
  { roman: 'XIX', title: 'The Architectural Vision of Tomorrow', prose: 'Stepping into 21 with vision, discipline, and purpose, you are consciously crafting a future as luminous as your heart.' },
  { roman: 'XX', title: 'An Anchor of Peace', prose: 'In a noisy, rushing world, your presence is an oasis of calm, reminding everyone around you to savor what is genuine.' },
  { roman: 'XXI', title: '21 Years of Simply Being Ewusiwaa', prose: 'Twenty-one years of unmatched grace, infectious laughter, and pure soul. There is only one Ewusiwaa, and we celebrate you wholly.', isMilestone: true }
];


// App Controller
class EwusiwaaExhibition {
  constructor() {
    this.wishes = this.loadWishes();
    this.currentFilter = 'all';
    this.searchQuery = '';
    this.activeVideo = null;
    this.isPlayingVideo = false;
    this.videoProgress = 0;
    this.videoAnimFrame = null;
    this.audioCtx = null;
    this.isMusicPlaying = false;
    this.ambientTimer = null;

    this.bindDOM();
    this.renderTributes();
    this.renderAnthology();
    this.attachEvents();
    this.updateCounters();
  }

  loadWishes() {
    const saved = localStorage.getItem('ewusiwaa_editorial_wishes_v7') || localStorage.getItem('ewusiwaa_editorial_wishes_v6') || localStorage.getItem('ewusiwaa_editorial_wishes_v5');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const userAdded = parsed.filter(w => !initialWishes.some(init => init.id === w.id));
        return [...initialWishes, ...userAdded];
      } catch (e) {
        console.warn('Using initial seed wishes', e);
      }
    }
    return [...initialWishes];
  }

  saveWishes() {
    localStorage.setItem('ewusiwaa_editorial_wishes_v7', JSON.stringify(this.wishes));
    this.updateCounters();
  }

  bindDOM() {
    this.tributesContainer = document.getElementById('wishes-grid-container');
    this.anthologyContainer = document.getElementById('reasons-grid');
    this.filterTabs = document.querySelectorAll('.filter-tab');
    this.searchInput = document.getElementById('friend-search-input');

    // Modals
    this.videoModal = document.getElementById('video-modal');
    this.addModal = document.getElementById('add-wish-modal');
    this.toast = document.getElementById('toast');

    // Video Canvas, Real Video & Screen
    this.realVideo = document.getElementById('real-video-player');
    this.videoCanvas = document.getElementById('mock-video-canvas');
    this.videoCtx = this.videoCanvas ? this.videoCanvas.getContext('2d') : null;
    this.playPauseIcon = document.getElementById('play-pause-icon');
    this.timeDisplay = document.getElementById('video-time-display');
    this.progressFill = document.getElementById('video-progress-fill');
    this.scrubberWrap = document.getElementById('video-progress-wrap');

    // Audio & Toast
    this.musicToggle = document.getElementById('music-toggle');
    this.musicStatus = document.getElementById('music-status');
    this.confettiTrigger = document.getElementById('confetti-trigger');
  }

  updateCounters() {
    const total = this.wishes.length;
    const videos = this.wishes.filter(w => w.type === 'video').length;
    const texts = this.wishes.filter(w => w.type === 'text').length;

    const allCount = document.getElementById('all-count');
    const videoCount = document.getElementById('video-count');
    const textCount = document.getElementById('text-count');
    const heroVideos = document.getElementById('video-count-stat');
    const heroNotes = document.getElementById('notes-count-stat');

    if (allCount) allCount.textContent = total;
    if (videoCount) videoCount.textContent = videos;
    if (textCount) textCount.textContent = texts;
    if (heroVideos) heroVideos.textContent = videos;
    if (heroNotes) heroNotes.textContent = texts;
  }

  /* -------------------------------------------------------------
     Render Tributes
     ------------------------------------------------------------- */
  renderTributes() {
    if (!this.tributesContainer) return;

    let items = this.wishes;

    if (this.currentFilter !== 'all') {
      items = items.filter(w => w.type === this.currentFilter);
    }

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      items = items.filter(w =>
        w.author.toLowerCase().includes(q) ||
        (w.relation && w.relation.toLowerCase().includes(q)) ||
        w.fullMessage.toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      this.tributesContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 24px; background: #ffffff; border: 1px solid var(--slate-border); border-radius: var(--radius-sm);">
          <p style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--slate-text-main); margin-bottom: 8px;">No tributes found</p>
          <p style="font-size: 0.88rem; color: var(--slate-text-muted);">Adjust your search or add a new reflection to Ewusiwaa's collection.</p>
        </div>
      `;
      return;
    }

    this.tributesContainer.innerHTML = items.map(w => {
      const isVideo = w.type === 'video';
      const isPhoto = w.type === 'photo';

      if (isVideo) {
        return `
          <article class="tribute-card is-video" data-id="${w.id}">
            <div class="video-preview-frame" onclick="window.exhibition.openVideo('${w.id}')"
                 onmouseenter="const v=this.querySelector('video'); if(v) v.play().catch(()=>{});"
                 onmouseleave="const v=this.querySelector('video'); if(v) { v.pause(); v.currentTime=0.5; }">
              ${w.videoUrl ? `
                <video class="video-thumb-canvas" src="${w.videoUrl}#t=0.5" preload="metadata" loop muted playsinline></video>
              ` : (w.videoThumb ? `
                <img src="${w.videoThumb}" alt="${this.escape(w.videoTitle || 'Cinematic Tribute')}" class="video-thumb-canvas" />
              ` : `
                <canvas class="video-thumb-canvas" id="canvas-thumb-${w.id}" width="420" height="236"></canvas>
              `)}
              <span class="cinema-tag-badge">Cinematic Tribute</span>
              <div class="play-circle-minimal">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <span class="cinema-duration-badge">${w.videoDuration || '00:45'}</span>
            </div>

            <div class="video-card-body">
              <div class="card-author-row">
                <div class="author-monogram">${w.avatar || w.author.slice(0, 2).toUpperCase()}</div>
                <div class="author-credentials">
                  <h3 class="author-title">${this.escape(w.author)}</h3>
                  <span class="author-kinship">${this.escape(w.relation || 'Friend')}</span>
                </div>
              </div>

              ${w.quote ? `<div class="editorial-quote-mark">“${this.escape(w.quote)}”</div>` : ''}

              <p class="tribute-narrative">${this.escape(w.fullMessage)}</p>

              <div class="tribute-card-footer video-only-footer">
                <button class="watch-video-link" onclick="window.exhibition.openVideo('${w.id}')">View Film</button>
              </div>
            </div>
          </article>
        `;
      }

      return `
        <article class="tribute-card" data-id="${w.id}">
          <div class="tribute-card-content">
            ${isPhoto && w.photoUrl ? `
              <div class="photo-tribute-frame">
                <img src="${w.photoUrl}" alt="${w.photoCaption || 'Archive photograph'}" class="photo-tribute-img" loading="lazy" />
              </div>
            ` : ''}

            <div class="card-author-row">
              <div class="author-monogram">${w.avatar || w.author.slice(0, 2).toUpperCase()}</div>
              <div class="author-credentials">
                <h3 class="author-title">${this.escape(w.author)}</h3>
                <span class="author-kinship">${this.escape(w.relation || 'Friend')}</span>
              </div>
            </div>

            ${w.quote ? `<div class="editorial-quote-mark">“${this.escape(w.quote)}”</div>` : ''}

            <p class="tribute-narrative">${this.escape(w.fullMessage)}</p>
          </div>
        </article>
      `;
    }).join('');

    // Draw refined editorial video thumbnail previews
    items.filter(w => w.type === 'video' && !w.videoUrl && !w.videoThumb).forEach(w => {
      this.drawCinemaThumbnail(`canvas-thumb-${w.id}`, w);
    });
  }

  drawCinemaThumbnail(id, wish) {
    setTimeout(() => {
      const canvas = document.getElementById(id);
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;

      // Dark slate-cerulean cinematic gradient
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#101c27');
      grad.addColorStop(0.5, '#1e384f');
      grad.addColorStop(1, '#0e1823');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Subtle ambient vignette
      const vignette = ctx.createRadialGradient(w / 2, h / 2, h * 0.2, w / 2, h / 2, w * 0.6);
      vignette.addColorStop(0, 'rgba(167, 202, 227, 0.12)');
      vignette.addColorStop(1, 'rgba(10, 18, 26, 0.7)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      // Minimalist hairline audio equalizer line at the bottom
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1;
      const barCount = 28;
      const step = w / (barCount + 1);
      for (let i = 1; i <= barCount; i++) {
        const barH = 6 + Math.sin(i * 0.6) * 10;
        ctx.beginPath();
        ctx.moveTo(i * step, h - 22);
        ctx.lineTo(i * step, h - 22 - barH);
        ctx.stroke();
      }

      // Title in elegant typography
      ctx.fillStyle = '#ffffff';
      ctx.font = '500 13px Plus Jakarta Sans, sans-serif';
      ctx.letterSpacing = '0.08em';
      ctx.textAlign = 'left';
      ctx.fillText(wish.videoTitle || 'CINEMATIC TRIBUTE', 24, h - 45);
    }, 40);
  }

  /* -------------------------------------------------------------
     Render The Anthology: 21 Reflections
     ------------------------------------------------------------- */
  renderAnthology() {
    if (!this.anthologyContainer) return;
    this.anthologyContainer.innerHTML = anthologyData.map(item => `
      <div class="anthology-item ${item.isMilestone ? 'anthology-milestone-item' : ''}">
        <div class="anthology-header-row">
          <span class="anthology-roman">${item.isMilestone ? 'MILESTONE ' : 'CHAPTER '}${item.roman}</span>
          ${item.isMilestone ? '<span class="milestone-badge">21 YEARS</span>' : ''}
        </div>
        <h4 class="anthology-heading">${item.title}</h4>
        <p class="anthology-prose">${item.prose}</p>
      </div>
    `).join('');
  }


  /* -------------------------------------------------------------
     Cinematic Video Modal Player
     ------------------------------------------------------------- */
  openVideo(wishId) {
    const wish = this.wishes.find(w => w.id === wishId);
    if (!wish) return;

    this.activeVideo = wish;

    // Sidebar
    const avatarEl = document.getElementById('modal-author-avatar');
    const nameEl = document.getElementById('modal-author-name');
    const relEl = document.getElementById('modal-author-relation');
    const quoteEl = document.getElementById('modal-quote-text');

    if (avatarEl) avatarEl.textContent = wish.avatar || wish.author.slice(0, 2).toUpperCase();
    if (nameEl) nameEl.textContent = wish.author;
    if (relEl) relEl.textContent = wish.relation || 'Friend';
    if (quoteEl) quoteEl.textContent = `“${wish.quote || wish.fullMessage}”`;

    // Reset player state
    this.isPlayingVideo = true;
    this.videoProgress = 0;
    this.updatePlayBtn(true);

    this.videoModal.classList.add('active');
    this.videoModal.setAttribute('aria-hidden', 'false');

    if (wish.videoUrl) {
      if (this.videoCanvas) this.videoCanvas.style.display = 'none';
      if (this.realVideo) {
        this.realVideo.style.display = 'block';
        this.fallbackTried = false;
        this.realVideo.src = wish.videoUrl;
        this.realVideo.currentTime = 0;
        this.realVideo.muted = false;
        this.updateVolumeBtn();

        const playPromise = this.realVideo.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            this.isPlayingVideo = true;
            this.updatePlayBtn(true);
            this.hideUnmutePrompt();
          }).catch(err => {
            console.log('Autoplay unmuted blocked by browser policy, falling back to muted', err);
            this.realVideo.muted = true;
            this.updateVolumeBtn();
            this.realVideo.play().then(() => {
              this.isPlayingVideo = true;
              this.updatePlayBtn(true);
              this.showUnmutePrompt();
            }).catch(() => { });
          });
        }
      }
    } else {
      if (this.realVideo) {
        this.realVideo.pause();
        this.realVideo.removeAttribute('src');
        this.realVideo.load();
        this.realVideo.style.display = 'none';
      }
      this.hideUnmutePrompt();
      if (this.videoCanvas) {
        this.videoCanvas.style.display = 'block';
        this.startCinemaScreen(wish);
      }
    }
  }

  closeVideo() {
    this.hideUnmutePrompt();
    if (this.videoAnimFrame) {
      cancelAnimationFrame(this.videoAnimFrame);
      this.videoAnimFrame = null;
    }
    if (this.realVideo) {
      this.realVideo.pause();
      this.realVideo.removeAttribute('src');
      this.realVideo.load();
      this.realVideo.style.display = 'none';
    }
    this.isPlayingVideo = false;
    this.updatePlayBtn(false);
    this.videoModal.classList.remove('active');
    this.videoModal.setAttribute('aria-hidden', 'true');
  }

  toggleMute() {
    if (!this.realVideo) return;
    this.realVideo.muted = !this.realVideo.muted;
    this.updateVolumeBtn();
    if (!this.realVideo.muted) {
      this.hideUnmutePrompt();
    }
  }

  updateVolumeBtn() {
    const volIcon = document.getElementById('volume-icon');
    if (!volIcon || !this.realVideo) return;
    if (this.realVideo.muted || this.realVideo.volume === 0) {
      volIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <line x1="23" y1="9" x2="17" y2="15"></line>
        <line x1="17" y1="9" x2="23" y2="15"></line>
      </svg>`;
    } else {
      volIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      </svg>`;
    }
  }

  showUnmutePrompt() {
    const prompt = document.getElementById('cinema-unmute-prompt');
    if (prompt) prompt.style.display = 'inline-flex';
  }

  hideUnmutePrompt() {
    const prompt = document.getElementById('cinema-unmute-prompt');
    if (prompt) prompt.style.display = 'none';
  }

  toggleFullscreen() {
    if (!this.realVideo) return;
    if (!document.fullscreenElement) {
      if (this.realVideo.requestFullscreen) {
        this.realVideo.requestFullscreen();
      } else if (this.realVideo.webkitEnterFullscreen) {
        this.realVideo.webkitEnterFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  startCinemaScreen(wish) {
    if (!this.videoCanvas || !this.videoCtx) return;
    const ctx = this.videoCtx;
    const canvas = this.videoCanvas;
    let t = 0;

    const render = () => {
      if (!this.isPlayingVideo) return;
      t++;
      const w = canvas.width;
      const h = canvas.height;

      this.videoProgress += 0.0028;
      if (this.videoProgress >= 1) {
        this.videoProgress = 1;
        this.isPlayingVideo = false;
        this.updatePlayBtn(false);
      }

      // Update scrubber
      if (this.progressFill) {
        this.progressFill.style.width = `${this.videoProgress * 100}%`;
      }
      if (this.timeDisplay) {
        const sec = Math.floor(this.videoProgress * 45);
        this.timeDisplay.textContent = `00:${sec < 10 ? '0' : ''}${sec} / 00:45`;
      }

      // 1. Dark Film Screen Base
      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      bgGrad.addColorStop(0, '#0c151e');
      bgGrad.addColorStop(0.5, '#152535');
      bgGrad.addColorStop(1, '#091017');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // 2. Subtle light grain & vignette
      const lightSpot = ctx.createRadialGradient(
        w / 2 + Math.sin(t * 0.02) * 40,
        h / 2 - 20,
        20,
        w / 2,
        h / 2,
        w * 0.55
      );
      lightSpot.addColorStop(0, 'rgba(167, 202, 227, 0.16)');
      lightSpot.addColorStop(1, 'rgba(11, 20, 29, 0.85)');
      ctx.fillStyle = lightSpot;
      ctx.fillRect(0, 0, w, h);

      // 3. Elegant Speaker Monogram & Waveform
      ctx.save();
      ctx.translate(w / 2, h / 2 - 25);

      // Center Crest
      ctx.beginPath();
      ctx.arc(0, 0, 52, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(196, 164, 124, 0.6)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = '500 24px Cinzel, serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(wish.avatar || wish.author.slice(0, 2).toUpperCase(), 0, 0);

      // Minimalist audio concentric circles
      for (let k = 1; k <= 3; k++) {
        const r = 62 + k * 18 + ((t * 0.8) % 24);
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(167, 202, 227, ${0.28 - k * 0.08})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();

      // 4. Subtle Subtitle Overlay at Bottom
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = 'italic 16px Cormorant Garamond, serif';
      ctx.textAlign = 'center';
      const snippet = wish.quote || wish.fullMessage.slice(0, 70);
      ctx.fillText(`“${snippet}”`, w / 2, h - 55);

      this.videoAnimFrame = requestAnimationFrame(render);
    };

    render();
  }

  togglePlayVideo() {
    if (this.activeVideo && this.activeVideo.videoUrl && this.realVideo) {
      if (this.realVideo.paused) {
        this.realVideo.muted = false;
        this.realVideo.play().then(() => {
          this.isPlayingVideo = true;
          this.updatePlayBtn(true);
        }).catch(() => { });
      } else {
        this.realVideo.pause();
        this.isPlayingVideo = false;
        this.updatePlayBtn(false);
      }
      return;
    }

    this.isPlayingVideo = !this.isPlayingVideo;
    this.updatePlayBtn(this.isPlayingVideo);
    if (this.isPlayingVideo && this.activeVideo) {
      if (this.videoProgress >= 1) this.videoProgress = 0;
      this.startCinemaScreen(this.activeVideo);
    }
  }

  updatePlayBtn(playing) {
    if (this.playPauseIcon) {
      this.playPauseIcon.innerHTML = playing ?
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>' :
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
    }
  }

  /* -------------------------------------------------------------
     Quiet Luxury Ambient Soundtrack (Web Audio)
     ------------------------------------------------------------- */
  toggleMusic() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContextClass();
    }

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    if (this.isMusicPlaying) {
      this.stopMusic();
    } else {
      this.startMusic();
    }
  }

  startMusic() {
    this.isMusicPlaying = true;
    if (this.musicToggle) this.musicToggle.classList.add('playing');
    if (this.musicStatus) this.musicStatus.textContent = 'Playing';

    // Quiet, elegant piano / celesta chord arpeggios
    // D-maj9, F#m7, G-maj7, A
    const progression = [
      [293.66, 369.99, 440.00, 554.37], // D4, F#4, A4, C#5
      [369.99, 440.00, 554.37, 659.25], // F#4, A4, C#5, E5
      [392.00, 493.88, 587.33, 739.99], // G4, B4, D5, F#5
      [440.00, 554.37, 659.25, 880.00]  // A4, C#5, E5, A5
    ];

    let chordStep = 0;

    const playChord = () => {
      if (!this.isMusicPlaying) return;
      const notes = progression[chordStep % progression.length];
      chordStep++;

      notes.forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

        const tStart = this.audioCtx.currentTime + idx * 0.22;
        gain.gain.setValueAtTime(0.0001, tStart);
        gain.gain.exponentialRampToValueAtTime(0.035, tStart + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.00001, tStart + 3.2);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(tStart);
        osc.stop(tStart + 3.4);
      });

      this.ambientTimer = setTimeout(playChord, 3200);
    };

    playChord();
    this.notify('Ambient soundtrack playing');
  }

  stopMusic() {
    this.isMusicPlaying = false;
    if (this.ambientTimer) clearTimeout(this.ambientTimer);
    if (this.musicToggle) this.musicToggle.classList.remove('playing');
    if (this.musicStatus) this.musicStatus.textContent = 'Quiet';
  }

  /* -------------------------------------------------------------
     Sophisticated Toast Particles (Subtle Gold/Sky Dust)
     ------------------------------------------------------------- */
  triggerCelebration() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const sparks = [];
    const colors = ['#c4a47c', '#a7cae3', '#7daed3', '#e8ded1', '#ffffff'];

    for (let i = 0; i < 65; i++) {
      sparks.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 120,
        y: canvas.height * 0.55,
        vx: (Math.random() - 0.5) * 8,
        vy: -Math.random() * 12 - 4,
        size: Math.random() * 3 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1
      });
    }

    let frame = 0;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      let alive = false;
      sparks.forEach(s => {
        s.vy += 0.28;
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.012;

        if (s.alpha > 0) {
          alive = true;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.globalAlpha = Math.max(0, s.alpha);
          ctx.fill();
        }
      });

      if (alive && frame < 150) {
        requestAnimationFrame(loop);
      } else {
        canvas.remove();
      }
    };

    loop();
  }

  /* -------------------------------------------------------------
     Interactions & Submissions
     ------------------------------------------------------------- */
  toggleAffection(id, btn) {
    const item = this.wishes.find(w => w.id === id);
    if (!item) return;

    item.likes = (item.likes || 0) + 1;
    this.saveWishes();

    if (btn) {
      btn.classList.add('liked');
      const numSpan = btn.querySelector('.like-num');
      if (numSpan) numSpan.textContent = item.likes;
    }

    this.notify(`Affection sent to ${item.author}`);
  }

  handleAddTribute(e) {
    e.preventDefault();

    const nameInput = document.getElementById('wish-author-name');
    const relationInput = document.getElementById('wish-relation');
    const messageInput = document.getElementById('wish-message');
    const typeRadio = document.querySelector('input[name="wish-type"]:checked');
    const captionInput = document.getElementById('wish-video-caption');

    if (!nameInput || !messageInput) return;

    const author = nameInput.value.trim();
    const relation = relationInput ? relationInput.value.trim() : 'Friend';
    const message = messageInput.value.trim();
    const type = typeRadio ? typeRadio.value : 'text';
    const title = captionInput ? captionInput.value.trim() : '';

    if (!author || !message) {
      alert('Please provide your name and tribute message.');
      return;
    }

    const initials = author.split(' ').map(n => n.charAt(0)).join('').toUpperCase().slice(0, 2) || 'EW';

    const newTribute = {
      id: `tribute-${Date.now()}`,
      author: author,
      relation: relation || 'Friend',
      type: type,
      avatar: initials,
      videoDuration: type === 'video' ? '00:45' : null,
      videoTitle: type === 'video' ? (title || `A Tribute by ${author}`) : null,
      quote: type === 'video' ? message.slice(0, 80) + '...' : null,
      fullMessage: message
    };

    this.wishes.unshift(newTribute);
    this.saveWishes();
    this.renderTributes();

    this.closeAddModal();
    e.target.reset();

    this.triggerCelebration();
    this.notify(`Tribute published to collection`);

    const tributesSec = document.getElementById('tributes');
    if (tributesSec) {
      tributesSec.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openAddModal() {
    if (this.addModal) {
      this.addModal.classList.add('active');
      this.addModal.setAttribute('aria-hidden', 'false');
    }
  }

  closeAddModal() {
    if (this.addModal) {
      this.addModal.classList.remove('active');
      this.addModal.setAttribute('aria-hidden', 'true');
    }
  }

  notify(msg) {
    if (!this.toast) return;
    this.toast.textContent = msg;
    this.toast.classList.add('active');
    setTimeout(() => {
      this.toast.classList.remove('active');
    }, 2800);
  }

  escape(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g,
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  /* -------------------------------------------------------------
     Event Listeners
     ------------------------------------------------------------- */
  attachEvents() {
    // Filter tabs
    this.filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.filterTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        this.currentFilter = tab.dataset.filter;
        this.renderTributes();
      });
    });

    // Search input
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.renderTributes();
      });
    }

    // Music toggle
    if (this.musicToggle) {
      this.musicToggle.addEventListener('click', () => this.toggleMusic());
    }

    // Toast/Celebrate trigger
    if (this.confettiTrigger) {
      this.confettiTrigger.addEventListener('click', () => this.triggerCelebration());
    }

    // Add Tribute modal triggers
    const openAddBtn = document.getElementById('open-add-wish-btn');
    const closeAddBtn = document.getElementById('close-add-modal');
    const cancelAddBtn = document.getElementById('cancel-add-modal');

    if (openAddBtn) openAddBtn.addEventListener('click', () => this.openAddModal());
    if (closeAddBtn) closeAddBtn.addEventListener('click', () => this.closeAddModal());
    if (cancelAddBtn) cancelAddBtn.addEventListener('click', () => this.closeAddModal());

    // Type radio toggle
    const typeRadios = document.querySelectorAll('input[name="wish-type"]');
    const videoExtra = document.getElementById('video-extra-field');
    typeRadios.forEach(r => {
      r.addEventListener('change', (e) => {
        if (videoExtra) {
          videoExtra.style.display = e.target.value === 'video' ? 'flex' : 'none';
        }
      });
    });

    // Form submit
    const addForm = document.getElementById('add-wish-form');
    if (addForm) {
      addForm.addEventListener('submit', (e) => this.handleAddTribute(e));
    }

    // Video modal triggers
    const closeVideoBtn = document.getElementById('close-video-modal');
    const playBtn = document.getElementById('modal-play-btn');
    const cinemaToast = document.getElementById('cinema-toast-btn');
    const volBtn = document.getElementById('modal-volume-btn');
    const fullscreenBtn = document.getElementById('modal-fullscreen-btn');
    const unmutePrompt = document.getElementById('cinema-unmute-prompt');

    if (closeVideoBtn) closeVideoBtn.addEventListener('click', () => this.closeVideo());
    if (playBtn) playBtn.addEventListener('click', () => this.togglePlayVideo());
    if (volBtn) volBtn.addEventListener('click', () => this.toggleMute());
    if (fullscreenBtn) fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    if (unmutePrompt) unmutePrompt.addEventListener('click', () => this.toggleMute());

    if (cinemaToast) {
      cinemaToast.addEventListener('click', () => {
        this.triggerCelebration();
        this.notify('Affection conveyed');
      });
    }

    // Real video playback & scrubber events
    if (this.realVideo) {
      this.realVideo.addEventListener('click', () => this.togglePlayVideo());
      this.realVideo.addEventListener('error', () => {
        if (!this.fallbackTried && this.activeVideo && this.activeVideo.videoUrl) {
          this.fallbackTried = true;
          const cur = this.activeVideo.videoUrl;
          const altSrc = cur.startsWith('public/') ? cur.replace('public/', '') : (cur.startsWith('/') ? cur.slice(1) : 'public/' + cur);
          console.warn('Video failed to load, attempting alternative path:', altSrc);
          this.realVideo.src = altSrc;
          this.realVideo.load();
          this.realVideo.play().catch(() => { });
        }
      });
      this.realVideo.addEventListener('timeupdate', () => {
        if (!this.realVideo.duration) return;
        const progress = this.realVideo.currentTime / this.realVideo.duration;
        if (this.progressFill) this.progressFill.style.width = `${progress * 100}%`;
        if (this.timeDisplay) {
          const cur = Math.floor(this.realVideo.currentTime);
          const dur = Math.floor(this.realVideo.duration);
          const cM = Math.floor(cur / 60);
          const cS = cur % 60;
          const dM = Math.floor(dur / 60);
          const dS = dur % 60;
          this.timeDisplay.textContent = `${cM}:${cS < 10 ? '0' : ''}${cS} / ${dM}:${dS < 10 ? '0' : ''}${dS}`;
        }
      });
      this.realVideo.addEventListener('ended', () => {
        this.isPlayingVideo = false;
        this.updatePlayBtn(false);
      });
      this.realVideo.addEventListener('play', () => {
        this.isPlayingVideo = true;
        this.updatePlayBtn(true);
      });
      this.realVideo.addEventListener('pause', () => {
        this.isPlayingVideo = false;
        this.updatePlayBtn(false);
      });
    }

    if (this.scrubberWrap) {
      this.scrubberWrap.addEventListener('click', (e) => {
        const rect = this.scrubberWrap.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        if (this.activeVideo && this.activeVideo.videoUrl && this.realVideo && this.realVideo.duration) {
          this.realVideo.currentTime = pos * this.realVideo.duration;
        } else {
          this.videoProgress = pos;
        }
      });
    }

    // Backdrop clicks
    window.addEventListener('click', (e) => {
      if (e.target === this.videoModal) this.closeVideo();
      if (e.target === this.addModal) this.closeAddModal();
    });

    // Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeVideo();
        this.closeAddModal();
      }
    });
  }
}

// Instantiate
document.addEventListener('DOMContentLoaded', () => {
  window.exhibition = new EwusiwaaExhibition();
});
