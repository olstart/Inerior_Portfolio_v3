// Получаем модальное окно
var modal = document.getElementById("myModal");

// Получаем изображение и вставляем его в модальное окно
var img = document.querySelectorAll('.portfolio-item img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.forEach(function(image) {
  image.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
});

// Получаем элемент <span> для закрытия модального окна
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на <span> (x), закрываем модальное окно
span.onclick = function() { 
  modal.style.display = "none";
}
