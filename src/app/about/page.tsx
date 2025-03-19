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
import { GetStaticProps, GetStaticPropsContext } from "next";
import * as React from "react";
export interface About {
    id: number;
    title: string;
  }
  
export interface AboutListProps {
  abouts: []; // Định dạng lại mảng để tránh lỗi TypeScript
}


export default function AboutList(props: AboutListProps) {
  return( 
    <div>
        <h1>About List Page</h1>
        <ul>
            {abouts.map((about)=> {
                <li key={about.id}>{about.title}</li>
            })}
        </ul>
    </div>
    );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const StaticProps: GetStaticProps<AboutListProps> = async (context: GetStaticPropsContext) => {
  // server-side
  // build-time
  console.log("static props");

  const response = await fetch("https://api.vercel.app/blog");
  const data = await response.json();

  return {
    props: {
      abouts: data.data || [],// Đảm bảo dữ liệu không bị lỗi
    },
  };
};


