// import React from "react";
// import Stack from "../contentstackClient";
// import BlogList from "./components/BlogList";
// import HomeBanner from "./components/HomeBanner";
// import { getData } from "@/lib/getdata";

// async function fetchHomePageData() {
//   const Query = Stack.ContentType("home_page").Query();
//   const result = await Query.toJSON().find();
//   return result[0][0];
// }

// async function fetchBlogPosts() {
//   const Query = Stack.ContentType("blog_post").Query().toJSON();
//   const result = await Query.find();
//   return result[0];
// }

// export default async function Home() {
  
//   // const homeData = await fetchHomePageData();
//   // const blogPosts = await fetchBlogPosts();
//   const response = await getData({
//     contentType: "blog_post",
//     params:{
//       include_fallback:true,
//       include_branch:false
//     }

//   });
//   console.log(response)

//   return (
//     <main className="p-8">
//       <h1 className="text-3xl font-bold mb-4">{homeData.title}</h1>
//       <HomeBanner imageUrl={homeData.banner_image?.url} intro={homeData.intro_text} />
//       <BlogList posts={blogPosts} />
//     </main>
//   );
// };


import React from "react";
import HomeBanner from "./components/HomeBanner";
import BlogList from "./components/BlogList";
import { getData } from "@/lib/getdata";

export default async function Home() {
  // Fetch homepage data (array of 1 object)
  const homeResponse = await getData({
    contentType: "home_page",
    params: {
      include_fallback: true,
      include_branch: false,
    },
  });

  const homeData = homeResponse?.[0]; // safely extract the first object

  // Fetch blog posts
  const blogPosts = await getData({
    contentType: "blog_post",
    params: {
      include_fallback: true,
      include_branch: false,
      include: ['author'],
    },
  });

  console.log("new log",blogPosts);


  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{homeData?.title}</h1>
      <HomeBanner
        imageUrl={homeData?.image?.url || ""}
        intro={homeData?.welcome_to_the_blog_app || ""}
      />
      <BlogList posts={blogPosts || []} />
    </main>
  );
}
