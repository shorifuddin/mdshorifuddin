import {Title} from '../site';

export default function Contact() {
  return <>
    <div className="content-section">
      <Title>Contact</Title>
      <div className="contact-panel">
        <p className="lead">I'm Always Open To Discussing</p>
        <p className="lead-bold">new projects or partnerships.</p>
        <form action="mailto:mcshorif@gmail.com" method="post" encType="text/plain">
          <label className="field"><span>Name *</span><input type="text" name="name" required /></label>
          <label className="field"><span>Email *</span><input type="email" name="email" required /></label>
          <label className="field"><span>Message *</span><textarea name="message" rows="1" required /></label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </>;
}
