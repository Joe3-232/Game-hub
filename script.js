const articles = [


    { id: 1, title: "PUBG Update 42.2", game: "PUBG", category: "update", excerpt: "Payday Mode and New Feature: Execution with Melee Weapons and Harley-Davidson Collabration.", date: "May 12, 2026", img: "https://wstatic-prod-boc.krafton.com/common/news/20260511/bQgRCE9u.png", link: "https://www.pubg.com/en/news/10080" },
    
    
{ id: 2, title: "Special drops, Harley-Davidson, and Payday rewards", game: "PUBG", category: "event", excerpt: "Check in daily, new motorcycles skins, exclusive skins, and loot caches.", date: "May 10, 2026", img: "https://wstatic-prod-boc.krafton.com/common/events/20260512/KqnwFhSu.jpg", link: "https://www.pubg.com/en/events/notice/10020?category=event&period=PROGRESS" },
               


{ id: 3, title: "Free Fire x GINTAMA: limited collaboration", game: "Free Fire", category: "update", excerpt: "Invisibility skill and Clash Squad rework.", date: "April 24, 2026", img: "https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/20264/22b113ffa434c352ec60a5772a0d45c2.jpeg", link: "https://ff.garena.com/en/article/1655/"},



           { id: 4, title: "VALORANT Upadate 12.09: Neon & shotgun Nerfs", game: "VALORANT", category: "update", excerpt: "Neon movement nerfed, Shotgun accuracy decreases while moving, AMD Anti-Lag 2 support added, and multiple agent bug fixes.", date: "May 12, 2026", img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/6c3ff058d1687e0b46a65429c18e1ff440057e57-1920x1080.jpg?accountingTag=VAL&auto=format&fit=fill&q=80&w=1480", link:"https://playvalorant.com/ar-ae/news/game-updates/valorant-patch-notes-12-09/" },
          
          
    { id: 5, title: "Valorant Champions Tour 2027: New Open Qualification System and Trophies", game: "VALORANT", category: "tournament", excerpt: "The biggest restructuring of VCT tournaments yet: Open qualifiers for all, new cup tournaments, more than 20 events in 16 cities, and a prize pool of over $6 million.", date: "Abril 8, 2026", img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/87d9e259fcac3b747b80069ea7146ae4780645c8-1920x1080.jpg?accountingTag=VAL&auto=format&fit=fill&q=80&w=1480", link: "https://playvalorant.com/ar-ae/news/the-new-valorant-champions-tour/" },
    


                  { id: 6, title: "GTA VI Official Website Launched", game: "GTA", category: "update", excerpt: "Rockstar Games confirms GTA VI release date for November 19, 2026. Set in Vice City with protagonists Jason and Lucia. New characters and story details revealed.", date: "November 19, 2026", img: "https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2Foverlay.12a5d57b.png&w=1920&q=75", link: "https://www.rockstargames.com/VI" },



          { id: 7, title: "Call of Duty: Black Ops 7.", game: "COD", category: "update", excerpt: "The new partnership with Cephable enables voice command, head movement, and facial expression control. It's now available in Campaign, Zombies, and Arcade modes.", date: "April 9, 2026", img: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/bo7/BO7-ACCESSIBILITY-TOUT.jpg", link: "https://www.callofduty.com/ar/blog/2026/04/call-of-duty-black-ops-7-expanding-accessibility-new-control-options" },
                                        
                  
                  
{ id: 8, title: "Minecraft Bedrock 26.20", game: "Minecraft", category: "update", excerpt: "NNew Sulfur Cube mob that transforms when fed blocks, Sulfur Caves biome, Closed Captions accessibility feature, Party System beta, Realm Hub, and dozens of bug fixes.", date: "May 5, 2026", img: "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/26.20_1170x500.jpg", link: "https://www.minecraft.net/en-us/article/minecraft--bedrock-edition-26-20-changelog" },



{ id: 9, title: "Fortnite x Overwatch collaboration", game: "Fortnite", category: "update", excerpt: "Overwatch heroes enter the Fortnite universe at Act 3, new locations on the map, and Overwatch loot including Tracer pulse pistols and Mercy's Caduceus kit.", date: "May 14, 2026", img: "https://cms-assets.unrealengine.com/cm6l5gfpm05kr07my04cqgy2x/resize=fit:clip,width:1920/quality=value:80/cmp5j0go913g607of1l8nohip", link: "https://www.fortnite.com/news/answer-the-call-overwatch-heroes-join-the-showdown-in-act-iii" },


        
{ id: 10, title: "Secret Code: Free Skin", game: "PUBG", category: "code", excerpt: "Redeem for free contraband coupon.", date: "May, 2026", img: "https://shop.ldrescdn.com/rms/ld-space/process/img/0d21b98d116a454cbd2695330ecdc9a11746696592.png?x-oss-process=image/format,webp", link: "https://www.ldshop.gg/blog/guide/pubg-mobile-redeem-code.html" },
                      


{ id: 11, title: "Best VALORANT Sensitivity Guide", game: "VALORANT", category: "guide", excerpt: "Pro player settings for 2026.", img: "https://prosettings.net/wp-content/uploads/valorant-card-image-195x260-2x-g9df2.webp", link: "https://prosettings.net/games/valorant/" }
];






let currentGame = "all";
let currentCategory = "all";
let searchQuery = "";



const newsGrid = document.getElementById("newsGrid");


const resultsStats = document.getElementById("resultsStats");


const searchInput = document.getElementById("searchInput");


const searchBtn = document.getElementById("searchBtn");




function getCatIcon(cat) {
        
    if(cat === "update") return "";


            if(cat === "tournament") return "";

if(cat === "code") return "";

if(cat === "review") return "";

if(cat === "guide") return "";
   

return "";

}

function render() {
    let filtered = [...articles];
    
    if(currentGame !== "all") {
        filtered = filtered.filter(a => a.game === currentGame);
    }
    
    
    
    if(currentCategory !== "all") {
        filtered = filtered.filter(a => a.category === currentCategory);
    }
    
    
    if(searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();


        filtered = filtered.filter(a => 

            a.title.toLowerCase().includes(q) || 


            a.excerpt.toLowerCase().includes(q) ||


            a.game.toLowerCase().includes(q)
        );
    }
    



    const uniqueGames = [...new Set(filtered.map(a => a.game))];
    resultsStats.innerHTML = `${filtered.length} articles | ${uniqueGames.join(", ")}`;
    


    if(filtered.length === 0) {
        newsGrid.innerHTML = `<div class="no-results"><h3>No results found</h3><p>Try different filters</p></div>`;
        return;
    }
    


    newsGrid.innerHTML = filtered.map(a => `


        <div class="news-card">

          
<div class="card-img" style="background-image: url('${a.img}');">


<span class="badge-game">🎮 ${a.game}</span>


<span class="badge-cat">${getCatIcon(a.category)} ${a.category}</span>


          </div>


        
          <div class="card-content">


<div class="card-title">${a.title}</div>


      <div class="card-excerpt">${a.excerpt.substring(0, 80)}...</div>


                <div class="card-meta">



<span><i class="far fa-calendar-alt"></i> ${a.date}</span>
                    
<span style="color:#F97316; cursor:pointer;" onclick="window.open('${a.link}', '_blank')">Read more →</span>

    </div>


           
  </div>
       
</div>
   
      `).join("");

}





document.querySelectorAll(".game-btn").forEach(btn => {


    btn.addEventListener("click", () => {


document.querySelectorAll(".game-btn").forEach(b => b.classList.remove("active"));

             btn.classList.add("active");

currentGame = btn.getAttribute("data-game");
       

render();



    });
});

document.querySelectorAll(".cat-btn").forEach(btn => {


    btn.addEventListener("click", () => {


  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));


btn.classList.add("active");

        currentCategory = btn.getAttribute("data-cat");

        render();
    });
});

searchBtn.addEventListener("click", () => {
    searchQuery = searchInput.value;
    render();
});

searchInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        searchQuery = searchInput.value;
        render();
    }
});

render();