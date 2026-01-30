// QUY ME MAY XUONG
const SECURE_VAULT = {
    // Cấu hình định danh
    meta: { name: "IQO ULTRA", ver: "2026.5.0-Quantum", build: "Titanium" },
    _salt: "IQO_v2026_DELTA_OMEGA_@991#_SALT_&^%", 
    _ledger: {
        pro: [
            "d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e553",
            "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
            "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
            "1b4f0e9851971998e732078544c96b36c3d01cedf7ba82b459866163351d369a",
            "601f1889667efaebb33b8c12572835da3f027f78d2777322849d799f928a5061",
            "c400490b8b6727284897103173d6335292430582845347271913166667531776",
            "3a7bd3e2360a8b9f7a55225c57b549339739723521655074154869584288012b",
            "0719857245051996582522774780643729864239851677336595568868846175",
            "5883236355407077309990145892523275727653596774640960548177573030",
            "c911802f01201275988226071720845340026365175968254823659286450090"
        ],
        zero: [
            "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
            "1c82803375e29729841026607421160356972740924976450974577881023075",
            "532eaabd9574880dbf76b9b8cc00832c20a6ec113d682299550d7a6e0f345e25",
            "7d1a54127b222502f5b7d952d795f7c223056ef9828b61a45747444747530643",
            "ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d",
            "e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683",
            "7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451",
            "2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3",
            "1953258d415814088a8577326589344498308827725895749712758257858022",
            "1b95115277870313511746237464871485888252277443152745778278272580"
        ]
    }
};

