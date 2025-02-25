document.addEventListener('DOMContentLoaded', () => {
    const exerciseTemplate = document.querySelector('.exercise-template');
    const socialSkillTemplate = document.querySelector('.template[onclick*="socialSkill"]');
    const exerciseSubTemplates = document.getElementById('exerciseSubTemplates');
    const socialSkillSubTemplates = document.getElementById('socialSkillSubTemplates');
    const exerciseModal = document.getElementById('exerciseModal');
    const closeModal = document.querySelector('.close-modal');

    // Show sub-templates when Exercise template is clicked
    exerciseTemplate.addEventListener('click', () => {
        document.querySelector('.container').style.display = 'none';
        exerciseSubTemplates.style.display = 'flex';
        socialSkillSubTemplates.style.display = 'none';
    });

    // Show sub-templates when Social Skill template is clicked
    socialSkillTemplate.addEventListener('click', () => {
        document.querySelector('.container').style.display = 'none';
        socialSkillSubTemplates.style.display = 'flex';
        exerciseSubTemplates.style.display = 'none';
    });

    // Close modal when the close button is clicked
    closeModal.addEventListener('click', () => {
        exerciseModal.style.display = 'none';
    });

    // Close modal when clicking outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === exerciseModal) {
            exerciseModal.style.display = 'none';
        }
    });
});

// Function to show an image in the modal
function showImage(imagePath) {
    const exerciseImage = document.getElementById('exerciseImage');
    exerciseImage.src = imagePath;
    document.getElementById('exerciseModal').style.display = 'block';
    console.log(imagePath); // Debugging: Check if the correct path is logged
}