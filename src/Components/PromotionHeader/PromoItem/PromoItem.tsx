import FilmReInheri from '../../CompoInheri/FilmReInheri/FilmReInheri'
import './PromoItem.scss'

export default function PromoItem() {
  return (
    <div className='PromoItem'>
      <div className="mainSize">
        <div className='PromotionContainer'>

        </div>

        <div className='FilmRecomment'>
          <FilmReInheri />
        </div>
      </div>
    </div>
  )
}