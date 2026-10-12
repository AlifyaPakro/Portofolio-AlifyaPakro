 function filterProjects(category) {
      const cards = document.querySelectorAll('.project-card');
      const buttons = document.querySelectorAll('.filter-btn');

      buttons.forEach(btn => {
        btn.classList.remove('bg-cyan-500', 'text-slate-950', 'active');
        btn.classList.add('bg-slate-800', 'text-slate-300');
      });

      event.target.classList.remove('bg-slate-800', 'text-slate-300');
      event.target.classList.add('bg-cyan-500', 'text-slate-950', 'active');

      cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }