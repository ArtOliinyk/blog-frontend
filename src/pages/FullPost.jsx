import React from "react";
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from '../axios'

import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";

export const FullPost = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    axios.get(`/posts/${id}`).then(res => {
      setData(res.data);
      setLoading(false);
    }).catch((err) => {
      console.warn(err);
      alert('Помилка при отриманні статті');
    });
  }, []);

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost />;
  }

  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl ? `http://localhost:4444${data.imageUrl}` : ''}
        // imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={2}
        tags={data.tags}
        isFullPost
      >
        <ReactMarkdown children={data.text} />
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: 'Василій',
              avatarUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstuki-druki.com%2Fbiofoto3%2Fdwayne-johnson-01.jpg&imgrefurl=https%3A%2F%2Fstuki-druki.com%2Fauthors%2Fjohnson-dwayne.php&tbnid=Jn3vXhoBUYuDqM&vet=12ahUKEwje353Qr8n4AhVyl4sKHQK9DSIQMygHegUIARC2AQ..i&docid=jfoJH9zaXpUHqM&w=300&h=400&q=%D0%B4%D1%83%D0%B5%D0%B9%D0%BD%20%D0%B4%D0%B6%D0%BE%D0%BD%D1%81%D0%BE%D0%BD&ved=2ahUKEwje353Qr8n4AhVyl4sKHQK9DSIQMygHegUIARC2AQ',
            },
            text: 'Test Comment',
          },
          {
            user: {
              fullName: 'Дмитро',
              avatarUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2F24studio.kiev.ua%2Fimages%2FA1%2Frock1.jpg.pagespeed.ce.jbnEaeHYwf.jpg&imgrefurl=https%3A%2F%2F24studio.kiev.ua%2Fnovosti%2F138-rock&tbnid=e580RPwxk7khUM&vet=12ahUKEwje353Qr8n4AhVyl4sKHQK9DSIQMygLegUIARC-AQ..i&docid=QytskXUI6hSxpM&w=2480&h=1772&q=%D0%B4%D1%83%D0%B5%D0%B9%D0%BD%20%D0%B4%D0%B6%D0%BE%D0%BD%D1%81%D0%BE%D0%BD&ved=2ahUKEwje353Qr8n4AhVyl4sKHQK9DSIQMygLegUIARC-AQ',
            },
            text: 'Слава Україні!',
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};
