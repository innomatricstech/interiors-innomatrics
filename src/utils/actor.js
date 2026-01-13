// src/utils/actor.js
import actorVideo from "../assets/img/actorImages/actorvideo.mp4";

// 👇 UI-la kaatta vendiya MAIN images (nee send pannina ones)
import cover1 from "../assets/img/actorImages/actore_image_16.jpeg";
import cover2 from "../assets/img/actorImages/actore_image_17.jpeg";
import cover3 from "../assets/img/actorImages/actore_image_18.jpeg";
import cover4 from "../assets/img/actorImages/actore_image_19.jpeg";
import cover5 from "../assets/img/actorImages/actore_image_20.jpeg";

// 👇 Slider-la kaatta vendiya ellā images
import actor1 from "../assets/img/actorImages/actore_image_1.jpeg";
import actor2 from "../assets/img/actorImages/actore_image_2.jpeg";
// ...
import actor55 from "../assets/img/actorImages/actore_image_55.jpeg";

// 👇 For OurWorks page - first 10 images
import actor_image_1 from "../assets/img/actorImages/actore_image_2.jpeg";
import actor_image_2 from "../assets/img/actorImages/actore_image_21.jpeg";
import actor_image_3 from "../assets/img/actorImages/actore_image_50.jpeg";
import actor_image_4 from "../assets/img/actorImages/actore_image_47.jpeg";
import actor_image_5 from "../assets/img/actorImages/actore_image_33.jpeg";
import actor_image_6 from "../assets/img/actorImages/actore_image_16.jpeg";
import actor_image_7 from "../assets/img/actorImages/actore_image_22.jpeg";
import actor_image_8 from "../assets/img/actorImages/actore_image_15.jpeg";
import actor_image_9 from "../assets/img/actorImages/actore_image_17.jpeg";
import actor_image_10 from "../assets/img/actorImages/actore_image_20.jpeg";

export const actorMedia = {
  coverImages: [cover1, cover2, cover3, cover4, cover5],
  sliderImages: [
    actor1, actor2,
    // ellā actor images
    actor55
  ],
  video: actorVideo,
  // ADD THIS - First 10 images for OurWorks page
  ourWorksImages: [
    actor_image_1, actor_image_2, actor_image_3, actor_image_4, actor_image_5,
    actor_image_6, actor_image_7, actor_image_8, actor_image_9, actor_image_10
  ]
};