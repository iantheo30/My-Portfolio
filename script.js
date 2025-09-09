function showDetails(title, description) {
      document.getElementById('modalTitle').innerText = title;
      document.getElementById('modalDescription').innerText = description;
      document.getElementById('projectModal').classList.add('show');
    }

    function closeModal() {
      document.getElementById('projectModal').classList.remove('show');
    }

    function filterProjects(type) {
      document.getElementById('awarded').style.display = type === 'awarded' ? 'grid' : 'none';
      document.getElementById('completed').style.display = type === 'completed' ? 'grid' : 'none';
      const buttons = document.querySelectorAll('.tab-btn');
      buttons.forEach(btn => btn.classList.remove('active'));
      if (type === 'awarded') buttons[0].classList.add('active');
      else buttons[1].classList.add('active');
    }

    window.onload = () => {
      closeModal();
      window.addEventListener('click', function(event) {
        const modal = document.getElementById('projectModal');
        if (event.target === modal) closeModal();
      });
    }

    function showDetails(title, description, imagePath = '') {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;

    const modalImage = document.getElementById('modalImage');
    if (imagePath) {
      modalImage.src = imagePath;
      modalImage.style.display = 'block';
    } else {
      modalImage.style.display = 'none';
    }

    document.getElementById('projectModal').classList.add('show');
  }

  function closeModal() {
    document.getElementById('projectModal').classList.remove('show');
  }

  window.onload = () => {
    closeModal();
    window.addEventListener('click', function(event) {
      const modal = document.getElementById('projectModal');
      if (event.target === modal) closeModal();
    });
  };