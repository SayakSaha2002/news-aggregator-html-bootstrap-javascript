let currentPage = 1;
let currentQuery = "everything";
let totalPages = 1;
let pageSize=22;
const apiKey = "bfeff020a1574eb09f7952e0f4705fed";

const fetchNews = async (page = 1, query = "everything") => {
  //const fromDate = new Date().toISOString().split("T")[0];
  let fromDate = "2025-04-05";

  const url = `https://newsapi.org/v2/everything?q=${query}&from=${fromDate}&pageSize=${pageSize}&language=en&page=${page}&sortBy=popularity&apiKey=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    // //let data = {
    //   status: "ok",
    //   totalResults: 43,
    //   articles: [
    //     {
    //       source: { id: "the-verge", name: "The Verge" },
    //       author: "Kevin Nguyen",
    //       title: "The 7 writing apps I used to start and finish my book",
    //       description:
    //         "Thereâs a famous two-decade-old Paris Review interview with Haruki Murakami in which he, one of the worldâs most celebrated novelists, details his daily routine. He wakes up at 4AM, works for five hours, goes for a run, reads, goes to bed, and then repeat…",
    //       url: "https://www.theverge.com/apps/642131/7-writing-apps-book-scrivener-bear-iawriter",
    //       urlToImage:
    //         "https://platform.theverge.com/wp-content/uploads/sites/2/2025/04/257664_7_writing_apps_CVirginia.gif?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
    //       publishedAt: "2025-04-05T13:38:43Z",
    //       content:
    //         "The 7 writing apps I used to start and finish my book\r\nCan you ever use too much software? Yes, but hear me out first.\r\nThe 7 writing apps I used to start and finish my book\r\nCan you ever use too muc… [+12312 chars]",
    //     },
    //     {
    //       source: { id: null, name: "Android Authority" },
    //       author: "Ryan Haines",
    //       title: "Is iOS’s final form just… Android?",
    //       description:
    //         "It seems like iOS inches closer to Android with every passing update, and you know what they say about imitation and flattery.",
    //       url: "https://www.androidauthority.com/ios-vs-android-similarities-3534902/",
    //       urlToImage:
    //         "https://www.androidauthority.com/wp-content/uploads/2025/01/OnePlus-13-camera-vs-Pixel-9-Pro-vs-iPhone-16-Pro-rear-hero.jpg",
    //       publishedAt: "2025-04-05T11:00:41Z",
    //       content:
    //         "If weve compared Android to iOS once, weve compared them a hundred times. At this point, we may have actually compared them a hundred times. Its not always the same comparison weve looked at everythi… [+8823 chars]",
    //     },
    //     {
    //       source: { id: "business-insider", name: "Business Insider" },
    //       author: "Monica Humphries",
    //       title:
    //         "I spent 3 nights in a secluded lodge in Italy's Dolomites. The views were unreal, but they weren't even the best part.",
    //       description:
    //         "Forestis Dolomites, a five-star hotel in Italy, offers striking mountain views and a spa with five saunas, two infinity pools, and a cold plunge.",
    //       url: "https://www.businessinsider.com/forestis-dolomites-italy-hotel-review",
    //       urlToImage:
    //         "https://i.insider.com/67eead5f63d72727e19918c0?width=1200&format=jpeg",
    //       publishedAt: "2025-04-05T09:32:01Z",
    //       content:
    //         "The view from the reporter's suite at Forestis.Monica Humphries/Business Insider\r\n<ul><li>Forestis is a five-star hotel tucked in Italy's Dolomites.</li><li>The property connects guests with nature t… [+9304 chars]",
    //     },
    //     {
    //       source: { id: null, name: "Caschys Blog" },
    //       author: "Benjamin Mamerow",
    //       title:
    //         "VR-Headsets: Rückläufige Auslieferungen und neue Chancen im AR-Markt",
    //       description:
    //         "Der Markt für VR-Headsets befindet sich weiterhin in einer schwierigen Phase. Laut aktuellen Zahlen von Counterpoint Research sind die weltweiten Auslieferungen im Jahr 2024 im Vergleich zum Vorjahr um 12 % gesunken. Dies markiert das dritte Jahr in Folge mit…",
    //       url: "https://stadt-bremerhaven.de/vr-headsets-ruecklaeufige-auslieferungen-und-neue-chancen-im-ar-markt/",
    //       urlToImage:
    //         "https://stadt-bremerhaven.de/wp-content/uploads/2024/02/meta-quest-3.jpg",
    //       publishedAt: "2025-04-05T09:00:47Z",
    //       content:
    //         "Der Markt für VR-Headsets befindet sich weiterhin in einer schwierigen Phase. Laut aktuellen Zahlen von Counterpoint Research sind die weltweiten Auslieferungen im Jahr 2024 im Vergleich zum Vorjahr … [+2138 chars]",
    //     },
    //     {
    //       source: { id: null, name: "Cult of Mac" },
    //       author: "Luke Dormehl",
    //       title: "Today in Apple history: Boot Camp lets Mac users run Windows",
    //       description:
    //         "On April 5, 2006, Apple released the Boot Camp public beta. The software let users with Intel-based Macs run Windows XP on their machines.\n(via Cult of Mac - Apple news, rumors, reviews and how-tos)",
    //       url: "https://www.cultofmac.com/apple-history/boot-camp-mac-windows",
    //       urlToImage:
    //         "https://www.cultofmac.com/wp-content/uploads/2017/04/BootCamp.jpg",
    //       publishedAt: "2025-04-05T12:49:08Z",
    //       content:
    //         "April 5, 2006: Apple introduces the public beta of Boot Camp, software that allows users with an Intel-based Mac to run Windows XP on their machines.\r\nBoot Camp will officially arrive in Mac OS X Leo… [+3013 chars]",
    //     },
    //     {
    //       source: { id: null, name: "Geeky Gadgets" },
    //       author: "Roland Hutchinson",
    //       title: "iOS 18.5 Beta 1: SECRETS Revealed!",
    //       description:
    //         "Apple has unveiled iOS 18.5 Beta 1, offering a glimpse into the latest updates designed to enhance usability, performance, and design across its ecosystem. Whether you’re a developer, an early adopter, or simply curious about the upcoming features, this beta …",
    //       url: "https://www.geeky-gadgets.com/ios-18-5-beta-1-secrets/",
    //       urlToImage:
    //         "https://www.geeky-gadgets.com/wp-content/uploads/2025/04/ios-18-5-beta-photos-app-updates_optimized-1.jpg",
    //       publishedAt: "2025-04-05T07:00:39Z",
    //       content:
    //         "Apple has unveiled iOS 18.5 Beta 1, offering a glimpse into the latest updates designed to enhance usability, performance, and design across its ecosystem. Whether youre a developer, an early adopter… [+6437 chars]",
    //     },
    //     {
    //       source: { id: null, name: "CHIP Online Deutschland" },
    //       author: "Nele Honig",
    //       title:
    //         "Apple stellt den Support ein: Diese 3 beliebten iPhones erhalten kein Update mehr",
    //       description:
    //         "Apple wird im Juni sein neues Betriebssystem vorstellen, welches jedoch nicht für alle iPhones verfügbar sein wird. Mehr dazu erfahren Sie hier.",
    //       url: "https://www.chip.de/nachrichten/apple,79701/ios-19-nicht-fuer-alle-verfuegbar-fuer-diese-3-iphones-gibt-es-kein-update_3ff9fc43-b353-440d-95d8-a51cd2ad5cb3.html",
    //       urlToImage:
    //         "https://quadro.burda-forward.de/ctf/ac9787a9-16ed-4b60-85d8-96821d16070e.66c82560-6961-459a-9f27-bd5dfdf9fced.jpg?im=RegionOfInterestCrop%3D%281200%2C630%29%2CregionOfInterest%3D%28823%2C520%29&hash=2d88927f00b2353a1bc3d5a919e21bf89deefa61f837a6c88a063ee8bdc43e8c",
    //       publishedAt: "2025-04-05T05:04:00Z",
    //       content:
    //         "iOS 19 soll das wohl größte Update seit dem Jahr 2013 werden. Gerüchten zufolge will Apple, der milliardenschwere Technologiekonzern, das neue Betriebssystem jedoch nicht für alles Geräte verfügbar m… [+1530 chars]",
    //     },
    //     {
    //       source: { id: null, name: "Geeky Gadgets" },
    //       author: "Roland Hutchinson",
    //       title: "Stop Guessing! The 2025 Mac Buyer’s Guide for Everyone",
    //       description:
    //         "Choosing the right Mac in 2025 can feel overwhelming, given Apple’s diverse and powerful lineup. Each model is designed with specific users in mind, offering a range of features, performance levels, and price points. This guide will help you navigate the opti…",
    //       url: "https://www.geeky-gadgets.com/2025-mac-buyers-guide/",
    //       urlToImage:
    //         "https://www.geeky-gadgets.com/wp-content/uploads/2025/04/macbook-air-2025-buyers-guide_optimized.jpg",
    //       publishedAt: "2025-04-05T09:00:06Z",
    //       content:
    //         "Choosing the right Mac in 2025 can feel overwhelming, given Apples diverse and powerful lineup. Each model is designed with specific users in mind, offering a range of features, performance levels, a… [+6841 chars]",
    //     },
    //     {
    //       source: { id: null, name: "disneyfoodblog.com" },
    //       author: "Kendall Waltz",
    //       title:
    //         "5 Sundresses Available Online NOW That Are Perfect for Disney World",
    //       description:
    //         "We found the best Disney dresses and they're all BoxLunch Exclusives!\nThe post 5 Sundresses Available Online NOW That Are Perfect for Disney World first appeared on the disney food blog.",
    //       url: "https://www.disneyfoodblog.com/2025/04/05/5-sundresses-available-online-now-that-are-perfect-for-disney-world/",
    //       urlToImage:
    //         "https://www.disneyfoodblog.com/wp-content/uploads/2025/04/2025-boxlunch-mulan-dress-444x600.webp",
    //       publishedAt: "2025-04-05T14:32:29Z",
    //       content:
    //         "We know spring just started, but we’re already looking forward to summer, and BoxLunch just released new Disney dresses we’ll be wearing all season long.\r\nMinnie knows a good Disney dress when she se… [+1548 chars]",
    //     },
    //     {
    //       source: { id: "t3n", name: "T3n" },
    //       author: "Ann-Catherin Karg",
    //       title:
    //         "iOS 19: Diese iPhones könnten in Apples Update-Plänen auf der Strecke bleiben",
    //       description:
    //         "Gerüchten zufolge wird Apples kommendes Betriebssystem iOS 19 gleich drei iPhone-Modelle nicht mehr unterstützen. Welche das sind und was das für ihre Besitzer bedeutet. Noch ist es nicht mehr als ein Gerücht. Doch wenn stimmt, was unter anderem 9to5mac und A…",
    //       url: "https://t3n.de/news/ios-19-diese-iphones-koennten-in-apples-update-plaenen-auf-der-strecke-bleibwn-1680943/",
    //       urlToImage:
    //         "https://t3n.de/news/wp-content/uploads/2018/09/iphone-xr-kamera.jpg",
    //       publishedAt: "2025-04-05T05:35:00Z",
    //       content:
    //         "Noch ist es nicht mehr als ein Gerücht. Doch wenn stimmt, was unter anderem 9to5mac und Apple Insider berichten, könnte iOS 19 bei manchen iPhone-User:innen für Unmut sorgen.\r\nDemnach sollen das iPho… [+2029 chars]",
    //     },
    //     {
    //       source: { id: null, name: "Forbes" },
    //       author:
    //         "David Phelan, Senior Contributor, \n David Phelan, Senior Contributor\n https://www.forbes.com/sites/davidphelan/",
    //       title:
    //         "Apple iPhone 16 Pro Max Price: Will It Really Cost Over $2,000 From Memorial Day?",
    //       description:
    //         "The focus on pricing for iPhones is suddenly intense because of the new tariffs arriving soon. New analysis pushes the possible price as high as $3,500 soon.",
    //       url: "https://www.forbes.com/sites/davidphelan/2025/04/05/apple-iphone-16-pro-max-price-will-it-really-cost-over-2000-from-memorial-day/",
    //       urlToImage:
    //         "https://imageio.forbes.com/specials-images/imageserve/66f5a2f380ad925683dd0582/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    //       publishedAt: "2025-04-05T11:40:54Z",
    //       content:
    //         "Updated April 5 with new analysis and Apples room for maneuver.\r\nYou can snap up an iPhone for $599 at the moment: the newly released iPhone 16e. But the tariffs newly announced by President Trump ha… [+3916 chars]",
    //     },
    //     {
    //       source: { id: null, name: "heise online" },
    //       author: "Ben Schwan",
    //       title:
    //         "CarPlay: Nach Update auf iOS 18.4 Anzeige- und Anschlussprobleme",
    //       description:
    //         "In bestimmten Fahrzeugen kommt es nach iPhone-Aktualisierung auf iOS 18.4 zu Schwierigkeiten bei der CarPlay-Nutzung. Noch ist unklar, woran es liegt.",
    //       url: "https://www.heise.de/news/CarPlay-Nach-Update-auf-iOS-18-4-Anzeige-und-Anschlussprobleme-10341232.html",
    //       urlToImage:
    //         "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/8/3/2/0/2/1/shutterstock_1092829304-843d969de1adbf5a.jpg",
    //       publishedAt: "2025-04-05T13:59:00Z",
    //       content:
    //         "Nutzer von Apples Fahrzeugintegration fürs iPhone, CarPlay, berichten seit dem Update auf iOS 18.4 von Problemen. Dabei kommt es vor, dass das Display im Kombiinstrument nicht mehr beschickt wird, te… [+2277 chars]",
    //     },
    //     {
    //       source: { id: null, name: "Wccftech" },
    //       author: "Omar Sohail",
    //       title:
    //         "Apple Is Estimated To Take A $33 Billion Hit To Its Annual Profits Thanks To Trump’s Tariffs, New Research Says Company Has A 20 Percent Chance Of Getting An Exemption",
    //       description:
    //         "The Trump tariffs announcement has so far wreaked havoc on Apple’s supply chain across multiple countries and its market capitalization, which saw the technology giant lose $250 billion in just a single day. It can be assumed that the decision taken by the U.…",
    //       url: "https://wccftech.com/apple-will-lose-33-billion-profit-because-of-trump-tariffs-little-chance-for-exemption/",
    //       urlToImage:
    //         "https://cdn.wccftech.com/wp-content/uploads/2025/04/Apple-office.jpg",
    //       publishedAt: "2025-04-05T09:55:06Z",
    //       content:
    //         "The Trump tariffs announcement has so far wreaked havoc on Apples supply chain across multiple countries and its market capitalization, which saw the technology giant lose $250 billion in just a sing… [+1994 chars]",
    //     },
    //     {
    //       source: { id: "abc-news-au", name: "ABC News (AU)" },
    //       author: "Timu King, Justine Longmore, and Warwick Long",
    //       title:
    //         "Farmers' profits likely to bloom as Trump's tariffs anger global markets",
    //       description:
    //         "Australian growers are preparing to reap the benefits of Trump's trade war as global markets look to source products from other regions.",
    //       url: "https://www.abc.net.au/news/2025-04-05/trumps-tariff-may-benefit-australian-growers/105136862",
    //       urlToImage:
    //         "https://live-production.wcms.abc-cdn.net.au/4d8bb4627d738e2b778766b1195cb040?impolicy=wcms_watermark_news&cropH=1763&cropW=3135&xPos=926&yPos=484&width=862&height=485&imformat=generic",
    //       publishedAt: "2025-04-05T02:42:11Z",
    //       content:
    //         "New trade opportunities are emerging for some Australian agricultural industries, following US President Donald Trump's wide-ranging tariff announcement on Thursday.\r\nAustralian exports to the US wil… [+4218 chars]",
    //     },
    //     {
    //       source: { id: null, name: "Cult of Mac" },
    //       author: "D. Griffin Jones",
    //       title: "How to tag photos on iPhone with people and pets",
    //       description:
    //         "Tag photos on your iPhone with the names of your friends, family and pets so you can easily find pictures of them later on.\n(via Cult of Mac - Apple news, rumors, reviews and how-tos)",
    //       url: "https://www.cultofmac.com/how-to/tag-photos-iphone",
    //       urlToImage:
    //         "https://www.cultofmac.com/wp-content/uploads/2024/01/Tag-Your-Friends-And-Family.jpg",
    //       publishedAt: "2025-04-05T13:00:00Z",
    //       content:
    //         "You can quickly tag photos on your iPhone with the names of your friends, family members and pets so you can easily find pictures of them later on. The Photos app will detect pictures of people autom… [+8374 chars]",
    //     },
    //     {
    //       source: { id: null, name: "Ultimate Classic Rock" },
    //       author: "Allison Rapp",
    //       title:
    //         "The Most and Least-Played Song Live Off Every Guns N' Roses Album",
    //       description:
    //         "Out of six studio albums, here are the songs that Guns N' Roses has played the most and the least.",
    //       url: "https://ultimateclassicrock.com/most-and-least-played-song-live-guns-n-roses/",
    //       urlToImage:
    //         "https://townsquare.media/site/366/files/2025/04/attachment-guns_n_roses_discography.jpg?w=1200&q=75&format=natural",
    //       publishedAt: "2025-04-05T11:00:30Z",
    //       content:
    //         "Here is the most and least-played song live off every Guns N' Roses album.\r\nStrange as it may sound, there was a time when Guns N' Roses did not fully believe in themselves. Or at least, they didn't … [+4972 chars]",
    //     },
    //     {
    //       source: { id: null, name: "Everything-everywhere.com" },
    //       author: "Gary Arndt",
    //       title: "Open Source Software",
    //       description:
    //         "Podcast Transcript Computer software seems to be everywhere. No matter what kind of computer you use or where you use it, all computers use software.  That is the entire point of a computer.  However, not all software is the same. There are actually enormous …",
    //       url: "https://everything-everywhere.com/open-source-software/",
    //       urlToImage:
    //         "https://photos.smugmug.com/Other/n-hRFP2/Podcast-Images/i-FXdqH2s/0/K6rWphV8sgsN5mvGDVvzHvZ79dM9hWtf3kXmn2HBB/L/1734epart-L.jpg",
    //       publishedAt: "2025-04-05T08:45:00Z",
    //       content:
    //         "Subscribe Apple | Spotify | Amazon |iHeart Radio | Castbox | Podcast Republic | RSS | Patreon\r\nComputer software seems to be everywhere. No matter what kind of computer you use or where you use it, a… [+13829 chars]",
    //     },
    //     {
    //       source: { id: null, name: "netzwelt" },
    //       author: "Nils Matthiesen",
    //       title: "iPhone weg? So schützt ihr euch effektiv vor Diebstahl!",
    //       description:
    //         "Ein iPhone ist teuer – umso ärgerlicher, wenn es gestohlen wird. Diese einfachen Schutzmaßnahmen helfen euch, euer Smartphone zu sichern und im Notfall richtig zu handeln.",
    //       url: "https://www.netzwelt.de/news/240646-iphone-weg-so-schuetzt-euch-effektiv-diebstahl.html",
    //       urlToImage:
    //         "https://img.netzwelt.de/dw1600_dh900_sw0_sh0_sx0_sy0_sr16x9_nu2/picture/original/2025/04/dieb-klaut-iphone-430266.jpg",
    //       publishedAt: "2025-04-05T05:54:00Z",
    //       content:
    //         "STARTSEITE *:not([data-mrf-experience]) img.lazy'); var tl = domTargets.length; var te = 0; var ta = function() { if (document.getElementById('adobe-print')) { tx(); } else { var div = document.creat… [+5283 chars]",
    //     },
    //   ],
    // };

    if (data.status === "ok") {
      displayNews(data.articles);
      //document.getElementById("resultCount").innerText = data.totalResults;
      totalPages = Math.ceil(data.totalResults / pageSize);
    } else {
      console.error("API Error:", data.message);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

const displayNews = (articles) => {
  const container = document.getElementById("newsContainer");
  container.innerHTML = "";

  if (articles.length === 0) {
    container.innerHTML = `<p class="text-center">No results found.</p>`;
    return;
  }

  articles.forEach((article) => {
    const readMore = new URLSearchParams(article).toString(); // encodes all params
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
    <div class="card h-100">
      <img height=200 src="${article.urlToImage || "https://via.placeholder.com/150"}" class="card-img-top rounded" alt="image">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${article.title}</h5>
        <p class="card-text">${article.description || ""}</p>
        <a class="btn btn-primary mt-auto" href="readMore.html?${readMore}">Read More</a>
      </div>
    </div>
  `;
//   <button class="btn btn-primary mt-auto" onclick='openDetailPage(${JSON.stringify(article).replace(/'/g, "\\'")})'>Read More</button>
    container.appendChild(col);
  });
};

function openDetailPage(article) {
  localStorage.setItem("newsDetail", JSON.stringify(article));
  window.location.href = "readMore.html";
}

// Handle search form
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const q = document.getElementById("searchInput").value.trim();
  if (q !== "") {
    currentQuery = q;
    currentPage = 1;
    fetchNews(currentPage, currentQuery);
  }
});

// Pagination
document.getElementById("prev").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchNews(currentPage, currentQuery);
  } else {
    alert("You are already on the first page.");
  }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      fetchNews(currentPage, currentQuery);
    } else {
      alert("You are already on the last page.");
    }
});

// Initial load
fetchNews(currentPage, currentQuery);
