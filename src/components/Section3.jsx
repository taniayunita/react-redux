import React from "react";
import Faker from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const Section3 = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="tania"
          time="Today 08:00 PM"
          contentPost="waw amazing...."
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="yunita"
          time="Today 09:00 PM"
          contentPost="That pretty nice"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="raisa"
          time="Today 10:00 PM"
          contentPost="Good Job girl"
        />
      </ApprovalCard>
    </div>
  );
};

export default Section3;
