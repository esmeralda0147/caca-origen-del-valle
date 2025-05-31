import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/blogData';
import '../pages/Blog.css';

const Blog = () => {
    return (
        <div
            className="blog-container"
            style={{
                backgroundImage: `url(https://res.cloudinary.com/dlxp4pqso/image/upload/v1748712368/fondo_a7bxcr.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="blog-content">
                <h1 className="blog-title">LA CIENCIA DETRÁS DEL CACAO</h1>
                <div className="articles">
                    {blogData.map((article) => (
                        <div key={article.id} className="article-card">
                            <img src={article.image} alt={article.title} className="article-image" />
                            <h2 className="article-title">{article.title}</h2>
                            <p className="article-summary">{article.summary}</p>
                            <div className="read-more-box">
                                <Link to={`/blog/${article.id}`} className="read-more">
                                    Leer más
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;

