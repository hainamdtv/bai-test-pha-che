const questionBank2 = [
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
