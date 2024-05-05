var isMenuOpen = false;
        function toggleMenu() {
            var menu = document.getElementById("menuSideBar");
            if (!isMenuOpen) {
                menu.style.left = "0";
                isMenuOpen = true;
            } else {
                menu.style.left = "-30%";
                isMenuOpen = false;
            }
        }