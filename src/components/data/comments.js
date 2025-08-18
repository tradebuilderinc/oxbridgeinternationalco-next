const KukSoolWonComment = [
  {
    id: "1",
    title: "-Saron Valadez",
    des: "Pleasant Dental Care is by far the best in the state! I had a great experience, they are patient, understanding, knowledgeable, and beyond amazing. Edward and his team went beyond measure to make sure I felt comfortable and safe. I can truly say I no longer fear a dental office! I strongly recommend them.",
    isFeatured: true,
  },
  {
    id: "4",
    title: "-D. Cooper",
    des: "All of my experiences over the past two years have been excellent. The staff is friendly, informative and helpful. My cleaning appointments have been prompt and very thorough. The dentists are competent and easy to understand when discussing my dental care. I highly recommend Pleasant Dental.",
    isFeatured: true,
  },
  {
    id: "2",
    title: "-G. Stahl",
    des: "As a patient for 16 years, Dr. Nydegger & his entire staff have always been professional & caring. Their customer-focused approach to dentistry has made it easy to recommend him to friends.",
    isFeatured: true,
  },
  {
    id: "3",
    title: "-D. Cooper",
    des: "All of my experiences over the past two years have been excellent. The staff is friendly, informative and helpful. My cleaning appointments have been prompt and very thorough. The dentists are competent and easy to understand when discussing my dental care. I highly recommend Pleasant Dental.",
    isFeatured: true,
  },
  
];

export function CommentsJsonData() {
  return KukSoolWonComment.filter((event) => event.isFeatured);
}
