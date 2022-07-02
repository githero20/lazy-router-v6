import React from "react";

type resultsType = {
  course: string;
  score: number;
  comments: string;
};

const UserResults = () => {
  const results: resultsType[] = [
    {
      course: "Mathematics",
      score: 50,
      comments: "Pass",
    },
    {
      course: "English",
      score: 67,
      comments: "Good",
    },
    {
      course: "Physics",
      score: 75,
      comments: "Good",
    },
    {
      course: "History",
      score: 85,
      comments: "Excellent",
    },
  ];
  return (
    <div style={{ padding: "1rem" }}>
      <h4>Your Results</h4>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "start" }}>Course</th>
            <th style={{ padding: "0.5rem 1rem" }}>Score</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {results.map((person: resultsType, id: number) => {
            const { course, score, comments } = person;

            return (
              <tr key={id}>
                <td>{course}</td>
                <td style={{ padding: "0.5rem 1rem" }}>{score}</td>
                <td>{comments}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserResults;
