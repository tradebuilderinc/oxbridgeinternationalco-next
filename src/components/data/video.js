const INFRASTRUCTURE = [
  {
    id: "1",
    title: "Tournament of Champions",
    thumbs: "video1.jpg",
    url: "SimiTestimonials-Canon.mp4",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Master Nathan Double-Sword Technique",
    thumbs: "video2.jpg",
    url: "SimiTestimonials-FatherandSon.mp4",
    isFeatured: true,
  },
  {
    id: "1",
    title: "Tournament of Champions",
    thumbs: "video1.jpg",
    url: "SimiTestimonials-Canon.mp4",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Master Nathan Double-Sword Technique",
    thumbs: "video2.jpg",
    url: "SimiTestimonials-FatherandSon.mp4",
    isFeatured: true,
  },
];

export function VideosJsonData() {
  return INFRASTRUCTURE.filter((event) => event.isFeatured);
}
