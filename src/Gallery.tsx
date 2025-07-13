import LightGallery from "lightgallery/react";

import lgZoom from "lightgallery/plugins/zoom";
import lgShare from "lightgallery/plugins/share";
import lgHash from "lightgallery/plugins/hash";
// import Masonry from "masonry-layout";
// import imagesLoaded from "imagesloaded";
import { FiZoomIn } from "react-icons/fi";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-thumbnail.css";

const images = [
  {
    thumb:
      "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=1600&q=80",
    title: "Layers of Blue",
    subtitle: "Tobias Rademacher",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?auto=format&fit=crop&w=1600&q=80",
    title: "Tre Cime di Lavaredo",
    subtitle: "Massimiliano Morosinotto",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1605973029521-8154da591bd7?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1605973029521-8154da591bd7?auto=format&fit=crop&w=1600&q=80",
    title: "Pizol, Mels",
    subtitle: "Sascha Bosshard",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?auto=format&fit=crop&w=1600&q=80",
    title: "Foggy Road",
    subtitle: "Yusuf Evli",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=1600&q=80",
    title: "Misty Forest",
    subtitle: "Jay Mantri",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?auto=format&fit=crop&w=1600&q=80",
    title: "Lake in Bled",
    subtitle: "Florian van Duyn",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1477322524744-0eece9e79640?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1477322524744-0eece9e79640?auto=format&fit=crop&w=1600&q=80",
    title: "Wooded Lake Island",
    subtitle: "Juan Davila",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
    title: "Ciucaș Peak",
    subtitle: "David Marcu",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1585338447937-7082f8fc763d?auto=format&fit=crop&w=1600&q=80",
    title: "Snowdonia Lake",
    subtitle: "whoisbenjamin",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?auto=format&fit=crop&w=1600&q=80",
    title: "Colorful Trees by Lake",
    subtitle: "Aaron Burden",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1465311530779-5241f5a29892?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1465311530779-5241f5a29892?auto=format&fit=crop&w=1600&q=80",
    title: "Yukon Territory",
    subtitle: "Kalen Emsley",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?auto=format&fit=crop&w=1600&q=80",
    title: "Pfeiffer Beach at Dusk",
    subtitle: "Kace Rodriguez",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1610448721566-47369c768e70?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1610448721566-47369c768e70?auto=format&fit=crop&w=1600&q=80",
    title: "Portsea, Australia",
    subtitle: "Pat Whelen",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=80",
    title: "McWay Falls",
    subtitle: "Derek Thomson",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1539678050869-2b97c7c359fd?auto=format&fit=crop&w=1600&q=80",
    title: "Big Sur Coast",
    subtitle: "Michal Janek",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1446630073557-fca43d580fbe?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1446630073557-fca43d580fbe?auto=format&fit=crop&w=1600&q=80",
    title: "Big Sur Drive",
    subtitle: "Iris Papillon",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1596370743446-6a7ef43a36f9?auto=format&fit=crop&w=1600&q=80",
    title: "Mountain Layers",
    subtitle: "Piyush Dubey",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?auto=format&fit=crop&w=1600&q=80",
    title: "Wasserauen, Schweiz",
    subtitle: "Fynn",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1600&q=80",
    title: "Poon Hill Sunrise",
    subtitle: "Daniel Leone",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1510011560141-62c7e8fc7908?auto=format&fit=crop&w=1600&q=80",
    title: "Bay of Kotor",
    subtitle: "Boba Jovanovic",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?auto=format&fit=crop&w=1600&q=80",
    title: "Lachung Mountains",
    subtitle: "Surendra Vikram Singh",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?auto=format&fit=crop&w=1600&q=80",
    title: "Banff Lake",
    subtitle: "Cam Adams",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?auto=format&fit=crop&w=240&q=80",
    src: "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?auto=format&fit=crop&w=1600&q=80",
    title: "Lago Goillet",
    subtitle: "Andrea Ledda",
  },
];

export default function Gallery() {
  return (
    <div className="p-4 flex justify-center">
      <div className="w-full max-w-5xl mx-auto">
        <LightGallery
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center"
          plugins={[lgZoom, lgShare, lgHash]}
          speed={500}
          selector=".gallery-item">
          {images.map((img, index) => (
            <a
              key={index}
              className="gallery-item group block cursor-pointer rounded-lg shadow-md overflow-hidden"
              data-src={img.src}
              data-sub-html={`<h4>${img.title}</h4><p>${img.subtitle}</p>`}>
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={img.thumb}
                  alt={img.title}
                  className="w-full h-auto block rounded-lg"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiZoomIn size={40} className="text-white" />
                </span>
              </div>
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
}
