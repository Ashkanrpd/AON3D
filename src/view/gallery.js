import React, { useState, useEffect } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";

export default function Gallery() {
  const [archive, setArchive] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const getArchive = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const body = JSON.parse(await response.text());
    const size = 30;
    const res = body.reduce((acc, curr, i) => {
      if (!(i % size)) {
        acc.push(body.slice(i, i + size));
      }
      return acc;
    }, []);
    setArchive(res);
  };

  useEffect(() => {
    if (!archive.length) getArchive();
  });

  return (
    <div className="container-fluid h-100vh bg-dark p-5">
      <div className="row">
        <Container className="p-5">
          <Row>
            {archive.length &&
              archive[pageNumber].map((item) => (
                <Col
                  xs={6}
                  md={4}
                  className="text-center mb-5 mt-5 p-3"
                  key={item.id}
                >
                  <a href={item.url}>
                    <Image src={item.thumbnailUrl} thumbnail />
                  </a>
                  <div className="text-white mt-3">{item.title}</div>
                </Col>
              ))}
          </Row>
        </Container>
        <div className="text-center">
          {pageNumber > 0 && (
            <button
              style={{ minWidth: "70px" }}
              value={pageNumber}
              className="btn btn-primary btn-sm ms-2 me-2"
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              Previous
            </button>
          )}
          <span className="text-white me-1 ms-1">Page {pageNumber + 1}</span>
          {pageNumber >= 0 && pageNumber < archive.length - 1 && (
            <button
              style={{ minWidth: "70px" }}
              value={pageNumber}
              className="btn btn-primary btn-sm ms-2 me-2"
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
