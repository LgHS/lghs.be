import DateFormatter from './date-formatter'

type Props = {
  title: string
  coverImage: string
  date?: string
  subtitle?: string
}

const PostHeader = ({ title, coverImage, date, subtitle }: Props) => {
  return (
    <section className={'hero is-primary has-background' + (coverImage ? ' is-medium' : '')}>
      {coverImage ? (<img src={coverImage} alt={title} className="hero-background is-transparent"/>) : ''}
      <div className="hero-body">
        <div className="container">
          <p className="title">
            {title}
          </p>
          <div style={{marginTop: '-1.25rem'}}>
          {subtitle ? (<div className="subtitle">{subtitle}</div>) : <></>}
          {date ? (<div className="subtitle date"><DateFormatter dateString={date} /></div>) : <></>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostHeader
