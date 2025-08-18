const FaqsData = [
  {
    id: "1",
    title: "What causes tooth decay?",
    des: "Tooth decay results from acids produced by bacteria in the presence of sugar. Consistent elimination of these elements through brushing and flossing is crucial for prevention. For residents in Peoria, AZ, seeking preventive dental care, consider Pleasant Dental Care, your nearby dental clinic in Peoria. Our commitment to pleasant dental care distinguishes us among Peoria dental offices, ensuring optimal oral health.",
    isFeatured: true,
  },
  {
    id: "2",
    title: "How often should I get X-rays?",
    des: "A comprehensive radiographic survey is advised every three years for most individuals, accompanied by routine 'checkup' or 'recall' appointments every 6 to 12 months. If you're in Peoria, AZ, searching for a dentist near you, consider the comprehensive care at Pleasant Dental Care, a leading dental clinic in Peoria. Our dedication to pleasant dental care distinguishes us among Peoria dental offices, ensuring the best in dental health for our community.",
    isFeatured: true,
  },
  {
    id: "3",
    title: "How can I maintain good oral health?",
    des: "Patients seeking sustained oral health beyond clinic visits can receive guidance on effective brushing and flossing, dietary advice, and other oral hygiene practices. For residents in Peoria, AZ, looking for a dentist near them, consider the comprehensive care at Pleasant Dental Care, a distinguished dental clinic in Peoria. Our commitment to pleasant dental care sets us apart among Peoria dental offices, ensuring the best in dental health for our community.",
    isFeatured: true,
  },
  {
    id: "4",
    title: "What is the best kind of toothbrush?",
    des: "Typically, a toothbrush with soft bristles is recommended to prevent potential abrasion. Whether manual or electric, anything firmer than soft may be too harsh and contribute to gum recession. For residents in Peoria, AZ, seeking guidance on optimal oral care, visit Pleasant Dental Care, a reputable dental clinic in Peoria. Our commitment to pleasant dental care makes us a trusted choice among Peoria dental offices, prioritizing your oral health.",
    isFeatured: true,
  },
];

export function FaqsJsonData() {
  return FaqsData.filter((event) => event.isFeatured);
}
