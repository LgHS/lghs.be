import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <section className="container mb-5">
      <div className="card">
        <div className="card-image">
          <figure>
            <img  className="image" src={coverImage} alt={title} style={{maxHeight: '360px'}}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <Link as={`/blog/${slug}`} href="/blog/[slug]">
                  <a className="hover:underline">{title}</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="content">
            {excerpt}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
