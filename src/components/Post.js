// npm
import React from 'react';

// style
import '../style/Post.scss';

// component
import ErrorBoundary from './ErrorBoundary';
import PostLog from './PostLog';
import PostImg from './PostImg';
import PostTxt from './PostTxt';

function Post({id,log,img,txt}){
    // Post.json에서 img = "" 일 경우 -> div.img 삭제
    // Post.json에서 context = "" 일 경우 -> span.postCont 삭제
    // Post.json에서 img.length = 1일 경우 div.img > #paging, #remote 삭제

    return(
        <article id={id}>
            <ErrorBoundary>
                <PostLog log={log} />
            </ErrorBoundary>
            <ErrorBoundary>
                <PostImg img={img} />
            </ErrorBoundary>
            <ErrorBoundary>
                <PostTxt txt={txt} />
            </ErrorBoundary>
        </article>
    )
}

export default Post;