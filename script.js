// Sample Video Data
const shortsData = [
  {
    id: 1,
    creator: '@car.lifestyle',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    caption: 'The road is my therapy. 🚗',
    tags: '#cars #sunset #vibes',
    likes: '12.4K',
    comments: '320',
    shares: '512',
    audio: 'Original Sound - Car Life',
    bgImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80',
    badge: 'New'
  },
  {
    id: 2,
    creator: '@travellife',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    caption: 'Some views just hit different ✈️',
    tags: '#travel #explore #views',
    likes: '8.7K',
    comments: '214',
    shares: '325',
    audio: 'Original Sound - Travel Pulse',
    bgImage: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    creator: '@dance.vibes',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    caption: "Can't stop watching this 😍🔥",
    tags: '#dance #fyp #viral',
    likes: '15.2K',
    comments: '482',
    shares: '742',
    audio: 'Original Sound - BeatDrop',
    bgImage: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    creator: '@funny.pets',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
    caption: 'The happiest boy ever! 🐶😂',
    tags: '#dog #funny #cute',
    likes: '9.3K',
    comments: '178',
    shares: '268',
    audio: 'Original Sound - Playful Pup',
    bgImage: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    creator: '@hoops.daily',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    caption: 'This dunk was INSANE! 🏀🔥',
    tags: '#basketball #dunk #nba',
    likes: '11.1K',
    comments: '378',
    shares: '411',
    audio: 'Original Sound - Court Side',
    bgImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&auto=format&fit=crop&q=80'
  }
];

// State storage
const state = {
  liked: {},
  saved: {},
  following: {}
};

// Render Cards
function renderCards() {
  const container = document.getElementById('video-grid');
  container.innerHTML = '';

  shortsData.forEach((item) => {
    const isLiked = state.liked[item.id];
    const isSaved = state.saved[item.id];
    const isFollowing = state.following[item.id];

    const card = document.createElement('div');
    card.className = "relative group rounded-3xl overflow-hidden aspect-[9/16] bg-slate-900 border border-slate-800/80 shadow-xl";

    card.innerHTML = `
      <img src="${item.bgImage}" alt="${item.caption}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90 pointer-events-none"></div>

      ${item.badge ? `<div class="absolute top-3 left-3 px-2 py-0.5 bg-black/40 backdrop-blur-md rounded-lg text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">${item.badge}</div>` : ''}

      <!-- Floating Action Buttons -->
      <div class="absolute right-3 bottom-14 flex flex-col items-center gap-3.5 z-10">
        
        <!-- Follow Button -->
        <div class="relative mb-1">
          <img src="${item.avatar}" class="w-9 h-9 rounded-full ring-2 ring-rose-500/80 object-cover" />
          <button onclick="toggleFollow(${item.id})" class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-md ${isFollowing ? 'bg-emerald-500 text-white' : 'bg-rose-600 text-white'}">
            <i data-lucide="${isFollowing ? 'check' : 'plus'}" class="w-2.5 h-2.5"></i>
          </button>
        </div>

        <!-- Like Button -->
        <button onclick="toggleLike(${item.id})" class="flex flex-col items-center gap-0.5">
          <div class="w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center transition-all ${isLiked ? 'bg-rose-500 border-rose-400 text-white' : 'bg-slate-900/60 border-white/15 text-slate-200'}">
            <i data-lucide="heart" class="w-4 h-4 ${isLiked ? 'fill-white' : ''}"></i>
          </div>
          <span class="text-[10px] font-semibold text-slate-200">${item.likes}</span>
        </button>

        <!-- Comment Button -->
        <button class="flex flex-col items-center gap-0.5">
          <div class="w-9 h-9 rounded-full backdrop-blur-md bg-slate-900/60 border border-white/15 flex items-center justify-center text-slate-200">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
          </div>
          <span class="text-[10px] font-semibold text-slate-200">${item.comments}</span>
        </button>

        <!-- Share Button -->
        <button class="flex flex-col items-center gap-0.5">
          <div class="w-9 h-9 rounded-full backdrop-blur-md bg-slate-900/60 border border-white/15 flex items-center justify-center text-slate-200">
            <i data-lucide="share-2" class="w-4 h-4"></i>
          </div>
          <span class="text-[10px] font-semibold text-slate-200">${item.shares}</span>
        </button>

        <!-- Save Button -->
        <button onclick="toggleSave(${item.id})" class="flex flex-col items-center gap-0.5">
          <div class="w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center transition-all ${isSaved ? 'bg-amber-500 border-amber-400 text-white' : 'bg-slate-900/60 border-white/15 text-slate-200'}">
            <i data-lucide="bookmark" class="w-4 h-4 ${isSaved ? 'fill-white' : ''}"></i>
          </div>
        </button>

      </div>

      <!-- Metadata -->
      <div class="absolute left-3 bottom-3 right-14 text-left z-10 space-y-1">
        <span class="text-xs font-bold text-white hover:underline cursor-pointer">${item.creator}</span>
        <p class="text-xs text-slate-200 line-clamp-2 leading-tight">${item.caption} <span class="text-slate-400 font-medium">${item.tags}</span></p>
        <div class="flex items-center gap-1 text-[10px] text-slate-400 pt-0.5 truncate">
          <i data-lucide="disc-3" class="w-3 h-3 text-rose-400 animate-spin"></i>
          <span class="truncate">${item.audio}</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Re-initialize Lucide Icons
  lucide.createIcons();
}

// Interactivity handlers
function toggleLike(id) {
  state.liked[id] = !state.liked[id];
  renderCards();
}

function toggleSave(id) {
  state.saved[id] = !state.saved[id];
  renderCards();
}

function toggleFollow(id) {
  state.following[id] = !state.following[id];
  renderCards();
}

// Initial Run
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
});
