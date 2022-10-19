import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  date?: string
  excerpt: string
  slug: string
  type: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  type
}: Props) => {
  return (

    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure>
            <img  className="image" src={coverImage} alt={title}/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <Link as={`/${type}/${slug}`} href="/[type]/[slug]">
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
    </div>
  )
}

export default PostPreview