// NOI IT THOI
const DATA_HOA_HOC = [
    { 
        type: "choice", 
        text: "Ở điều kiện thường, kim loại nào sau đây tồn tại ở thể lỏng?", 
        options: ["Ag.", "Hg.", "Al.", "Cu."], 
        correct: 1,
        explanation: "Thủy ngân (Hg) là kim loại duy nhất ở thể lỏng tại điều kiện thường và áp suất chuẩn."
    },
    { 
        type: "choice", 
        text: "Trong phức chất, số liên kết σ (sigma) tạo thành giữa một phối tử với nguyên tử trung tâm được gọi là dung lượng phối trí của phối tử đó. Cấu tạo của phức chất [Cu(OH<sub>2</sub>)<sub>6</sub>]²⁺ hay [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> được cho ở hình bên. Dung lượng phối trí của mỗi phối tử H<sub>2</sub>O trong phức chất đã cho là<br> <img src='./assets/1758686909321.jpeg' class='block-img'>", 
        options: ["2.", "6.", "3.", "1."], 
        correct: 3,
        explanation: "Mỗi phân tử nước (H₂O) sử dụng cặp electron chưa tham gia liên kết của nguyên tử Oxygen để tạo 1 liên kết phối trí với ion trung tâm Cu²⁺. Do đó dung lượng phối trí là 1."
    },
    { 
        type: "choice", 
        text: "Trong phòng thí nghiệm, dung dịch chất nào sau đây phù hợp để kiểm tra sự có mặt của ion Ca²⁺(aq)?", 
        options: ["HCl.", "NaNO<sub>3</sub>.", "NaCl.", "Na<sub>2</sub>CO<sub>3</sub>."], 
        correct: 3,
        explanation: "Ion CO₃²⁻ trong Na₂CO₃ phản ứng với Ca²⁺ tạo kết tủa trắng CaCO₃: Ca²⁺ + CO₃²⁻ → CaCO₃↓."
    },
    { 
        type: "choice", 
        text: "Phản ứng điều chế ethanol từ ethene theo phương trình hóa học C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub>O <img src='./assets/1758686910508.jpeg' class='inline-img'> C<sub>2</sub>H<sub>5</sub>OH  là phản ứng", 
        options: ["hydrogen hoá.", "trùng ngưng.", "ester hoá.", "hydrate hoá."], 
        correct: 3,
        explanation: "Phản ứng cộng nước vào anken (ethene) xúc tác acid được gọi là phản ứng hydrate hóa."
    },
    { 
        type: "choice", 
        text: "Từ phổ khối lượng, phân tử khối của ester X được xác định là 88. Công thức phù hợp với X là", 
        options: ["CH<sub>3</sub>CH<sub>2</sub>OH.", "CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>.", "C<sub>3</sub>H<sub>7</sub>COOH.", "HCOOC<sub>2</sub>H<sub>5</sub>."], 
        correct: 1,
        explanation: "CH₃COOC₂H₅ (Ethyl acetate) có M = 15 + 44 + 29 = 88. C₃H₇COOH là acid, không phải ester."
    },
    { 
        type: "choice", 
        text: "Tên gọi theo danh pháp thay thế của chất có công thức cấu tạo CH<sub>3</sub> – NH<sub>2</sub> là", 
        options: ["methanamine.", "ethylamine.", "methylamine.", "ethanamine."], 
        correct: 0,
        explanation: "Tên thay thế = Tên hydrocarbon mạch chính + amine. Mạch 1C là methane → Methanamine."
    },
    { 
        type: "choice", 
        text: "Trong phản ứng tách kim loại Cu từ CuSO₄ theo phương trình hoá học Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s), phương pháp tách kim loại nào sau đây đã được áp dụng?", 
        options: ["Nhiệt luyện.", "Thủy luyện.", "Điện phân nóng chảy.", "Điện phân dung dịch."], 
        correct: 1,
        explanation: "Dùng kim loại mạnh (Zn) đẩy kim loại yếu (Cu) ra khỏi dung dịch muối là phương pháp thủy luyện."
    },
    { 
        type: "choice", 
        text: "Cho các phát biểu sau về tính chất của methylamine: <br>(a) Methylamine làm giấy quỳ tím ẩm hóa đỏ. <br>(b) Methylamine phản ứng được với HCl trong dung dịch. <br>(c) Methylamine không phản ứng được với dung dịch FeCl<sub>3</sub> ở điều kiện thường. <br>(d) Dung dịch methylamine phản ứng được với Cu(OH)<sub>2</sub>.<br>Số phát biểu đúng là", 
        options: ["4.", "3.", "2.", "1."], 
        correct: 2,
        explanation: "(a) Sai (hóa xanh). (b) Đúng. (c) Sai (tạo kết tủa Fe(OH)₃). (d) Đúng (tạo phức màu xanh lam). Có 2 phát biểu đúng."
    },
    { 
        type: "choice", 
        text: "Cho thế điện cực chuẩn của Ag⁺/Ag và Zn<sup>2</sup>⁺/Zn lần lượt là <img src='./assets/1758686911465.jpeg' class='inline-img'> = +0,799 V và <img src='./assets/1758686912263.jpeg' class='inline-img'> = –0,763 V. Sức điện động chuẩn của pin Galvani (<img src='./assets/1758686913088.jpeg' class='inline-img'>) tạo bởi hai cặp oxi hóa – khử Ag⁺/Ag và Zn<sup>2</sup>⁺/Zn được tính theo công thức nào sau đây?", 
        options: ["<img src='./assets/1758686913947.jpeg' class='h-8'>", "<img src='./assets/1758686916401.jpeg' class='h-8'>", "<img src='./assets/1758686918561.jpeg' class='h-8'>", "<img src='./assets/1758686920897.jpeg' class='h-8'>"], 
        correct: 0,
        explanation: "E(pin) = E(cathode) - E(anode) = E(Ag+/Ag) - E(Zn2+/Zn) = 0,799 - (-0,763)."
    },
    { 
        type: "choice", 
        text: "Phát biểu nào sau đây về fructose không đúng?", 
        options: ["Fructose có công thức phân tử C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.", "Fructose phản ứng được với Cu(OH)<sub>2</sub> trong môi trường kiềm ở điều kiện thường.", "Fructose thuộc loại monosaccharide.", "Fructose làm mất màu nước bromine ở điều kiện thường."], 
        correct: 3,
        explanation: "Fructose chứa nhóm chức ketone (-CO-) nên không làm mất màu nước bromine. Đây là phản ứng dùng để phân biệt Glucose (mất màu) và Fructose."
    },
    { 
        type: "choice", 
        text: "Cho phản ứng thuận nghịch sau: H<sub>2</sub>(g) + I<sub>2</sub> (g) <img src='./assets/1758686923140.jpeg' class='inline-img'> 2HI(g). Ở trạng thái cân bằng, nồng độ (mol·L⁻¹) của H₂(g), I₂(g) và HI(g) được kí hiệu lần lượt là [H<sub>2</sub>], [I<sub>2</sub>] và [HI]. Biểu thức hằng số cân bằng Kc của phản ứng là", 
        options: ["<img src='./assets/1758686923863.jpeg' class='h-10'>", "<img src='./assets/1758686924583.jpeg' class='h-10'>", "<img src='./assets/1758686925471.jpeg' class='h-10'>", "<img src='./assets/1758686926291.jpeg' class='h-10'>"], 
        correct: 1,
        explanation: "Kc = [Sản phẩm]^hệ số / [Chất tham gia]^hệ số = [HI]² / ([H₂][I₂])."
    },
    { 
        type: "choice", 
        text: "Số lượng phối tử trong phức chất [Co(NH<sub>3</sub>)<sub> 6</sub>]<sup>3</sup>⁺ là", 
        options: ["6.", "7.", "3.", "1."], 
        correct: 0,
        explanation: "Trong công thức [Co(NH₃)₆]³⁺, số 6 chỉ số lượng nhóm NH₃ liên kết với ion trung tâm Co³⁺."
    },
    { 
        type: "choice", 
        text: "Trong các phản ứng hữu cơ thường có sự tạo thành các tiểu phân trung gian hoạt động như gốc tự do, carbanion, carbocation. Carbocation là ion mang điện tích dương trên nguyên tử carbon. Có bao nhiêu carbocation trong số các tiểu phân<br> <img src='./assets/1758686927081.jpeg' class='inline-img'>, <img src='./assets/1758686927891.jpeg' class='inline-img'>, <img src='./assets/1758686928731.jpeg' class='inline-img'>và <img src='./assets/1758686929466.jpeg' class='inline-img'>?", 
        options: ["3.", "2.", "1.", "4."], 
        correct: 1,
        explanation: "Chỉ có tiểu phân thứ 2 (CH₃+) mang điện tích dương trên C là carbocation. Các tiểu phân khác là gốc tự do hoặc carbanion."
    },
    { 
        type: "choice", 
        text: "“…(1)… là những hợp chất hữu cơ trong phân tử có nhóm hydroxy liên kết với nguyên tử carbon no”. <br>Nội dung phù hợp trong chỗ trống (1) là", 
        options: ["Ketone.", "Phenol.", "Aldehyde.", "Alcohol."], 
        correct: 3,
        explanation: "Định nghĩa chính xác của Alcohol (Ancol)."
    },
    { 
        type: "choice", 
        text: "Nhiệt tạo thành chuẩn (<img src='./assets/1758686930194.jpeg' class='inline-img'>) của MgCO<sub>3</sub>(s), MgO(s) và CO<sub>2</sub>(g) lần lượt là –1096,0 kJ·mol⁻¹; –602,0 kJ·mol⁻¹ và –393,5 kJ·mol⁻¹. <br>Biến thiên enthalpy chuẩn (<img src='./assets/1758686930984.jpeg' class='inline-img'>) của phản ứng <img src='./assets/1758686931596.jpeg' class='inline-img'> là bao nhiêu?", 
        options: ["–100,5 kJ.", "–494,0 kJ.", "+494,0 kJ.", "+100,5 kJ."], 
        correct: 3,
        explanation: "ΔrH = Tổng ΔfH(sp) - Tổng ΔfH(tg) = [(-602,0) + (-393,5)] - [-1096,0] = -995,5 + 1096,0 = +100,5 kJ."
    },
    { 
        type: "choice", 
        text: "Silicon (Si) là chất bán dẫn quan trọng, được sử dụng rộng rãi trong chế tạo các vi mạch và thiết bị điện tử. Ở trạng thái cơ bản, cấu hình electron của nguyên tử Si (số hiệu nguyên tử bằng 14) là", 
        options: ["1s²2s²2p<sup>6</sup>3s²3p¹.", "1s²2s²2p<sup>6</sup>3s³3p¹.", "1s²2s²2p<sup>6</sup>3p²3s².", "1s²2s²2p<sup>6</sup>3s²3p²."], 
        correct: 3,
        explanation: "Si (Z=14): 1s² 2s² 2p⁶ 3s² 3p²."
    },
    { 
        type: "choice", 
        text: "<b>(Câu 17-18)</b> Các công trình bằng thép (hợp kim của Fe và C) dễ bị ăn mòn điện hóa khi tiếp xúc với nước biển. Một trong số các phương pháp bảo vệ các công trình bằng thép khỏi sự ăn mòn điện hóa là gắn các khối Al (aluminium, Al), Zn (zinc, Zn) hoặc hợp kim của chúng vào phần chìm dưới nước biển của công trình đó.<br><br>Cho các phát biểu sau về ăn mòn điện hóa và phương pháp bảo vệ đối với các công trình bằng thép nêu trên: <br>(a) Các khối Al hoặc khối Zn bảo vệ thép theo phương pháp điện hóa. <br>(b) Khi thép bị ăn mòn điện hóa, iron trong thép bị oxi hoá. <br>(c) Thép bị ăn mòn điện hóa mà không cần tiếp xúc với dung dịch chất điện li. <br>(d) Khi bảo vệ thép theo phương pháp điện hóa, Al hoặc Zn đóng vai trò là cathode nên bị ăn mòn trước. <br>Số phát biểu đúng là", 
        options: ["3.", "2.", "1.", "4."], 
        correct: 1,
        explanation: "(a) Đúng. (b) Đúng. (c) Sai (cần chất điện li). (d) Sai (Al/Zn đóng vai trò Anode bị ăn mòn). Có 2 phát biểu đúng."
    },
    { 
        type: "choice", 
        text: "Cho biết thế điện cực chuẩn của Na⁺/Na và Fe²⁺/Fe lần lượt là –2,713 V và –0,440 V. Khi thảo luận về phương pháp bảo vệ các công trình bằng thép nêu trên khỏi sự ăn mòn điện hóa, một học sinh đề xuất: “Có thể sử dụng khối kim loại sodium (sodium, Na) thay thế cho các khối Al hoặc Zn để bảo vệ các công trình bằng thép đó”. Một số nhận định đồng tình và không đồng tình về đề xuất này được đưa ra như sau:<br>(1) Sử dụng khối kim loại sodium do kim loại này có tính khử mạnh hơn iron. <br>(2) Có thể sử dụng khối kim loại sodium do kim loại này và Al đều có khối lượng riêng nhỏ. <br>(3) Không thể sử dụng khối kim loại sodium do kim loại này dễ phản ứng với nước biển. <br>(4) Không thể sử dụng khối kim loại sodium do kim loại này có tính khử yếu hơn iron.<br>Nhận định đúng là", 
        options: ["nhận định (4).", "nhận định (3).", "nhận định (2).", "nhận định (1)."], 
        correct: 1,
        explanation: "Natri phản ứng rất mãnh liệt với nước (2Na + 2H2O -> 2NaOH + H2), gây nổ nguy hiểm và bị tiêu hao nhanh chóng, không thể dùng làm điện cực bảo vệ."
    },
    { 
        type: "group", 
        text: "Tơ capron là loại tơ có tính dai, độ đàn hồi và độ bóng cao, ít thấm nước và được sử dụng để dệt vải may mặc. Tơ capron được tổng hợp từ caprolactam theo phương trình hóa học sau:<br><img src='./assets/1758686935044.jpeg' class='block-img'><br>Mỗi phát biểu sau đây là Đúng hay Sai?", 
        options: ["Trong phản ứng (1), các phân tử monomer bị mở vòng.", "Tơ capron là tơ bán tổng hợp.", "Do tơ capron và tơ nylon-6,6 đều có các nhóm –CO–NH– nên hai loại tơ này đều bền với dung dịch kiềm mạnh.", "Do tơ capron có các nhóm –CO–NH– nên tơ capron là peptide."], 
        correct: [true, false, false, false],
        explanation: "1. Đúng. 2. Sai (tơ tổng hợp). 3. Sai (kém bền trong axit/kiềm vì liên kết amide dễ bị thủy phân). 4. Sai (polyamide, không gọi là peptide)."
    },
    { 
        type: "group", 
        text: "Một nhà máy sản xuất sodium hydroxide (NaOH) và chlorine (Cl<sub>2</sub>) bằng phương pháp điện phân dung dịch sodium chloride (NaCl) có màng ngăn với điện cực theo phương trình hóa học sau:<br><img src='./assets/1758686935847.jpeg' class='block-img'><br>Sodium hydroxide rắn thu được bằng cách cô đặc rồi hạ nhiệt độ dung dịch chứa NaOH sau điện phân.<br>Mỗi phát biểu sau đây là Đúng hay Sai?", 
        options: ["Trong quá trình điện phân, dung dịch ở khu vực cathode có pH < 7.", "Màng ngăn giúp ngăn phản ứng giữa sodium hydroxide và chlorine trong quá trình điện phân.", "Tại anode, khí chlorine thu được do sự oxi hóa ion chloride.", "Sodium hydroxide rắn thu được từ dung dịch chứa NaOH bằng phương pháp chiết."], 
        correct: [false, true, true, false],
        explanation: "1. Sai (sinh ra OH- nên pH > 7). 2. Đúng. 3. Đúng (2Cl- - 2e -> Cl2). 4. Sai (phương pháp kết tinh cô đặc)."
    },
    { 
        type: "group", 
        text: "Trong phòng thí nghiệm, một nhóm học sinh tìm hiểu ảnh hưởng của thời gian lưu giữ tới nồng độ FeSO₄ trong dung dịch. Giả thuyết của nhóm học sinh là: “Khi để lâu, nồng độ FeSO<sub>4</sub> trong dung dịch giảm.” <br>Nhóm học sinh chuẩn bị 250,0 mL dung dịch FeSO<sub>4</sub> (nồng độ khoảng 0,1 M) đựng trong bình kín (dán nhãn bình là Y) và tiến hành các thí nghiệm ở hai thời điểm khác nhau như sau:<br><img src='./assets/1758686936810.jpeg' class='block-img'><br>- Ngày thứ nhất: <br>Bước 1: Lấy 10,00 mL dung dịch trong bình Y cho vào bình tam giác rồi thêm tiếp 5 mL dung dịch H<sub>2</sub>SO<sub>4</sub> 2 M. <br>Bước 2: Chuẩn độ dung dịch trong bình tam giác bằng dung dịch KMnO<sub>4</sub> 2,20×10⁻<sup>2</sup> M đến khi xuất hiện màu hồng nhạt (bền trong khoảng 20 giây) thì dừng. Ghi lại thể tích dung dịch KMnO<sub>4</sub> đã dùng.<br>Lặp lại thí nghiệm chuẩn độ thêm 2 lần. Thể tích trung bình của dung dịch KMnO<sub>4</sub> sau 3 lần chuẩn độ là 10,70 mL. Nồng độ của Fe(II) xác định được là C<sub>1</sub> M.<br>- Ngày thứ tám: <br>Xác định lại hàm lượng Fe(II) của dung dịch chứa trong bình Y theo các bước tương tự như ngày thứ nhất. <br>Thể tích trung bình của dung dịch KMnO<sub>4</sub> sau 3 lần chuẩn độ là 9,92 mL. Nồng độ của Fe(II) xác định được là C<sub>2</sub> M.<br>Nồng độ dung dịch KMnO<sub>4</sub> như nhau trong các thí nghiệm chuẩn độ. Sự thay đổi nồng độ của Fe(II) (q%) được tính theo công thức:<br><img src='./assets/1758686937427.jpeg' class='inline-img'><br>Mỗi phát biểu sau đây là Đúng hay Sai?", 
        options: ["Khi chuẩn độ, dung dịch KMnO₄ được nhỏ trực tiếp vào bình tam giác từ dụng cụ kí hiệu là (B) được minh họa ở Hình 1.", "Giá trị của q là 7,9. (Kết quả các phép tính trung gian không được làm tròn, chỉ kết quả cuối cùng được làm tròn đến hàng phần mười.)", "Giá trị của C<sub>2</sub> là 0,109. (Kết quả các phép tính trung gian không được làm tròn, chỉ kết quả cuối cùng được làm tròn đến hàng phần nghìn.)", "Kết quả thu được từ các thí nghiệm phù hợp với giả thuyết ban đầu của nhóm học sinh."], 
        correct: [false, true, false, true],
        explanation: "1. Sai (KMnO4 trên buret, B là bình tam giác). 2. Đúng (q = (10.7-9.92)/10.7 * 100). 3. Sai. 4. Đúng."
    },
    { 
        type: "group", 
        text: "Trong phòng thí nghiệm, benzoic acid được điều chế từ toluene theo sơ đồ gồm hai giai đoạn được đánh số (1) và (2) như sau:<br><img src='./assets/1758686942679.jpeg' class='block-img'><br>Trong một thí nghiệm tổng hợp benzoic acid theo sơ đồ trên, từ 2,0 mL toluene (khối lượng riêng bằng 0,867 g L⁻¹) thu được 1,40 gam benzoic acid. Biết KMnO<sub>4</sub> và HCl được lấy dư. Hiệu suất của quá trình tổng hợp benzoic acid từ toluene là h%.<br>Cho biết số sóng hấp thụ đặc trưng của một số liên kết trên phổ hồng ngoại như sau:<br><img src='./assets/1758686943432.jpeg' class='block-img'><br>Mỗi phát biểu sau đây là Đúng hay Sai?", 
        options: ["Giá trị của h là 60,9. (Kết quả các phép tính trung gian không được làm tròn, chỉ kết quả cuối cùng được làm tròn đến hàng phần mười.)", "Trong phản ứng với KMnO<sub>4</sub> (aq) ở giai đoạn (1), toluene đóng vai trò là chất oxi hóa.", "Trên phổ hồng ngoại của benzoic acid, tín hiệu (peak) ở 1690 cm⁻¹ đặc trưng cho liên kết O–H.", "Trong phản ứng ở giai đoạn (2), anion C<sub>6</sub>H<sub>5</sub>COO⁻ là một base theo thuyết Brønsted – Lowry."], 
        correct: [true, false, false, true],
        explanation: "1. Đúng (Tính theo mol). 2. Sai (Toluene là chất khử). 3. Sai (1690 là C=O). 4. Đúng (nhận H+)."
    },
    { 
        type: "input", 
        text: "Có bao nhiêu công thức cấu tạo của aldehyde ứng với công thức phân tử C<sub>5</sub>H<sub>10</sub>O?", 
        placeholder: "Nhập số...", 
        correct: "4",
        explanation: "4 đồng phân: pentanal, 2-methylbutanal, 3-methylbutanal, 2,2-dimethylpropanal."
    },
    { 
        type: "input", 
        text: "Trong phân tử peptide cho dưới đây có bao nhiêu liên kết peptide?", 
        placeholder: "Nhập số...", 
        correct: "3",
        explanation: "Đếm số liên kết -CO-NH- giữa các đơn vị amino acid."
    },
    { 
        type: "input", 
        text: "Phần trăm khối lượng carbon trong benzene là a%. Giá trị của a là bao nhiêu? (Làm tròn kết quả đến hàng phần mười.)", 
        placeholder: "Nhập giá trị...", 
        correct: "92.3",
        explanation: "Benzene C₆H₆: (12*6) / 78 * 100% = 92.3%."
    },
    { 
        type: "input", 
        text: "Lượng nhiệt tỏa ra khi đốt cháy hoàn toàn 1 gam nhiên liệu (kí hiệu là Q, tính theo kJ g⁻¹) được sử dụng để đánh giá mức độ “giàu năng lượng” của nhiên liệu đó. Ở điều kiện chuẩn, giá trị Q của ethanol lỏng và một loại khí đốt G lần lượt là Q<sub>E</sub> và Q<sub>G</sub>. Cho biết: G chỉ chứa propane và butane với tỉ lệ mol tương ứng là 1: 2; nhiệt tạo thành chuẩn của các chất được cho trong bảng:<br><img src='./assets/1758686949626.jpeg' class='block-img'><br>Đặt <img src='./assets/1758686950313.jpeg' class='inline-img'>, giá trị của k bằng bao nhiêu? (Không làm tròn kết quả các phép tính trung gian, chỉ làm tròn kết quả cuối cùng đến hàng phần trăm.)", 
        placeholder: "Nhập giá trị...", 
        correct: "1.65",
        explanation: "Tính ΔH đốt cháy hỗn hợp G, chia cho khối lượng mol trung bình để ra Q_G. Tương tự tính Q_E. Lập tỉ lệ."
    },
    { 
        type: "input", 
        text: "Luyện thép từ gang là quá trình làm giảm hàm lượng carbon và một số nguyên tố khác có trong gang. Một nhà máy luyện thép sử dụng loại gang nguyên liệu trong đó carbon chiếm 4,60% về khối lượng, còn lại là iron (coi hàm lượng các nguyên tố khác không đáng kể). Khi tiến hành luyện thép, một lượng 2,88 tấn khí oxygen được thổi vào 45,0 tấn gang nguyên liệu nóng chảy để oxi hóa carbon thành CO và CO<sub>2</sub>. Hỗn hợp khí thu được chỉ gồm CO và CO<sub>2</sub> có số mol bằng nhau. Phần trăm khối lượng carbon trong thép thu được là w%. Giá trị của w là bao nhiêu? (Không làm tròn kết quả các phép tính trung gian, chỉ làm tròn kết quả cuối cùng đến hàng phần trăm.)", 
        placeholder: "Nhập giá trị...", 
        correct: "0.98",
        explanation: "Tính mol O2. Lập hệ CO/CO2. Tính lượng C đã phản ứng. Tính lượng C còn lại. Tính tổng khối lượng thép (trừ đi C đã mất). Tính %."
    },
    { 
        type: "input", 
        text: "Oleum Z (H<sub>2</sub>SO<sub>4</sub>·nSO<sub>3</sub>) được tạo thành khi cho 100 kg dung dịch H<sub>2</sub>SO<sub>4</sub> 98% hấp thụ hoàn toàn 25 kg SO<sub>3</sub>. Phần trăm khối lượng SO<sub>3</sub> trong Z là b%. Xác định giá trị của b. (Không làm tròn kết quả các phép tính trung gian, chỉ làm tròn kết quả cuối cùng đến hàng phần mười.)", 
        placeholder: "Nhập giá trị...", 
        correct: "37.1",
        explanation: "Chuyển đổi H2SO4 98% thành tương đương SO3/H2O. Tính tổng SO3 sau khi trộn. Tính % khối lượng."
    }
];

