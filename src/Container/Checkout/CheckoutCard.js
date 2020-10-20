import React from "react";
import { Segment, Grid, Image } from "semantic-ui-react";
const pStyle = {
  fontSize: "12px",
};
const CheckOutCard = (props) => {
  const { item } = props;
  return (
    <Segment>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column computer={3}>
            <Image src={item.images[0]} size="small" />
          </Grid.Column>
          <Grid.Column computer={9}>
            <h2>{item.company}</h2>

            <p>{item.title}</p>
            <p style={{ ...pStyle }}>qty : {item.quantity}</p>
          </Grid.Column>
          <Grid.Column computer={4}>
            <p style={{ ...pStyle }}>
              <b>${item.price}</b>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default CheckOutCard;
