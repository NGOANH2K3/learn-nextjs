// import { GetServerSidePropsContext, GetStaticProps } from "next";
// import * as React from 'react';

// export interface AboutListProps  {
//     about: []
// }

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export default function AboutList (props: AboutListProps) {
//   return (
//     <div>
//       About List Page
//     </div>
//   );
// }
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const getStaticProps: GetStaticProps<AboutListProps> =  async (context: GetServerSidePropsContext) =>{

//     // server-side
//     // build-time
    
//     console.log('static props')
//     const reponse = await fetch('https://api.vercel.app/blog')
//     const data = await reponse.json()
//     console.log(data)
//     return {
//         props: {
//             about : [],
//         },
//     }
// }
import * as React from "react";
import styles from '@/app/about/about.module.css'
 interface About {
  id: number;
  title: string;
}

export default async function AboutList() {
  const response = await fetch("https://api.vercel.app/blog", {
    cache: "no-store", // 👈 Không cache để lấy dữ liệu mới nhất mỗi lần truy cập
  });

  const data: About[] = await response.json();

  return (
    <div>
      <h1>About List Page</h1>
      <ul>
      {data.map((post) => (
          <li className={styles.list} key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

