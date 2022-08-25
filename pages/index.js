import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList'


export default function Home({articles}) {
  console.log(articles)

  return (
   <>
    <Head>
      <title>Web dev News</title>
      <meta name="keywords" content="web development" />
    </Head>
    <ArticleList articles={articles}/>
   </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}