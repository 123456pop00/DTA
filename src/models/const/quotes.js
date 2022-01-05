const quotes =[
    {
      ID: 1,
      Content:
        "<p>Nó mắng tôi, đánh tôi,<br/>Nó thắng tôi, cướp tôi,<br/>Không ôm hiềm hận ấy,<br/>Hận thù được tự nguôi.<br/>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 2,
      Content:
        "<p>Với hận diệt hận thù,<br/>Đời này không có được.<br/>Không hận diệt hận thù,<br/>Là định luật ngàn thu.<br/>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 3,
      Content:
        "<p>Và người khác không biết,<br/>Chúng ta đây bị hại.<br/>Chỗ ấy, ai biết được<br/>Tranh luận được lắng êm.<br/>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 4,
      Content:
        "<p>Ai mặc áo cà-sa,<br/>Tâm chưa rời uế trược,<br/>Không tự chế, không thực,<br/>Không xứng áo cà-sa.<br/>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 5,
      Content:
        "<p>Ai rời bỏ uế trược,<br/>Giới luật khéo nghiêm trì,<br/>Tự chế, sống chơn thực,<br/>Thật xứng áo cà sa.<br/>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 6,
      Content:
        "<p>Không chân, tưởng chân thật,<br/>Chân thật, thấy không chân:<br/>Họ không đạt chân thật,<br/>Do tà tư, tà hạnh.<br/>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 7,
      Content:
        "<p>Chân thật, biết chân thật,<br/>Không chân, biết không chân.<br/>Họ đạt được chân thật,<br/>Do chánh tư, chánh hạnh.<br/>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 8,
      Content:
        "<p>Như ngôi nhà vụng lợp,<br/>Mưa liền xâm nhập vào.<br/>Cũng vậy tâm không tu,<br/>Tham dục liền xâm nhập.<br/>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 9,
      Content:
        "<p>Như ngôi nhà khéo lợp,<br/>Mưa không xâm nhập vào,<br/>Cũng vậy tâm khéo tu,<br/>Tham dục không xâm nhập.<br/>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 10,
      Content:
        "<p>Nay sầu, đời sau sầu,<br/>Kẻ ác, hai đời sầu,<br/>Nó sầu, nó ưu não,<br/>Thấy nghiệp uế mình làm.<br/>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 11,
      Content:
        "<p>Nay vui, đời sau vui,<br/>Làm phước, hai đời vui.<br/>Người ấy vui, an vui,<br/>Thấy nghiệp tịnh mình làm.<br/>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 12,
      Content:
        "<p>Nay than, đời sau than,<br/>Kẻ ác, hai đời than,<br/>Than rằng : Ta làm ác<br/>Đọa cõi dữ, than hơn”.<br/>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 13,
      Content:
        "<p>Nay sướng, đời sau sướng,<br/>Làm phước, hai đời sướng.<br/>Nó sướng : Ta làm thiện,<br/>Sanh cõi lành, sướng hơn”.<br/>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 14,
      Content:
        "<p>Nếu người nói nhiều kinh,<br/>Không hành trì, phóng dật,<br/>Như kẻ chăn bò người,<br/>Không phần Sa môn hạnh.<br/>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 15,
      Content:
        "<p>Từ bỏ tham, sân, si,<br/>Tĩnh giác, tâm giải thoát,<br/>Không chấp thủ hai đời,<br/>Dự phần Sa môn hạnh.<br/>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 16,
      Content:
        "<p>Không phóng dật, đường sống,<br/>Phóng dật là đường chết.<br/>Không phóng dật, không chết,<br/>Phóng dật như chết rồi.<br/>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 17,
      Content:
        "<p> Biết rõ sai biệt ấy,<br/>Người trí không phóng dật,<br/>Hoan hỷ, không phóng dật,<br/>An vui hạnh bậc Thánh.<br/>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 18,
      Content:
        "<p>Người hằng tu thiền định,<br/>Thường kiên trì tinh tấn.<br/>Bậc trí hưởng Niết Bàn,<br/>Ách an tịnh vô thượng.<br/>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 19,
      Content:
        "<p>Nỗ lực, không phóng dật,<br/>Tự điều, khéo chế ngự.<br/>Bậc trí xây hòn đảo,<br/>Nước lụt khó ngập tràn.<br/>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 20,
      Content:
        "<p>Họ ngu si thiểu trí,<br/>Chuyên sống đời phóng dật.<br/>Người trí, không phóng dật,<br/>Như giữ tài sản quý.<br/>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 21,
      Content:
        "<p>Chớ sống đời phóng dật,<br/>Chớ mê say dục lạc.<br/>Không phóng dật, thiền định,<br/>Đạt được an lạc lớn.<br/>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 22,
      Content:
        "<p>Tinh cần giữa phóng dật,<br/>Tỉnh thức giữa quần mê.<br/>Người trí như ngựa phi,<br/>Bỏ sau con ngựa hèn.<br/>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 23,
      Content:
        "<p>Đế Thích không phóng dật,<br/>Đạt ngôi vị Thiên chủ.<br/>Không phóng dật, được khen,<br/>Phóng dật, thường bị trách.<br/>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 24,
      Content:
        "<p>Vui thích không phóng dật,<br/>Tỷ kheo sợ phóng dật,<br/>Bước tới như lửa hừng,<br/>Thiêu kiết sử lớn nhỏ.<br/>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 25,
      Content:
        "<p>Vui thích không phóng dật,<br/>Tỷ kheo sợ phóng dật,<br/>Không thể bị thối đọa,<br/>Nhất định gần Niết Bàn.<br/>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 26,
      Content:
        "<p>Tâm hoảng hốt giao động,<br/>Khó hộ trì, khó nhiếp,<br/>Người trí làm tâm thẳng,<br/>Như thợ tên, làm tên.<br/>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 27,
      Content:
        "<p>Như cá quăng lên bờ,<br/>Vất ra ngoài thủy giới,<br/>Tâm này vũng vẫy mạnh,<br/>Hãy đoạn thế lực Ma<br/>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 28,
      Content:
        "<p>Khó nắm giữ, khinh động,<br/>Theo các dục quay cuồng.<br/>Lành thay, điều phục tâm,<br/>Tâm điều, an lạc đến.<br/>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 29,
      Content:
        "<p>Tâm khó thấy, tế nhị,<br/>Theo các dục quay cuồng.<br/>Người trí phòng hộ tâm,<br/>Tâm hộ, an lạc đến.<br/>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 30,
      Content:
        "<p>Chạy xa, sống một mình,<br/>Không thân, ẩn hang sâu<br/>Ai điều phục được tâm,<br/>Thoát khỏi Ma trói buộc<br/>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 31,
      Content:
        "<p>Ai tâm không an trú,<br/>Không biết chân diệu pháp,<br/>Tịnh tín bị rúng động,<br/>Trí tuệ không viên thành.<br/>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 32,
      Content:
        "<p>Tâm không đầy tràn dục,<br/>Tâm không hận công phá,<br/>Đoạn tuyệt mọi thiện ác,<br/>Kẻ tỉnh không sợ hãi,<br/>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 33,
      Content:
        "<p>Biết thân như đồ gốm,<br/>Trú tâm như thành trì,<br/>Chống ma với gươm trí,<br/>Giữ chiến thắng không tham<br/>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 34,
      Content:
        "<p>Không bao lâu thân này,<br/>Sẽ nằm dài trên đất,<br/>Bị vất bỏ, vô thức,<br/>Như khúc cây vô dụng.<br/>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 35,
      Content:
        "<p> Kẻ thù hại kẻ thù,<br/>Oan gia hại oan gia,<br/>Không bằng tâm hướng tà,<br/>Gây ác cho tự thân.<br/>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 36,
      Content:
        "<p>Điều mẹ, cha, bà con,<br/>Không có thể làm được,<br/>Tâm hướng chánh làm được,<br/>Làm được tốt đẹp hơn.<br/>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 37,
      Content:
        "<p>Ai chinh phục đất này,<br/>Dạ-ma thiên giới này,<br/>Ai khéo giảng Pháp cú,<br/>Như người khéo hái hoa .<br/>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 38,
      Content:
        "<p>Hữu học chinh phục đất,<br/>Dạ-ma thiên giới này,<br/>Hữu học giảng Pháp cú,<br/>Như người khéo hái hoa.<br/>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 39,
      Content:
        "<p>Biết thân như bọt nước,<br/>Ngộ thân là như huyễn,<br/>Bẻ tên hoa của Ma,<br/>Vượt tầm mắt Thần chết.<br/>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 40,
      Content:
        "<p>Người nhặt các loại hoa,<br/>Ý đắm say, tham nhiễm,<br/>Bị Thần chết mang đi,<br/>Như lụt trôi làng ngủ.<br/>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 41,
      Content:
        "<p>Như ong đến với hoa,<br/>Không hại sắc và hương,<br/>Che chở hoa, lấy nhụy.<br/>Bậc Thánh đi vào làng.<br/>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 42,
      Content:
        "<p>Không nên nhìn lỗi người,<br/>Người làm hay không làm.<br/>Nên nhìn tự chính mình.<br/>Có làm hay không làm.<br/>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 43,
      Content:
        "<p>Như bông hoa tươi đẹp,<br/>Có sắc nhưng không hương.<br/>Cũng vậy, lời khéo nói,<br/>Không làm, không kết quả.<br/>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 44,
      Content:
        "<p>Như bông hoa tươi đẹp,<br/>Có sắc lại thêm hương,<br/>Cũng vậy, lời khéo nói,<br/>Có làm, có kết quả.<br/>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 45,
      Content:
        "<p>Như từ một đống hoa,<br/>Nhiều tràng hoa được làm.<br/>Cũng vậy, thân sanh tử,<br/>Làm được nhiều việc lành.<br/>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 46,
      Content:
        "<p>Hoa chiên đàn, già la,<br/>Hoa sen, hoa vũ quý,<br/>Giữa những hương hoa ấy,<br/>Giới hương là vô thượng.<br/>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 47,
      Content:
        "<p>Ít giá trị hương này,<br/>Hương già la, chiên đàn,<br/>Chỉ hương người đức hạnh,<br/>Tối thượng tỏa Thiên giới.<br/>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 48,
      Content:
        "<p>Những ai có giới hạnh,<br/>An trú không phóng dật,<br/>Chánh trí, chơn giải thoát,<br/>Ác ma không thấy đường.<br/>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 49,
      Content:
        "<p>Như giữa đống rác nhớp,<br/>Quăng bỏ trên đường lớn,<br/>Chỗ ấy hoa sen nở,<br/>Thơm sạch, đẹp ý người.<br/>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 50,
      Content:
        "<p>Cũng vậy giữa quần sanh,<br/>Uế nhiễm, mù, phàm tục,<br/>Đệ tử bậc Chánh Giác,<br/>Sáng ngời với Tuệ Trí.<br/>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 51,
      Content:
        "<p>Đêm dài cho kẻ thức,<br/>Đường dài cho kẻ mệt,<br/>Luân hồi dài, kẻ ngu,<br/>Không biết chơn diệu pháp.<br/>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 52,
      Content:
        "<p>Tìm không được bạn đường,<br/>Hơn mình hay bằng mình,<br/>Thà quyết sống một mình,<br/>Không bè bạn kẻ ngu.<br/>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 53,
      Content:
        "<p>Con tôi, tài sản tôi,<br/>Người ngu sanh ưu não,<br/>Tự ta, ta không có,<br/>Con đâu, tài sản đâu.<br/>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 54,
      Content:
        "<p>Người ngu nghĩ mình ngu,<br/>Nhờ vậy thành có trí.<br/>Người ngu tưởng có trí,<br/>Thật xứng gọi chí ngu.<br/>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 55,
      Content:
        "<p>Người ngu, dầu trọn đời,<br/>Thân cận người có trí,<br/>Không biết được Chánh pháp,<br/>Như muỗng với vị canh.<br/>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 56,
      Content:
        "<p>Người trí, dầu một khắc,<br/>Thân cận người có trí,<br/>Biết ngay chân diệu pháp,<br/>Như lưỡi với vị canh.<br/>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 57,
      Content:
        "<p>Người ngu si thiếu trí,<br/>Tự ngã thành kẻ thù.<br/>Làm các nghiệp không thiện,<br/>Phải chịu quả đắng cay.<br/>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 58,
      Content:
        "<p>Nghiệp làm không chánh thiện,<br/>Làm rồi sanh ăn năn,<br/>Mặt nhuốm lệ, khóc than,<br/>Lãnh chịu quả dị thục.<br/>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 59,
      Content:
        "<p>Và nghiệp làm chánh thiện,<br/>Làm rồi không ăn năn,<br/>Hoan hỷ, ý đẹp lòng,<br/>Hưởng thọ quả dị thục.<br/>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 60,
      Content:
        "<p>Người ngu nghĩ là ngọt,<br/>Khi ác chưa chín muồi,<br/>Ác nghiệp chín muồi rồi,<br/>Người ngu chịu khổ đau.<br/>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 61,
      Content:
        "<p>Tháng tháng với ngọn cỏ,<br/>Người ngu có ăn uống<br/>Không bằng phần mười sáu<br/>Người hiểu pháp hữu vi.<br/>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 62,
      Content:
        "<p>Nghiệp ác đã được làm,<br/>Như sữa, không đông ngay,<br/>Cháy ngầm theo kẻ ngu,<br/>Như lửa tro che đậy.<br/>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 63,
      Content:
        "<p>Tự nó chịu bất hạnh,<br/>Khi danh đến kẻ ngu.<br/>Vận may bị tổn hại,<br/>Đầu nó bị nát tan.<br/>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 64,
      Content:
        "<p>Ưa danh không tương xứng,<br/>Muốn ngồi trước tỷ kheo,<br/>Ưa quyền tại tịnh xá,<br/>Muốn mọi người lễ kính.<br/>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 65,
      Content:
        "<p>Những người hay khuyên dạy,<br/>Ngăn người khác làm ác,<br/>Được người hiền kính yêu,<br/>Bị người ác không thích.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 66,
      Content:
        "<p>Chớ thân với bạn ác,<br/>Chớ thân kẻ tiểu nhân.<br/>Hãy thân người bạn lành,<br/>Hãy thân bậc thượng nhân.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 67,
      Content:
        "<p>Pháp hỷ đem an lạc,<br/>Với tâm tư thuần tịnh,<br/>Người trí thường hoan hỷ,<br/>Với pháp bậc Thánh thuyết.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 68,
      Content:
        "<p><br/>Người trị thủy dẫn nước,<br/>Kẻ làm tên nắn tên,<br/>Người thợ mộc uốn gỗ,<br/>Bậc trí nhiếp tự thân.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 69,
      Content:
        "<p>Như đá tảng kiên cố,<br/>Không gió nào dao động,<br/>Cũng vậy, giữa khen chê,<br/>Người trí không giao động.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 70,
      Content:
        "<p>Như hồ nước sâu thẳm,<br/>Trong sáng, không khuấy đục,<br/>Cũng vậy, nghe chánh pháp,<br/>Người trí hưởng tịnh lạc.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 71,
      Content:
        "<p>Người hiền bỏ tất cả,<br/>Người lành không bàn dục,<br/>Dầu cảm thọ lạc khổ,<br/>Bậc trí không vui buồn.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 72,
      Content:
        "<p>Ít người giữa nhân loại,<br/>Đến được bờ bên kia<br/>Còn số người còn lại,<br/>Xuôi ngược chạy bờ này.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 73,
      Content:
        "<p>Hãy cầu vui Niết Bàn,<br/>Bỏ dục, không sở hữu,<br/>Kẻ trí tự rửa sạch,<br/>Cấu uế từ nội tâm.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 74,
      Content:
        "<p>Đích đã đến, không sầu,<br/>Giải thoát ngoài tất cả,<br/>Đoạn trừ mọi buộc ràng,<br/>Vị ấy không nhiệt não.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 75,
      Content:
        "<p>Tự sách tấn, chánh niệm,<br/>Không thích cư xá nào,<br/>Như ngỗng trời rời ao,<br/>Bỏ sau mọi trú ẩn.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 76,
      Content:
        "<p>Ai nhiếp phục các căn,<br/>Như đánh xe điều ngự,<br/>Mạn trừ, lậu hoặc dứt,<br/>Người vậy, Chư Thiên mến.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 77,
      Content:
        "<p>Như đất, không hiềm hận,<br/>Như cột trụ, kiên trì,<br/>Như hồ, không bùn nhơ,<br/>Không luân hồi, vị ấy.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 78,
      Content:
        "<p>Người tâm ý an tịnh,<br/>Lời an, nghiệp cũng an,<br/>Chánh trí, chơn giải thoát,<br/>Tịnh lạc là vị ấy.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 79,
      Content:
        "<p>Không tin, hiểu vô vi.<br/>Người cắt mọi hệ lụy<br/>Cơ hội tận, xã ly<br/>Vị ấy thật tối thượng.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 80,
      Content:
        "<p>Làng mạc hay rừng núi<br/>Thung lũng hay đồi cao,<br/>La Hán trú chỗ nào,<br/>Đất ấy thật khả ái.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 81,
      Content:
        "<p>Khả ái thay núi rừng,<br/>Chỗ người phàm không ưa,<br/>Vị ly tham ưa thích,<br/>Vì không tìm dục lạc.<br/>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 82,
      Content:
        "<p>Dầu nói ngàn ngàn lời,<br/>Nhưng không gì lợi ích ,<br/>Tốt hơn một câu nghĩa,<br/>Nghe xong, được tịnh lạc.<br/>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 83,
      Content:
        "<p> Dầu nói ngàn câu kệ<br/>Nhưng không gì lợi ích,<br/>Tốt hơn nói một câu,<br/>Nghe xong, được tịnh lạc.<br/>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 84,
      Content:
        "<p>Dầu tại bãi chiến trường<br/>Thắng ngàn ngàn quân địch,<br/>Tự thắng mình tốt hơn,<br/>Thật chiến thắng tối thượng.<br/>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 85,
      Content:
        "<p>Tự thắng, tốt đẹp hơn,<br/>Hơn chiến thắng người khác.<br/>Người khéo điều phục mình,<br/>Thường sống tự chế ngự.<br/>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 86,
      Content:
        "<p>Dầu Thiên Thần, Thát Bà,<br/>Dầu Ma vương, Phạm Thiên<br/>Không ai chiến thắng nổi,<br/>Người tự thắng như vậy.<br/>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 87,
      Content:
        "<p>Suốt năm cúng tế vật,<br/>Để cầu phước ở đời.<br/>Không bằng một phần tư<br/>Kính lễ bậc chánh trực.<br/>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 88,
      Content:
        "<p>Thường tôn trọng, kính lễ<br/>Bậc kỳ lão trưởng thượng,<br/>Bốn pháp được tăng trưởng:<br/>Thọ, sắc, lạc, sức mạnh.<br/>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 89,
      Content:
        "<p>Dầu sống một trăm năm<br/>Ác giới, không thiền định,<br/>Không bằng sống một ngày,<br/>Trì giới, tu thiền định.<br/>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 90,
      Content:
        "<p>Ai sống một trăm năm,<br/>Ác tuệ, không thiền định.<br/>Tốt hơn sống một ngày,<br/>Có tuệ, tu thiền định.<br/>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 91,
      Content:
        "<p>Ai sống một trăm năm,<br/>Lười nhác không tinh tấn,<br/>Tốt hơn sống một ngày<br/>Tinh tấn tận sức mình.<br/>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 92,
      Content:
        "<p>Ai sống một trăm năm,<br/>Không thấy pháp sinh diệt,<br/>Tốt hơn sống một ngày,<br/>Thấy được pháp sinh diệt.<br/>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 93,
      Content:
        "<p>Ai sống một trăm năm,<br/>Không thấy câu bất tử,<br/>Tốt hơn sống một ngày,<br/>Thấy được câu bất tử.<br/>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 94,
      Content:
        "<p><br/>Ai sống một trăm năm,<br/>Không thấy pháp tối thượng,<br/>Tốt hơn sống một ngày,<br/>Thấy được pháp tối thượng.<br/>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 95,
      Content:
        "<p>Hãy gấp làm điều lành,<br/>Ngăn tâm làm điều ác.<br/>Ai chậm làm việc lành,<br/>Ý ưa thích việc ác.<br/>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 96,
      Content:
        "<p>Nếu người làm điều ác,<br/>Chớ tiếp tục làm thêm.<br/>Chớ ước muốn điều ác,<br/>Chứa ác, tất chịu khổ.<br/>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 97,
      Content:
        "<p>Nếu người làm điều thiện,<br/>Nên tiếp tục làm thêm.<br/>Hãy ước muốn điều thiện,<br/>Chứa thiện, được an lạc.<br/>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 98,
      Content:
        "<p>Người ác thấy là hiền.<br/>Khi ác chưa chín muồi,<br/>Khi ác nghiệp chín muồi,<br/>Người ác mới thấy ác.<br/>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 99,
      Content:
        "<p>Người hiền thấy là ác,<br/>Khi thiện chưa chín muồi.<br/>Khi thiện được chín muồi,<br/>Người hiền thấy là thiện.<br/>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 100,
      Content:
        "<p>Ít bạn đường, nhiều tiền,<br/>Người buôn tránh đường hiểm.<br/>Muốn sống, tránh thuốc độc,<br/>Hãy tránh ác như vậy.<br/>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 101,
      Content:
        "<p>Bàn tay không thương tích,<br/>Có thể cầm thuốc độc.<br/>Không thương tích, tránh độc,<br/>Không làm, không có ác.<br/>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 102,
      Content:
        "<p>Hại người không ác tâm,<br/>Người thanh tịnh, không uế,<br/>Tội ác đến kẻ ngu,<br/>Như ngược gió tung bụi.<br/>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 103,
      Content:
        "<p>Một số sinh bào thai,<br/>Kẻ ác sinh địa ngục,<br/>Người thiện lên cõi trời,<br/>Vô lậu chứng Niết Bàn.<br/>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 104,
      Content:
        "<p>Không trên trời, giữa biển,<br/>Không lánh vào động núi,<br/>Không chỗ nào trên đời,<br/>Trốn được quả ác nghiệp.<br/>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 105,
      Content:
        "<p>Không trên trời, giữa biển,<br/>Không lánh vào động núi,<br/>Không chỗ nào trên đời,<br/>Trốn khỏi tay thần chết.<br/>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 106,
      Content:
        "<p>Mọi người sợ hình phạt,<br/>Mọi người sợ tử vong.<br/>Lấy mình làm ví dụ<br/>Không giết, không bảo giết.<br/>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 107,
      Content:
        "<p>Mọi người sợ hình phạt,<br/>Mọi người thích sống còn,<br/>Lấy mình làm ví dụ,<br/>Không giết, không bảo giết.<br/>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 108,
      Content:
        "<p>Chúng sanh cầu an lạc,<br/>Ai dùng trượng hại người,<br/>Để tìm lạc cho mình,<br/>Đời sau không được lạc.<br/>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 109,
      Content:
        "<p>Chúng sanh cầu an lạc,<br/>Không dùng trượng hại người,<br/>Để tìm lạc cho mình,<br/>Đời sau được hưởng lạc.<br/>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 110,
      Content:
        "<p>Chớ nói lời ác độc,<br/>Nói ác, bị nói lại,<br/>Khổ thay lời phẩn nộ,<br/>Đao trượng phản chạm mình.<br/>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 111,
      Content:
        "<p>Người ngu làm điều ác,<br/>Không ý thức việc làm.<br/>Do tự nghiệp, người ngu<br/>Bị nung nấu, như lửa.<br/>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 112,
      Content:
        "<p>Dùng trượng phạt không trượng,<br/>Làm ác người không ác.<br/>Trong mười loại khổ đau,<br/>Chịu gấp một loại khổ.<br/>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 113,
      Content:
        "<p>Hoặc khổ thọ khốc liệt,<br/>Thân thể bị thương vong,<br/>Hoặc thọ bệnh kịch liệt,<br/>Hay loạn ý tán tâm.<br/>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 114,
      Content:
        "<p>Hoặc tai họa từ vua,<br/>Hay bị vu trọng tội,<br/>Bà con phải ly tán,<br/>Tài sản bị nát tan.<br/>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 115,
      Content:
        "<p>Hoặc phòng ốc nhà cửa<br/>Bị hỏa tai thiêu đốt.<br/>Khi thân hoại mạng chung,<br/>Ác tuệ sanh địa ngục.<br/>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 116,
      Content:
        "<p>Thật khó tìm ở đời,<br/>Người biết thẹn, tự chế,<br/>Biết tránh né chỉ trích<br/>Như ngựa hiền tránh roi.<br/>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 117,
      Content:
        "<p>Cười gì, hân hoan gì,<br/>Khi đời mãi bị thiêu ?<br/>Bị tối tăm bao trùm,<br/>Sao không tìm ngọn đèn ?<br/>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 118,
      Content:
        "<p>Hãy xem bong bóng đẹp,<br/>Chỗ chất chứa vết thương,<br/>Bệnh hoạn nhiều suy tư,<br/>Thật không gì trường cửu.<br/>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 119,
      Content:
        "<p>Sắc này bị suy già,<br/>Ổ tật bệnh, mỏng manh,<br/>Nhóm bất tịnh, đỗ vỡ,<br/>Chết chấm dứt mạng sống.<br/>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 120,
      Content:
        "<p>Như trái bầu mùa thu,<br/>Bị vất bỏ quăng đi,<br/>Nhóm xương trắng bồ câu,<br/>Thấy chúng còn vui gì ?<br/>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 121,
      Content:
        "<p>Thành này làm bằng xương,<br/>Quét tô bằng thịt máu,<br/>Ở đây già và chết,<br/>Mạn, lừa đảo chất chứa.<br/>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 122,
      Content:
        "<p>Người ít nghe kém học,<br/>Lớn già như trâu đực.<br/>Thịt nó tuy lớn lên,<br/>Nhưng tuệ không tăng trưởng.<br/>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 123,
      Content:
        "<p>Lang thang bao kiếp sống<br/>Ta tìm nhưng chẳng gặp,<br/>Người xây dựng nhà này,<br/>Khổ thay, phải tái sanh.<br/>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 124,
      Content:
        "<p>Lúc trẻ, không Phạm hạnh,<br/>Không tìm kiếm bạc tiền.<br/>Như cò già bên ao,<br/>Ủ rũ, không tôm cá.<br/>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 125,
      Content:
        "<p>Lúc trẻ không phạm hạnh,<br/>Không tìm kiếm bạc tiền,<br/>Như cây cung bị gẫy,<br/>Thở than những ngày qua.<br/>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 126,
      Content:
        "<p>Nếu biết yêu tự ngã,<br/>Phải khéo bảo vệ mình,<br/>Người trí trong ba canh,<br/>Phải luôn luôn tỉnh thức.<br/>Trích Kinh Pháp Cú (Phẩm Tự Ngã)</p>",
    },
    {
      ID: 127,
      Content:
        "<p>Trước hết tự đặt mình,<br/>Vào những gì thích đáng.<br/>Sau mới giáo hóa người,<br/>Người trí khỏi bị nhiễm.<br/>Trích Kinh Pháp Cú (Phẩm Tự Ngã)</p>",
    },
    {
      ID: 128,
      Content:
        "<p>Hãy tự làm cho mình,<br/>Như điều mình dạy người.<br/>Khéo tự điều, điều người,<br/>Khó thay, tự điều phục !<br/>Trích Kinh Pháp Cú (Phẩm Tự Ngã)</p>",
    },
    {
      ID: 129,
      Content:
        "<p>Tự mình y chỉ mình,<br/>Nào có y chỉ khác.<br/>Nhờ khéo điều phục mình,<br/>Được y chỉ khó được.<br/>Trích Kinh Pháp Cú (Phẩm Tự Ngã)</p>",
    },
    {
      ID: 130,
      Content:
        "<p>Điều ác tự mình làm,<br/>Tự mình sanh, mình tạo.<br/>Nghiền nát kẻ ngu si,<br/>Như kim cương, ngọc báu.<br/>Trích Kinh Pháp Cú (Phẩm Tự Ngã)</p>",
    },
    {
      ID: 131,
      Content:
        "<p>Phá giới quá trầm trọng,<br/>Như dây leo bám cây<br/>Gieo hại cho tự thân,<br/>Như kẻ thù mong ước.<br/>Trích Kinh Pháp Cú (Phẩm Tự Ngã)</p>",
    },
    {
      ID: 132,
      Content:
        "<p>Dễ làm, các điều ác,<br/>Dễ làm tự hại mình.<br/>Còn việc lành, việc tốt,<br/>Thật tối thượng khó làm.<br/>Trích Kinh Pháp Cú (Phẩm Tự Ngã)</p>",
    },
    {
      ID: 133,
      Content:
        "<p>Chớ có theo pháp hạ liệt,<br/>Chớ sống mặc, buông lung,<br/>Chớ tin theo tà kiến,<br/>Chớ tăng trưởng tục trần.<br/>Trích Kinh Pháp Cú (Phẩm Tự Ngã)</p>",
    },
    {
      ID: 134,
      Content:
        "<p>Dầu lợi người bao nhiêu,<br/>Chớ quên phần tư lợi<br/>Nhờ thắng tri tư lợi,<br/>Hãy chuyên tâm lợi mình.<br/>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
    {
      ID: 135,
      Content:
        "<p>Nỗ lực, chớ phóng dật !<br/>Hãy sống theo chánh hạnh,<br/>Người chánh hạnh hưởng lạc,<br/>Cả đời này, đời sau.<br/>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
    {
      ID: 136,
      Content:
        "<p>Hãy khéo sống chánh hạnh,<br/>Chớ sống theo tà hạnh !<br/>Người chánh hạnh hưởng lạc,<br/>Cả đời này, đời sau.<br/>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
    {
      ID: 137,
      Content:
        "<p>Hãy nhìn như bọt nước,<br/>Hãy nhìn như cảnh huyển !<br/>Quán nhìn đời như vậy,<br/>Thần chết không bắt gặp.<br/>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
    {
      ID: 138,
      Content:
        "<p>Hãy đến nhìn đời này,<br/>Như xe vua lộng lẫy,<br/>Người ngu mới tham đắm,<br/>Kẻ trí nào đắm say.<br/>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
    {
      ID: 139,
      Content:
        "<p>Ai sống trước buông lung,<br/>Sau sống không phóng dật,<br/>Chói sáng rực đời này.<br/>Như trăng thoát mây che.<br/>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
    {
      ID: 140,
      Content:
        "<p>Ai dùng các hạnh lành,<br/>Làm xóa mờ nghiệp ác,<br/>Chói sáng rực đời này,<br/>Như trăng thoát mây che.<br/>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
    {
      ID: 141,
      Content:
        "<p>Đời này thật mù quáng,<br/>Ít kẻ thấy rõ ràng.<br/>Như chim thoát khỏi lưới,<br/>Rất ít đi thiên giới.<br/>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
    {
      ID: 142,
      Content:
        "<p>Như chim thiên nga bay,<br/>Thần thông liệng giữa trời,<br/>Chiến thắng Ma, Ma quân,<br/>Kẻ trí thoát đời này.<br/>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
  ]


export default {
  Data: quotes
}