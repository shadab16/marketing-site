import React from 'react';
import { graphql } from 'gatsby';
import {
  SEO,
  ContentHeader,
  SitewideHeader,
  SitewideFooter,
} from 'components';
import { TableOfContentsSidebar } from 'components/Sidebar';
import { Sidebar } from 'components/legal-notice';

const LegalNotice = ({ data: { notice, site } }) => (
  <>
    <SEO
      title={`${notice.frontmatter.title} | ${site.siteMetadata.title}`}
      description={notice.frontmatter.description}
    />

    <SitewideHeader maxWidth="full" />

    <main className="md:flex pt-4 md:pt-0">
      <Sidebar />

      <article className="px-2 md:px-6 md:pt-7 md:flex-1">
        <div className="mb-8">
          <ContentHeader frontmatter={notice.frontmatter} dateKey="lastUpdated" />
        </div>

        <section
          className="prose prose-primary"
          dangerouslySetInnerHTML={{ __html: notice.html }}
        />
      </article>

      <TableOfContentsSidebar headings={notice.headings} />
    </main>

    <SitewideFooter maxWidth="full" />
  </>
);

export default LegalNotice;

export const pageQuery = graphql`
  query LegalNoticeBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }

    notice: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      headings(depth: h3) {
        id
        value
      }
      frontmatter {
        description
        title
        lastUpdated
      }
    }
  }
`;
