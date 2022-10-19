import markdownStyles from './markdown-styles.module.css'
import Container from './container'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <section className="section">
      <Container>
        <div
            className={markdownStyles['markdown']}
            dangerouslySetInnerHTML={{ __html: content }}
          />
      </Container>
    </section>
  )
}

export default PostBody
