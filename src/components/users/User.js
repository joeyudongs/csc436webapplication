import React from "react";
import { Link } from "react-navi";
import { Card } from "react-bootstrap";

function User({username, userId}) {
  return (
    <Card >
      <Card.Body >
        <Card.Title>
            Username:
          <Link style={{ color: '#000000' }} href={`/users/${userId}`}>
            {username}
          </Link>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default React.memo(User);


