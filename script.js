// script.js
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('modalImage').src = btn.dataset.img;
    document.getElementById('modalImage').alt = btn.dataset.name;
    document.getElementById('modalName').innerText = btn.dataset.name;
    document.getElementById('modalPrice').innerText = "Price: $" + btn.dataset.price;
    document.getElementById('modalDesc').innerText = btn.dataset.desc;
    document.getElementById('paypalItemName').value = btn.dataset.name;
    document.getElementById('paypalAmount').value = btn.dataset.price;
    document.getElementById('productModal').style.display = 'flex';
  });
});
document.querySelector('.modal .close').onclick = () => {
  document.getElementById('productModal').style.display = 'none';
};
