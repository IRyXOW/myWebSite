let sidebarOpen = false; // Biến để theo dõi trạng thái của sidebar
let canCloseSidebar = false; // Biến này sẽ kiểm soát xem có thể đóng sidebar hay không

function openNav() {
    document.getElementById("mySidebar").style.width = "800px";
    document.getElementById("main").style.marginLeft = "0x";
    sidebarOpen = true; // Sidebar mở
    canCloseSidebar = false; // Khi sidebar mở ra, không thể đóng ngay


    document.getElementById("mySidebar").classList.add("sidebar-open");

    // Sau 500ms, mới cho phép đóng sidebar
    setTimeout(() => {
        canCloseSidebar = true;
    }, 50);
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    sidebarOpen = false; // Sidebar đóng
    canCloseSidebar = false; // Reset biến

    document.getElementById("mySidebar").classList.remove("sidebar-open");
}

// Kiểm tra khi click vào main
document.getElementById("main").addEventListener('click', function() {
    if (sidebarOpen && canCloseSidebar) { // Chỉ đóng sidebar khi nó đang mở và có thể đóng
        closeNav();
    }
});

