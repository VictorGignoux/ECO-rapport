function selectRadar(index) {
    const img = document.getElementById('tp1-radar-img');
    img.setAttribute('src', `./img/radars/radar${index}.png`);

    const current = document.querySelector('.radar-btn-current');
    current.classList.remove('radar-btn-current');

    const new_current = document.getElementById(`radar-btn-${index}`);
    new_current.classList.add('radar-btn-current');
}