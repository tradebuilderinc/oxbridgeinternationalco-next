const Mainvideo = [
    {

      title: "Marketing",
      des: " Compelling narratives and strategies attract new patients",
      thumbs: "plg/Icons-04.png",
      url: "/services/dental-marketing",
      isFeatured: true,
    },
    {
    
      title: "Operations",
      des:" Streamlined internal processes for an effective dental practice",
      thumbs: "plg/Icons-05.png",
      url: "/services/dental-practice-operations",
      isFeatured: true,
    },
    {
    
      title: "Technology",
      des:"Integrating and managing digital systems for operational efficiency",
      thumbs: "plg/Icons-06.png",
      url: "/services/dental-technology-solutions",
      isFeatured: true,
    },
    {

      title: "Finance & Accounting",
      des:"Managing finances & revenue for stability and practice growth",
      thumbs: "plg/Icons-06-08.png",
      url: "/services/dental-accounting-services",
      isFeatured: true,
    },
    {
    
      title: "Recruitment & HR",
      des:"Building a skilled and cohesive team",
      thumbs: "plg/Icons-06-09.png",
      url: "/services/dental-recruitment-and-human-resources",
      isFeatured: true,
    },
    {

      title: "Growth & Advisory",
      des:"Identifying opportunities for sustainable practice growth",
      thumbs: "plg/Icons-06-10.png",
      url: "/services/dental-growth-and-advisory",
      isFeatured: true,
    },
    
  ];
  
  export function MainServiceJsonData() {
    return Mainvideo.filter((event) => event.isFeatured);
  }