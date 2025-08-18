// const accordionItems = document.querySelectorAll('.accordion-item');
const image = document.querySelector('.column-right img');

// Open the first accordion item by default
// accordionItems[0].classList.add('active');
// accordionItems[0].querySelector('.accordion-content').style.display = 'block';
image.setAttribute('src', accordionItems[0].getAttribute('data-image-src'));

accordionItems.forEach((item) => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  const imageSrc = item.getAttribute('data-image-src');
  
  header.addEventListener('click', () => {
    if (!item.classList.contains('active')) {
      accordionItems.forEach((otherItem) => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.accordion-content').style.display = 'none';
      });
      
      item.classList.add('active');
      content.style.display = 'block';
      image.setAttribute('src', imageSrc);
    }
  });
});