'use client';
import {useState} from 'react';
import {Title} from '../site';

// Add `src: '/works/your-image.png'` to any item to use a real image.
const works = [
  {t: 'Lotus Food Stores', src: '/works/lotus-food-stores.png', cat: 'Mobile App', h: 'l', bg: '#f9d49c', icon: 'fa-cart-shopping', sub: 'React Native · Grocery Delivery, Sydney'},
  {t: 'RyseNova', src: '/works/rysenova.png', cat: 'Web App', h: 's', bg: '#e0c3fa', icon: 'fa-cloud', sub: 'Laravel · Cloud HR & Payroll SaaS'},
  {t: 'ERP Systems', cat: 'Web App', h: 'm', bg: '#5ea6f5', icon: 'fa-warehouse', sub: 'Laravel · E-commerce & Hotel ERP'},
  {t: 'Ayers Food', src: '/works/ayers-food.png', cat: 'Web App', h: 'm', bg: '#f7d2ea', icon: 'fa-box-open', sub: 'Frozen & Dry Food Brand, Sydney'},
  {t: 'Hotel Grace Cox', src: '/works/hotel-grace-cox.png', cat: 'Web App', h: 'l', bg: '#8fe6fb', icon: 'fa-hotel', sub: 'Smart Hotel, Cox\u2019s Bazar'},
  {t: 'BIDWESH Research', src: '/works/bidwesh-research.png', cat: 'AI Research', h: 's', bg: '#f8d86a', icon: 'fa-brain', sub: 'NLP · Bangla Hate-Speech Dataset'}
];
const filters = ['All', 'Mobile App', 'Web App', 'AI Research'];

export default function Portfolio() {
  const [f, setF] = useState('All');
  const list = works.filter(w => f === 'All' || w.cat === f);
  const cols = [list.filter((_, i) => i % 2 === 0), list.filter((_, i) => i % 2 === 1)];
  return <>
    <div className="content-section">
      <Title>Portfolio</Title>
      <div className="filters">
        {filters.map(x => <button key={x} className={f === x ? 'selected' : ''} onClick={() => setF(x)}>{x}</button>)}
      </div>
      <div className="masonry">
        {cols.map((col, c) => <div className="m-col" key={c}>
          {col.map((w, r) => <article className={'work ' + ((c + r) % 2 === 0 ? 'pink' : 'blue')} key={w.t + r}>
            <div className={'work-image h-' + w.h} style={{background: w.bg}}>
              {w.src ? <img src={w.src} alt={w.t} /> : <i className={'fa-solid ' + w.icon} />}
            </div>
            <small>{w.sub}</small>
            <h3>{w.t}</h3>
          </article>)}
        </div>)}
      </div>
    </div>
  </>;
}
