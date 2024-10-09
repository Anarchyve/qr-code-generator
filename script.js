document.getElementById('generate-btn').addEventListener('click', function() {
    const url = document.getElementById('url-input').value;
    if (url.trim() === '') {
        alert('Please enter a valid URL');
        return;
    }

    // QR 코드 생성
    const qrCodeImage = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
    
    // QR 코드 이미지 설정 및 표시
    const qrImage = document.getElementById('qr-code');
    qrImage.src = qrCodeImage;
    qrImage.style.display = 'block';
    document.getElementById('size-controller').style.display = 'block';

    // 슬라이더 값으로 크기 조정
    const sizeSlider = document.getElementById('size-slider');
    sizeSlider.addEventListener('input', function() {
        const newSize = sizeSlider.value;
        qrImage.style.width = `${newSize}px`;
        qrImage.style.height = `${newSize}px`;
    });
});
