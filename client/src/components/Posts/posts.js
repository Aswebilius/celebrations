import React from "react";
import Post from "./Post/post";
import { useSelector } from "react-redux";

import useStyles from "./style";

const Posts = ( { setCurrentId }) =>{
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
                <Grid key={post.id} item xs={12} sm={6}>
                <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
            ))}
            </Grid>
        )
    );
}
