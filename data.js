const realQuestions = [
    { question: "Tỷ lệ chuẩn của một ly Cà phê Sữa Đá (theo chuẩn truyền thống) là?", options: ["30ml cafe, 20ml sữa đặc", "30ml cafe, 30ml sữa đặc", "40ml cafe, 20ml sữa đặc", "40ml cafe, 30ml sữa đặc"], answer: "30ml cafe, 20ml sữa đặc" },
    { question: "Nhiệt độ nước lý tưởng để hãm trà đen (Black tea) là bao nhiêu?", options: ["80 - 85°C", "90 - 95°C", "100°C", "70 - 75°C"], answer: "90 - 95°C" },
    { question: "Thành phần chính của món Mojito truyền thống gồm những gì?", options: ["Rum, bạc hà, chanh, soda, đường", "Vodka, bạc hà, chanh, soda", "Gin, bạc hà, chanh, đường", "Tequila, bạc hà, soda, chanh"], answer: "Rum, bạc hà, chanh, soda, đường" },
    { question: "Trong pha chế, 1 oz (ounce) chất lỏng tương đương với bao nhiêu ml?", options: ["15 ml", "20 ml", "30 ml", "45 ml"], answer: "30 ml" },
    { question: "Thức uống Macchiato kiểu Ý truyền thống có thành phần chính là gì?", options: ["Espresso và một lớp bọt sữa nhỏ", "Espresso và rất nhiều sữa tươi nóng", "Espresso, bột cacao và kem", "Sữa đặc, sữa tươi và 1 shot Espresso"], answer: "Espresso và một lớp bọt sữa nhỏ" },
    { question: "Kỹ thuật 'Muddle' trong pha chế có nghĩa là gì?", options: ["Lắc mạnh hỗn hợp với đá", "Khuấy nhẹ nhàng bằng thìa dài", "Dằm các nguyên liệu (trái cây, lá thơm) để chiết xuất hương vị", "Đổ từ ly này sang ly khác nhiều lần"], answer: "Dằm các nguyên liệu (trái cây, lá thơm) để chiết xuất hương vị" },
    { question: "Latte và Cappuccino khác nhau cơ bản ở điểm nào?", options: ["Latte dùng sữa đặc, Cappuccino dùng sữa tươi", "Latte có lớp bọt sữa mỏng hơn Cappuccino", "Cappuccino có thêm chocolate, Latte thì không", "Latte dùng hạt Arabica, Cappuccino dùng Robusta"], answer: "Latte có lớp bọt sữa mỏng hơn Cappuccino" },
    { question: "Đường nước (Sugar syrup) tiêu chuẩn thường được nấu theo tỷ lệ Đường : Nước là bao nhiêu?", options: ["1 : 1", "2 : 1", "1 : 2", "1 : 1.5"], answer: "1 : 1" },
    { question: "Ly Highball thường được sử dụng để phục vụ loại đồ uống nào?", options: ["Cocktail mạnh không đá", "Đồ uống có đá và nhiều dung môi (soda, nước trái cây)", "Rượu vang đỏ", "Espresso nóng"], answer: "Đồ uống có đá và nhiều dung môi (soda, nước trái cây)" },
    { question: "Để bọt sữa (milk foam) mịn màng và bóng khi xịt Steam, nhiệt độ sữa không nên vượt quá bao nhiêu?", options: ["50 - 55°C", "60 - 65°C", "75 - 80°C", "90°C"], answer: "60 - 65°C" }
];

const questionBank = [];
// Tạo dữ liệu giả lập 35 câu hỏi để hệ thống có thể bốc ngẫu nhiên 30 câu
// Bạn hãy thay thế mảng này bằng 35+ câu hỏi thật của menu nhà hàng nhé!
for (let i = 0; i < 35; i++) {
    let q = realQuestions[i % realQuestions.length];
    questionBank.push({
        id: i + 1,
        question: `[Mẫu ${i+1}] ` + q.question,
        options: [...q.options],
        answer: q.answer
    });
}
