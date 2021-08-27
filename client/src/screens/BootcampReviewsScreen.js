import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Badge, Card, Col, Row, Spinner } from "react-bootstrap";
import { listBootcampDetails } from "../actions/bootcampActions";
import { REVIEW_LIST_RESET } from "../constants/reviewConstants";

const BootcampReviewsScreen = ({ match }) => {
  const { bootcampId } = match.params;

  const dispatch = useDispatch();

  const bootcampDetails = useSelector((state) => state.bootcampDetails);
  const { loading, error, bootcamp } = bootcampDetails;

  useEffect(() => {
    dispatch(listBootcampDetails(bootcampId));
    return () => dispatch({ type: REVIEW_LIST_RESET });
  }, [bootcampId, dispatch]);

  return (
    <Row>
      {error && (
        <Alert variant="danger" dismissible>
          {error}
        </Alert>
      )}
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <Col md={8}>
            <Link
              to={`/bootcamp/${bootcampId}`}
              className="btn btn-secondary my-3"
            >
              <i className="fas fa-chevron-left"></i> Bootcamp Info
            </Link>
            {bootcamp.reviews.map((review) => (
              <Card key={review._id} className="mb-3">
                <Card.Header className="bg-dark text-white">
                  {review.title}
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    Rating:{" "}
                    <span className="text-success">{review.rating}</span>
                  </Card.Title>
                  <Card.Text>{review.text}</Card.Text>
                  <p className="text-muted">Writtern By {review.user.name}</p>
                </Card.Body>
              </Card>
            ))}
          </Col>

          <Col md={4}>
            <h1 className="text-center my-4">
              <Badge
                pill
                className=" badge-secondary badge-success rounded-circle p-3"
              >
                {bootcamp && bootcamp.averageRating}
              </Badge>
              Rating
            </h1>
            <Link
              to={`/bootcamp/${bootcampId}/add-review`}
              className="btn btn-primary btn-block my-3"
            >
              <i className="fas fa-pencil-alt"></i> Review This Bootcamp
            </Link>
          </Col>
        </>
      )}
    </Row>
  );
};

export default BootcampReviewsScreen;
