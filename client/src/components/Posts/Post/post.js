<<<<<<< HEAD
import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
=======
import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAltIcon";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHorizIcon";
import moment from "moment";
import useStyles from "./styles";
>>>>>>> 8b680e99e32aeaf38e87688d46354d24d96d3929

import { deletePost, likePost } from '../../../actions/posts';

<<<<<<< HEAD
import useStyles from './styles';

export default function Post({ post, setCurrentId }) {
=======
const Post = ({ post }) =>{
>>>>>>> 8b680e99e32aeaf38e87688d46354d24d96d3929
    const classes = useStyles();
    const dispatch = useDispatch()
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
<<<<<<< HEAD
                <Button style={{color: 'white'}} size="small" onClick={() => {setCurrentId(post._id)}}>
                    <MoreHorizIcon fontSize='default' />
                </Button>
=======
            <Button style={{color:"grey"}} size="small" onClick={() =>{}}>
                <MoreHorizIcon fontSize="default" />
            </Button> 
>>>>>>> 8b680e99e32aeaf38e87688d46354d24d96d3929
            </div>
            <div className={classes.details}>
                <Typography variant= "body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    &nbsp; Delete &nbsp;
                </Button>
            </CardActions>
        </Card>
    )
}
