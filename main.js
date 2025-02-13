// Đợi 15 giây trước khi hiển thị heart animation và ẩn phần GIF & tiêu đề
setTimeout(function() {
    // Ẩn phần content (GIF và tiêu đề)
    document.getElementById('content').style.display = 'none';

    // Hiển thị heart animation
    document.getElementById('heart').style.display = 'block';
}, 15000); 
