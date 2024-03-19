const pageSpreads = document.querySelectorAll('.page-spread');
let currentPage = 0;

const showPage = (pageNumber) => {
  pageSpreads.forEach((spread, index) => {
    spread.style.display = index === pageNumber ? 'flex' : 'none';
  });
  document.querySelectorAll('.page-number').forEach((num) => (num.textContent = pageNumber + 1));
};

showPage(currentPage);

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.previous');

nextBtn.addEventListener('click', () => {
  if (currentPage < pageSpreads.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});
