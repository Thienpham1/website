function showSection(sectionId) {
    // 1. Get all sections
    const sections = document.querySelectorAll('section');

    // 2. Remove 'active' class from everyone
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 3. Add 'active' class to the clicked section
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
    }
}

