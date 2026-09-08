const questionBank1 = [
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
];
