document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.getElementById('reservation-form');
    
    reservationForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(reservationForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const date = formData.get('date');
      const time = formData.get('time');
      
      // Here you can add code to handle the reservation submission, like sending it to a server
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Date:', date);
      console.log('Time:', time);
      
      // Reset form after submission
      reservationForm.reset();
    });
    
    const imageGallery = document.querySelector('.image-gallery');
    
    // Simulated gallery images
    const images = [
      'image1.jpeg',
      'image2.jpeg',
      'image3.jpeg',
      'image4.jpeg'
      // Add more image paths here
    ];
    
    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = 'images/' + image; // Assuming images are stored in an 'images' folder
      imgElement.alt = 'Little Things Cafe';
      imageGallery.appendChild(imgElement);
    });
  });
  