// --- PHẦN 2: DỮ LIỆU XÁC SUẤT (NGUYÊN VĂN TỪ TEXT) ---
const DATA_XAC_SUAT = [
    {
        type: "choice",
        text: "<b>Câu 3 (VD-VDC):</b> Một em bé có bộ 7 thẻ chữ, trên mỗi thẻ có ghi một chữ cái, trong đó có 2 thẻ chữ T giống nhau, một thẻ chữ H, một thẻ chữ P, một thẻ chữ C, một thẻ chữ L và một thẻ chữ S. Em bé xếp theo hàng ngang ngẫu nhiên 7 thẻ đó. Xác suất em bé xếp được dãy theo thứ tự THPTCLS là:",
        options: ["A. \\(\\frac{1}{7!}\\)", "B. \\(\\frac{2}{7!}\\)", "C. \\(\\frac{1}{7}\\)", "D. \\(\\frac{1}{2.6!}\\)"],
        correct: 1, // B
        explanation: "Số cách xếp 7 thẻ (hoán vị lặp): n(Ω) = 7!/2! (vì có 2 chữ T giống nhau). Chỉ có 1 cách xếp ra đúng chữ THPTCLS. Xác suất P = 1 / (7!/2!) = 2/7!. Đáp án B."
    },
    {
        type: "input",
        text: "<b>Câu 4 (VD-VDC):</b> Cho một đa giác đều có 24 đỉnh nội tiếp trong một đường tròn tâm O. Gọi S là tập hợp các tam giác có các đỉnh của đa giác trên. Chọn ngẫu nhiên một tam giác từ tập S, tính xác suất để chọn được tam giác cân nhưng không phải tam giác đều.",
        placeholder: "Nhập kết quả...",
        correct: "1/10", // Placeholder for logic
        explanation: "Không gian mẫu: C(3,24) = 2024. Số tam giác đều: 24/3 = 8. Số tam giác cân tại mỗi đỉnh (trừ tam giác đều): 10. Tổng số tam giác cân không đều: 24 * 10 = 240. P = 240/2024."
    },
    {
        type: "input",
        text: "<b>Câu 6 (VD-VDC):</b> Trong bộ môn Toán, thầy giáo có 40 câu hỏi khác nhau gồm 5 câu hỏi khó, 15 câu hỏi trung bình, 20 câu hỏi dễ. Một ngân hàng đề thi mỗi đề thi có 7 câu hỏi được chọn từ 40 câu hỏi đó. Tính xác suất để chọn được đề thi từ ngân hàng đề nói trên nhất thiết phải có đủ 3 loại câu hỏi khó, trung bình, dễ và số câu hỏi dễ không ít hơn 4.",
        placeholder: "Nhập kết quả...",
        correct: "0.123", // Placeholder
        explanation: "n(Ω) = C(7,40). Các trường hợp: (4 Dễ, 2 TB, 1 Khó), (4 Dễ, 1 TB, 2 Khó), (5 Dễ, 1 TB, 1 Khó). Tổng số cách chọn thuận lợi chia cho không gian mẫu."
    },
    {
        type: "input",
        text: "<b>Câu 7 (VD-VDC):</b> Vì yêu toán nên khi đặt mật khẩu cho tài khoản Facebook của mình, bạn Toàn đã dùng dãy các chữ cái \"TOANYEUTOAN” rồi thay đổi ngẫu nhiên vị trí các chữ cái này để tạo ra mật khẩu. Tính xác suất để mật khẩu đó là một dãy chữ cái mà các chữ cái nếu xuất hiện 1 lần thì không đứng cạnh nhau, đồng thời các chữ T, N giống nhau thì đứng cạnh nhau.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "Bài toán xếp chữ có điều kiện phức tạp. Sử dụng phương pháp vách ngăn và nguyên lý bù trừ."
    },
    {
        type: "input",
        text: "<b>Câu 9 (VD-VDC):</b> Có 30 tấm thẻ được đánh số từ 1 đến 30. Chọn ra ngẫu nhiên 10 thẻ. Tính xác suất để trong 10 thẻ được chọn có 5 tấm thẻ mang số lẻ, 5 tấm thẻ mang số chẵn trong đó chỉ có đúng 1 thẻ mang số chia hết cho 10.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "Số chia hết cho 10: {10, 20, 30} (3 thẻ). Số chẵn còn lại: 12 thẻ. Số lẻ: 15 thẻ. Số cách chọn: C(1,3) * C(4,12) * C(5,15)."
    },
    {
        type: "input",
        text: "<b>Câu 13 (VD-VDC):</b> Có 6 viên bi gồm 2 bi xanh, 2 bi đỏ, 2 bi vàng (các viên bi có bán kính khác nhau). Tính xác suất để khi xếp 6 viên bị trên thành một hàng ngang thì có đúng một cặp bi cùng màu xếp cạnh nhau.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "Tổng số cách xếp 6!. Trừ đi các trường hợp không có cặp nào, 2 cặp, 3 cặp..."
    },
    {
        type: "choice",
        text: "<b>Câu 14 (VD-VDC):</b> Một chữ cái được lấy ra ngẫu nhiên từ các chữ cái của từ \"ASSISTANT” và một chữ cái được lấy ngẫu nhiên từ các chữ cái của từ \"STATISTICS”. Xác suất để hai chữ cái được lấy ra giống nhau là:",
        options: ["A. \\(\\frac{13}{90}\\)", "B. \\(\\frac{1}{45}\\)", "C. \\(\\frac{19}{90}\\)", "D. \\(\\frac{1}{10}\\)"],
        correct: 2, // C
        explanation: "Đếm tần suất các chữ cái trong mỗi từ. Nhân xác suất chọn được cùng chữ (A, S, I, T). Cộng lại. Kết quả 19/90."
    },
    {
        type: "choice",
        text: "<b>Câu 15 (VD-VDC):</b> Cho tập \\(S=\\{1;2;...;20\\}\\) gồm 20 số tự nhiên từ 1 đến 20. Lấy ngẫu nhiên ba số thuộc S. Xác suất để ba số lấy được lập thành một cấp số cộng là:",
        options: ["A. \\(\\frac{7}{38}\\)", "B. \\(\\frac{1}{114}\\)", "C. \\(\\frac{5}{38}\\)", "D. \\(\\frac{3}{38}\\)"],
        correct: 3, // D
        explanation: "Ba số a, b, c lập CSC khi a+c=2b => a, c cùng chẵn hoặc cùng lẻ. Số cách chọn 2 chẵn: C(2,10). Số cách chọn 2 lẻ: C(2,10). Tổng thuận lợi: 90. P = 90/C(3,20) = 3/38."
    },
    {
        type: "input",
        text: "<b>Câu 17 (VD-VDC):</b> Một người gọi điện thoại nhưng quên mất chữ số cuối. Tính xác suất để người đó gọi đúng số điện thoại mà không phải thử quá hai lần (giả sử người này không gọi thử hai lần với cùng một số điện thoại).",
        placeholder: "Nhập kết quả...",
        correct: "1/5",
        explanation: "P = P(Đúng lần 1) + P(Sai lần 1)*P(Đúng lần 2) = 1/10 + (9/10)*(1/9) = 1/5."
    },
    {
        type: "input",
        text: "<b>Câu 21 (VD-VDC):</b> Gọi S là tập các số tự nhiên có 6 chữ số đôi một khác nhau lập được từ các chữ số 0, 1, 2, 3, 4, 5, 6. Chọn ngẫu nhiên một số trong S. Tính xác suất để số được chọn chia hết cho 3.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "Tổng các chữ số 0+1+..+6 = 21 chia hết cho 3. Cần loại bỏ 1 chữ số sao cho tổng 6 số còn lại chia hết 3. Có thể bỏ {0, 3, 6}."
    },
    {
        type: "input",
        text: "<b>Câu 22 (VD-VDC):</b> Cho tập S là tập các số tự nhiên từ 1 đến 20. Chọn ngẫu nhiên ba số từ S. Tính xác suất P để chọn được ba số có tổng là một số lẻ và không có số nào trong ba số đó chia hết cho 5.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "Loại các số chia hết cho 5 {5,10,15,20}. Còn lại 16 số. Tổng lẻ = (3 lẻ) hoặc (1 lẻ, 2 chẵn)."
    },
    {
        type: "input",
        text: "<b>Câu 23 (VD-VDC):</b> Gọi S là tập hợp các số tự nhiên gồm 6 chữ số đôi một khác nhau. Chọn ngẫu nhiên một số từ tập S. Tính xác suất để số được chọn có đúng 3 chữ số chẵn.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "Sử dụng quy tắc đếm: Chọn 3 vị trí cho số chẵn, 3 vị trí cho số lẻ, lưu ý chữ số 0."
    },
    {
        type: "choice",
        text: "<b>Câu 28 (VD-VDC):</b> Có 50 tấm thẻ đánh số từ 1 đến 50. Rút ngẫu nhiên 3 thẻ. Xác suất để tổng các số ghi trên thẻ chia hết cho 3 bằng:",
        options: ["A. \\(\\frac{769}{2450}\\)", "B. \\(\\frac{409}{1225}\\)", "C. \\(\\frac{11}{171}\\)", "D. \\(\\frac{8}{89}\\)"],
        correct: 1, // B
        explanation: "Phân loại 50 số thành 3 tập theo số dư khi chia cho 3. Tính số trường hợp tổng chia hết cho 3 (3 dư 0, 3 dư 1, 3 dư 2, hoặc 1 dư 0 + 1 dư 1 + 1 dư 2)."
    },
    {
        type: "input",
        text: "<b>Câu 30 (VD-VDC):</b> Xét tập hợp A gồm các số tự nhiên có 5 chữ số khác nhau. Chọn ngẫu nhiên một số từ A. Tính xác suất để số đó có chữ số đứng sau lớn hơn chữ số đứng trước (tính từ trái sang phải).",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "Số có các chữ số tăng dần. Với mỗi bộ 5 chữ số khác nhau chọn từ {1..9}, chỉ có duy nhất 1 cách xếp tăng dần. C(5,9) / n(A)."
    },
    {
        type: "choice",
        text: "<b>Câu 33 (VD-VDC):</b> Cho A là tập hợp các số tự nhiên có 7 chữ số. Lấy một số bất kì của tập A. Xác suất để lấy được số lẻ và chia hết cho 9 là:",
        options: ["A. \\(\\frac{1250}{1710}\\)", "B. \\(\\frac{1}{9}\\)", "C. \\(\\frac{625}{1701}\\)", "D. \\(\\frac{1}{18}\\)"],
        correct: 3, // D
        explanation: "Số lẻ và chia hết cho 9. Xác suất xấp xỉ 1/18."
    },
    {
        type: "choice",
        text: "<b>Câu 37 (VD-VDC):</b> Cho (G) là thập giác đều và M là tập hợp 11 điểm gồm 10 đỉnh và tâm của (G). Chọn ngẫu nhiên 3 điểm thuộc M, xác suất để 3 điểm được chọn lập thành một tam giác bằng:",
        options: ["A. \\(\\frac{8}{11}\\)", "B. \\(\\frac{32}{33}\\)", "C. \\(\\frac{31}{33}\\)", "D. \\(\\frac{10}{11}\\)"],
        correct: 3, // D
        explanation: "3 điểm không thẳng hàng. Chỉ có các bộ 3 điểm (tâm + 2 đỉnh đối diện) là thẳng hàng. Tổng C(3,11). Trừ đi 5 đường chéo đi qua tâm."
    },
    {
        type: "input",
        text: "<b>Câu 42 (VD-VDC):</b> Cho đa giác đều có 30 cạnh. Gọi S là tập hợp các tam giác có 3 đỉnh của đa giác đã cho. Chọn ngẫu nhiên một tam giác trong tập hợp S. Tính xác suất để tam giác được chọn là tam giác vuông.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "Tam giác vuông chắn đường kính. 15 đường kính. Mỗi đường kính tạo với 28 đỉnh còn lại thành 28 tam giác vuông. Tổng 15*28."
    },
    {
        type: "input",
        text: "<b>Câu 104 (VD-VDC):</b> Có hai hộp đựng bóng. Hộp thứ nhất có 10 quả bóng được đánh số từ 1 đến 10. Hộp thứ hai có 12 quả bóng được đánh số từ 1 đến 12. Lấy ngẫu nhiên mỗi hộp một quả. Xác suất để hai quả bóng lấy được không có quả bóng nào ghi số 4 hoặc ghi số 6 là \\(\\frac{a}{b}\\) với a, \\(b\\in\\mathbb{Z}\\) và \\(\\frac{a}{b}\\) là phân số tối giản. Tính \\(a+b\\).",
        placeholder: "Nhập a+b...",
        correct: "...",
        explanation: "Số cách chọn không có 4 hoặc 6. Hộp 1 còn 8 quả. Hộp 2 còn 10 quả. 8*10 / (10*12)."
    },
    {
        type: "input",
        text: "<b>Câu 133 (VD-VDC):</b> Một nhóm gồm 3 học sinh lớp 10, 3 học sinh lớp 11 và 3 học sinh lớp 12 được xếp ngồi vào một hàng có 9 ghế, mỗi học sinh ngồi 1 ghế. Tính xác suất để 3 học sinh lớp 10 không ngồi 3 ghế liền nhau.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "Dùng phương pháp phần bù (3 hs lớp 10 ngồi liền nhau) hoặc vách ngăn."
    },
    {
        type: "choice",
        text: "<b>Câu 206 (VD-VDC):</b> Trên hai tia Ox, Oy của góc nhọn xOy lần lượt cho 5 điểm và 6 điểm phân biệt khác O. Chọn ngẫu nhiên 3 điểm từ 12 điểm (gồm điểm O và 11 điểm đã cho), xác suất để 3 điểm chọn được là ba đỉnh của một tam giác bằng:",
        options: ["A. \\(\\frac{19}{22}\\)", "B. \\(\\frac{27}{44}\\)", "C. \\(\\frac{3}{4}\\)", "D. \\(\\frac{39}{44}\\)"],
        correct: 3, // D
        explanation: "3 điểm tạo tam giác <=> không thẳng hàng. Các bộ thẳng hàng: chọn 3 từ (5 điểm trên Ox + O), chọn 3 từ (6 điểm trên Oy + O)."
    },
    {
        type: "input",
        text: "<b>Câu 250 (VD-VDC):</b> Có 6 học sinh lớp 11 và 3 học sinh lớp 12 được xếp ngẫu nhiên thành một hàng ngang. Xác suất để khi xếp ngẫu nhiên 9 học sinh đó sao cho không có hai học sinh lớp 12 nào đứng cạnh nhau bằng \\(\\frac{a}{b}\\) với \\(\\frac{a}{b}\\) là phân số tối giản. Khi đó, \\(2a+b\\) bằng bao nhiêu?.",
        placeholder: "Nhập 2a+b...",
        correct: "...",
        explanation: "Xếp 6 HS lớp 11 trước, tạo 7 khoảng trống. Xếp 3 HS lớp 12 vào 7 khoảng trống đó."
    },
    {
        type: "choice",
        text: "<b>Câu 142 (VD-VDC):</b> Trên một bảng quảng cáo, người ta mắc hai hệ thống bóng đèn. Hệ thống I gồm 2 bóng mắc nối tiếp, hệ thống II gồm 2 bóng mắc song song. Khả năng bị hỏng của mỗi bóng đèn sau 6 giờ thắp sáng liên tục là 0,15. Biết tình trạng của mỗi bóng đèn là độc lập. A. Xác suất cả hai hệ thống bị hỏng (không sáng) bằng 0,026; B. Xác suất để hệ thống I bị hỏng bằng 0,5775; C. Xác suất để hệ thống II hoạt động bình thường bằng 0,9775; D. Xác suất để hệ thống II bị hỏng bằng 0,0225.",
        options: ["A", "B", "C", "D"],
        correct: 3, // D
        explanation: "Hệ II song song, hỏng khi cả 2 bóng cùng hỏng. P(II hỏng) = 0,15 * 0,15 = 0,0225. Đáp án D đúng."
    },
    {
        type: "choice",
        text: "<b>Câu 164 (VD-VDC):</b> Khảo sát tại một trường THPT cho thấy tỉ lệ học sinh thích bóng đá là 65%, thích bóng rổ là 30% và thích cả hai môn là 20%. Chọn ngẫu nhiên một học sinh trong trường. A. Xác suất chọn được học sinh thích cả bóng đá và bóng rổ là 0,2; B. Xác suất chọn được học sinh thích một trong hai môn là 0,95; C. Xác suất chọn được học sinh thích ít nhất một trong hai môn là 0,75; D. Xác suất chọn được học sinh thích bóng đá là 0,65.",
        options: ["A", "B", "C", "D"],
        correct: 2, // C
        explanation: "P(A U B) = P(A) + P(B) - P(AB) = 0,65 + 0,3 - 0,2 = 0,75. Đáp án C đúng (đề bài yêu cầu chọn câu đúng nhất hoặc đây là dạng điền khuyết, nhưng C là phép tính chuẩn)."
    },
    {
        type: "input",
        text: "<b>Câu 178 (VD-VDC):</b> Một công ty xây dựng đấu thầu 3 dự án X, Y và Z. Xác suất để ba dự án X, Y, Z trúng thầu tương ứng là \\(a, b\\) và 0,8 \\((a>b)\\). Biết rằng xác suất để ít nhất một trong ba dự án trúng thầu là 0,964 và xác suất để cả ba dự án đều trúng thầu là 0,224. Giả sử việc trúng thầu của ba dự án X, Y và Z là độc lập với nhau. Tính \\(2a+b\\).",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "P(ít nhất 1) = 1 - P(trượt hết). P(cả 3) = P(X)P(Y)P(Z). Giải hệ phương trình tìm a, b."
    },
    {
        type: "input",
        text: "<b>Ví dụ 1 (Explorer - Theme 34):</b> Giải bóng chuyền VTV cup gồm 9 đội bóng trong đó có 6 đội nước ngoài và 3 đội của Việt Nam. Ban tổ chức cho bốc thăm ngẫu nhiên để chia thành 3 bảng A, B, C và mỗi bảng có 3 đội. Tính xác suất để 3 đội bóng của Việt nam ở 3 bảng khác nhau.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "Xếp 3 đội VN vào 3 bảng khác nhau. Xếp 6 đội còn lại."
    },
    {
        type: "input",
        text: "<b>Ví dụ 3 (Explorer - Theme 34):</b> Hai bạn Hưng, Hà ném bóng vào rổ một cách độc lập. Biết xác suất ném bóng trúng vào rổ của Hưng, Hà tương ứng là \\(P(A)=x, P(B)=y\\). Xác suất “Cả hai cùng ném bóng trúng” bằng \\(\\frac{1}{7}\\) và xác suất “Cả hai cùng ném bóng trượt” bằng \\(\\frac{8}{21}\\). Biết Hưng chơi tốt hơn Hà, tính xác suất Hưng ném trúng.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "xy = 1/7 và (1-x)(1-y) = 8/21. Giải hệ phương trình."
    },
    {
        type: "input",
        text: "<b>Ví dụ 1 (Explorer - Theme 35):</b> Một mạch điện gồm 4 linh kiện như hình vẽ, trong đó xác suất hỏng của từng linh kiện tương ứng là 0,2; 0,1; 0,05 và 0,02. Biết các linh kiện làm việc độc lập. Tính xác suất để mạng điện hoạt động tốt.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "Cần hình vẽ để xác định nối tiếp/song song. Giả sử nối tiếp: P = 0.8*0.9*0.95*0.98."
    },
    {
        type: "choice",
        text: "<b>Câu 75 (VD-VDC):</b> Trước khi đưa một loại sản phẩm ra thị trường, người ta đã phỏng vấn ngẫu nhiên 200 khách hàng. Có 105 người trả lời \"sẽ mua\"; 95 người trả lời \"không mua\". Tỉ lệ khách hàng thực sự mua tương ứng với cách trả lời \"sẽ mua\" và \"không mua\" lần lượt là 70% và 30%. Gọi A là biến cố \"Người được phỏng vấn thực sự sẽ mua\", B là biến cố \"Người được phỏng vấn trả lời sẽ mua\". A. Xác suất \\(P(B)=\\frac{21}{40}\\); B. Xác suất \\(P(A|B)=0,3\\); C. Xác suất \\(P(A)=0,51\\); D. Trong số những người thực sự mua có 70% người đã trả lời \"sẽ mua\".",
        options: ["A", "B", "C", "D"],
        correct: 2, // C
        explanation: "Công thức xác suất đầy đủ: P(A) = P(A|B)P(B) + P(A|B_bar)P(B_bar) = 0.7 * (105/200) + 0.3 * (95/200) = 0.51."
    },
    {
        type: "input",
        text: "<b>Câu 98 (VD-VDC):</b> Có hai chiếc hộp, hộp I có 6 quả bóng màu đỏ và 4 quả bóng màu vàng, hộp II có 7 quả bóng màu đỏ và 3 quả bóng màu vàng. Lấy ngẫu nhiên một quả bóng từ hộp I bỏ vào hộp II. Sau đó, lấy ngẫu nhiên một quả bóng từ hộp II. Tính xác suất để quả bóng được lấy ra từ hộp II là quả bóng được chuyển từ hộp I sang, biết rằng quả bóng đó có màu đỏ.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "Sử dụng công thức Bayes."
    },
    {
        type: "input",
        text: "<b>Câu 123 (VD-VDC):</b> Có hai hộp bi, hộp I có 5 bị trắng và 7 bi đỏ, hộp II có 10 bi trắng và 15 bi đỏ. Lấy ngẫu nhiên hai viên bi từ hộp I chuyển sang hộp II. Sau đó từ hộp II lấy ngẫu nhiên 1 viên bi thì được bi trắng. Xác suất để 2 bi chuyển từ hộp I sang hộp II không cùng màu bằng \\(\\frac{a}{b}\\) là phân số tối giản. Tính \\(a+b\\).",
        placeholder: "Nhập a+b...",
        correct: "...",
        explanation: "Xác suất có điều kiện."
    },
    {
        type: "choice",
        text: "<b>Câu 155 (VD-VDC):</b> Xác suất để công ty X thuê một trong hai công ty vệ tinh A và B tư vấn lần lượt là 0,4 và 0,6. Khả năng X phát sinh thêm chi phí sử dụng dịch vụ của công ty A và B lần lượt là 0,05 và 0,03. A. Xác suất X phát sinh thêm chi phí là 0,038; B. Biết X có phát sinh chi phí, xác suất X thuê công ty A là 0,4737; C. Biết X có phát sinh chi phí, xác suất X thuê công ty B là 0,5263; D. Biết X không phát sinh chi phí, xác suất X thuê công ty A là 0,395.",
        options: ["A", "B", "C", "D"],
        correct: 0, // A
        explanation: "P(Chi phí) = 0.4*0.05 + 0.6*0.03 = 0.02 + 0.018 = 0.038. Đúng."
    },
    {
        type: "input",
        text: "<b>Câu 204 (VD-VDC):</b> Có hai chiếc hộp, hộp I có 5 quả bóng màu trắng và 7 đỏ, hộp II có 10 trắng và 15 đỏ. Lấy ngẫu nhiên hai quả từ hộp I bỏ vào hộp II. Sau đó lấy ra ngẫu nhiên một quả từ hộp II. Xác suất quả bóng lấy ra từ hộp II là quả chuyển từ hộp I sang, biết quả đó màu trắng, là \\(\\frac{a}{b}\\). Tính \\(a+b\\).",
        placeholder: "Nhập a+b...",
        correct: "...",
        explanation: "Xác suất có điều kiện kết hợp Bayes."
    },
    {
        type: "input",
        text: "<b>Ví dụ 2 (Toán 12 - Bài 19):</b> Một tỉnh X có 80% học sinh chọn tổ hợp A00. Nếu chọn A00, xác suất đỗ đại học là 0,6; nếu không chọn A00, xác suất đỗ là 0,7. Chọn ngẫu nhiên một học sinh đã đỗ đại học, tính xác suất học sinh đó chọn tổ hợp A00.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "P(A00 | Đỗ) = P(Đỗ | A00)P(A00) / P(Đỗ) = (0.6 * 0.8) / (0.6*0.8 + 0.7*0.2)."
    },
    {
        type: "input",
        text: "<b>Ví dụ 4 (Toán 12 - Bài 19):</b> Một thống kê cho thấy tỉ lệ dân số mắc bệnh hiểm nghèo Y là 0,5%. Nếu mắc bệnh Y thì xác suất xét nghiệm dương tính là 0,94; nếu không mắc bệnh Y thì xác suất xét nghiệm âm tính là 0,97. Bà N nhận kết quả âm tính, tính xác suất bà thực sự không mắc bệnh.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "P(Không bệnh | Âm tính). Công thức Bayes."
    },
    {
        type: "input",
        text: "<b>Câu 2 (VD-VDC):</b> Một đề thi trắc nghiệm gồm 50 câu hỏi độc lập. Mỗi câu có 4 đáp án, chỉ có một đáp án đúng. Học sinh A chọn ngẫu nhiên câu trả lời cho tất cả 50 câu. Biết xác suất làm đúng k câu của học sinh A đạt giá trị lớn nhất, khi đó giá trị của k bằng bao nhiêu?.",
        placeholder: "Nhập k...",
        correct: "12",
        explanation: "Số k có xác suất lớn nhất (Mod) trong phân phối nhị thức B(n, p) thỏa mãn: (n+1)p - 1 < k <= (n+1)p. Với n=50, p=0.25 -> 11.75 < k <= 12.75 -> k=12."
    },
    {
        type: "input",
        text: "<b>Câu 19 (VD-VDC):</b> Trong kì thi THPTQG 2016, môn Tiếng Anh thi trắc nghiệm 50 câu. Mỗi câu đúng được 0,2 điểm, mỗi câu sai bị trừ 0,1 điểm. Bạn Hoa chọn ngẫu nhiên cả 50 câu. Xác suất để Hoa đạt được 4 điểm gần nhất với giá trị nào?.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "Gọi x là số câu đúng. Điểm = 0.2x - 0.1(50-x) = 4. Giải tìm x, sau đó tính P(X=x) theo Bernoulli."
    },
    {
        type: "input",
        text: "<b>Câu 24 (VD-VDC):</b> Một thầy giáo cho hai em học sinh mỗi em viết ngẫu nhiên một số chính phương từ 1 đến 2025. Tính xác suất để hai em viết ra hai số giống nhau và đều chia hết cho cả 3 và 5.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "Số chính phương <= 2025 là 1^2 đến 45^2 (45 số). Chia hết cho 15 (BCNN 3,5). Đếm số lượng số thỏa mãn."
    },
    {
        type: "input",
        text: "<b>Câu 90 (VD-VDC):</b> Hai bạn A và B tranh chức vô địch cờ tướng. Xác suất thắng của A là 0,45 và B là 0,55. Mỗi ván không có hòa. Ai thắng trước 5 ván là vô địch. Tại thời điểm A đã thắng 4 ván và B mới thắng 2 ván, tính xác suất để A giành chiến thắng chung cuộc.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "A thắng chung cuộc nếu A thắng ván tiếp theo (4+1=5) HOẶC B thắng ván tiếp, sau đó A thắng."
    },
    {
        type: "input",
        text: "<b>Câu 160 (VD-VDC):</b> Trò chơi gieo đồng thời 3 con súc sắc, người chơi thắng nếu có ít nhất hai con súc sắc xuất hiện mặt 6 chấm. Tính xác suất để trong 4 ván, người chơi thắng ít nhất 3 ván.",
        placeholder: "Nhập kết quả...",
        correct: "...",
        explanation: "Tính P(thắng 1 ván). Sau đó dùng Bernoulli cho 4 ván."
    },
    {
        type: "input",
        text: "<b>Ví dụ 3 (Explorer - Theme 36):</b> Một đề thi trắc nghiệm gồm 50 câu độc lập. Mỗi câu có bốn phương án trả lời, chỉ một phương án đúng. Trả lời đúng được 0,2 điểm, sai 0 điểm. Bạn Dũng chọn ngẫu nhiên câu trả lời cho 50 câu. Hỏi khả năng lớn nhất bạn Dũng sẽ được bao nhiêu điểm?.",
        placeholder: "Nhập kết quả...",
        correct: "2.4",
        explanation: "Mode k = 12 câu đúng. Điểm = 12 * 0.2 = 2.4 điểm."
    },
    {
        type: "choice",
        text: "<b>Câu 6 (Đề kiểm tra năng lực - 0525):</b> Xác suất bắn trúng mục tiêu của một xạ thủ là 0,7. Xạ thủ này bắn độc lập 20 phát. Số lần bắn trúng mục tiêu có xác suất lớn nhất bằng: A. 17; B. 14; C. 13; D. 1.",
        options: ["A. 17", "B. 14", "C. 13", "D. 1"],
        correct: 1, // B
        explanation: "Mode = [(n+1)p] = [(20+1)*0.7] = [14.7] = 14."
    }
];

// --- HỢP NHẤT DỮ LIỆU ---
const FINAL_DATA = [
    {
        id: "thpt-hoa-338-final",
        category: "thpt",
        title: "Hóa Học - Mã đề 0338",
        subtitle: "THPT QG 2025 • Chuẩn cấu trúc Mới",
        time: 50,
        questions: DATA_HOA_HOC
    },
    {
        id: "chuyen-de-xac-suat-2026",
        category: "chuyende",
        title: "CHUYÊN ĐỀ: XÁC SUẤT",
        subtitle: "Ôn thi HSG & THPT QG • Dữ liệu gốc",
        time: 90,
        questions: DATA_XAC_SUAT
    }
];

// Tạo ID ngẫu nhiên cho câu hỏi
const usedIds = new Set();
const generateId = () => {
    let id;
    do {
        id = Math.random().toString(36).substring(2, 8);
    } while (usedIds.has(id));
    return id;
};

FINAL_DATA.forEach(exam => {
    exam.questions.forEach(q => {
        q.uid = generateId();
        usedIds.add(q.uid);
    });
});

const EXAM_DATA = FINAL_DATA;
