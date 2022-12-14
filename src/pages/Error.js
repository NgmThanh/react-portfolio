import useLocoScroll from '../hooks/useLocoScroll';
import '../styles/Error.scss'

export default function Error() {

  useLocoScroll();

  return (
    <section id="error" className="error-section">
      <p className='font-white title title-section'>whoops, you're lost...</p>
    </section>
  )
}