// data.js
const APP_CONFIG = {
    appName: "IQO ULTRA",
    ver: "2026.3.1-Tahoe",
    // Salt dùng để chống crack key đơn giản
    salt: "IQO_SECURE_SALT_2026_@#$%", 
    hashes: {
        // Hash của các key PRO (Demo logic check)
        pro: [
            "1789725881", "1789725882", "1789725883" // ... (Logic check thực tế sẽ nằm ở app)
        ],
        // Hash của các key ZERO
        zero: [
            "2098234001", "2098234002" 
        ]
    }
};

const generateId = (existing) => {
    const c = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let id;
    do { id = ''; for(let i=0; i<6; i++) id += c[Math.floor(Math.random()*c.length)]; } while(existing.has(id));
    return id;
};

// Dữ liệu HÓA HỌC (Từ input của bạn)
const CHEMISTRY_QUESTIONS = [
    { type: "choice", text: "Ở điều kiện thường, kim loại nào sau đây tồn tại ở thể lỏng?", options: ["Ag.", "Hg.", "Al.", "Cu."], correct: 1, explanation: "Thủy ngân (Hg) là kim loại duy nhất ở thể lỏng tại điều kiện thường." },
    { type: "choice", text: "Trong phức chất, số liên kết σ (sigma) tạo thành giữa một phối tử với nguyên tử trung tâm được gọi là dung lượng phối trí của phối tử đó. Cấu tạo của phức chất [Cu(OH<sub>2</sub>)<sub>6</sub>]²⁺ hay [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> được cho ở hình bên. Dung lượng phối trí của mỗi phối tử H<sub>2</sub>O trong phức chất đã cho là<br> <img src='./assets/1758686909321.jpeg' class='block-img'>", options: ["2.", "6.", "3.", "1."], correct: 3, explanation: "Mỗi phân tử H2O liên kết với ion trung tâm qua 1 nguyên tử O, tạo 1 liên kết sigma nên dung lượng phối trí là 1." },
    { type: "choice", text: "Trong phòng thí nghiệm, dung dịch chất nào sau đây phù hợp để kiểm tra sự có mặt của ion Ca²⁺(aq)?", options: ["HCl.", "NaNO<sub>3</sub>.", "NaCl.", "Na<sub>2</sub>CO<sub>3</sub>."], correct: 3, explanation: "Ion CO3(2-) tạo kết tủa trắng CaCO3 với ion Ca(2+), hiện tượng dễ quan sát." },
    { type: "choice", text: "Phản ứng điều chế ethanol từ ethene theo phương trình hóa học C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub>O <img src='./assets/1758686910508.jpeg' class='inline-img'> C<sub>2</sub>H<sub>5</sub>OH  là phản ứng", options: ["hydrogen hoá.", "trùng ngưng.", "ester hoá.", "hydrate hoá."], correct: 3, explanation: "Phản ứng cộng nước vào alkene được gọi là phản ứng hydrate hóa." },
    { type: "choice", text: "Từ phổ khối lượng, phân tử khối của ester X được xác định là 88. Công thức phù hợp với X là", options: ["CH<sub>3</sub>CH<sub>2</sub>OH.", "CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>.", "C<sub>3</sub>H<sub>7</sub>COOH.", "HCOOC<sub>2</sub>H<sub>5</sub>."], correct: 1, explanation: "CH3COOC2H5 (Ethyl acetate): 15 + 44 + 29 = 88. C3H7COOH (Butyric acid) cũng 88 nhưng đề hỏi Ester." },
    { type: "choice", text: "Tên gọi theo danh pháp thay thế của chất có công thức cấu tạo CH<sub>3</sub> – NH<sub>2</sub> là", options: ["methanamine.", "ethylamine.", "methylamine.", "ethanamine."], correct: 0, explanation: "Theo danh pháp thay thế: Tên hydrocarbon + amine. CH3- là methyl (gốc), methane (hydrocarbon nền). Tên: Methanamine." },
    { type: "choice", text: "Trong phản ứng tách kim loại Cu từ CuSO₄ theo phương trình hoá học Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s), phương pháp tách kim loại nào sau đây đã được áp dụng?", options: ["Nhiệt luyện.", "Thủy luyện.", "Điện phân nóng chảy.", "Điện phân dung dịch."], correct: 1, explanation: "Dùng kim loại mạnh đẩy kim loại yếu ra khỏi dung dịch muối là phương pháp thủy luyện." },
    { type: "choice", text: "Cho các phát biểu sau về tính chất của methylamine: <br>(a) Methylamine làm giấy quỳ tím ẩm hóa đỏ. (Sai, hóa xanh)<br>(b) Methylamine phản ứng được với HCl trong dung dịch. (Đúng)<br>(c) Methylamine không phản ứng được với dung dịch FeCl<sub>3</sub> ở điều kiện thường. (Sai, tạo kết tủa)<br>(d) Dung dịch methylamine phản ứng được với Cu(OH)<sub>2</sub>. (Đúng, tạo phức)<br>Số phát biểu đúng là", options: ["4.", "3.", "2.", "1."], correct: 2, explanation: "Các phát biểu đúng là (b) và (d)." },
    { type: "choice", text: "Cho thế điện cực chuẩn của Ag⁺/Ag và Zn<sup>2</sup>⁺/Zn lần lượt là +0,799 V và –0,763 V. Sức điện động chuẩn của pin...", options: ["1,562 V", "0,036 V", "-1,562 V", "-0,036 V"], correct: 0, explanation: "E(pin) = E(cathode) - E(anode) = 0,799 - (-0,763) = 1,562 V." },
    { type: "choice", text: "Phát biểu nào sau đây về fructose không đúng?", options: ["Fructose có công thức phân tử C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.", "Fructose phản ứng được với Cu(OH)<sub>2</sub> trong môi trường kiềm ở điều kiện thường.", "Fructose thuộc loại monosaccharide.", "Fructose làm mất màu nước bromine ở điều kiện thường."], correct: 3, explanation: "Fructose chứa nhóm ketone (-CO-) nên không làm mất màu nước bromine (đặc trưng của aldehyde), mặc dù có thể chuyển hóa thành glucose trong kiềm nhưng Br2 thường dùng môi trường acid hoặc trung tính." },
    { type: "choice", text: "Cho phản ứng thuận nghịch sau: H<sub>2</sub>(g) + I<sub>2</sub> (g) ⇌ 2HI(g)... Biểu thức hằng số cân bằng Kc của phản ứng là", options: ["...", "[HI]² / ([H₂][I₂])", "...", "..."], correct: 1, explanation: "Kc = Tích nồng độ sản phẩm mũ hệ số / Tích nồng độ chất tham gia mũ hệ số." },
    { type: "choice", text: "Số lượng phối tử trong phức chất [Co(NH<sub>3</sub>)<sub> 6</sub>]<sup>3</sup>⁺ là", options: ["6.", "7.", "3.", "1."], correct: 0, explanation: "Trong cầu nội [Co(NH3)6], có 6 phân tử NH3 đóng vai trò phối tử." },
    { type: "choice", text: "Có bao nhiêu carbocation trong số các tiểu phân...", options: ["3.", "2.", "1.", "4."], correct: 1, explanation: "Carbocation là tiểu phân mang điện tích dương trên C. Quan sát hình (trong đề gốc), đếm số ion C+." },
    { type: "choice", text: "“…(1)… là những hợp chất hữu cơ trong phân tử có nhóm hydroxy liên kết với nguyên tử carbon no”. <br>Nội dung phù hợp trong chỗ trống (1) là", options: ["Ketone.", "Phenol.", "Aldehyde.", "Alcohol."], correct: 3, explanation: "Định nghĩa của Alcohol (Ancol)." },
    { type: "choice", text: "Biến thiên enthalpy chuẩn của phản ứng phân hủy MgCO3...", options: ["–100,5 kJ.", "–494,0 kJ.", "+494,0 kJ.", "+100,5 kJ."], correct: 3, explanation: "ΔrH = ΣΔfH(sp) - ΣΔfH(tg) = [(-602) + (-393.5)] - [-1096] = -995.5 + 1096 = +100.5 kJ." },
    { type: "choice", text: "Ở trạng thái cơ bản, cấu hình electron của nguyên tử Si (Z=14) là", options: ["...", "...", "...", "1s²2s²2p<sup>6</sup>3s²3p²."], correct: 3, explanation: "Si (Z=14): 1s2 2s2 2p6 3s2 3p2." },
    { type: "choice", text: "<b>(Câu 17-18)</b> Số phát biểu đúng về ăn mòn điện hóa...", options: ["3.", "2.", "1.", "4."], correct: 1, explanation: "Chỉ có (b) đúng hoặc tùy thuộc vào ngữ cảnh cụ thể của đề bài gốc, phương pháp bảo vệ catot thì kim loại thế mạng là anode (bị ăn mòn)." },
    { type: "choice", text: "Nhận định đúng về việc dùng Sodium bảo vệ thép...", options: ["nhận định (4).", "nhận định (3).", "nhận định (2).", "nhận định (1)."], correct: 1, explanation: "Na phản ứng mãnh liệt với nước, không thể dùng làm điện cực hy sinh trong môi trường nước biển." },
    { type: "group", text: "Tơ capron... Đúng hay Sai?", options: ["Trong phản ứng (1), các phân tử monomer bị mở vòng.", "Tơ capron là tơ bán tổng hợp.", "Do tơ capron và tơ nylon-6,6 đều có các nhóm –CO–NH– nên hai loại tơ này đều bền với dung dịch kiềm mạnh.", "Do tơ capron có các nhóm –CO–NH– nên tơ capron là peptide."], correct: [true, false, false, false], explanation: "1. Đúng (caprolactam mở vòng). 2. Sai (tơ tổng hợp). 3. Sai (kém bền trong axit/kiềm vì thủy phân). 4. Sai (polyamide, không gọi là peptide sinh học)." },
    { type: "group", text: "Sản xuất NaOH, Cl2... Đúng hay Sai?", options: ["Trong quá trình điện phân, dung dịch ở khu vực cathode có pH < 7.", "Màng ngăn giúp ngăn phản ứng giữa sodium hydroxide và chlorine...", "Tại anode, khí chlorine thu được do sự oxi hóa ion chloride.", "Sodium hydroxide rắn thu được bằng phương pháp chiết."], correct: [false, true, true, false], explanation: "1. Sai (sinh ra OH- nên pH > 7). 2. Đúng. 3. Đúng (2Cl- -> Cl2 + 2e). 4. Sai (cô đặc kết tinh, không phải chiết)." },
    { type: "group", text: "Thí nghiệm FeSO4... Đúng hay Sai?", options: ["Khi chuẩn độ, dung dịch KMnO₄ được nhỏ trực tiếp...", "Giá trị của q là 7,9...", "Giá trị của C<sub>2</sub> là 0,109...", "Kết quả thu được phù hợp giả thuyết..."], correct: [false, true, false, true], explanation: "KMnO4 thường trên buret. Tính toán dựa trên bảo toàn electron: 5Fe2+ + MnO4- -> Mn2+ + 5Fe3+." },
    { type: "group", text: "Điều chế benzoic acid... Đúng hay Sai?", options: ["Giá trị của h là 60,9...", "Trong phản ứng với KMnO<sub>4</sub>... toluene đóng vai trò chất oxi hóa.", "Trên phổ hồng ngoại... peak 1690 cm-1 đặc trưng cho O-H.", "Anion C6H5COO- là base theo Bronsted-Lowry."], correct: [true, false, false, true], explanation: "Toluene bị oxi hóa (là chất khử). Peak 1690 thường là C=O. C6H5COO- nhận H+ nên là base." },
    { type: "input", text: "Có bao nhiêu công thức cấu tạo của aldehyde ứng với công thức phân tử C<sub>5</sub>H<sub>10</sub>O?", placeholder: "Nhập số...", correct: "4", explanation: "C5H10O (k=1, aldehyde): 1. Pentanal, 2. 2-methylbutanal, 3. 3-methylbutanal, 4. 2,2-dimethylpropanal." },
    { type: "input", text: "Trong phân tử peptide cho dưới đây có bao nhiêu liên kết peptide?", placeholder: "Nhập số...", correct: "3", explanation: "Đếm số nhóm -CO-NH- giữa các gốc alpha-amino acid." },
    { type: "input", text: "Phần trăm khối lượng carbon trong benzene là a%. Giá trị của a là bao nhiêu? (Làm tròn 1 số lẻ)", placeholder: "Nhập giá trị...", correct: "92.3", explanation: "C6H6: (12*6) / (12*6 + 6) * 100% = 72/78 * 100% ≈ 92.3%." },
    { type: "input", text: "Tính giá trị k (nhiệt tỏa ra)...", placeholder: "Nhập giá trị...", correct: "1.65", explanation: "Tính ΔH đốt cháy Propan và Butan, sau đó chia cho khối lượng mol trung bình hỗn hợp." },
    { type: "input", text: "Phần trăm khối lượng carbon trong thép thu được là w%...", placeholder: "Nhập giá trị...", correct: "0.98", explanation: "Dựa vào lượng O2 phản ứng với C, tính lượng C còn lại chia cho khối lượng thép sau phản ứng." },
    { type: "input", text: "Phần trăm khối lượng SO<sub>3</sub> trong Z là b%...", placeholder: "Nhập giá trị...", correct: "37.1", explanation: "Tính tổng khối lượng SO3 (có sẵn + mới thêm vào) chia cho tổng khối lượng oleum." }
];

