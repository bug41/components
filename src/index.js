import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam"     
                timeAgo="Today at 4:45PM" 
                content="test1"
                avatar={faker.image.image()}
                />
            <CommentDetail 
                author="Nick"    
                timeAgo="Today at 2:55PM" 
                content="test2"
                avatar={faker.image.image()}
                />
            <CommentDetail 
                author="Kelly"   
                timeAgo="Yesterday at 5:55PM" 
                content="test3"
                avatar={faker.image.image()}
                />
        </div>
    );
}

ReactDOM.render(<App/> , document.querySelector('#root'))