const img = [
  {
    name: "Cossfit",
    url:
      "https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_960_720.jpg",
    filter: "crossfit",
  },
  {
    name: "Grupo de mancuernas",
    url:
      "https://cdn.pixabay.com/photo/2016/03/27/23/00/weight-lifting-1284616_960_720.jpg",
    filter: "weight",
  },
  {
    name: "Curl con ligas",
    url:
      "https://cdn.pixabay.com/photo/2016/11/29/09/10/fit-1868632_960_720.jpg",
    filter: "function",
  },
  {
    name: "Strong arms",
    url:
      "https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255_960_720.jpg",
    filter: "weight",
  },
  {
    name: "Cubano sexy",
    url:
      "https://cdn.pixabay.com/photo/2017/07/28/17/54/fatigue-2549356_960_720.jpg",
    filter: "gym",
  },
  {
    name: "Pesas",
    url:
      "https://cdn.pixabay.com/photo/2018/10/23/13/35/fitness-3767884_960_720.jpg",
    filter: "crossfit",
  },
  {
    name: "Prensa",
    url:
      "https://cdn.pixabay.com/photo/2015/07/02/10/26/training-828760_960_720.jpg",
    filter: "gym",
  },
  {
    name: "trx",
    url:
      "https://cdn.pixabay.com/photo/2014/09/28/19/50/fitness-465205_960_720.jpg",
    filter: "function",
  },
  {
    name: "Batir cuerdas",
    url:
      "https://cdn.pixabay.com/photo/2015/07/02/10/27/training-828764_960_720.jpg",
    filter: "crossfit",
  },
  {
    name: "Push Up",
    url:
      "https://cdn.pixabay.com/photo/2017/02/10/09/38/plank-2054729_960_720.jpg",
    filter: "function",
  },
  {
    name: "Barra Z",
    url:
      "https://cdn.pixabay.com/photo/2017/01/09/11/30/dumbbell-1966247_960_720.jpg",
    filter: "wight",
  },
  {
    name: "aptitud Vencedora",
    url:
      "https://cdn.pixabay.com/photo/2018/02/20/11/38/fitness-3167418_960_720.jpg",
    filter: "gym",
  },
  {
    name: "Saca el animal que hay en ti",
    url:
      "https://cdn.pixabay.com/photo/2015/09/29/12/15/bordeaux-963810_960_720.jpg",
    filter: "gym",
  },
  {
    name: "Discos",
    url:
      "https://cdn.pixabay.com/photo/2016/06/12/20/15/sports-1452965_960_720.jpg",
    filter: "weight",
  },

  {
    name: "Press de pecho",
    url:
      "https://cdn.pixabay.com/photo/2017/04/25/20/18/sport-2260736_960_720.jpg",
    filter: "gym",
  },
  {
    name: "Box Jump",
    url:
      "https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604151_960_720.jpg",
    filter: "crossfit",
  },
  {
    name: "Estiramiento",
    url:
      "https://cdn.pixabay.com/photo/2017/02/09/16/21/kettlebell-2052765_960_720.jpg",
    filter: "function",
  },
  {
    name: "Pesas",
    url:
      "https://cdn.pixabay.com/photo/2015/11/11/10/14/fitness-1038434_960_720.jpg",
    filter: "crossfit",
  },
  {
    name: "Plancha",
    url:
      "https://cdn.pixabay.com/photo/2016/03/31/03/23/fitness-1291997_960_720.jpg",
    filter: "function",
  },
  {
    name: "Crossfit",
    url:
      "https://cdn.pixabay.com/photo/2014/06/23/19/45/barbell-375482_960_720.jpg",
    filter: "crossfit",
  },
  {
    name: "Curl con mancuerna",
    url:
      "https://cdn.pixabay.com/photo/2016/05/14/03/24/girl-in-the-gym-1391368_960_720.jpg",
    filter: "gym",
  },
  {
    name: "estiramiento",
    url:
      "https://cdn.pixabay.com/photo/2013/02/26/02/14/exercise-86200_960_720.jpg",
    filter: "gym",
  },
  {
    name: "Pull up",
    url:
      "https://cdn.pixabay.com/photo/2017/06/30/21/02/muscle-2459720_960_720.jpg",
    filter: "gym",
  },
  {
    name: "Box crossfit",
    url:
      "https://cdn.pixabay.com/photo/2017/01/08/20/20/crossfit-1963860_960_720.jpg",
    filter: "crossfit",
  },
];

const galleryContainer = document.getElementById("gallery-container");
const imagesElements = img.map((image) => {
  const imgContent = document.createElement("div");
  imgContent.className = "img-content";
  const galleyImage = document.createElement("img");
  galleyImage.loading = "lazy";
  galleyImage.className = "img-probe " + image.filter;
  galleyImage.src = image.url;
  galleyImage.alt = image.name;
  imgContent.appendChild(galleyImage);

  imgContent.addEventListener("click", (e) => {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.id = "popup";
    popup.style = `background-image: url(${image.url})`;
    const btnPopUp = document.createElement("button");
    btnPopUp.id = "close-pop";
    btnPopUp.textContent = "X";
    const title = document.createElement("h3");
    title.textContent = image.name;
    popup.appendChild(title);
    popup.appendChild(btnPopUp);
    document.body.appendChild(popup);
    setTimeout(() => {
      const pop = document.getElementById("popup");
      pop.classList.add("show");
    }, 200);
    const btn = document.getElementById("close-pop");
    btn.addEventListener("click", () => {
      const popup = document.getElementById("popup");
      document.body.removeChild(popup);
    });
  });

  galleryContainer.appendChild(imgContent);
});
