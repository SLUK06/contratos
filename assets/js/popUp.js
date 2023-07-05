document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popupContainer').style.display = 'block';
  });
  
  document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popupContainer').style.display = 'none';
  });
  
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
  });