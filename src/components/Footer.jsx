import layoutCandlePlant from '../assets/img/layout_candle_plant.png'
import layoutCup from '../assets/img/layout_cup.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left" />
      <div className="footer-actions footer-actions--hidden" />
      <div className="footer-decor" aria-hidden="true">
        <img src={layoutCup} alt="" className="footer-decor__cup" />
        <img src={layoutCandlePlant} alt="" className="footer-decor__candleplant" />
      </div>
    </footer>
  )
}

export default Footer
