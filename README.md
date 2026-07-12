# The Moods Coffee & Tea Garden - Giao diện Thực đơn & Không gian (Phần 1)

Dự án này là trang web giới thiệu thực đơn nước uống và không gian sân vườn cho quán cà phê **The Moods Coffee & Tea Garden**. Trang web được xây dựng bằng React.js, TypeScript, Tailwind CSS v4, và Framer Motion.

---

## 📋 Yêu cầu hệ thống
Để chạy dự án này trên máy tính của bạn, cần cài đặt sẵn:
- **Node.js** (Khuyến nghị phiên bản LTS mới nhất - v18 hoặc v20+)
- Trình quản lý gói **npm** (được cài đặt sẵn đi kèm với Node.js)

---

## 🚀 Hướng dẫn khởi chạy dự án

### Bước 1: Mở thư mục dự án
Mở cửa sổ Command Prompt, PowerShell hoặc Terminal tại đường dẫn thư mục dự án:
```bash
e:\PROJECT-2026\WEBSITE_THE MOODS
```

### Bước 2: Cài đặt các gói phụ thuộc (Dependencies)
Tải và cài đặt toàn bộ thư viện cần thiết bằng lệnh:
```bash
npm install
```

### Bước 3: Khởi chạy máy chủ phát triển cục bộ (Development Server)
Chạy dự án ở chế độ phát triển để xem thay đổi trực tiếp:
```bash
npm run dev
```
Sau khi chạy lệnh, màn hình console sẽ hiển thị đường dẫn truy cập cục bộ (thông thường là `http://localhost:5173`). Hãy mở trình duyệt và truy cập liên kết này để trải nghiệm trang web.

---

## 📦 Biên dịch sản phẩm (Production Build)

Khi muốn đóng gói toàn bộ mã nguồn thành sản phẩm hoàn chỉnh để đưa lên máy chủ Hosting (hoặc deploy GitHub Pages), thực hiện các lệnh sau:

1. **Biên dịch và tối ưu hóa mã nguồn:**
   ```bash
   npm run build
   ```
   *Kết quả biên dịch sẽ nằm trong thư mục `/dist`.*

2. **Chạy thử bản biên dịch trên máy cục bộ:**
   ```bash
   npm run preview
   ```
   *Giúp kiểm tra xem bản phân phối cuối cùng hoạt động có đúng như mong muốn trước khi đưa lên hosting.*

---

## 📁 Cấu trúc thư mục chính của dự án

- `/public`: Chứa dữ liệu thực đơn tĩnh `data/menu.json` và thư mục ảnh đồ uống `images/`.
- `/src`:
  - `/components`: Các thành phần giao diện nhỏ như `Navbar`, `Footer`, `ProductCard`, `ProductModal`.
  - `/sections`: Các phân đoạn giao diện lớn như banner `Hero` (bao gồm cả góc Không gian).
  - `App.tsx`: Điểm lắp ghép và điều phối trạng thái chính của ứng dụng.
  - `index.css`: Cấu hình Tailwind CSS v4 và font chữ.
  - `main.tsx`: File cấu hình khởi tạo dự án React.
