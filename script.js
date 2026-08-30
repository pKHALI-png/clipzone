const channels=[
["🔥","Trending Now"],["😂","Comedy & Memes"],["🎵","Music"],["⚽","Football"],["🎮","Gaming"],["🌍","African Vibes"],["🚘","Cars & Bikes"],["🍔","Food"],["▦","More"]];
const side=["🔥 Trending Now","😂 Comedy & Memes","🎬 Entertainment","⚽ Football","🏀 Basketball","🎵 Music","💃 Dance","🌍 African Vibes","🇹🇿 Bongo Flava","🎮 Gaming","📱 Mobile Gaming","💻 Technology","🔴 Viral Clips","🧠 Mind-Blowing Facts","🚘 Cars & Bikes","✈ Travel","🍔 Food","💪 Fitness","🎓 Education","💰 Money & Business","👀 Unbelievable","👻 Mystery & Horror","🎙 Street Interviews","❤️ Love & Relationships","🌻 Inspirational"];
document.getElementById("topChannels").innerHTML=channels.map(x=>`<div class="channel-card"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join("");
document.getElementById("channelList").innerHTML=side.map(x=>`<a href="#">${x}</a>`).join("");

const pics=[
"https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=300&q=80",
"https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=300&q=80",
"https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=300&q=80",
"https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=300&q=80",
"https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=300&q=80",
"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80",
"https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=300&q=80",
"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80"
];
const nextTitles=["Crazy Goal! ⚽⚙","Funny Interview Moments 😂","Best Street Dance Moves 🔥","Luxury Cars Compilation 😍","Unbelievable Nature 😱","Freestyle Rap That's Fire 🎤"];
document.getElementById("upNext").innerHTML=nextTitles.map((t,i)=>`<div class="next-item"><div class="thumb" style="background-image:url('${pics[i]}')"><span class="duration">0:${27+i}</span></div><div><h4>${t}</h4><p>${98-i*9}K views</p></div><span>⋮</span></div>`).join("");

const cont=["Epic Basketball Dunks","Cooking Street Food","Travel: Maldives","Gaming Highlights","Cute Animals"];
document.getElementById("continue").innerHTML=cont.map((t,i)=>`<div class="wide-card"><div class="thumb" style="background-image:url('${pics[(i+6)%pics.length]}')"><span class="duration">0:${24+i}</span></div><h4>${t}</h4><p>${["Basketball","Food","Travel","Gaming","Animals"][i]}</p></div>`).join("");

const trend=["Wait For It... 😂","The Didn't See That Coming 😳","Impossible Challenge 🏆","Top Goals This Week ⚽","Drift King 👑","Mic Drop Moment 🎤"];
document.getElementById("trendingRow").innerHTML=trend.map((t,i)=>`<div class="trend-card"><div class="rank">${i+1}</div><div class="thumb" style="background-image:url('${pics[(i+1)%pics.length]}')"><span class="duration">0:${25+i}</span></div><h4>${t}</h4><p>${(1.2-i*.12).toFixed(i?0:1)}M views</p></div>`).join("");

document.querySelectorAll(".action").forEach(btn=>btn.addEventListener("click",()=>{
  if(btn.classList.contains("like")){btn.classList.toggle("liked");btn.querySelector("span").textContent=btn.classList.contains("liked")?"♥":"♡";btn.querySelector("b").textContent=btn.classList.contains("liked")?"12.5K":"12.4K"}
  else if(btn.classList.contains("follow")){btn.querySelector("b").textContent=btn.querySelector("b").textContent==="Follow"?"Following":"Follow"}
  else if(btn.classList.contains("comment")) alert("Comments panel would open here.");
  else if(btn.classList.contains("share")) navigator.clipboard?.writeText(location.href).then(()=>btn.querySelector("b").textContent="Copied!");
  else if(btn.classList.contains("save")){btn.classList.toggle("saved");btn.querySelector("b").textContent=btn.classList.contains("saved")?"Saved":"Save"}
}));
