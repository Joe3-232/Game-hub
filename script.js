const articles = [


    { id: 1, title: "PUBG Update 32.1: Rondo Map Rework", game: "PUBG", category: "update", excerpt: "New weapons and tactical gear added.", date: "May 12, 2026", img: "https://placehold.co/600x400/1E293B/F97316?text=PUBG" },
    
    
{ id: 2, title: "PUBG Global Championship 2026: $3M Prize", game: "PUBG", category: "tournament", excerpt: "Top 16 teams qualified for finals.", date: "May 10, 2026", img: "https://placehold.co/600x400/1E293B/F97316?text=PGC" },
               


{ id: 3, title: "Free Fire OB47: New Character Orion", game: "Free Fire", category: "update", excerpt: "Invisibility skill and Clash Squad rework.", date: "May 11, 2026", img: "https://placehold.co/600x400/1E293B/F97316?text=FreeFire" },

        { id: 4, title: "Free Fire World Series 2026 Finals", game: "Free Fire", category: "tournament", excerpt: "Brazil vs Thailand for $1.2M.", date: "May 5, 2026", img: "https://placehold.co/600x400/1E293B/F97316?text=FFWS" },



           { id: 5, title: "VALORANT Episode 10: New Agent Vyse", game: "VALORANT", category: "update", excerpt: "Time control abilities revealed.", date: "May 8, 2026", img: "https://placehold.co/600x400/1E293B/F97316?text=VALORANT" },
          
          
    { id: 6, title: "VCT Masters Shanghai: EDG Wins", game: "VALORANT", category: "tournament", excerpt: "Chinese team takes down Fnatic 3-1.", date: "May 6, 2026", img: "https://placehold.co/600x400/1E293B/F97316?text=VCT" },
    


                  { id: 7, title: "GTA 6 Trailer 2 Leak: Vice City", game: "GTA", category: "update", excerpt: "Map 2x bigger than Los Santos.", date: "May 13, 2026", img: "https://placehold.co/600x400/1E293B/F97316?text=GTA6" },



          { id: 8, title: "Call of Duty Black Ops 6 Reveal", game: "COD", category: "update", excerpt: "Omnimovement and round-based zombies.", date: "May 1, 2026", img: "https://placehold.co/600x400/1E293B/F97316?text=BO6" },
                                        
                  
                  
{ id: 9, title: "Minecraft 1.22 Deep Dark 2.0", game: "Minecraft", category: "update", excerpt: "New Warden variants and archaeology.", date: "April 30, 2026", img: "https://placehold.co/600x400/1E293B/F97316?text=Minecraft" },



{ id: 10, title: "Fortnite Chapter 6 Season 2", game: "Fortnite", category: "update", excerpt: "Mythical weapons and map changes.", date: "May 9, 2026", img: "https://placehold.co/600x400/1E293B/F97316?text=Fortnite" },


        
{ id: 11, title: "Secret Code: HUB2026 - Free Skin", game: "PUBG", category: "code", excerpt: "Redeem for free contraband coupon.", date: "May 7, 2026", img: "https://placehold.co/600x400/1E293B/F97316?text=Code" },
                      


{ id: 12, title: "Best VALORANT Sensitivity Guide", game: "VALORANT", category: "guide", excerpt: "Pro player settings for 2026.", date: "May 4, 2026", img: "https://placehold.co/600x400/1E293B/F97316?text=Guide" }
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
                    
<span style="color:#F97316; cursor:pointer;" onclick="alert('Full article: ${a.title}')">Read more →</span>

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