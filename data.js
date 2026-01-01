const APP_CONFIG = {
    orgName: "KHOA HỌC TỰ DO",
    appName: "FRESCI",
    version: "3.0.1",
    imgPath: "./assets/" 
};

const EXAM_DATA = [
    {
        id: "thpt-hoa-338",
        category: "thpt",
        title: "Hóa Học - Mã đề 0338",
        subtitle: "THPT QG 2025 • Chuẩn cấu trúc Mới",
        time: 50,
        questions: [
            { id: 1, type: "choice", text: "Ở điều kiện thường, kim loại nào sau đây tồn tại ở thể lỏng?", options: ["Ag", "Hg", "Al", "Cu"] },
            { id: 2, type: "choice", text: "Trong phức chất, số liên kết σ (sigma) tạo thành giữa một phối tử với nguyên tử trung tâm được gọi là dung lượng phối trí. Cấu tạo của phức chất [Cu(OH<sub>2</sub>)<sub>6</sub>]²⁺ được cho ở hình bên. Dung lượng phối trí của mỗi phối tử H<sub>2</sub>O là:", img: "1758686909321.jpeg", options: ["2", "6", "3", "1"] },
            { id: 3, type: "choice", text: "Trong phòng thí nghiệm, dung dịch chất nào sau đây phù hợp để kiểm tra sự có mặt của ion Ca²⁺(aq)?", options: ["HCl", "NaNO<sub>3</sub>", "NaCl", "Na<sub>2</sub>CO<sub>3</sub>"] },
            { id: 4, type: "choice", text: "Phản ứng điều chế ethanol từ ethene theo phương trình hóa học C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub>O → C<sub>2</sub>H<sub>5</sub>OH là phản ứng:", img: "1758686910508.jpeg", options: ["Hydrogen hoá", "Trùng ngưng", "Ester hoá", "Hydrate hoá"] },
            { id: 5, type: "choice", text: "Từ phổ khối lượng, phân tử khối của ester X được xác định là 88. Công thức phù hợp với X là:", options: ["CH<sub>3</sub>CH<sub>2</sub>OH", "CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>", "C<sub>3</sub>H<sub>7</sub>COOH", "HCOOC<sub>2</sub>H<sub>5</sub>"] },
            { id: 6, type: "choice", text: "Tên gọi theo danh pháp thay thế của chất có công thức cấu tạo CH<sub>3</sub> – NH<sub>2</sub> là:", options: ["Methanamine", "Ethylamine", "Methylamine", "Ethanamine"] },
            { id: 7, type: "choice", text: "Trong phản ứng tách kim loại Cu từ CuSO₄ theo phương trình Zn + CuSO₄ → ZnSO₄ + Cu, phương pháp tách kim loại nào được áp dụng?", options: ["Nhiệt luyện", "Thủy luyện", "Điện phân nóng chảy", "Điện phân dung dịch"] },
            { id: 8, type: "choice", text: "Cho các phát biểu về methylamine: (a) Quỳ tím hóa đỏ. (b) Phản ứng với HCl. (c) Không phản ứng FeCl3. (d) Phản ứng Cu(OH)2. Số phát biểu đúng là:", options: ["4", "3", "2", "1"] },
            { id: 9, type: "choice", text: "Cho thế điện cực chuẩn Ag+/Ag (+0.799V) và Zn2+/Zn (-0.763V). Sức điện động chuẩn của pin Galvani được tính theo công thức nào?", img: "1758686913088.jpeg", options: ["E = Eo(+) - Eo(-)", "E = Eo(+) + Eo(-)", "E = -Eo(-) - Eo(+)", "E = Eo(-) - Eo(+)"] },
            { id: 10, type: "choice", text: "Phát biểu nào sau đây về fructose không đúng?", options: ["CTPT C6H12O6", "Phản ứng Cu(OH)2", "Là monosaccharide", "Mất màu nước bromine"] },
            { id: 11, type: "choice", text: "Cho phản ứng: H<sub>2</sub>(g) + I<sub>2</sub>(g) ⇌ 2HI(g). Biểu thức hằng số cân bằng Kc là:", options: ["A", "B", "C", "D"], img: "1758686923140.jpeg" },
            { id: 12, type: "choice", text: "Số lượng phối tử trong phức chất [Co(NH<sub>3</sub>)<sub>6</sub>]³⁺ là:", options: ["6", "7", "3", "1"] },
            { id: 13, type: "choice", text: "Có bao nhiêu carbocation trong số các tiểu phân sau?", img: "1758686927081.jpeg", options: ["3", "2", "1", "4"] },
            { id: 14, type: "choice", text: "Điền vào chỗ trống: '...(1)... là những hợp chất hữu cơ trong phân tử có nhóm hydroxy liên kết với nguyên tử carbon no'.", options: ["Ketone", "Phenol", "Aldehyde", "Alcohol"] },
            { id: 15, type: "choice", text: "Biến thiên enthalpy chuẩn của phản ứng nhiệt phân MgCO3 là bao nhiêu?", img: "1758686930984.jpeg", options: ["-100.5 kJ", "-494.0 kJ", "+494.0 kJ", "+100.5 kJ"] },
            { id: 16, type: "choice", text: "Cấu hình electron của nguyên tử Si (Z=14) ở trạng thái cơ bản là:", options: ["1s²2s²2p⁶3s²3p¹", "1s²2s²2p⁶3s³3p¹", "1s²2s²2p⁶3p²3s²", "1s²2s²2p⁶3s²3p²"] },
            { id: 17, type: "choice", text: "<b>(Câu 17-18)</b> Bảo vệ vỏ tàu biển bằng Al/Zn. Phát biểu: Al hoặc Zn đóng vai trò là cathode nên bị ăn mòn trước. Đúng hay sai?", options: ["Đúng", "Sai"] },
            { id: 18, type: "choice", text: "Có thể dùng khối kim loại Sodium (Na) thay thế Al/Zn để bảo vệ vỏ tàu không?", options: ["Được, vì Na khử mạnh hơn Fe", "Được, vì Na nhẹ", "Không, vì Na phản ứng nước", "Không, vì Na khử yếu hơn Fe"] },
            { id: 19, type: "choice", text: "Tổng hợp tơ Capron. Chọn phát biểu SAI:", img: "1758686935044.jpeg", options: ["Monomer bị mở vòng", "Là tơ bán tổng hợp", "Bền với kiềm", "Là peptide"] },
            { id: 22, type: "choice", text: "Điện phân dung dịch NaCl có màng ngăn. Chọn phát biểu đúng:", img: "1758686935847.jpeg", options: ["pH vùng cathode < 7", "Màng ngăn chống Cl2 tác dụng NaOH", "Anode thu được Na", "NaOH thu bằng phương pháp chiết"] },
            { id: 24, type: "choice", text: "Chuẩn độ FeSO4 bằng KMnO4. Kết quả thí nghiệm phù hợp giả thuyết không?", img: "1758686936810.jpeg", options: ["Dụng cụ B là pipet", "Giá trị q là 7.9", "C2 là 0.109", "Kết quả phù hợp giả thuyết"] },
            { id: 26, type: "choice", text: "Điều chế Benzoic Acid từ Toluene. Hiệu suất h% là bao nhiêu?", img: "1758686942679.jpeg", options: ["h = 60.9", "Toluene là chất oxi hóa", "Peak 1690 là O-H", "C6H5COO- là base"] },
            { id: 28, type: "input", text: "Có bao nhiêu công thức cấu tạo của aldehyde ứng với công thức phân tử C<sub>5</sub>H<sub>10</sub>O?", placeholder: "Nhập số..." },
            { id: 29, type: "input", text: "Trong phân tử peptide cho dưới đây có bao nhiêu liên kết peptide?", placeholder: "Nhập số..." },
            { id: 30, type: "input", text: "Phần trăm khối lượng carbon trong benzene là a%. Giá trị của a là bao nhiêu? (Làm tròn đến hàng phần mười)", placeholder: "Nhập giá trị..." },
            { id: 31, type: "input", text: "Tính giá trị k trong bài toán nhiệt đốt cháy khí gas G?", img: "1758686949626.jpeg", placeholder: "Nhập giá trị..." },
            { id: 32, type: "input", text: "Luyện thép từ gang. Phần trăm khối lượng carbon trong thép thu được là w%. Giá trị của w là bao nhiêu?", placeholder: "Nhập giá trị..." },
            { id: 33, type: "input", text: "Oleum Z (H2SO4.nSO3). Phần trăm khối lượng SO3 trong Z là b%. Xác định giá trị của b.", placeholder: "Nhập giá trị..." }
        ]
    },
    {
        id: "ielts-full-1",
        category: "ielts",
        title: "IELTS Academic Full Test 01",
        subtitle: "Cambridge 18 • Reading & Listening",
        time: 60,
        questions: [
            { id: 1, type: "choice", text: "The main purpose of the passage is to:", options: ["Describe a process", "Argue a point", "Compare theories", "Refute a claim"] }
        ]
    },
    {
        id: "toeic-ets-2024",
        category: "toeic",
        title: "TOEIC Listening & Reading",
        subtitle: "ETS 2024 • Test 1",
        time: 120,
        questions: [
            { id: 1, type: "choice", text: "Look at the picture. Select the best description.", options: ["(A) They are shaking hands.", "(B) They are walking together.", "(C) They are opening a door.", "(D) They are wearing hats."] }
        ]
    }
];
