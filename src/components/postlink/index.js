import React from 'react'
import { Link } from "gatsby"
import { rhythm } from "../../utils/typography"

import './style.css'

const Postlink = ({ node, linkTo }) => {

  const title = node.frontmatter.title || node.fields.slug
  console.log(title);
  return (
    <div key={node.fields.slug} class="row">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarXVizXAU2FbadLBuabgg2kOFRCR5Y-V815ScmhFowgE5H-05"
        class="post-image"/>
      <div class="post-description">

        <Link style={{ boxShadow: `none` }} to={linkTo + node.fields.slug}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
              color: "#CEF",
            }}
          >
            {title}
          </h3>

        </Link>
        <small>{node.frontmatter.date}</small>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />

      </div>
    </div>
  )
}

export default Postlink;