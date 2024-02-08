 // Script para tornar o menu responsivo
 const menuIcon = document.querySelector('.menu-icon');
 const menuLinks = document.querySelector('.menu-links');

 menuIcon.addEventListener('click', () => {
     menuLinks.style.display = (menuLinks.style.display === 'flex') ? 'none' : 'flex';
 });

 function expandDetails(element) {
    element.classList.toggle("expanded");
    const details = element.querySelector(".details");
    details.style.display = details.style.display === "block" ? "none" : "block";
}
function expandDetails(name, crp, skills, whatsappLink, photoPath) {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = `
        <div class="details" onclick="event.stopPropagation()">
            <span class="close-button" onclick="closeDetails()">X</span>
            <img src="${photoPath}" alt="Foto do Profissional">
            <div class="details-content">
                <h3>${name}</h3>
                <p>CRP: ${crp}</p>
                <p>Habilidades: ${skills}</p>
                <p>Entre em contato pelo WhatsApp: <a href="${whatsappLink}" target="_blank">Link WhatsApp</a></p>
            </div>
        </div>
    `;
    detailsContainer.style.display = 'flex';
}

function closeDetails() {
    document.getElementById('details-container').style.display = 'none';
}

