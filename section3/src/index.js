import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './commentDetail';
import faker from 'faker';
import ApprovalCard from './approvalCard'

const App = () => {
  return (
    <div className="ui container comments"><br />
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          date="Today at 8:00PM"
          text="hello"
          image={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          date="Today at 1:00PM"
          text="good blog"
          image={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          date="Today at 9:00PM"
          text="not bad!"
          image={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

