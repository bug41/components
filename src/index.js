import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">    
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are You Sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam"     
                    timeAgo="Today at 4:45PM" 
                    content="test1"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>            
            <ApprovalCard>
                <CommentDetail 
                    author="Nick"    
                    timeAgo="Today at 2:55PM" 
                    content="test2"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Kelly"   
                    timeAgo="Yesterday at 5:55PM" 
                    content="test3"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/> , document.querySelector('#root'))