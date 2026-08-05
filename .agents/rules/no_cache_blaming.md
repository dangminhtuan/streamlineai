<RULE>
## Tuyệt đối không đổ lỗi cho Cache (No Cache Blaming)
- **Context**: Khi mã nguồn (code) không hoạt động như mong đợi hoặc giao diện không cập nhật sau khi đã lưu/build.
- **Constraint**: TUYỆT ĐỐI KHÔNG ĐƯỢC đổ lỗi cho Cache trình duyệt và không bao giờ yêu cầu người dùng phải tự đi xóa Cache.
- **Implementation**: 
  - AI phải tự nhận trách nhiệm và tự rà soát lại thật kỹ 100% mã nguồn.
  - Tư duy theo hướng tìm ra nguyên nhân gốc rễ bên trong code (đặc biệt là tính tương thích của CSS/JS, cơ chế rendering, hoặc xung đột môi trường).
  - Nếu cần kiểm chứng xem code mới đã thực sự được tải lên hay chưa, hãy mạnh dạn yêu cầu người dùng mở DevTools (Inspect) chụp ảnh màn hình các tab Elements/Network để cùng phân tích, thay vì phỏng đoán mù quáng.
</RULE>
