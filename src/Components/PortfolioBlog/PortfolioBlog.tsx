import React, { useState } from 'react'
import './PortfolioBlog.css'
import Blog2 from '../../assets/portfolioAssets/blog_post_2_full.jpg';
import Blog3 from '../../assets/portfolioAssets/blog_post_3_full.jpg';
import Blog5 from '../../assets/portfolioAssets/blog_post_5_full.jpg';
import Blog6 from '../../assets/portfolioAssets/blog_post_6_full.jpg';
import Blog7 from '../../assets/portfolioAssets/blog_post_7_full.jpg';
import Blog8 from '../../assets/portfolioAssets/blog_post_8_full.jpg';

type BlogProp = {
    id: number;
    text: string;
    date: string;
    category: string;
    image: string;
}

const PortfolioBlog = () => {
    const [blogPosts] = useState<BlogProp[]>([
        {
            id: 1,
            text: 'Best Practices for Animated Progress Indicators',
            date: '22 June 2020',
            image: Blog2,
            category: 'UI'
        },
        {
            id: 2,
            text: 'Designing the Perfect Feature Comparison Table',
            date: '22 June 2020',
            image: Blog3,
            category: 'E-Commerce'
        },
        {
            id: 3,
            text: 'An Overview of E-commerce Platforms',
            date: '22 June 2020',
            image: Blog5,
            category: 'E-Commerce'
        },
        {
            id: 4,
            text: 'Why I Switched to Sketch For UI Design',
            date: '22 June 2020',
            image: Blog6,
            category: 'Design'
        },
        {
            id: 5,
            text: 'Creative and Innovative Navigation Designs',
            date: '22 June 2020',
            image: Blog8,
            category: 'UI'
        },
        {
            id: 6,
            text: '6 Easy Steps to Better Icon Design',
            date: '22 June 2020',
            image: Blog7,
            category: 'Design'
        },
    ])
  return (
    <div className="portfolioBlog">
        <h1 className="portfolioBlog__header">Blog</h1>

        <div className="portfolioBlog__posts">
            {blogPosts.map((blogPost) => (
                <div className="portfolioBlog__post" key={blogPost.id}>
                    <div className="portfolioBlog__img">
                        <img src={blogPost.image} alt={`blogPost-${blogPost.id}`} />
                    </div>
                    <p>{blogPost.category}</p>
                    <p className="portfolioBlog__date">{blogPost.date}</p>
                    <p className="portfolioBlog__text">{blogPost.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PortfolioBlog