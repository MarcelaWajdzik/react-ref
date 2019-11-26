import React from 'react';

class Blog extends React.Component {
    constructor() {
        super();
        this.state = {
            posts:
                [
                    { title: 'Tytuł ', content: "Lorem 1" },
                    { title: 'Podtytuł', content: "Lorem 2" }
                ]
        }
    }

    addPost = (e) => {
        e.preventDefault();

        /* refs globalny obiekt */

        let newPost = {
            title: this.inputTitle.value,
            content: this.refs.inputContent.value
        }
        this.setState(prevState => ({
            posts: [...prevState.posts, newPost]
        }))
    }
    render() {
        let postList = this.state.posts.map((post, index) => {
            return (
                <article key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </article>
            );
        });

        return (
            <div className="blog">
                {postList}
                <form onSubmit={this.addPost}>
                    <input type="text" placeholder="tytuł" ref={dowolnanazwa => this.inputTitle = dowolnanazwa} /> {/* this.inputTitle to jakby zmienna do ktorej przypisane zostane inputTitle */}
                    <input type="text" placeholder="treść" ref="inputContent" />
                    <button> Dodaj post</button>
                </form>

            </div>
        );
    };
};

export default Blog;