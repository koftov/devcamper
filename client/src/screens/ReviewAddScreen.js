import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Alert, Card, Col, Spinner, Row, Input } from "react-bootstrap";
import { Link } from "react-router-dom";

function ReviewAddScreen({ match }) {
  const [bootcamp, setBootcamp] = useState(null);

  const { bootcamps, error, loading } = useSelector(
    (state) => state.bootcampList
  );

  useEffect(() => {
    setBootcamp(bootcamps.find((bootcamp) => bootcamp.id === match.params.id));
  }, [match, bootcamps]);

  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Row>
        <Col md={8} className="m-auto">
          <Card className="bg-white py-2 px-4">
            <Card.Body>
              <Link
                to={`/bootcamps/${match.params.id}`}
                className="btn btn-link text-secondary my-3"
              >
                <i className="fas fa-chevron-left" aria-hidden="true"></i>{" "}
                Bootcamp Info
              </Link>
              <h1 className="mb-2">DevWorks Bootcamp</h1>
              <h3 className="text-primary mb-4">Write a Review</h3>
              <p>
                You must have attended and graduated this bootcamp to review
              </p>
              <form onSubmit={submit}>
                <div className="form-group">
                  <label for="rating">
                    Rating: <span className="text-primary">8</span>
                  </label>
                  <input
                    type="range"
                    className="custom-range"
                    min="1"
                    max="10"
                    step="1"
                    value="8"
                    id="rating"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Review title"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="review"
                    rows="10"
                    className="form-control"
                    placeholder="Your review"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Submit Review"
                    className="btn btn-dark btn-block"
                  />
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ReviewAddScreen;