import React, { useState } from 'react';
import moment from 'moment';
import { Grid, Divider } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import FeedbackButton from './FeedbackButton.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '75%'
  },
  user: {
    'text-align': 'right'
  },
  response: {
    'background-color': 'grey'
  },
  feedback: {
    padding: '9px 0px'
  }
}));

const ReviewTile = ({ review }) => {
  const classes = useStyles();
  const recommend = review.recommend ? 'I recommend this product' : null;
  const date = review.date.substring(0, 10);
  const formattedDate = moment(date, 'YYYY-MM-DD').format('MMMM D, YYYY');
  const response = review.response ? (
    <Grid
      className={classes.response}
      item
      xs={12}
      container
      direction='column'
    >
      <Grid item xs={12}>
        Response from seller:
      </Grid>
      <Grid item xs={12}>
        {review.response}
      </Grid>
    </Grid>
  ) : null;


  return (
    <Grid className={classes.root} container spacing={3} direction='column'>
      <Grid item xs={12} container justifyContent='space-between'>
        <Grid item xs={6}>
          <Rating
            name='read-only'
            value={review.rating}
            precision={0.25}
            readOnly
          />
        </Grid>
        <Grid className={classes.user} item xs={6}>
          {review.reviewer_name}, {formattedDate}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {review.summary}
      </Grid>
      <Grid item xs={12}>
        {review.body}
      </Grid>
      <Grid item xs={12}>
        {recommend}
      </Grid>
      {response}
      <Grid item xs={12} container>
        <Grid className={classes.feedback} item xs={4}>
          Was this helpful?
        </Grid>
        <FeedbackButton helpfulness={review.helpfulness} id={review.review_id} />
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default ReviewTile;
