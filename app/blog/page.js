'use client';
import {useState} from 'react';
import {Title} from '../site';

// Add `src: '/blog/your-image.jpg'` to any post to use a real image.
// Gemini images for each post go to public/blog/<img>; wire `src` once delivered.
const posts = [
  {d: '18 September', c: 'Mobile App', t: 'How I Built a Referral Bonus System That Drives Organic Growth.', bg: '#f3d9dc', icon: 'fa-user-plus', img: 'referral-bonus.jpg', src: '/blog/referral-bonus.jpg'},
  {d: '02 September', c: 'Mobile App', t: 'Coin Rewards & Redemption: Gamifying Repeat Grocery Orders.', bg: '#f6e3b4', icon: 'fa-coins', img: 'coin-rewards.jpg', src: '/blog/coin-rewards.jpg'},
  {d: '21 August', c: 'Engineering', t: 'Location-Restricted Ordering: Solving Delivery Zones the Right Way.', bg: '#d4eef2', icon: 'fa-location-dot', img: 'delivery-zones.jpg', src: '/blog/delivery-zones.jpg'},
  {d: '07 August', c: 'Engineering', t: 'Real-Time Order Tracking: From Cart to Doorstep.', bg: '#d9e4f5', icon: 'fa-truck-fast', img: 'order-tracking.jpg', src: '/blog/order-tracking.jpg'},
  {d: '24 July', c: 'SaaS', t: 'Building a Payroll Engine: Salary, Deductions & Payslips.', bg: '#e6d4f2', icon: 'fa-money-check-dollar', img: 'payroll-engine.jpg', src: '/blog/payroll-engine.jpg'},
  {d: '10 July', c: 'SaaS', t: 'Attendance & Leave Workflows HR Teams Actually Use.', bg: '#cfe8dc', icon: 'fa-calendar-check', img: 'attendance-leave.jpg', src: '/blog/attendance-leave.jpg'},
  {d: '26 June', c: 'Laravel', t: 'Designing RESTful APIs for Large-Scale ERP Systems.', bg: '#f1d1c4', icon: 'fa-plug', img: 'restful-apis.jpg', src: '/blog/restful-apis.jpg'},
  {d: '12 June', c: 'AI Research', t: 'Comparing LLMs and Transformers for Bangla Healthcare Paraphrasing.', bg: '#e8d3bd', icon: 'fa-brain', img: 'llm-paraphrasing.jpg', src: '/blog/llm-paraphrasing.jpg'},
  {d: '28 May', c: 'AI Research', t: 'BIDWESH: Building a Bangla Hate-Speech Detection Dataset.', bg: '#f2d6df', icon: 'fa-shield-halved', img: 'bidwesh-dataset.jpg', src: '/blog/bidwesh-dataset.jpg'},
  {d: '14 May', c: 'AI Research', t: 'Lessons from Low-Resource NLP: Working with Bangla.', bg: '#dfe6c8', icon: 'fa-language', img: 'bangla-nlp.jpg', src: '/blog/bangla-nlp.jpg'},
  {d: '30 April', c: 'Laravel', t: 'Performance Tuning in Laravel: What Actually Moves the Needle.', bg: '#f9d9c9', icon: 'fa-gauge-high', img: 'laravel-performance.jpg', src: '/blog/laravel-performance.jpg'},
  {d: '16 April', c: 'Career', t: 'From WordPress to Full-Stack: My Journey as a Software Engineer.', bg: '#3c6a55', icon: 'fa-route', img: 'fullstack-journey.jpg', src: '/blog/fullstack-journey.jpg'}
];
const tone = ['pink', 'blue', 'blue', 'pink'];

export default function Blog() {
  const [page, setPage] = useState(0);
  const shown = posts.slice(page * 4, page * 4 + 4);
  return <>
    <div className="content-section">
      <Title>Blogs</Title>
      <div className="blog-grid">
        {shown.map((p, i) => <article className={'blog ' + tone[i]} key={p.t}>
          <div className="blog-image" style={{background: p.bg}}>
            {p.src ? <img src={p.src} alt={p.t} /> : <i className={'fa-solid ' + p.icon} />}
          </div>
          <small>{p.d} <em>•</em> {p.c}</small>
          <h3>{p.t}</h3>
        </article>)}
      </div>
      <div className="dots">
        {[0, 1, 2].map(n => <button key={n} aria-label={'Page ' + (n + 1)} className={page === n ? 'on' : ''} onClick={() => setPage(n)} />)}
      </div>
    </div>
  </>;
}
