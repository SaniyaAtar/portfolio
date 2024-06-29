document.getElementById('toggleButton').addEventListener('click', function() {
  var leftPanel = document.getElementById('leftPanel');
  var toggleButton = document.getElementById('toggleButton');
  
  if (leftPanel.classList.contains('hidden')) {
    leftPanel.classList.remove('hidden');
    toggleButton.style.backgroundColor = '#2c3e50';
    toggleButton.style.color = 'white';
  } else {
    leftPanel.classList.add('hidden');
    toggleButton.style.backgroundColor = 'white';
    toggleButton.style.color = 'black';
  }
});
$(document).ready(function() {
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    $(link).on('click', function(event) {
      event.preventDefault();
      const page = $(this).attr('href');
      loadPage(page);
    });
  });

  function loadPage(page) {
    $.ajax({
      url: page,
      type: 'GET',
      dataType: 'html',
      success: function(data) {
        $('#rightPanel').html(data);
      },
      error: function(xhr, status, error) {
        console.error('Error loading page:', error);
      }
    });
  }
});
