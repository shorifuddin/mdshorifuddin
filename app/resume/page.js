import {Title, Icon} from '../site';

const education = [
  ['2022 - 2026', 'BSc in Computer Science & Engineering', ' - Southeast University,', 'Dhaka — CGPA 3.62'],
  ['2017 - 2022', 'Diploma in Computer Technology', ' - Feni Engineering Institute,', 'Feni — CGPA 3.68'],
  ['2016 - 2017', 'Secondary School Certificate (SSC)', ' - Feni Govt. Pilot High School,', 'Feni — GPA 4.14']
];
const experience = [
  ['2022 - Present', 'Software Engineer', '', 'KuiperZ, Dhaka'],
  ['2022', 'Software Developer', '', 'Bdcalling IT Ltd, Dhaka']
];
const skills = [['Laravel', 92, '#ed6e69'], ['PHP', 90, '#8d73ce'], ['MySQL', 88, '#5d84ce'], ['React Native', 85, '#bc5dea'], ['React.js', 84, '#ed6e69'], ['TypeScript', 80, '#5d84ce']];
const knowledges = ['RESTful APIs', 'ERP Systems', 'Mobile App Development', 'Database Design', 'Eloquent ORM', 'NLP', 'LLMs', 'Bangla NLP', 'Testing & Debugging', 'Performance Tuning', 'Agile', 'Problem Solving'];

function Column({icon, title, items, col}) {
  return <div>
    <h3 className="col-title"><Icon name={icon} size={26} sw={1.5} style={{color: 'var(--blue)'}} /> {title}</h3>
    {items.map(([date, name, rest, sub], i) =>
      <div className={'resume-item ' + ((col + i) % 2 === 0 ? 'pink' : 'blue')} key={name}>
        <small>{date}</small>
        <h4>{name}<span>{rest}</span></h4>
        <p>{sub}</p>
      </div>)}
  </div>;
}

export default function Resume() {
  return <>
    <div className="content-section">
      <Title>Resume</Title>
      <div className="two-col">
        <Column icon="cap" title="Education" items={education} col={0} />
        <Column icon="briefcase" title="Experience" items={experience} col={1} />
      </div>
    </div>
    <div className="skills-band">
      <div className="two-col">
        <div>
          <h3 className="col-title plain">Working Skills</h3>
          {skills.map(([n, v, c]) => <div className="skill" key={n}>
            <div><span>{n}</span><span>{v}%</span></div>
            <div className="bar"><i style={{width: v + '%', background: c}} /></div>
          </div>)}
        </div>
        <div>
          <h3 className="col-title plain">Knowledges</h3>
          <div className="tags">{knowledges.map(k => <span key={k}>{k}</span>)}</div>
        </div>
      </div>
    </div>
  </>;
}
