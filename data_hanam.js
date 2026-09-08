const hanamBank = [
    // Nâu Phố Núi Bản Đá
    { question: "Món Nâu Phố Núi (Bản Đá) sử dụng loại cốc nào để phục vụ?", options: ["Cốc thủy tinh", "Cốc sứ", "Ly nhựa", "Cốc giấy"], answer: "Cốc thủy tinh" },
    { question: "Lượng sữa đặc cho vào đáy cốc khi pha Nâu Phố Núi (Bản Đá) là bao nhiêu?", options: ["15g", "20g", "25g", "30g"], answer: "20g" },
    { question: "Lượng đá viên chuẩn cho món Nâu Phố Núi (Bản Đá) là?", options: ["80g", "100g", "120g", "150g"], answer: "100g" },
    { question: "Để chiết xuất cốt cafe cho Nâu Phố Núi, cần sử dụng bao nhiêu gram bột cafe nâu?", options: ["13g", "15g", "18g", "20g"], answer: "18g" },
    { question: "Chiết xuất cafe cho Nâu Phố Núi (Bản Đá) cần bấm nút số mấy và thời gian bao lâu?", options: ["Nút 2 (33-36s)", "Nút 3 (36-40s)", "Nút 4 (55-65s)", "Nút 1 (20-25s)"], answer: "Nút 2 (33-36s)" },
    { question: "Lượng cốt cafe thành phẩm thu được khi pha Nâu Phố Núi (Bản Đá) là bao nhiêu?", options: ["30g", "40g", "45g", "50g"], answer: "30g" },
    
    // Nâu Phố Núi Bản Nóng
    { question: "Pha Nâu Phố Núi (Bản Nóng) sử dụng nút chiết xuất số mấy trên máy?", options: ["Nút 1", "Nút 2", "Nút 3", "Nút 4"], answer: "Nút 4" },
    { question: "Thời gian chiết xuất cafe Nâu Phố Núi (Bản Nóng) kéo dài trong khoảng?", options: ["33-36s", "36-40s", "45-50s", "55-65s"], answer: "55-65s" },
    { question: "Cốt thành phẩm của Nâu Phố Núi (Bản Nóng) là bao nhiêu gram?", options: ["30g", "35g", "40g", "45g"], answer: "45g" },
    
    // Đen Phố Núi Bản Đá
    { question: "Đen Phố Núi (Bản Đá) dùng bột cafe gì và lượng bao nhiêu?", options: ["18g cafe nâu", "18g cafe đen", "13g cafe Ý", "15g cafe đen"], answer: "18g cafe đen" },
    { question: "Bấm nút số mấy để chiết xuất cốt cho Đen Phố Núi (Bản Đá)?", options: ["Nút 1", "Nút 2", "Nút 3", "Nút 4"], answer: "Nút 3" },
    { question: "Lượng đường nước thêm vào Đen Phố Núi (Bản Đá) là bao nhiêu?", options: ["5ml", "10ml", "15ml", "20ml"], answer: "5ml" },
    { question: "Thời gian chiết xuất của Đen Phố Núi (Bản Đá) là?", options: ["26-30s", "33-36s", "36-40s", "55-60s"], answer: "36-40s" },
    
    // Đen Phố Núi Bản Nóng
    { question: "Đen Phố Núi (Bản Nóng) được phục vụ kèm với gì?", options: ["Đường nước", "1 thanh đường que", "Sữa đặc", "Sữa tươi"], answer: "1 thanh đường que" },
    { question: "Lượng cốt cafe thành phẩm của Đen Phố Núi (Bản Nóng) là?", options: ["30g", "40g", "45g", "50g"], answer: "45g" },
    
    // Bạc Xỉu Truyền Thống
    { question: "Lượng Rich và Whip dùng trong Bạc Xỉu Truyền Thống (Bản Đá) là bao nhiêu?", options: ["10ml Rich + 10ml Whip", "20ml Rich + 10ml Whip", "10ml Rich + 20ml Whip", "15ml Rich + 15ml Whip"], answer: "10ml Rich + 10ml Whip" },
    { question: "Bạc Xỉu Truyền Thống (Bản Đá) sử dụng bao nhiêu ml sữa tươi?", options: ["20ml", "30ml", "40ml", "50ml"], answer: "30ml" },
    { question: "Lượng đá viên chuẩn cho Bạc Xỉu Truyền Thống (Bản Đá) là?", options: ["100g", "120g", "150g", "180g"], answer: "120g" },
    { question: "Bạc Xỉu Truyền Thống sử dụng loại bột cafe nào?", options: ["Cafe đen", "Cafe Ý", "Cafe nâu", "Cafe muối"], answer: "Cafe nâu" },
    { question: "Bạc Xỉu Truyền Thống (Bản Nóng) sử dụng bao nhiêu ml sữa tươi để sục nóng?", options: ["150ml", "180ml", "200ml", "220ml"], answer: "180ml" },
    
    // Bạc Xỉu Sữa Hạt
    { question: "Bạc Xỉu Sữa Hạt (Bản Đá) sử dụng lượng sữa đặc và sữa hạt lần lượt là?", options: ["20ml sữa đặc + 50ml sữa hạt", "30ml sữa đặc + 50ml sữa hạt", "30ml sữa đặc + 40ml sữa hạt", "20ml sữa đặc + 60ml sữa hạt"], answer: "30ml sữa đặc + 50ml sữa hạt" },
    { question: "Bạc Xỉu Sữa Hạt chiết xuất từ loại bột cafe nào?", options: ["Cafe nâu (18g)", "Cafe đen (18g)", "Cafe Ý (13g)", "Cafe Ý (18g)"], answer: "Cafe Ý (13g)" },
    { question: "Cốt cafe cho Bạc Xỉu Sữa Hạt lấy ở Nút số mấy?", options: ["Nút 1", "Nút 2", "Nút 3", "Nút 4"], answer: "Nút 2" },
    { question: "Bạc Xỉu Sữa Hạt (Bản Nóng) sử dụng lượng sữa hạt sục nóng là?", options: ["150ml", "180ml", "200ml", "250ml"], answer: "180ml" },
    
    // Cà Phê Muối
    { question: "Cà Phê Muối có được phục vụ dưới dạng Nóng không?", options: ["Có, luôn làm nóng", "Chỉ làm đá", "Tùy yêu cầu khách", "Chỉ phục vụ mang đi"], answer: "Chỉ làm đá" },
    { question: "Lượng cốt cafe muối dùng trong một ly Cà Phê Muối là?", options: ["30ml", "40ml", "50ml", "60ml"], answer: "40ml" },
    { question: "Cà Phê Muối sử dụng lượng sữa đặc là bao nhiêu?", options: ["10ml", "15ml", "20ml", "25ml"], answer: "15ml" },
    { question: "Để trang trí Cà Phê Muối, cần rắc thêm gì lên trên lớp kem mặn?", options: ["Bột matcha", "Bột hạt dẻ", "Bột cacao", "Dừa sấy khô"], answer: "Bột cacao" },
    { question: "Lượng kem mặn được rót lên trên ly Cà Phê Muối là bao nhiêu?", options: ["30g", "40g", "50g", "60g"], answer: "40g" },
    
    // Nâu / Đen Sài Gòn
    { question: "Nâu Sài Gòn sử dụng hỗn hợp nền gồm những thành phần nào?", options: ["30ml sữa đặc + 20ml Rich + 10ml sữa tươi", "20ml sữa đặc + 10ml Rich + 20ml Whip", "30ml sữa đặc + 10ml Rich + 10ml sữa tươi", "20ml sữa đặc + 20ml sữa tươi"], answer: "30ml sữa đặc + 20ml Rich + 10ml sữa tươi" },
    { question: "Cốt cafe dùng cho Nâu Sài Gòn được chiết xuất từ nút mấy?", options: ["Nút 1", "Nút 2", "Nút 3", "Nút 4"], answer: "Nút 2" },
    { question: "Đen Sài Gòn cần lắc (Shake) mấy lần trước khi đổ ra cốc?", options: ["Không cần lắc", "Lắc 2 lần", "Lắc 3 lần", "Lắc 5 lần"], answer: "Lắc 3 lần" },
    { question: "Lượng đường nước cho vào Đen Sài Gòn là?", options: ["5ml", "10ml", "15ml", "20ml"], answer: "10ml" },
    { question: "Cốt cafe dùng cho Đen Sài Gòn chiết xuất từ loại hạt nào và bấm nút mấy?", options: ["18g cafe nâu (Nút 2)", "18g cafe đen (Nút 3)", "13g cafe Ý (Nút 2)", "18g cafe đen (Nút 4)"], answer: "18g cafe đen (Nút 3)" },
    
    // Capucino / Latte
    { question: "Capucino và Latte (Nóng) sử dụng loại bột cafe nào?", options: ["13g bột cafe Ý", "18g bột cafe đen", "18g bột cafe nâu", "15g bột cafe Ý"], answer: "13g bột cafe Ý" },
    { question: "Lượng sữa tươi sục nóng cho món Capucino / Latte là bao nhiêu?", options: ["150ml", "180ml", "200ml", "220ml"], answer: "200ml" },
    { question: "Kỹ thuật rót sữa của Latte khác Capucino như thế nào?", options: ["Latte múc bọt đổ hình, Capucino đổ trực tiếp", "Latte đổ nghệ thuật trực tiếp, Capucino dùng thìa múc bọt đổ hình", "Cả hai đều rót trực tiếp", "Cả hai đều múc bọt đổ hình"], answer: "Latte đổ nghệ thuật trực tiếp, Capucino dùng thìa múc bọt đổ hình" },
    
    // Americano
    { question: "Americano (Đá) sử dụng lượng nước lọc là bao nhiêu?", options: ["100ml", "120ml", "150ml", "180ml"], answer: "120ml" },
    { question: "Americano (Nóng) sử dụng lượng nước nóng là bao nhiêu?", options: ["100ml", "120ml", "150ml", "180ml"], answer: "150ml" },
    { question: "Cốt cafe Ý cho Americano được lấy bao nhiêu gram?", options: ["20g", "30g", "40g", "45g"], answer: "30g" },
    
    // Sen Huế Signature
    { question: "Lượng nước dừa cho Sen Huế Signature (Size M) là?", options: ["100ml", "120ml", "150ml", "200ml"], answer: "150ml" },
    { question: "Lượng nước cốt sen cho Sen Huế Signature (Size L) là bao nhiêu?", options: ["40ml", "50ml", "60ml", "70ml"], answer: "60ml" },
    { question: "Topping trang trí Sen Huế Signature KHÔNG bao gồm thành phần nào sau đây?", options: ["Hạt sen", "Dừa sợi", "Nhãn", "Thạch dừa"], answer: "Thạch dừa" },
    { question: "Số lượng quả nhãn dùng cho Sen Huế Signature (Size M) là?", options: ["3 quả", "4 quả", "5 quả", "6 quả"], answer: "4 quả" },
    { question: "Lượng đá viên cho món Sen Huế Signature là?", options: ["100g", "120g", "150g", "180g"], answer: "150g" },
    
    // Lục Trà Sữa
    { question: "Lượng Lục trà dùng cho Lục Trà Sữa (Size L) là?", options: ["120ml", "150ml", "180ml", "200ml"], answer: "150ml" },
    { question: "Đường dùng cho Lục Trà Sữa (Size M và L) là bao nhiêu ml?", options: ["10ml", "15ml", "20ml", "30ml"], answer: "10ml" },
    { question: "Thạch dừa dùng cho Lục Trà Sữa là bao nhiêu gram?", options: ["30g", "40g", "50g", "60g"], answer: "50g" },
    { question: "Lượng đá viên chuẩn cho Lục Trà Sữa là?", options: ["150g", "180g", "200g", "250g"], answer: "180g" },
    { question: "Lượng sữa nước cho Lục Trà Sữa (Size M) là?", options: ["10ml", "20ml", "30ml", "40ml"], answer: "20ml" },
    
    // Lục Xoài Sữa
    { question: "Mứt xoài dùng cho Lục Xoài Sữa (Size M) là bao nhiêu gram?", options: ["20g", "25g", "30g", "35g"], answer: "25g" },
    { question: "Topping của Lục Xoài Sữa bao gồm những loại thạch nào?", options: ["Chỉ thạch dừa", "Chỉ pudding xoài", "Thạch hồng đào", "Pudding xoài và Thạch dừa"], answer: "Pudding xoài và Thạch dừa" },
    { question: "Lượng sữa tươi cho Lục Xoài Sữa (Size L) là?", options: ["30ml", "40ml", "50ml", "60ml"], answer: "50ml" },
    { question: "Lượng đá viên cho Lục Xoài Sữa (Size M) là?", options: ["120g", "150g", "180g", "200g"], answer: "150g" },
    { question: "Lục Xoài Sữa có sử dụng đường nước ngoài mứt xoài không?", options: ["Có, thêm 10ml đường", "Có, thêm 5ml đường", "Không, chỉ dùng mứt và sữa", "Tùy khách yêu cầu"], answer: "Không, chỉ dùng mứt và sữa" },
    
    // Trà Sữa Đào Hồng
    { question: "Lượng Hồng trà dùng cho Trà Sữa Đào Hồng (Size M) là bao nhiêu?", options: ["50ml", "60ml", "70ml", "80ml"], answer: "60ml" },
    { question: "Mứt đào hồng dùng cho Trà Sữa Đào Hồng là bao nhiêu gram?", options: ["15g", "20g", "25g", "30g"], answer: "20g" },
    { question: "Trà Sữa Đào Hồng (Size L) dùng bao nhiêu ml sữa đặc?", options: ["15ml", "20ml", "25ml", "30ml"], answer: "20ml" },
    { question: "Lượng đá viên cho Trà Sữa Đào Hồng (Size M) là?", options: ["120g", "140g", "150g", "180g"], answer: "140g" },
    { question: "Lượng thạch dừa cho Trà Sữa Đào Hồng (Size L) là?", options: ["40g", "50g", "60g", "70g"], answer: "50g" },
    
    // Nếp Hạt Dẻ
    { question: "Nếp Hạt Dẻ sử dụng loại trà nào làm nền?", options: ["Hồng trà", "Lục trà", "Trà gạo", "Trà ô long"], answer: "Lục trà" },
    { question: "Lượng lá nếp dùng cho món Nếp Hạt Dẻ (Size L) là?", options: ["10ml", "15ml", "20ml", "25ml"], answer: "15ml" },
    { question: "Nếp Hạt Dẻ (Size M) dùng lượng Lục trà là?", options: ["100ml", "120ml", "150ml", "180ml"], answer: "120ml" },
    { question: "Kem hạt dẻ được phủ lên trên Nếp Hạt Dẻ là bao nhiêu gram?", options: ["30g", "40g", "50g", "60g"], answer: "40g" },
    { question: "Lượng đường nước cho vào Nếp Hạt Dẻ là?", options: ["Không dùng đường", "5ml", "10ml", "15ml"], answer: "10ml" },
    
    // Hồng Trà Hạt Dẻ
    { question: "Hồng Trà Hạt Dẻ (Size L) dùng bao nhiêu Hồng trà?", options: ["60ml", "70ml", "80ml", "90ml"], answer: "70ml" },
    { question: "Hồng Trà Hạt Dẻ (Size M) dùng bao nhiêu sữa nước?", options: ["10ml", "15ml", "20ml", "30ml"], answer: "20ml" },
    { question: "Topping của Hồng Trà Hạt Dẻ bao gồm?", options: ["Chỉ thạch dừa", "Chỉ kem hạt dẻ", "Thạch dừa và Kem hạt dẻ", "Thạch dừa và Vụn hạt dẻ"], answer: "Thạch dừa và Kem hạt dẻ" },
    { question: "Lượng sữa đặc cho Hồng Trà Hạt Dẻ (Size L) là?", options: ["15ml", "20ml", "25ml", "30ml"], answer: "20ml" },
    { question: "Lượng đá viên cho Hồng Trà Hạt Dẻ (Size L) là?", options: ["150g", "160g", "180g", "200g"], answer: "180g" },

    // Trà Sữa Gạo
    { question: "Lượng Trà sữa gạo dùng cho món Trà Sữa Gạo (Size M) là?", options: ["150ml", "180ml", "200ml", "250ml"], answer: "200ml" },
    { question: "Lượng Trà sữa gạo dùng cho món Trà Sữa Gạo (Size L) là?", options: ["200ml", "250ml", "280ml", "300ml"], answer: "250ml" },
    { question: "Trà Sữa Gạo có dùng thêm sữa tươi không?", options: ["Có, thêm 30ml", "Có, thêm 50ml", "Không, chỉ dùng cốt trà sữa gạo chuẩn bị sẵn", "Tùy yêu cầu khách"], answer: "Không, chỉ dùng cốt trà sữa gạo chuẩn bị sẵn" },
    { question: "Lượng Thạch dừa cho Trà Sữa Gạo (Size M) là?", options: ["30g", "40g", "50g", "60g"], answer: "40g" },
    
    // Trà Sữa Gạo Hạt Dẻ
    { question: "Lượng Trà sữa gạo cho món Trà Sữa Gạo Hạt Dẻ (Size L) là bao nhiêu?", options: ["150ml", "200ml", "250ml", "300ml"], answer: "200ml" },
    { question: "Tại sao Trà Sữa Gạo Hạt Dẻ lại dùng ít cốt trà gạo hơn so với Trà Sữa Gạo nguyên bản?", options: ["Do lỗi công thức", "Do đã có kem hạt dẻ chiếm thể tích", "Để giảm độ ngọt", "Để thêm nhiều đá hơn"], answer: "Do đã có kem hạt dẻ chiếm thể tích" },
    { question: "Topping của Trà Sữa Gạo Hạt Dẻ gồm những gì?", options: ["Chỉ kem hạt dẻ", "Thạch dừa và Thạch phô mai", "Thạch dừa và Kem hạt dẻ", "Pudding xoài và Kem hạt dẻ"], answer: "Thạch dừa và Kem hạt dẻ" },
    
    // Trà Sữa Gạo Pudding Phô Mai
    { question: "Lượng Thạch phô mai dùng cho Trà Sữa Gạo Pudding Phô Mai là?", options: ["50g", "60g", "70g", "80g"], answer: "70g" },
    { question: "Trà Sữa Gạo Pudding Phô Mai (Size M) dùng bao nhiêu cốt trà sữa gạo?", options: ["100ml", "150ml", "200ml", "250ml"], answer: "150ml" },
    { question: "Lượng đá viên cho Trà Sữa Gạo Pudding Phô Mai (Size M) là?", options: ["100g", "120g", "150g", "180g"], answer: "150g" },
    
    // Bơ Dừa Non
    { question: "Hỗn hợp đáy cốc của Bơ Dừa Non KHÔNG bao gồm thành phần nào?", options: ["35ml cốt dừa", "15ml đường", "10ml whipping", "20g sữa đặc"], answer: "20g sữa đặc" },
    { question: "Thành phần nước dùng để xay cối Bơ Dừa Non gồm những gì?", options: ["50ml nước lọc", "30ml nước lọc", "70ml nước lọc", "Không dùng nước lọc"], answer: "50ml nước lọc" },
    { question: "Lượng siro lá nếp dùng khi xay Bơ Dừa Non là bao nhiêu?", options: ["5ml", "10ml", "15ml", "20ml"], answer: "10ml" },
    { question: "Bơ Dừa Non được rắc loại hạt nào lên trên để trang trí?", options: ["Hạt dẻ", "Đậu phộng", "Vụn điều (3g)", "Dừa khô (5g)"], answer: "Vụn điều (3g)" },
    { question: "Lượng sữa tươi xay kèm trong cối Bơ Dừa Non là?", options: ["20ml", "30ml", "40ml", "50ml"], answer: "30ml" },
    
    // Kem Bơ
    { question: "Sinh tố nền của món Kem Bơ xay với bao nhiêu gram đá viên?", options: ["20g", "30g", "40g", "50g"], answer: "30g" },
    { question: "Kem dừa đặt lên trên cốc Kem Bơ có khối lượng là bao nhiêu?", options: ["50g (1 viên)", "80g (1 viên)", "100g (2 viên)", "120g (2 viên)"], answer: "80g (1 viên)" },
    { question: "Trang trí (decor) món Kem Bơ bằng gì?", options: ["Vụn điều", "Dừa khô (5g)", "Bột cacao", "Bột matcha"], answer: "Dừa khô (5g)" },
    { question: "Lượng sữa đặc dùng xay trong món Kem Bơ là?", options: ["10ml", "20ml", "30ml", "40ml"], answer: "20ml" },
    
    // Sinh Tố Bơ
    { question: "Sinh Tố Bơ có thêm thành phần nào xay cùng mà Bơ Dừa Non không xay cùng cối?", options: ["Sữa tươi", "Nước lọc", "Cốt dừa (35ml)", "Sữa đặc"], answer: "Cốt dừa (35ml)" },
    { question: "Lượng đường dùng để xay Sinh Tố Bơ là bao nhiêu?", options: ["10ml", "15ml", "20ml", "25ml"], answer: "15ml" },
    { question: "Đá viên dùng trong Sinh Tố Bơ là bao nhiêu gram?", options: ["30g", "50g", "70g", "100g"], answer: "30g" },
    
    // Đồ Nóng - Sữa Gừng Táo Đỏ
    { question: "Sữa Gừng Táo Đỏ sục nóng bao nhiêu ml sữa tươi?", options: ["150ml", "180ml", "200ml", "220ml"], answer: "200ml" },
    { question: "Sữa Gừng Táo Đỏ sử dụng bao nhiêu ml sốt táo đỏ?", options: ["5ml", "10ml", "15ml", "20ml"], answer: "10ml" },
    { question: "Trang trí (decor) Sữa Gừng Táo Đỏ bằng gì?", options: ["2 lát gừng, 2 táo đỏ, 2g hoa hồng", "1 lát gừng, 3 táo đỏ", "Bột quế", "Không trang trí"], answer: "2 lát gừng, 2 táo đỏ, 2g hoa hồng" },
    
    // Đồ Nóng - Lài Sữa Hạt Dẻ
    { question: "Lài Sữa Hạt Dẻ sục nóng hỗn hợp nền gồm những gì?", options: ["150ml lục trà + 20ml sữa đặc + 20g bột hạt dẻ", "150ml sữa tươi + 20g bột hạt dẻ", "100ml lục trà + 50ml sữa tươi + bột hạt dẻ", "150ml hồng trà + sữa đặc + bột hạt dẻ"], answer: "150ml lục trà + 20ml sữa đặc + 20g bột hạt dẻ" }
,
    // Đồ Nóng - Lài Sữa Hạt Dẻ & Cacao
    { question: "Lớp kem phủ trên món Lài Sữa Hạt Dẻ là bao nhiêu gram?", options: ["20g", "30g", "40g", "50g"], answer: "40g" },
    { question: "Cacao Nóng sử dụng bao nhiêu gam bột cacao?", options: ["5g", "10g", "15g", "20g"], answer: "10g" },
    { question: "Lượng sữa đặc dùng cho Cacao Nóng là?", options: ["20g", "30g", "40g", "50g"], answer: "30g" },
    { question: "Nước sôi dùng để đánh tan cacao ban đầu là bao nhiêu ml?", options: ["30ml", "40ml", "50ml", "60ml"], answer: "50ml" },
    
    // Trà Trái Cây - Lục Trà Xoài
    { question: "Nền trà dùng cho món Lục Trà Xoài là gì?", options: ["Hồng trà", "Trà gạo", "Lục trà", "Trà ô long"], answer: "Lục trà" },
    { question: "Lượng Lục trà dùng cho Lục Trà Xoài là bao nhiêu?", options: ["60ml", "80ml", "100ml", "120ml"], answer: "80ml" },
    { question: "Lục Trà Xoài có sử dụng bao nhiêu ml nước lọc?", options: ["30ml", "40ml", "50ml", "60ml"], answer: "50ml" },
    { question: "Lượng mứt xoài trong Lục Trà Xoài là?", options: ["20ml", "25ml", "30ml", "35ml"], answer: "30ml" },
    { question: "Trang trí (decor) món Lục Trà Xoài bằng gì?", options: ["Thạch dừa", "Pudding xoài", "Xoài tươi", "Thạch đào"], answer: "Xoài tươi" },
    
    // Trà Trái Cây - Trà Đào Sấu
    { question: "Trà Đào Sấu sử dụng loại nền trà nào?", options: ["Lục trà", "Hồng trà", "Trà lài", "Trà bá tước"], answer: "Lục trà" },
    { question: "Lượng nước cốt sấu dùng cho món Trà Đào Sấu là?", options: ["20ml", "30ml", "40ml", "50ml"], answer: "30ml" },
    { question: "Topping trang trí của Trà Đào Sấu KHÔNG bao gồm thành phần nào?", options: ["70g thạch atiso", "3 quả sấu", "30ml cốt atiso", "Đào miếng"], answer: "Đào miếng" },
    { question: "Cốt atiso trong Trà Đào Sấu được rót ở công đoạn nào?", options: ["Khuấy cùng trà lúc đầu", "Rót lên trên cùng sau khi đã đổ ra cốc", "Lắc cùng đá", "Bỏ vào dưới đáy cốc"], answer: "Rót lên trên cùng sau khi đã đổ ra cốc" },
    
    // Trà Trái Cây - Lục Trà Me Đác
    { question: "Lượng mứt me đác dùng cho Lục Trà Me Đác là bao nhiêu?", options: ["20ml", "25ml", "30ml", "40ml"], answer: "30ml" },
    { question: "Lục Trà Me Đác sử dụng bao nhiêu ml Lục trà?", options: ["60ml", "80ml", "100ml", "120ml"], answer: "80ml" },
    { question: "Loại thạch nào được sử dụng trong Lục Trà Me Đác?", options: ["Thạch dừa", "Thạch atiso", "Thạch hồng đào", "Thạch trà"], answer: "Thạch hồng đào" },
    
    // Trà Trái Cây - Mơ Trà
    { question: "Mơ Trà sử dụng đường hoa quả là bao nhiêu ml?", options: ["5ml", "10ml", "15ml", "Không dùng"], answer: "5ml" },
    { question: "Topping quả dùng trong món Mơ Trà là bao nhiêu gram?", options: ["20g (2 quả)", "30g (3 quả)", "40g (4 quả)", "50g (5 quả)"], answer: "30g (3 quả)" },
    { question: "Mơ Trà có sử dụng nước cốt Atiso không?", options: ["Có, rót 30ml lên trên cùng", "Có, khuấy 20ml cùng trà", "Không sử dụng", "Chỉ dùng cho size L"], answer: "Có, rót 30ml lên trên cùng" },
    
    // Trà Trái Cây - Trà Đào Cam Sả
    { question: "Trà Đào Cam Sả sử dụng loại trà nào?", options: ["Lục trà", "Hồng trà", "Trà ô long", "Trà nhài"], answer: "Hồng trà" },
    { question: "Lượng Hồng trà dùng trong Trà Đào Cam Sả là rất ít, cụ thể là bao nhiêu?", options: ["10ml", "20ml", "30ml", "40ml"], answer: "20ml" },
    { question: "Trà Đào Cam Sả dùng bao nhiêu nước sôi để pha cốt?", options: ["50ml", "70ml", "100ml", "120ml"], answer: "70ml" },
    { question: "Lượng cốt sả trong món Trà Đào Cam Sả là bao nhiêu?", options: ["20ml", "25ml", "30ml", "40ml"], answer: "30ml" },
    { question: "Siro cam đỏ dùng trong Trà Đào Cam Sả là bao nhiêu ml?", options: ["3ml", "5ml", "10ml", "15ml"], answer: "3ml" },
    { question: "Trang trí Trà Đào Cam Sả bằng gì?", options: ["50g đào (2 miếng) và 1 lát cam vàng (30g)", "30g đào và 2 lát cam vàng", "Thạch đào và 1 lát cam vàng", "Đào tươi, cam vàng và lá bạc hà"], answer: "50g đào (2 miếng) và 1 lát cam vàng (30g)" },
    
    // Trà Trái Cây - Xoài Lài Chanh Leo
    { question: "Món Xoài Lài Chanh Leo sử dụng bao nhiêu túi chanh leo (pulp)?", options: ["Nửa túi", "1 túi", "1.5 túi", "2 túi"], answer: "1 túi" },
    { question: "Lượng mứt xoài trong món Xoài Lài Chanh Leo là bao nhiêu gram?", options: ["15g", "20g", "25g", "30g"], answer: "20g" },
    { question: "Loại thạch nào được thêm vào Xoài Lài Chanh Leo?", options: ["Thạch dừa", "Thạch đào", "Thạch trà (70g)", "Thạch atiso"], answer: "Thạch trà (70g)" },
    
    // Nước Trái Cây - Dâu Tằm
    { question: "Món Dâu Tằm sử dụng bao nhiêu tép dâu?", options: ["1 tép (30ml)", "2 tép (60ml)", "3 tép (90ml)", "4 tép (120ml)"], answer: "2 tép (60ml)" },
    { question: "Món Dâu Tằm được mix thêm mứt gì để tăng hương vị?", options: ["Mứt xoài", "Mứt đào (20g)", "Mứt dâu tây", "Không mix thêm mứt"], answer: "Mứt đào (20g)" },
    { question: "Trang trí món Dâu Tằm bằng trái cây gì?", options: ["Dâu tây tươi", "Dâu tằm tươi", "Cam vàng (30g)", "Chanh vàng"], answer: "Cam vàng (30g)" },
    
    // Nước Trái Cây - Dưa Hấu & Cam Tươi
    { question: "Để làm 1 ly nước Dưa Hấu, cần ép bao nhiêu gram dưa hấu tươi?", options: ["200g", "300g", "400g", "500g"], answer: "400g" },
    { question: "Lượng đường thêm vào nước ép Dưa Hấu là?", options: ["5ml", "10ml", "15ml", "20ml"], answer: "10ml" },
    { question: "Để làm 1 ly Cam Tươi, cần vắt bao nhiêu gram cam quả?", options: ["300g", "400g", "500g", "600g"], answer: "500g" },
    { question: "Lượng đường thêm vào ly nước Cam Tươi là?", options: ["10ml", "15ml", "20ml", "25ml"], answer: "15ml" },
    
    // Nước Trái Cây - Chanh Leo Xoài
    { question: "Món Chanh Leo Xoài dùng bao nhiêu túi chanh leo?", options: ["1 túi (30ml)", "2 túi", "3 túi", "Không dùng túi, dùng cốt lỏng"], answer: "1 túi (30ml)" },
    { question: "Lượng nước lọc dùng trong Chanh Leo Xoài là?", options: ["100ml", "120ml", "150ml", "180ml"], answer: "120ml" },
    
    // Nước Trái Cây - Chanh Vàng Violet
    { question: "Chanh Vàng Violet (Đá) rót thành phần gì lên trên cùng để tạo màu?", options: ["Cốt atiso", "Cốt hoa đậu biếc (30ml)", "Siro violet", "Cốt dâu tằm"], answer: "Cốt hoa đậu biếc (30ml)" },
    { question: "Chanh Vàng Violet sử dụng bao nhiêu ml đường hoa quả?", options: ["5ml", "10ml", "15ml", "Không dùng"], answer: "5ml" },
    
    // Nước Trái Cây - Chanh Vàng Nóng
    { question: "Chanh Vàng (Nóng) sử dụng kỹ thuật pha chế nào?", options: ["Khuấy đều trực tiếp", "Lắc (Shake) bình", "Sục hơi (Steam)", "Ép chậm"], answer: "Lắc (Shake) bình" },
    { question: "Chanh Vàng (Nóng) sử dụng bao nhiêu ml nước sôi?", options: ["100ml", "120ml", "150ml", "200ml"], answer: "150ml" },
    
    // Cold Brew
    { question: "Tất cả các món Cold Brew (trừ chai đóng sẵn) đều BẮT BUỘC phải làm thao tác gì với miệng cốc?", options: ["Viền đường", "Viền muối", "Hơ lửa", "Xịt viền chanh"], answer: "Viền muối" },
    { question: "Cold Brew Dâu Tằm có được lắc (Shake) không?", options: ["Có, lắc mạnh", "Có, lắc nhẹ", "Chỉ quậy (không lắc)", "Xay nhuyễn"], answer: "Chỉ quậy (không lắc)" },
    { question: "Cold Brew Me Đác sử dụng bao nhiêu ml Cold Brew?", options: ["80ml", "100ml", "120ml", "150ml"], answer: "100ml" },
    { question: "Cold Brew Sấu Hà Nội dùng bao nhiêu quả sấu để pha chế?", options: ["2 quả", "3 quả", "4 quả", "5 quả"], answer: "3 quả" },
    { question: "Cold Brew Cam cần rót thành phần nào trước để phân tầng?", options: ["Rót Cold Brew trước", "Rót cốt cam (đã lọc rây) trước", "Trộn chung rồi rót", "Rót cam lên trên cùng"], answer: "Rót cốt cam (đã lọc rây) trước" },
    { question: "Cold Brew Cam dùng bao nhiêu ml nước cam ép?", options: ["80ml", "100ml", "120ml", "150ml"], answer: "100ml" },
    { question: "Cold Brew Mơ sử dụng mứt mơ gồm bao nhiêu quả?", options: ["2 quả", "3 quả", "4 quả", "5 quả"], answer: "3 quả" },
    { question: "Cold Brew Mơ có được lắc bằng bình Shake không?", options: ["Có, lắc đều", "Không, chỉ khuấy", "Đổ trực tiếp", "Xay với đá"], answer: "Có, lắc đều" },
    { question: "Cold Brew Chanh Vàng sử dụng mứt chanh vàng bao nhiêu ml?", options: ["5ml", "10ml", "15ml", "20ml"], answer: "10ml" },
    { question: "Cold Brew Nguyên Bản phục vụ như thế nào?", options: ["Viền muối, 100ml Cold Brew, 100g đá", "Viền đường, 120ml Cold Brew, 150g đá", "Không viền, 150ml Cold Brew, 100g đá", "Không viền, 100ml Cold Brew, không đá"], answer: "Viền muối, 100ml Cold Brew, 100g đá" },
    { question: "Một chai Cold Brew bán sẵn chứa bao nhiêu ml?", options: ["200ml", "250ml", "300ml", "330ml"], answer: "250ml" },
    
    // Món Khác - Matcha
    { question: "Bước đầu tiên để làm Matcha Sữa Hạt là gì?", options: ["Cho đá vào cốc", "Đánh tan matcha với nước sôi và sữa đặc", "Lắc matcha với sữa hạt", "Sục matcha cho nổi bọt"], answer: "Đánh tan matcha với nước sôi và sữa đặc" },
    { question: "Lượng bột matcha trong 1 túi tiêu chuẩn của cửa hàng là bao nhiêu?", options: ["2g", "3g", "5g", "10g"], answer: "3g" },
    { question: "Matcha Latte (Bản Nóng) sử dụng bao nhiêu sữa tươi để sục nóng?", options: ["150ml", "180ml", "200ml", "220ml"], answer: "180ml" },
    { question: "Matcha Kem Muối có lớp kem muối dày bao nhiêu gram?", options: ["30g", "40g", "50g", "60g"], answer: "50g" },
    { question: "Coco Matcha sử dụng topping gì đặt lên trên?", options: ["Kem hạt dẻ", "Kem mặn", "100g Kem dừa và dừa khô", "Bọt sữa tươi"], answer: "100g Kem dừa và dừa khô" },
    
    // Món Khác - Sữa Chua & Cacao
    { question: "Kem Dừa phục vụ cho khách ra ly/cốc riêng có khối lượng là bao nhiêu?", options: ["150g", "200g", "250g", "300g"], answer: "250g" },
    { question: "Sữa Chua Cafe rưới loại cà phê gì lên trên cùng?", options: ["20ml cafe đen", "20ml cafe nâu", "20ml cafe muối", "30ml Espresso"], answer: "20ml cafe muối" },
    { question: "Sữa Chua Hoa Quả có lượng hoa quả tươi là bao nhiêu gram?", options: ["100g", "150g", "200g", "250g"], answer: "200g" },
    { question: "Lượng sữa chua dẻo dùng trong Sữa Chua Dẻo Hoa Quả là bao nhiêu?", options: ["50g", "80g", "100g", "120g"], answer: "100g" },
    { question: "Cacao (Bản Đá) sử dụng bao nhiêu ml sữa tươi?", options: ["50ml", "80ml", "100ml", "120ml"], answer: "100ml" },
    { question: "Cacao (Bản Đá) sử dụng bao nhiêu gram đá viên?", options: ["100g", "120g", "150g", "180g"], answer: "180g" },
    
    // Phần Chuẩn Bị Nguyên Liệu (Prep)
    { question: "Làm Kem Mặn sử dụng bao nhiêu gram Whipping Anchor?", options: ["200g", "300g", "400g", "500g"], answer: "400g" },
    { question: "Làm Kem Mặn sử dụng bao nhiêu gram kem Base?", options: ["400g", "500g", "600g", "700g"], answer: "600g" },
    { question: "Lượng muối dùng để đánh Kem Mặn là bao nhiêu?", options: ["5g", "7g", "10g", "12g"], answer: "7g" },
    { question: "Kem Hạt Dẻ sử dụng bao nhiêu bột hạt dẻ?", options: ["50g", "80g", "100g", "120g"], answer: "100g" },
    { question: "Thạch Hồng Đào cần ủ 1 túi Atiso với bao nhiêu lít nước sôi?", options: ["1L", "1.5L", "2L", "2.5L"], answer: "2L" },
    { question: "Thời gian ủ Lục Trà tiêu chuẩn là bao nhiêu phút?", options: ["10 phút", "12 phút", "15 phút", "20 phút"], answer: "12 phút" },
    { question: "Sau khi vớt bã Lục Trà, thao tác tiếp theo là gì?", options: ["Để nguội tự nhiên", "Bảo quản tủ lạnh ngay", "Sốc lạnh với đá viên để ép cốt đạt đúng 3L", "Pha đường vào luôn"], answer: "Sốc lạnh với đá viên để ép cốt đạt đúng 3L" },
    { question: "Ủ Hồng Trà (1 túi Shan) thu về bao nhiêu ml cốt sau khi sốc đá?", options: ["500ml", "600ml", "700ml", "800ml"], answer: "700ml" },
    { question: "Khi ủ Trà Sữa Gạo, cần dầm mạnh túi trà bao nhiêu lần trước khi vớt bã?", options: ["5 lần", "10 lần", "15 lần", "20 lần"], answer: "10 lần" },
    { question: "Trộn Cốt Dừa theo tỷ lệ nào là đúng chuẩn?", options: ["1000ml cốt dừa hộp + 500ml đường nước", "500ml cốt dừa + 500ml đường nước", "1000ml cốt dừa + 250ml đường nước", "1000ml cốt dừa + 1000ml sữa tươi"], answer: "1000ml cốt dừa hộp + 500ml đường nước" },
    { question: "Cốt Sả được làm bằng cách xay 200g sả với bao nhiêu nước sôi?", options: ["400ml", "500ml", "600ml", "800ml"], answer: "600ml" },
    { question: "Thời gian xay sả làm Cốt Sả là bao lâu?", options: ["5 giây", "10 giây", "20 giây", "30 giây"], answer: "10 giây" },
    { question: "Ủ Atiso làm Cốt Atiso cần bao nhiêu nước sôi?", options: ["200ml", "300ml", "400ml", "500ml"], answer: "400ml" },
    { question: "Để cốt Atiso giữ được màu đỏ đẹp, cần sốc ngay với bao nhiêu đá viên?", options: ["400g", "500g", "600g", "800g"], answer: "600g" },
    
    // Bonus Logic
    { question: "Tổng lượng hỗn hợp Trà Sữa Gạo thu được sau khi pha chế (gồm cả đá viên làm nguội) đạt mốc bao nhiêu?", options: ["2L", "3L", "4L", "5L"], answer: "4L" },
    { question: "Nhiệt độ nước sôi tiêu chuẩn trong pha chế thường là bao nhiêu (để đánh matcha/cacao)?", options: ["70-80°C", "85-90°C", "Gần 100°C (nước sôi)", "Nước ấm 50°C"], answer: "Gần 100°C (nước sôi)" }
];

