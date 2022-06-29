import React, { useEffect, useState } from 'react'
import './PortfolioBlog.css'
import Blog2 from '../../assets/portfolioAssets/Snap.png';

const API_TOKEN  : string = "21a7cbff-d852-45f1-b60d-6577b08ac2ea";
const HASHNODE_USERNAME : string = "codeboax";
type BlogProp = {
    id: number;
    text: string;
    title: string;
    slug: string;
    image: string;
}

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "${HASHNODE_USERNAME}") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                }
            }
        }
    }
`;


const PortfolioBlog = () => {

    async function gql(query:string, variables={}) {
        const data = await fetch('https://api.hashnode.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer-${API_TOKEN}`
            },
            body: JSON.stringify({
                query,
                variables
            })
        });
        return data.json();
    }


    function convertToBlogPost(data:
        {
            user:{
            publication:{
                posts:{
                    brief:string,
                    slug:string,
                    title:string
                    hostname:string
                }[]
            }
            } 
        }){
        return data.user.publication.posts.map((d,idx)=>({
            id: idx,
            title:d.title,
            text: d.brief,
            image: Blog2,
            slug: d.slug,
            hostname:d.hostname
        }))
    }
    const [blogPosts,setBlogPost] = useState<BlogProp[]>([])
    useEffect(()=>{
        const getBlogPost = async () => {
           const res  =  await gql(GET_USER_ARTICLES,{ page: 0 });
           setBlogPost(convertToBlogPost(res.data));
        }
        
        if(!blogPosts.length){
            getBlogPost()
        }
    },[blogPosts]);

return (
    <div className="portfolioBlog">
        <h1 className="portfolioBlog__header">Blog</h1>

        <div className="portfolioBlog__posts">
            {blogPosts.map((blogPost) => (
                <div className="portfolioBlog__post" key={blogPost.id}>
                    <div className="portfolioBlog__img">
                        <img src={blogPost.image} alt={`blogPost-${blogPost.id}`} />
                    </div>
                    <p><b>{blogPost.title}</b></p>
                    <p className="portfolioBlog__text">{blogPost.text}</p>
                    <a className='portfolioBlog__link' href={`https://caleberioluwa.hashnode.dev/${blogPost.slug}`}>{blogPost.slug}</a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PortfolioBlog