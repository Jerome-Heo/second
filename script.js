fetch('VERCEL_BACKEND_URL')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 });