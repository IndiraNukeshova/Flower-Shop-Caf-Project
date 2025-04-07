// Простая обработка формы
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами.');
    this.reset();
});
