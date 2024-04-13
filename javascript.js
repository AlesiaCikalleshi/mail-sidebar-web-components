function handleItemClick(event) {
    var menuItems = document.querySelectorAll('.menu__list .tooltip');
    menuItems.forEach(function(item) {
        item.classList.remove('active');
    });

    var clickedMenuItem = event.target.closest('.tooltip');
    clickedMenuItem.classList.add('active');
}