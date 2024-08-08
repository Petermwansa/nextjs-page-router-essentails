//our-domain.com/news/[]

import { useRouter } from "next/router";



function DetailPage() {

  const router = useRouter();

  const newId = router.query.newsId;

  //if we have a db we can send a request to the db api 
  //to fetch news with that newsId 


  return (
      <h1>Details Page</h1>
  )
}


export default DetailPage;