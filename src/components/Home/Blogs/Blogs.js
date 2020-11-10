import React from 'react';
import winson from '../../../images/winson.png'
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css'


const blogsData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown',
        author: 'Rashed Khabir',
        authorImg: winson,
        date: '23 April 2019',
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown',
        author: 'Dr Cudi',
        authorImg: winson,
        date: '23 April 2019',
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown',
        author: 'Dr John Mitchel',
        authorImg: winson,
        date: '23 April 2019',
    }

]

const Blogs = () => {
    return (
        <section className="blogs my-5">
        <div className="container">
            <div className="section-header text-center">
                 <h5 className="text-brand text-uppercase">our blog</h5>
                 <h1>From Our Blog News</h1>
            </div>
            <div className="card-deck mt-5">
                 {
                     blogsData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                 }
            </div>
        </div>
    </section>
    );
};

export default Blogs;