import { remark } from 'remark'
import html from 'remark-html'
import remarkDirective from 'remark-directive'
import {visit} from 'unist-util-visit'
import {h} from 'hastscript'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html, {sanitize: false}).use(remarkDirective).use(myRemarkPlugin).process(markdown)
  return result.toString()
}

function myRemarkPlugin() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {

          const data = node.data || (node.data = {})
          if (node.name === 'row') {

            const hast = h('div.row')
            data.hName = hast.tagName
            data.hProperties = hast.properties

          } else if (node.name === 'columns') {
            const hast = h('div.columns')
            data.hName = hast.tagName
            data.hProperties = hast.properties
          } else if (node.name === 'column') {
            const attributes = node.attributes || {}
            const size = attributes.size

            data.hName = 'div'
            let className = ['column']
            if(size) {
              className.push(size)
            }
            data.hProperties = {
              className
            }
          } else {
            const hast = h(node.name, node.attributes)
    
            data.hName = hast.tagName
            data.hProperties = hast.properties
          }


      }
    })
  }
}
