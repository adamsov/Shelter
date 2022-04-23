const carousel = async () => {
    const leftButton = document.querySelector(".button-page-number__left");
    const rightButton = document.querySelector(".button-page-number__right");

    const pets = await fetch('../../assets/data/pets.json').then(res => res.json());
}

carousel();