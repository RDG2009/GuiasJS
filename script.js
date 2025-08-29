const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

//  esse js controla a palavra "active" elementos, por exemplo, se vc clica em corinthians, 
//  ele adiciona a palavra active e essa será a única descrição mostrada, 
//  se vc clica em palmeiras, ele remove o active de corinthians e coloca no palmeiras

about.addEventListener('click', function(e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function(btn) {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');

    articles.forEach(function(article) {
      article.classList.remove('active');
    });

    const element = document.getElementById(id);
    element.classList.add('active');
  }
});