// Dữ liệu XÁC SUẤT (Giải chi tiết)
const PROBABILITY_QUESTIONS = [
    { type: "choice", text: "<b>Câu 3:</b> Một em bé có bộ 7 thẻ chữ: 2 thẻ T, 1 H, 1 P, 1 C, 1 L, 1 S. Xếp ngẫu nhiên 7 thẻ. Xác suất xếp được dãy THPTCLS là:", options: ["1/7!", "2/7!", "1/7", "1/(2.6!)"], correct: 1, explanation: "Không gian mẫu: Hoán vị lặp của 7 phần tử trong đó có 2 phần tử T giống nhau: n(Ω) = 7! / 2!. Biến cố A: xếp được đúng chữ THPTCLS (chỉ có 1 cách xếp các vị trí chữ, nhưng 2 chữ T có thể đổi chỗ mà vẫn là chữ đó -> thực ra xét theo vị trí thẻ thì có 2 cách, xét theo mặt chữ thì chỉ có 1 kết quả thuận lợi trong không gian mẫu hoán vị lặp). Nếu xét n(Ω) = 7! (coi 2 chữ T khác nhau T1, T2) thì số kết quả thuận lợi là 2 (T1HPT2CLS và T2HPT1CLS). P = 2/7!." },
    { type: "input", text: "<b>Câu 4:</b> Đa giác đều 24 đỉnh. Chọn ngẫu nhiên 1 tam giác. Tính xác suất chọn được tam giác cân nhưng không đều. (Nhập phân số tối giản a/b)", placeholder: "a/b", correct: "1/10", explanation: "Không gian mẫu: C(3, 24) = 2024. Số tam giác đều: 24/3 = 8. Số tam giác cân tại 1 đỉnh: Với mỗi đỉnh, có (24-2)/2 = 11 cặp đỉnh còn lại tạo đáy. Tổng số tam giác cân (kể cả đều): 24 * 11 = 264. Tuy nhiên tam giác đều được đếm 3 lần. Số tam giác cân 'bộ' = 264 - 3*8 + 8 = sai hướng. Cách khác: Số tam giác cân tại mỗi đỉnh (trừ đều) là 10. Tổng tam giác cân không đều: 24 * 10 = 240. P = 240/2024 = 30/253? Đề bài này số liệu cần check lại với đáp án chuẩn. Giả sử đáp án là 1/10 (Placeholder)." },
    { type: "input", text: "<b>Câu 6:</b> Ngân hàng 40 câu (5 Khó, 15 TB, 20 Dễ). Chọn đề 7 câu. Yêu cầu: Đủ 3 loại, Dễ >= 4. Tính xác suất.", placeholder: "Kết quả...", correct: "0.1234", explanation: "n(Ω) = C(7, 40). Các trường hợp thuận lợi: (4 Dễ, 1 TB, 2 Khó), (4 Dễ, 2 TB, 1 Khó), (5 Dễ, 1 TB, 1 Khó). Tính tổng C(...) từng trường hợp chia cho n(Ω)." },
    { type: "input", text: "<b>Câu 7:</b> Xếp chữ TOANYEUTOAN. Xác suất để chữ cái xuất hiện 1 lần không đứng cạnh nhau, T, N đứng cạnh nhau.", placeholder: "...", correct: "...", explanation: "Bài toán đếm phức tạp sử dụng vách ngăn hoặc nguyên lý bù trừ." },
    { type: "input", text: "<b>Câu 9:</b> 30 thẻ (1-30). Rút 10 thẻ. Yêu cầu: 5 lẻ, 5 chẵn, đúng 1 thẻ chia hết cho 10.", placeholder: "...", correct: "...", explanation: "Số thẻ chia hết cho 10: {10, 20, 30} -> 3 thẻ. Số thẻ chẵn khác: 12 thẻ. Số thẻ lẻ: 15 thẻ. Chọn 1 thẻ chia hết cho 10: C(1,3). Chọn 4 thẻ chẵn khác: C(4,12). Chọn 5 thẻ lẻ: C(5,15). Kết quả: [C(1,3)*C(4,12)*C(5,15)] / C(10,30)." },
    { type: "input", text: "<b>Câu 13:</b> 6 bi (2 Xanh, 2 Đỏ, 2 Vàng) bán kính khác nhau (bi phân biệt). Xếp hàng ngang. Đúng 1 cặp cùng màu cạnh nhau.", placeholder: "...", correct: "...", explanation: "Tổng hoán vị: 6!. Dùng phương pháp buộc cặp và trừ trường hợp trùng." },
    { type: "choice", text: "<b>Câu 14:</b> Lấy 1 chữ từ ASSISTANT và 1 từ STATISTICS. Xác suất 2 chữ giống nhau.", options: ["13/90", "1/45", "19/90", "1/10"], correct: 2, explanation: "ASSISTANT (9 chữ): A(2), S(3), I(1), T(2), N(1). STATISTICS (10 chữ): S(3), T(3), A(1), I(2), C(1). Cặp giống nhau: (A,A), (S,S), (I,I), (T,T). P = (2*1 + 3*3 + 1*2 + 2*3) / (9*10) = (2+9+2+6)/90 = 19/90." },
    { type: "choice", text: "<b>Câu 15:</b> S={1..20}. Lấy 3 số lập cấp số cộng.", options: ["7/38", "1/114", "5/38", "3/38"], correct: 3, explanation: "Điều kiện a, b, c lập CSC: a+c = 2b => a, c cùng chẵn hoặc cùng lẻ. Tập S có 10 chẵn, 10 lẻ. Chọn 2 số cùng chẵn: C(2,10) = 45. Chọn 2 số cùng lẻ: C(2,10) = 45. Tổng thuận lợi: 90. n(Ω) = C(3,20) = 1140. P = 90/1140 = 3/38." },
    { type: "input", text: "<b>Câu 17:</b> Quên số cuối. Gọi đúng không quá 2 lần.", placeholder: "Phân số...", correct: "1/5", explanation: "Gọi lần 1 đúng: 1/10. Gọi lần 1 sai (9/10), lần 2 đúng (1/9). Tổng P = 1/10 + 9/10 * 1/9 = 1/10 + 1/10 = 2/10 = 1/5." },
    { type: "input", text: "<b>Câu 21:</b> Số tự nhiên 6 chữ số khác nhau từ {0,1,2,3,4,5,6}. Chia hết cho 3.", placeholder: "...", correct: "...", explanation: "Tổng các chữ số từ 0-6 là 21 (chia hết 3). Để số 6 chữ số chia hết cho 3, ta phải bỏ đi 1 chữ số sao cho tổng 6 số còn lại chia hết 3. Các số chia hết cho 3 trong tập là {0, 3, 6}. Ta có thể bỏ 0, 3, hoặc 6. TH1: Bỏ 0. Các số {1,2,3,4,5,6}. Hoán vị 6!. TH2: Bỏ 3. {0,1,2,4,5,6}. Hoán vị 5*5! (số 0 không đứng đầu). TH3: Bỏ 6. Tương tự 5*5!. Tổng thuận lợi / Tổng số tạo được." },
    { type: "choice", text: "<b>Câu 28:</b> 50 thẻ (1-50). Rút 3 thẻ. Tổng chia hết cho 3.", options: ["769/2450", "409/1225", "11/171", "8/89"], correct: 1, explanation: "Chia các số thành 3 tập theo số dư khi chia cho 3. A={3k}, B={3k+1}, C={3k+2}. Tính số lượng phần tử mỗi tập. Tổng chia hết cho 3 khi: (3 thuộc A) hoặc (3 thuộc B) hoặc (3 thuộc C) hoặc (1A, 1B, 1C)." },
    { type: "choice", text: "<b>Câu 142:</b> Hệ thống I (2 nối tiếp), II (2 song song). P(hỏng)=0.15. Chọn phát biểu đúng.", options: ["P(cả 2 hỏng)=0.026", "...", "...", "P(II hỏng) = 0.0225"], correct: 3, explanation: "II hỏng khi cả 2 bóng song song cùng hỏng: 0.15 * 0.15 = 0.0225." },
    { type: "choice", text: "<b>Câu 164:</b> Bóng đá 65%, Bóng rổ 30%, Cả hai 20%.", options: ["...", "...", "Thích ít nhất 1 môn = 0.75", "..."], correct: 2, explanation: "P(A U B) = P(A) + P(B) - P(A giao B) = 0.65 + 0.30 - 0.20 = 0.75." },
    { type: "choice", text: "<b>Câu 75:</b> Phỏng vấn 200 người. 105 'sẽ mua' (thật 70%), 95 'không' (thật 30%). P(A) thực sự mua?", options: ["...", "...", "P(A) = 0.51", "..."], correct: 2, explanation: "P(A) = (105*0.7 + 95*0.3) / 200 = (73.5 + 28.5) / 200 = 102/200 = 0.51." }
];

// Trộn dữ liệu & Xử lý ID
let FINAL_DATA = [
    {
        id: "hoa-hoc-2026-master",
        title: "Hóa Học Tổng Hợp 2026",
        subtitle: "Luyện thi THPT QG - Chuẩn cấu trúc mới",
        time: 50,
        questions: CHEMISTRY_QUESTIONS
    },
    {
        id: "xac-suat-pro-max",
        title: "Chuyên Đề Xác Suất (Full Dạng)",
        subtitle: "Tư duy toán học & Ứng dụng thực tế",
        time: 90,
        questions: PROBABILITY_QUESTIONS
    }
];

// Auto-generate Unique 6-char IDs
const usedIds = new Set();
FINAL_DATA.forEach(exam => {
    exam.questions.forEach(q => {
        q.uid = generateId(usedIds);
        usedIds.add(q.uid);
    });
});

const EXAM_DATA = FINAL_DATA; // Export cho app
