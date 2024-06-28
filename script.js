fetch('https://vercelbackend-1tbvs30yq-jeromes-projects-6b8e46b2.vercel.app/year')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 });