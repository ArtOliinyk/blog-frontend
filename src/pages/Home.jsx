import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';
import { fetchPosts, fetchTags } from '../redux/slices/posts';

export const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.auth.data);
  const { posts, tags } = useSelector(state => state.posts);

  const isPostsLoading = posts.status === 'loading';
  const isTagsLoading = tags.status === 'loading';

  React.useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, []);

  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Нові" />
        <Tab label="Популярні" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
            isPostsLoading ? (
              <Post key={index} isLoading={true} />
            ) : (
              <Post
                id={obj._id}
                title={obj.title}
                imageUrl={obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : ''}
                user={obj.user}
                createdAt={obj.createdAt}
                viewsCount={obj.viewsCount}
                commentsCount={2}
                tags={obj.tags}
                isEditable={userData?._id === obj.user._id}
              />
            ),

          )}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={tags.items} isLoading={isTagsLoading} />
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
          />
        </Grid>
      </Grid>
    </>
  );
};
