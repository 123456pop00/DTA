const quotes =[
    {
      ID: 1,
      Content:
        "<p>Nó mắng tôi, đánh tôi,</p><p>Nó thắng tôi, cướp tôi,</p><p>Không ôm hiềm hận ấy,</p><p>Hận thù được tự nguôi.</p><p>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 2,
      Content:
        "<p>Với hận diệt hận thù,</p><p>Đời này không có được.</p><p>Không hận diệt hận thù,</p><p>Là định luật ngàn thu.</p><p>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 3,
      Content:
        "<p>Và người khác không biết,</p><p>Chúng ta đây bị hại.</p><p>Chỗ ấy, ai biết được</p><p>Tranh luận được lắng êm.</p><p>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 4,
      Content:
        "<p>Ai mặc áo cà-sa,</p><p>Tâm chưa rời uế trược,</p><p>Không tự chế, không thực,</p><p>Không xứng áo cà-sa.</p><p>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 5,
      Content:
        "<p>Ai rời bỏ uế trược,</p><p>Giới luật khéo nghiêm trì,</p><p>Tự chế, sống chơn thực,</p><p>Thật xứng áo cà sa.</p><p>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 6,
      Content:
        "<p>Không chân, tưởng chân thật,</p><p>Chân thật, thấy không chân:</p><p>Họ không đạt chân thật,</p><p>Do tà tư, tà hạnh.</p><p>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 7,
      Content:
        "<p>Chân thật, biết chân thật,</p><p>Không chân, biết không chân.</p><p>Họ đạt được chân thật,</p><p>Do chánh tư, chánh hạnh.</p><p>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 8,
      Content:
        "<p>Như ngôi nhà vụng lợp,</p><p>Mưa liền xâm nhập vào.</p><p>Cũng vậy tâm không tu,</p><p>Tham dục liền xâm nhập.</p><p>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 9,
      Content:
        "<p>Như ngôi nhà khéo lợp,</p><p>Mưa không xâm nhập vào,</p><p>Cũng vậy tâm khéo tu,</p><p>Tham dục không xâm nhập.</p><p>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 10,
      Content:
        "<p>Nay sầu, đời sau sầu,</p><p>Kẻ ác, hai đời sầu,</p><p>Nó sầu, nó ưu não,</p><p>Thấy nghiệp uế mình làm.</p><p>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 11,
      Content:
        "<p>Nay vui, đời sau vui,</p><p>Làm phước, hai đời vui.</p><p>Người ấy vui, an vui,</p><p>Thấy nghiệp tịnh mình làm.</p><p>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 12,
      Content:
        "<p>Nay than, đời sau than,</p><p>Kẻ ác, hai đời than,</p><p>Than rằng : Ta làm ác</p><p>Đọa cõi dữ, than hơn”.</p><p>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 13,
      Content:
        "<p>Nay sướng, đời sau sướng,</p><p>Làm phước, hai đời sướng.</p><p>Nó sướng : Ta làm thiện,</p><p>Sanh cõi lành, sướng hơn”.</p><p>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 14,
      Content:
        "<p>Nếu người nói nhiều kinh,</p><p>Không hành trì, phóng dật,</p><p>Như kẻ chăn bò người,</p><p>Không phần Sa môn hạnh.</p><p>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 15,
      Content:
        "<p>Từ bỏ tham, sân, si,</p><p>Tĩnh giác, tâm giải thoát,</p><p>Không chấp thủ hai đời,</p><p>Dự phần Sa môn hạnh.</p><p>Trích Kinh Pháp Cú (Phẩm Song Yếu)</p>",
    },
    {
      ID: 16,
      Content:
        "<p>Không phóng dật, đường sống,</p><p>Phóng dật là đường chết.</p><p>Không phóng dật, không chết,</p><p>Phóng dật như chết rồi.</p><p>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 17,
      Content:
        "<p> Biết rõ sai biệt ấy,</p><p>Người trí không phóng dật,</p><p>Hoan hỷ, không phóng dật,</p><p>An vui hạnh bậc Thánh.</p><p>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 18,
      Content:
        "<p>Người hằng tu thiền định,</p><p>Thường kiên trì tinh tấn.</p><p>Bậc trí hưởng Niết Bàn,</p><p>Ách an tịnh vô thượng.</p><p>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 19,
      Content:
        "<p>Nỗ lực, không phóng dật,</p><p>Tự điều, khéo chế ngự.</p><p>Bậc trí xây hòn đảo,</p><p>Nước lụt khó ngập tràn.</p><p>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 20,
      Content:
        "<p>Họ ngu si thiểu trí,</p><p>Chuyên sống đời phóng dật.</p><p>Người trí, không phóng dật,</p><p>Như giữ tài sản quý.</p><p>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 21,
      Content:
        "<p>Chớ sống đời phóng dật,</p><p>Chớ mê say dục lạc.</p><p>Không phóng dật, thiền định,</p><p>Đạt được an lạc lớn.</p><p>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 22,
      Content:
        "<p>Tinh cần giữa phóng dật,</p><p>Tỉnh thức giữa quần mê.</p><p>Người trí như ngựa phi,</p><p>Bỏ sau con ngựa hèn.</p><p>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 23,
      Content:
        "<p>Đế Thích không phóng dật,</p><p>Đạt ngôi vị Thiên chủ.</p><p>Không phóng dật, được khen,</p><p>Phóng dật, thường bị trách.</p><p>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 24,
      Content:
        "<p>Vui thích không phóng dật,</p><p>Tỷ kheo sợ phóng dật,</p><p>Bước tới như lửa hừng,</p><p>Thiêu kiết sử lớn nhỏ.</p><p>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 25,
      Content:
        "<p>Vui thích không phóng dật,</p><p>Tỷ kheo sợ phóng dật,</p><p>Không thể bị thối đọa,</p><p>Nhất định gần Niết Bàn.</p><p>Trích Kinh Pháp Cú (Phẩm Phóng Dật)</p>",
    },
    {
      ID: 26,
      Content:
        "<p>Tâm hoảng hốt giao động,</p><p>Khó hộ trì, khó nhiếp,</p><p>Người trí làm tâm thẳng,</p><p>Như thợ tên, làm tên.</p><p>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 27,
      Content:
        "<p>Như cá quăng lên bờ,</p><p>Vất ra ngoài thủy giới,</p><p>Tâm này vũng vẫy mạnh,</p><p>Hãy đoạn thế lực Ma</p><p>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 28,
      Content:
        "<p>Khó nắm giữ, khinh động,</p><p>Theo các dục quay cuồng.</p><p>Lành thay, điều phục tâm,</p><p>Tâm điều, an lạc đến.</p><p>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 29,
      Content:
        "<p>Tâm khó thấy, tế nhị,</p><p>Theo các dục quay cuồng.</p><p>Người trí phòng hộ tâm,</p><p>Tâm hộ, an lạc đến.</p><p>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 30,
      Content:
        "<p>Chạy xa, sống một mình,</p><p>Không thân, ẩn hang sâu</p><p>Ai điều phục được tâm,</p><p>Thoát khỏi Ma trói buộc</p><p>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 31,
      Content:
        "<p>Ai tâm không an trú,</p><p>Không biết chân diệu pháp,</p><p>Tịnh tín bị rúng động,</p><p>Trí tuệ không viên thành.</p><p>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 32,
      Content:
        "<p>Tâm không đầy tràn dục,</p><p>Tâm không hận công phá,</p><p>Đoạn tuyệt mọi thiện ác,</p><p>Kẻ tỉnh không sợ hãi,</p><p>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 33,
      Content:
        "<p>Biết thân như đồ gốm,</p><p>Trú tâm như thành trì,</p><p>Chống ma với gươm trí,</p><p>Giữ chiến thắng không tham</p><p>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 34,
      Content:
        "<p>Không bao lâu thân này,</p><p>Sẽ nằm dài trên đất,</p><p>Bị vất bỏ, vô thức,</p><p>Như khúc cây vô dụng.</p><p>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 35,
      Content:
        "<p> Kẻ thù hại kẻ thù,</p><p>Oan gia hại oan gia,</p><p>Không bằng tâm hướng tà,</p><p>Gây ác cho tự thân.</p><p>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 36,
      Content:
        "<p>Điều mẹ, cha, bà con,</p><p>Không có thể làm được,</p><p>Tâm hướng chánh làm được,</p><p>Làm được tốt đẹp hơn.</p><p>Trích Kinh Pháp Cú (Phẩm Tâm)</p>",
    },
    {
      ID: 37,
      Content:
        "<p>Ai chinh phục đất này,</p><p>Dạ-ma thiên giới này,</p><p>Ai khéo giảng Pháp cú,</p><p>Như người khéo hái hoa .</p><p>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 38,
      Content:
        "<p>Hữu học chinh phục đất,</p><p>Dạ-ma thiên giới này,</p><p>Hữu học giảng Pháp cú,</p><p>Như người khéo hái hoa.</p><p>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 39,
      Content:
        "<p>Biết thân như bọt nước,</p><p>Ngộ thân là như huyễn,</p><p>Bẻ tên hoa của Ma,</p><p>Vượt tầm mắt Thần chết.</p><p>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 40,
      Content:
        "<p>Người nhặt các loại hoa,</p><p>Ý đắm say, tham nhiễm,</p><p>Bị Thần chết mang đi,</p><p>Như lụt trôi làng ngủ.</p><p>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 41,
      Content:
        "<p>Như ong đến với hoa,</p><p>Không hại sắc và hương,</p><p>Che chở hoa, lấy nhụy.</p><p>Bậc Thánh đi vào làng.</p><p>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 42,
      Content:
        "<p>Không nên nhìn lỗi người,</p><p>Người làm hay không làm.</p><p>Nên nhìn tự chính mình.</p><p>Có làm hay không làm.</p><p>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 43,
      Content:
        "<p>Như bông hoa tươi đẹp,</p><p>Có sắc nhưng không hương.</p><p>Cũng vậy, lời khéo nói,</p><p>Không làm, không kết quả.</p><p>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 44,
      Content:
        "<p>Như bông hoa tươi đẹp,</p><p>Có sắc lại thêm hương,</p><p>Cũng vậy, lời khéo nói,</p><p>Có làm, có kết quả.</p><p>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 45,
      Content:
        "<p>Như từ một đống hoa,</p><p>Nhiều tràng hoa được làm.</p><p>Cũng vậy, thân sanh tử,</p><p>Làm được nhiều việc lành.</p><p>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 46,
      Content:
        "<p>Hoa chiên đàn, già la,</p><p>Hoa sen, hoa vũ quý,</p><p>Giữa những hương hoa ấy,</p><p>Giới hương là vô thượng.</p><p>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 47,
      Content:
        "<p>Ít giá trị hương này,</p><p>Hương già la, chiên đàn,</p><p>Chỉ hương người đức hạnh,</p><p>Tối thượng tỏa Thiên giới.</p><p>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 48,
      Content:
        "<p>Những ai có giới hạnh,</p><p>An trú không phóng dật,</p><p>Chánh trí, chơn giải thoát,</p><p>Ác ma không thấy đường.</p><p>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 49,
      Content:
        "<p>Như giữa đống rác nhớp,</p><p>Quăng bỏ trên đường lớn,</p><p>Chỗ ấy hoa sen nở,</p><p>Thơm sạch, đẹp ý người.</p><p>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 50,
      Content:
        "<p>Cũng vậy giữa quần sanh,</p><p>Uế nhiễm, mù, phàm tục,</p><p>Đệ tử bậc Chánh Giác,</p><p>Sáng ngời với Tuệ Trí.</p><p>Trích Kinh Pháp Cú (Phẩm Hoa)</p>",
    },
    {
      ID: 51,
      Content:
        "<p>Đêm dài cho kẻ thức,</p><p>Đường dài cho kẻ mệt,</p><p>Luân hồi dài, kẻ ngu,</p><p>Không biết chơn diệu pháp.</p><p>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 52,
      Content:
        "<p>Tìm không được bạn đường,</p><p>Hơn mình hay bằng mình,</p><p>Thà quyết sống một mình,</p><p>Không bè bạn kẻ ngu.</p><p>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 53,
      Content:
        "<p>Con tôi, tài sản tôi,</p><p>Người ngu sanh ưu não,</p><p>Tự ta, ta không có,</p><p>Con đâu, tài sản đâu.</p><p>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 54,
      Content:
        "<p>Người ngu nghĩ mình ngu,</p><p>Nhờ vậy thành có trí.</p><p>Người ngu tưởng có trí,</p><p>Thật xứng gọi chí ngu.</p><p>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 55,
      Content:
        "<p>Người ngu, dầu trọn đời,</p><p>Thân cận người có trí,</p><p>Không biết được Chánh pháp,</p><p>Như muỗng với vị canh.</p><p>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 56,
      Content:
        "<p>Người trí, dầu một khắc,</p><p>Thân cận người có trí,</p><p>Biết ngay chân diệu pháp,</p><p>Như lưỡi với vị canh.</p><p>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 57,
      Content:
        "<p>Người ngu si thiếu trí,</p><p>Tự ngã thành kẻ thù.</p><p>Làm các nghiệp không thiện,</p><p>Phải chịu quả đắng cay.</p><p>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 58,
      Content:
        "<p>Nghiệp làm không chánh thiện,</p><p>Làm rồi sanh ăn năn,</p><p>Mặt nhuốm lệ, khóc than,</p><p>Lãnh chịu quả dị thục.</p><p>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 59,
      Content:
        "<p>Và nghiệp làm chánh thiện,</p><p>Làm rồi không ăn năn,</p><p>Hoan hỷ, ý đẹp lòng,</p><p>Hưởng thọ quả dị thục.</p><p>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 60,
      Content:
        "<p>Người ngu nghĩ là ngọt,</p><p>Khi ác chưa chín muồi,</p><p>Ác nghiệp chín muồi rồi,</p><p>Người ngu chịu khổ đau.</p><p>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 61,
      Content:
        "<p>Tháng tháng với ngọn cỏ,</p><p>Người ngu có ăn uống</p><p>Không bằng phần mười sáu</p><p>Người hiểu pháp hữu vi.</p><p>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 62,
      Content:
        "<p>Nghiệp ác đã được làm,</p><p>Như sữa, không đông ngay,</p><p>Cháy ngầm theo kẻ ngu,</p><p>Như lửa tro che đậy.</p><p>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 63,
      Content:
        "<p>Tự nó chịu bất hạnh,</p><p>Khi danh đến kẻ ngu.</p><p>Vận may bị tổn hại,</p><p>Đầu nó bị nát tan.</p><p>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 64,
      Content:
        "<p>Ưa danh không tương xứng,</p><p>Muốn ngồi trước tỷ kheo,</p><p>Ưa quyền tại tịnh xá,</p><p>Muốn mọi người lễ kính.</p><p>Trích Kinh Pháp Cú (Phẩm Ngu)</p>",
    },
    {
      ID: 65,
      Content:
        "<p>Những người hay khuyên dạy,</p><p>Ngăn người khác làm ác,</p><p>Được người hiền kính yêu,</p><p>Bị người ác không thích.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 66,
      Content:
        "<p>Chớ thân với bạn ác,</p><p>Chớ thân kẻ tiểu nhân.</p><p>Hãy thân người bạn lành,</p><p>Hãy thân bậc thượng nhân.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 67,
      Content:
        "<p>Pháp hỷ đem an lạc,</p><p>Với tâm tư thuần tịnh,</p><p>Người trí thường hoan hỷ,</p><p>Với pháp bậc Thánh thuyết.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 68,
      Content:
        "<p></p><p>Người trị thủy dẫn nước,</p><p>Kẻ làm tên nắn tên,</p><p>Người thợ mộc uốn gỗ,</p><p>Bậc trí nhiếp tự thân.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 69,
      Content:
        "<p>Như đá tảng kiên cố,</p><p>Không gió nào dao động,</p><p>Cũng vậy, giữa khen chê,</p><p>Người trí không giao động.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 70,
      Content:
        "<p>Như hồ nước sâu thẳm,</p><p>Trong sáng, không khuấy đục,</p><p>Cũng vậy, nghe chánh pháp,</p><p>Người trí hưởng tịnh lạc.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 71,
      Content:
        "<p>Người hiền bỏ tất cả,</p><p>Người lành không bàn dục,</p><p>Dầu cảm thọ lạc khổ,</p><p>Bậc trí không vui buồn.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 72,
      Content:
        "<p>Ít người giữa nhân loại,</p><p>Đến được bờ bên kia</p><p>Còn số người còn lại,</p><p>Xuôi ngược chạy bờ này.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 73,
      Content:
        "<p>Hãy cầu vui Niết Bàn,</p><p>Bỏ dục, không sở hữu,</p><p>Kẻ trí tự rửa sạch,</p><p>Cấu uế từ nội tâm.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 74,
      Content:
        "<p>Đích đã đến, không sầu,</p><p>Giải thoát ngoài tất cả,</p><p>Đoạn trừ mọi buộc ràng,</p><p>Vị ấy không nhiệt não.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 75,
      Content:
        "<p>Tự sách tấn, chánh niệm,</p><p>Không thích cư xá nào,</p><p>Như ngỗng trời rời ao,</p><p>Bỏ sau mọi trú ẩn.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 76,
      Content:
        "<p>Ai nhiếp phục các căn,</p><p>Như đánh xe điều ngự,</p><p>Mạn trừ, lậu hoặc dứt,</p><p>Người vậy, Chư Thiên mến.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 77,
      Content:
        "<p>Như đất, không hiềm hận,</p><p>Như cột trụ, kiên trì,</p><p>Như hồ, không bùn nhơ,</p><p>Không luân hồi, vị ấy.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 78,
      Content:
        "<p>Người tâm ý an tịnh,</p><p>Lời an, nghiệp cũng an,</p><p>Chánh trí, chơn giải thoát,</p><p>Tịnh lạc là vị ấy.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 79,
      Content:
        "<p>Không tin, hiểu vô vi.</p><p>Người cắt mọi hệ lụy</p><p>Cơ hội tận, xã ly</p><p>Vị ấy thật tối thượng.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 80,
      Content:
        "<p>Làng mạc hay rừng núi</p><p>Thung lũng hay đồi cao,</p><p>La Hán trú chỗ nào,</p><p>Đất ấy thật khả ái.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 81,
      Content:
        "<p>Khả ái thay núi rừng,</p><p>Chỗ người phàm không ưa,</p><p>Vị ly tham ưa thích,</p><p>Vì không tìm dục lạc.</p><p>Trích Kinh Pháp Cú (Phẩm Hiền Trí)</p>",
    },
    {
      ID: 82,
      Content:
        "<p>Dầu nói ngàn ngàn lời,</p><p>Nhưng không gì lợi ích ,</p><p>Tốt hơn một câu nghĩa,</p><p>Nghe xong, được tịnh lạc.</p><p>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 83,
      Content:
        "<p> Dầu nói ngàn câu kệ</p><p>Nhưng không gì lợi ích,</p><p>Tốt hơn nói một câu,</p><p>Nghe xong, được tịnh lạc.</p><p>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 84,
      Content:
        "<p>Dầu tại bãi chiến trường</p><p>Thắng ngàn ngàn quân địch,</p><p>Tự thắng mình tốt hơn,</p><p>Thật chiến thắng tối thượng.</p><p>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 85,
      Content:
        "<p>Tự thắng, tốt đẹp hơn,</p><p>Hơn chiến thắng người khác.</p><p>Người khéo điều phục mình,</p><p>Thường sống tự chế ngự.</p><p>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 86,
      Content:
        "<p>Dầu Thiên Thần, Thát Bà,</p><p>Dầu Ma vương, Phạm Thiên</p><p>Không ai chiến thắng nổi,</p><p>Người tự thắng như vậy.</p><p>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 87,
      Content:
        "<p>Suốt năm cúng tế vật,</p><p>Để cầu phước ở đời.</p><p>Không bằng một phần tư</p><p>Kính lễ bậc chánh trực.</p><p>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 88,
      Content:
        "<p>Thường tôn trọng, kính lễ</p><p>Bậc kỳ lão trưởng thượng,</p><p>Bốn pháp được tăng trưởng:</p><p>Thọ, sắc, lạc, sức mạnh.</p><p>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 89,
      Content:
        "<p>Dầu sống một trăm năm</p><p>Ác giới, không thiền định,</p><p>Không bằng sống một ngày,</p><p>Trì giới, tu thiền định.</p><p>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 90,
      Content:
        "<p>Ai sống một trăm năm,</p><p>Ác tuệ, không thiền định.</p><p>Tốt hơn sống một ngày,</p><p>Có tuệ, tu thiền định.</p><p>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 91,
      Content:
        "<p>Ai sống một trăm năm,</p><p>Lười nhác không tinh tấn,</p><p>Tốt hơn sống một ngày</p><p>Tinh tấn tận sức mình.</p><p>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 92,
      Content:
        "<p>Ai sống một trăm năm,</p><p>Không thấy pháp sinh diệt,</p><p>Tốt hơn sống một ngày,</p><p>Thấy được pháp sinh diệt.</p><p>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 93,
      Content:
        "<p>Ai sống một trăm năm,</p><p>Không thấy câu bất tử,</p><p>Tốt hơn sống một ngày,</p><p>Thấy được câu bất tử.</p><p>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 94,
      Content:
        "<p></p><p>Ai sống một trăm năm,</p><p>Không thấy pháp tối thượng,</p><p>Tốt hơn sống một ngày,</p><p>Thấy được pháp tối thượng.</p><p>Trích Kinh Pháp Cú (Phẩm Ngàn)</p>",
    },
    {
      ID: 95,
      Content:
        "<p>Hãy gấp làm điều lành,</p><p>Ngăn tâm làm điều ác.</p><p>Ai chậm làm việc lành,</p><p>Ý ưa thích việc ác.</p><p>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 96,
      Content:
        "<p>Nếu người làm điều ác,</p><p>Chớ tiếp tục làm thêm.</p><p>Chớ ước muốn điều ác,</p><p>Chứa ác, tất chịu khổ.</p><p>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 97,
      Content:
        "<p>Nếu người làm điều thiện,</p><p>Nên tiếp tục làm thêm.</p><p>Hãy ước muốn điều thiện,</p><p>Chứa thiện, được an lạc.</p><p>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 98,
      Content:
        "<p>Người ác thấy là hiền.</p><p>Khi ác chưa chín muồi,</p><p>Khi ác nghiệp chín muồi,</p><p>Người ác mới thấy ác.</p><p>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 99,
      Content:
        "<p>Người hiền thấy là ác,</p><p>Khi thiện chưa chín muồi.</p><p>Khi thiện được chín muồi,</p><p>Người hiền thấy là thiện.</p><p>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 100,
      Content:
        "<p>Ít bạn đường, nhiều tiền,</p><p>Người buôn tránh đường hiểm.</p><p>Muốn sống, tránh thuốc độc,</p><p>Hãy tránh ác như vậy.</p><p>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 101,
      Content:
        "<p>Bàn tay không thương tích,</p><p>Có thể cầm thuốc độc.</p><p>Không thương tích, tránh độc,</p><p>Không làm, không có ác.</p><p>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 102,
      Content:
        "<p>Hại người không ác tâm,</p><p>Người thanh tịnh, không uế,</p><p>Tội ác đến kẻ ngu,</p><p>Như ngược gió tung bụi.</p><p>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 103,
      Content:
        "<p>Một số sinh bào thai,</p><p>Kẻ ác sinh địa ngục,</p><p>Người thiện lên cõi trời,</p><p>Vô lậu chứng Niết Bàn.</p><p>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 104,
      Content:
        "<p>Không trên trời, giữa biển,</p><p>Không lánh vào động núi,</p><p>Không chỗ nào trên đời,</p><p>Trốn được quả ác nghiệp.</p><p>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 105,
      Content:
        "<p>Không trên trời, giữa biển,</p><p>Không lánh vào động núi,</p><p>Không chỗ nào trên đời,</p><p>Trốn khỏi tay thần chết.</p><p>Trích Kinh Pháp Cú (Phẩm Ác)</p>",
    },
    {
      ID: 106,
      Content:
        "<p>Mọi người sợ hình phạt,</p><p>Mọi người sợ tử vong.</p><p>Lấy mình làm ví dụ</p><p>Không giết, không bảo giết.</p><p>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 107,
      Content:
        "<p>Mọi người sợ hình phạt,</p><p>Mọi người thích sống còn,</p><p>Lấy mình làm ví dụ,</p><p>Không giết, không bảo giết.</p><p>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 108,
      Content:
        "<p>Chúng sanh cầu an lạc,</p><p>Ai dùng trượng hại người,</p><p>Để tìm lạc cho mình,</p><p>Đời sau không được lạc.</p><p>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 109,
      Content:
        "<p>Chúng sanh cầu an lạc,</p><p>Không dùng trượng hại người,</p><p>Để tìm lạc cho mình,</p><p>Đời sau được hưởng lạc.</p><p>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 110,
      Content:
        "<p>Chớ nói lời ác độc,</p><p>Nói ác, bị nói lại,</p><p>Khổ thay lời phẩn nộ,</p><p>Đao trượng phản chạm mình.</p><p>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 111,
      Content:
        "<p>Người ngu làm điều ác,</p><p>Không ý thức việc làm.</p><p>Do tự nghiệp, người ngu</p><p>Bị nung nấu, như lửa.</p><p>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 112,
      Content:
        "<p>Dùng trượng phạt không trượng,</p><p>Làm ác người không ác.</p><p>Trong mười loại khổ đau,</p><p>Chịu gấp một loại khổ.</p><p>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 113,
      Content:
        "<p>Hoặc khổ thọ khốc liệt,</p><p>Thân thể bị thương vong,</p><p>Hoặc thọ bệnh kịch liệt,</p><p>Hay loạn ý tán tâm.</p><p>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 114,
      Content:
        "<p>Hoặc tai họa từ vua,</p><p>Hay bị vu trọng tội,</p><p>Bà con phải ly tán,</p><p>Tài sản bị nát tan.</p><p>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 115,
      Content:
        "<p>Hoặc phòng ốc nhà cửa</p><p>Bị hỏa tai thiêu đốt.</p><p>Khi thân hoại mạng chung,</p><p>Ác tuệ sanh địa ngục.</p><p>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 116,
      Content:
        "<p>Thật khó tìm ở đời,</p><p>Người biết thẹn, tự chế,</p><p>Biết tránh né chỉ trích</p><p>Như ngựa hiền tránh roi.</p><p>Trích Kinh Pháp Cú (Phẩm Hình Phạt)</p>",
    },
    {
      ID: 117,
      Content:
        "<p>Cười gì, hân hoan gì,</p><p>Khi đời mãi bị thiêu ?</p><p>Bị tối tăm bao trùm,</p><p>Sao không tìm ngọn đèn ?</p><p>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 118,
      Content:
        "<p>Hãy xem bong bóng đẹp,</p><p>Chỗ chất chứa vết thương,</p><p>Bệnh hoạn nhiều suy tư,</p><p>Thật không gì trường cửu.</p><p>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 119,
      Content:
        "<p>Sắc này bị suy già,</p><p>Ổ tật bệnh, mỏng manh,</p><p>Nhóm bất tịnh, đỗ vỡ,</p><p>Chết chấm dứt mạng sống.</p><p>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 120,
      Content:
        "<p>Như trái bầu mùa thu,</p><p>Bị vất bỏ quăng đi,</p><p>Nhóm xương trắng bồ câu,</p><p>Thấy chúng còn vui gì ?</p><p>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 121,
      Content:
        "<p>Thành này làm bằng xương,</p><p>Quét tô bằng thịt máu,</p><p>Ở đây già và chết,</p><p>Mạn, lừa đảo chất chứa.</p><p>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 122,
      Content:
        "<p>Người ít nghe kém học,</p><p>Lớn già như trâu đực.</p><p>Thịt nó tuy lớn lên,</p><p>Nhưng tuệ không tăng trưởng.</p><p>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 123,
      Content:
        "<p>Lang thang bao kiếp sống</p><p>Ta tìm nhưng chẳng gặp,</p><p>Người xây dựng nhà này,</p><p>Khổ thay, phải tái sanh.</p><p>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 124,
      Content:
        "<p>Lúc trẻ, không Phạm hạnh,</p><p>Không tìm kiếm bạc tiền.</p><p>Như cò già bên ao,</p><p>Ủ rũ, không tôm cá.</p><p>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 125,
      Content:
        "<p>Lúc trẻ không phạm hạnh,</p><p>Không tìm kiếm bạc tiền,</p><p>Như cây cung bị gẫy,</p><p>Thở than những ngày qua.</p><p>Trích Kinh Pháp Cú (Phẩm Già)</p>",
    },
    {
      ID: 126,
      Content:
        "<p>Nếu biết yêu tự ngã,</p><p>Phải khéo bảo vệ mình,</p><p>Người trí trong ba canh,</p><p>Phải luôn luôn tỉnh thức.</p><p>Trích Kinh Pháp Cú (Phẩm Tự Ngã)</p>",
    },
    {
      ID: 127,
      Content:
        "<p>Trước hết tự đặt mình,</p><p>Vào những gì thích đáng.</p><p>Sau mới giáo hóa người,</p><p>Người trí khỏi bị nhiễm.</p><p>Trích Kinh Pháp Cú (Phẩm Tự Ngã)</p>",
    },
    {
      ID: 128,
      Content:
        "<p>Hãy tự làm cho mình,</p><p>Như điều mình dạy người.</p><p>Khéo tự điều, điều người,</p><p>Khó thay, tự điều phục !</p><p>Trích Kinh Pháp Cú (Phẩm Tự Ngã)</p>",
    },
    {
      ID: 129,
      Content:
        "<p>Tự mình y chỉ mình,</p><p>Nào có y chỉ khác.</p><p>Nhờ khéo điều phục mình,</p><p>Được y chỉ khó được.</p><p>Trích Kinh Pháp Cú (Phẩm Tự Ngã)</p>",
    },
    {
      ID: 130,
      Content:
        "<p>Điều ác tự mình làm,</p><p>Tự mình sanh, mình tạo.</p><p>Nghiền nát kẻ ngu si,</p><p>Như kim cương, ngọc báu.</p><p>Trích Kinh Pháp Cú (Phẩm Tự Ngã)</p>",
    },
    {
      ID: 131,
      Content:
        "<p>Phá giới quá trầm trọng,</p><p>Như dây leo bám cây</p><p>Gieo hại cho tự thân,</p><p>Như kẻ thù mong ước.</p><p>Trích Kinh Pháp Cú (Phẩm Tự Ngã)</p>",
    },
    {
      ID: 132,
      Content:
        "<p>Dễ làm, các điều ác,</p><p>Dễ làm tự hại mình.</p><p>Còn việc lành, việc tốt,</p><p>Thật tối thượng khó làm.</p><p>Trích Kinh Pháp Cú (Phẩm Tự Ngã)</p>",
    },
    {
      ID: 133,
      Content:
        "<p>Chớ có theo pháp hạ liệt,</p><p>Chớ sống mặc, buông lung,</p><p>Chớ tin theo tà kiến,</p><p>Chớ tăng trưởng tục trần.</p><p>Trích Kinh Pháp Cú (Phẩm Tự Ngã)</p>",
    },
    {
      ID: 134,
      Content:
        "<p>Dầu lợi người bao nhiêu,</p><p>Chớ quên phần tư lợi</p><p>Nhờ thắng tri tư lợi,</p><p>Hãy chuyên tâm lợi mình.</p><p>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
    {
      ID: 135,
      Content:
        "<p>Nỗ lực, chớ phóng dật !</p><p>Hãy sống theo chánh hạnh,</p><p>Người chánh hạnh hưởng lạc,</p><p>Cả đời này, đời sau.</p><p>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
    {
      ID: 136,
      Content:
        "<p>Hãy khéo sống chánh hạnh,</p><p>Chớ sống theo tà hạnh !</p><p>Người chánh hạnh hưởng lạc,</p><p>Cả đời này, đời sau.</p><p>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
    {
      ID: 137,
      Content:
        "<p>Hãy nhìn như bọt nước,</p><p>Hãy nhìn như cảnh huyển !</p><p>Quán nhìn đời như vậy,</p><p>Thần chết không bắt gặp.</p><p>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
    {
      ID: 138,
      Content:
        "<p>Hãy đến nhìn đời này,</p><p>Như xe vua lộng lẫy,</p><p>Người ngu mới tham đắm,</p><p>Kẻ trí nào đắm say.</p><p>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
    {
      ID: 139,
      Content:
        "<p>Ai sống trước buông lung,</p><p>Sau sống không phóng dật,</p><p>Chói sáng rực đời này.</p><p>Như trăng thoát mây che.</p><p>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
    {
      ID: 140,
      Content:
        "<p>Ai dùng các hạnh lành,</p><p>Làm xóa mờ nghiệp ác,</p><p>Chói sáng rực đời này,</p><p>Như trăng thoát mây che.</p><p>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
    {
      ID: 141,
      Content:
        "<p>Đời này thật mù quáng,</p><p>Ít kẻ thấy rõ ràng.</p><p>Như chim thoát khỏi lưới,</p><p>Rất ít đi thiên giới.</p><p>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
    {
      ID: 142,
      Content:
        "<p>Như chim thiên nga bay,</p><p>Thần thông liệng giữa trời,</p><p>Chiến thắng Ma, Ma quân,</p><p>Kẻ trí thoát đời này.</p><p>Trích Kinh Pháp Cú (Phẩm Thế Gian)</p>",
    },
  ]


export default {
  Data: quotes
}