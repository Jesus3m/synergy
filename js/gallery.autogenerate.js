const img = [
  {
    name: "Cossfit",
    url:
      "https://cdn.pixabay.com/photo/2017/04/13/14/55/man-2227804_960_720.jpg",
    filter: "crossfit",
  },
  {
    name: "Gym",
    url:
      "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828732_960_720.jpg",
    filter: "gym",
  },
  {
    name: "Funcional",
    url:
      "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_960_720.jpg",
    filter: "function",
  },
  {
    name: "Cossfit",
    url:
      "https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_960_720.jpg",
    filter: "weigth",
  },
  {
    name: "Cossfit",
    url:
      "https://cdn.pixabay.com/photo/2017/04/13/14/55/man-2227804_960_720.jpg",
    filter: "crossfit",
  },
  {
    name: "Gym",
    url:
      "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828732_960_720.jpg",
    filter: "gym",
  },
  {
    name: "Funcional",
    url:
      "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_960_720.jpg",
    filter: "function",
  },
  {
    name: "Cossfit",
    url:
      "https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_960_720.jpg",
    filter: "weigth",
  },
  {
    name: "Cossfit",
    url:
      "https://cdn.pixabay.com/photo/2017/04/13/14/55/man-2227804_960_720.jpg",
    filter: "crossfit",
  },
  {
    name: "Gym",
    url:
      "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828732_960_720.jpg",
    filter: "gym",
  },
  {
    name: "Funcional",
    url:
      "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_960_720.jpg",
    filter: "function",
  },
  {
    name: "Cossfit",
    url:
      "https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_960_720.jpg",
    filter: "weigth",
  },
  {
    name: "Cossfit",
    url:
      "https://cdn.pixabay.com/photo/2017/04/13/14/55/man-2227804_960_720.jpg",
    filter: "crossfit",
  },
  {
    name: "Gym",
    url:
      "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828732_960_720.jpg",
    filter: "gym",
  },
  {
    name: "Funcional",
    url:
      "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_960_720.jpg",
    filter: "function",
  },
  {
    name: "Cossfit",
    url:
      "https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_960_720.jpg",
    filter: "weigth",
  },
  {
    name: "Cossfit",
    url:
      "https://cdn.pixabay.com/photo/2017/04/13/14/55/man-2227804_960_720.jpg",
    filter: "crossfit",
  },
  {
    name: "Gym",
    url:
      "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828732_960_720.jpg",
    filter: "gym",
  },
  {
    name: "Funcional",
    url:
      "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_960_720.jpg",
    filter: "function",
  },
  {
    name: "Cossfit",
    url:
      "https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_960_720.jpg",
    filter: "weigth",
  },
  {
    name: "Cossfit",
    url:
      "https://cdn.pixabay.com/photo/2017/04/13/14/55/man-2227804_960_720.jpg",
    filter: "crossfit",
  },
  {
    name: "Gym",
    url:
      "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828732_960_720.jpg",
    filter: "gym",
  },
  {
    name: "Funcional",
    url:
      "https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_960_720.jpg",
    filter: "function",
  },
  {
    name: "Cossfit",
    url:
      "https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_960_720.jpg",
    filter: "weigth",
  },
];

const galleryContainer = document.getElementById("gallery-container");
const imagesElements = img.map((image) => {
  const imgContent = document.createElement("div");
  imgContent.className = "img-content";
  const galleyImage = document.createElement("img");
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
