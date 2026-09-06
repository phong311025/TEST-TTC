import { Document, News, Partner, Program } from '../types';

export const mockNews: News[] = [
  {
    id: '1',
    slug: 'hoc-bong-tam-tai-chinh-2024',
    title: 'Công bố chương trình Học bổng Tâm - Tài - Chính năm 2024',
    category: 'Học bổng',
    date: '15/03/2024',
    excerpt: 'Quỹ chính thức khởi động chương trình học bổng thường niên dành cho sinh viên có thành tích học tập xuất sắc và sinh viên vượt khó vươn lên.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '2',
    slug: 'ho-tro-nghien-cuu-khoa-hoc-sinh-vien',
    title: 'Phát động chương trình đồng hành cùng sinh viên nghiên cứu khoa học',
    category: 'Nghiên cứu',
    date: '10/03/2024',
    excerpt: 'Quỹ DTDF cam kết tài trợ cho các đề tài nghiên cứu khoa học sinh viên có tính ứng dụng cao và mang lại giá trị thực tiễn.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '3',
    slug: 'toa-dam-dinh-huong-nghe-nghiep',
    title: 'Tọa đàm: Định hướng nghề nghiệp cho sinh viên khối Kinh tế - Tài chính',
    category: 'Hoạt động Quỹ',
    date: '05/03/2024',
    excerpt: 'Sự kiện quy tụ nhiều chuyên gia hàng đầu chia sẻ kinh nghiệm và định hướng cho sinh viên trước ngưỡng cửa hội nhập.',
    image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '4',
    slug: 'uom-mam-khoi-nghiep-sang-tao',
    title: 'Khởi động quỹ hỗ trợ đổi mới sáng tạo',
    category: 'Đổi mới sáng tạo',
    date: '28/02/2024',
    excerpt: 'Nguồn lực mới dành riêng cho các dự án khởi nghiệp tiềm năng của sinh viên, đặc biệt trong lĩnh vực công nghệ tài chính.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
  },
];

export const mockPrograms: Program[] = [
  {
    id: '1',
    slug: 'hoc-bong-tam-tai-chinh',
    title: '[CHƯƠNG TRÌNH MẪU] Học bổng Tâm – Tài – Chính',
    category: 'Sinh viên',
    targetAudience: 'Sinh viên có thành tích xuất sắc và sinh viên có hoàn cảnh đặc biệt',
    duration: 'Tháng 9 hằng năm',
    status: 'SẮP MỞ',
    description: 'Chương trình học bổng toàn diện nhằm hỗ trợ tài chính và phát triển năng lực cho sinh viên.',
    conditions: ['Điểm trung bình tích lũy từ 3.2/4.0', 'Tích cực tham gia hoạt động xã hội'],
    documents: ['Đơn đăng ký', 'Bảng điểm', 'Giấy chứng nhận hoạt động'],
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '2',
    slug: 'dong-hanh-nghien-cuu-tre',
    title: '[CHƯƠNG TRÌNH MẪU] Đồng hành cùng nghiên cứu trẻ',
    category: 'Nghiên cứu',
    targetAudience: 'Nhóm sinh viên thực hiện đề tài nghiên cứu khoa học',
    duration: 'Tháng 3 - Tháng 6',
    status: 'ĐANG NHẬN HỒ SƠ',
    description: 'Tài trợ kinh phí và kết nối mentor cho các dự án nghiên cứu khoa học tiềm năng.',
    conditions: ['Đề tài có tính khả thi và ứng dụng thực tiễn', 'Được giảng viên bảo trợ'],
    documents: ['Thuyết minh đề tài', 'CV nhóm nghiên cứu'],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: '3',
    slug: 'uom-mam-sang-tao',
    title: '[CHƯƠNG TRÌNH MẪU] Ươm mầm sáng tạo sinh viên',
    category: 'Khởi nghiệp',
    targetAudience: 'Sinh viên có ý tưởng/dự án khởi nghiệp',
    duration: 'Thường xuyên',
    status: 'ĐÃ KẾT THÚC',
    description: 'Hỗ trợ vốn mồi và không gian làm việc cho các startup sinh viên giai đoạn đầu.',
    conditions: ['Ý tưởng độc đáo, giải quyết vấn đề thực tế', 'Đội ngũ cam kết'],
    documents: ['Pitch deck', 'Kế hoạch kinh doanh tóm tắt'],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop',
  }
];

export const mockDocuments: Document[] = [
  {
    id: '1',
    title: 'QUYẾT ĐỊNH SỐ 886/QĐ-BNV',
    date: '03/11/2023',
    authority: 'Bộ Nội vụ',
    description: 'Về việc cấp Giấy phép thành lập và công nhận Điều lệ Quỹ Phát triển giáo dục Tâm - Tài - Chính.',
    category: 'Quyết định'
  },
  {
    id: '2',
    title: 'Điều lệ Quỹ Phát triển giáo dục Tâm - Tài - Chính',
    date: '03/11/2023',
    authority: 'Hội đồng Quản lý Quỹ',
    description: 'Quy định về tôn chỉ, mục đích, tổ chức và hoạt động của Quỹ.',
    category: 'Điều lệ'
  }
];

export const mockPartners: Partner[] = [
  { id: '1', name: 'Đối tác 01', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop' },
  { id: '2', name: 'Đối tác 02', logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop' },
  { id: '3', name: 'Đối tác 03', logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop' },
  { id: '4', name: 'Đối tác 04', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop' }
];
