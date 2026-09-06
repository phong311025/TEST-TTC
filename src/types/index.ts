export interface News {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content?: string;
  image: string;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  targetAudience: string;
  duration: string;
  status: 'ĐANG NHẬN HỒ SƠ' | 'SẮP MỞ' | 'ĐÃ KẾT THÚC';
  description: string;
  conditions: string[];
  documents: string[];
  image: string;
  category: string;
}

export interface Document {
  id: string;
  title: string;
  date: string;
  authority: string;
  description: string;
  category: 'Quyết định' | 'Điều lệ' | 'Báo cáo' | 'Công khai';
  fileUrl?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface TransparencyReport {
  id: string;
  title: string;
  date: string;
  category: string;
  fileUrl?: string;
}
