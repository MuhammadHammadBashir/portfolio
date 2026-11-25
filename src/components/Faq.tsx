import { FAQ } from '../data/portfolio';
import './Faq.css';

export function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-head" data-motion-sequence="viewport" data-motion-profile="soft">
          <h2 className="type-section-lg">{FAQ.title}</h2>
          <p className="type-lead">{FAQ.lead}</p>
        </div>
        <div className="faq__list" data-motion-sequence="viewport" data-motion-profile="soft">
          {FAQ.items.map((item, i) => (
            <details key={item.q} className="faq__item" name="faq" open={i === 0}>
              <summary className="faq__summary">
                <h3 className="faq__question">{item.q}</h3>
                <span className="faq__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14" />
                  </svg>
                </span>
              </summary>
              <div className="faq__answer">
                <p className="type-small">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
