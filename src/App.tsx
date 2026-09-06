/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { News } from './pages/News';
import { NewsDetail } from './pages/NewsDetail';
import { Transparency } from './pages/Transparency';
import { LegalDocs } from './pages/LegalDocs';
import { Contact } from './pages/Contact';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Temporary placeholders for missing pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-[50vh] flex items-center justify-center pt-[124px]">
    <h1 className="heading-2 text-primary">{title} - Đang cập nhật</h1>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/ve-quy" element={<About />} />
        <Route path="/co-cau-to-chuc" element={<Placeholder title="Cơ cấu tổ chức" />} />
        <Route path="/hoat-dong" element={<Programs />} />
        <Route path="/ho-tro-tai-tro" element={<Programs />} />
        <Route path="/tin-tuc" element={<News />} />
        <Route path="/tin-tuc/:slug" element={<NewsDetail />} />
        <Route path="/minh-bach-tai-chinh" element={<Transparency />} />
        <Route path="/van-ban" element={<LegalDocs />} />
        <Route path="/doi-tac" element={<Home />} /> {/* Temporary redirect to home for partners */}
        <Route path="/lien-he" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
