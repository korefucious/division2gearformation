const namedWeaponButtons = document.getElementsByClassName("namedWeaponButton");

namedWeaponButtons.addEventListener('click', (event) => {
    if(namedWeaponButtons.className === "assaultRifles") {
        const namedWeaponTables = document.getElementsByClassName("namedWeapons");
        namedWeaponTables.assaultRifles.style = "display: block"
    } //close if statement
}); //closes namedweaponbutton function