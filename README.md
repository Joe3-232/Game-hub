# project title/name
 GameHub
 ## description 
 GameHub is a sleek and responsive web application that aggregates the latest gaming news from multiple popular titles in one place. Instead of navigating between different websites for news about PUBG, Free Fire, VALORANT, GTA, Call of Duty, Minecraft, and Fortnite, GameHub brings everything together in a single, user-friendly interface. You can filter news by game, search for specific topics, and click to read full articles from their official sources. It was developed using only HTML, CSS, and JavaScript.
 ## features 
 - Browse news from over 7 different games in one place. 
 - Filter news by game (PUBG, Free Fire, Valorant, GTA, Call of Duty, Minecraft, Fortnite)
 - Filter news by category (Updates, Tournaments, Codes, Reviews, Guides) 
 - Search bar to find any news article by title, excerpt, or game name
 - Responsive design works on mobile and PC
 - Clickable news cards open full articles on the official game websites
 ## how to use/set up
 - Open the live demo: https://joe3-232.github.io/Game-hub/
 - Or download the files and open the index.html file in your browser
 - Click the Games buttons to filter news by game
 - Click the Categories buttons to filter news by type (updates, tournaments, codes, etc.)
 - Use the search bar to find specific news.
 - Click "Read More" to open the full article on the official website
 ## screenshots and demo link
 <img width="1912" height="901" alt="image" src="https://github.com/user-attachments/assets/8b9e823d-7a3d-4d71-b71b-7b41e301ec21" />
 <img width="1904" height="905" alt="image" src="https://github.com/user-attachments/assets/04da5182-0d78-4bbb-bc18-812991890642" />
 <img width="1916" height="914" alt="image" src="https://github.com/user-attachments/assets/c0391e79-4076-4d57-b503-737d77701c55" />
 
https://joe3-232.github.io/Game-hub/

 ## tech stack 
 - HTML for structure
 - Css for styling web
 - Google's font is customized for the website
 - A great custom font for icons 
 - Vanilla JavaScript is used to make the website user friendly
 ## why u made it 
I created this project because I was tired of browsing multiple websites daily to keep up with gaming news. I'm a big fan of PUBG, Free Fire, and Valorant, and I always had to switch between different tabs to find out what was new. So, I designed a single platform where I could see updates for all my favorite games at once. This project also helped me hone my UI development skills without relying on frameworks 
## learning outcomes (the best part that reviewers love in one's readme, or at least i do)
 - I learned how to build a dynamic filtering system using JavaScript (filtering arrays based on multiple criteria)
 - I understood how to manipulate the DOM to dynamically render content
 - I became more skilled at using CSS Grid and Flexbox for responsive designs
- I learned how to structure a simple JavaScript project without using frameworks
- I practiced writing clean, readable code with proper task separation (HTML, CSS, and JS files)
- I understood how to host a website for free using GitHub Pages
## challenges you faced and how others can avoid repeating the same mistake
1. Search and Filter Conflict

Initially, clicking on a filter would clear the search term, and typing the search term would reset the game filter. It took me a while to realize I needed three separate variables (currentGame, currentCategory, and searchQuery) and a single render() function to apply them all to the original data array.

How to avoid this: Always start with your complete data, not pre-filtered results. Use separate variables for each filter and combine them into a single function.

2. CSS Breaks on GitHub Pages but Works Locally

I typed href="style.css" but my filename was Style.css on GitHub (with a capital S). GitHub is case-sensitive, while VS Code is not. The site worked fine on my machine but didn't display any styles online.

How to avoid this: Use lowercase letters for all filenames. Make sure the name in your repository matches the name in your HTML
