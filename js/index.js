const namedWeaponButtons = document.getElementsByClassName("namedWeaponButton");

namedWeaponButtons.addEventListener('click', (event) => {
        const namedWeaponTables = document.getElementsByClassName("namedWeapons");
        namedWeaponTables.style.display = "block"
    } //close if statement
}); //closes namedweaponbutton function