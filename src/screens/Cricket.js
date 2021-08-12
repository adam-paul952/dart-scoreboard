import React from "react";
import Header from "../components/Header";
import ScoreCalculator from "../components/ScoreCalculator";
import { Table } from "react-bootstrap";

export default function CreateCricketBoard() {
  return (
    <>
      <Header title="Cricket" goBackButton />
      <Table>
        <thead>
          <tr>
            <th>Player</th>
            <th>20</th>
            <th>19</th>
            <th>18</th>
            <th>17</th>
            <th>16</th>
            <th>15</th>
            <th>Bull</th>
          </tr>
        </thead>
        <tbody>
          {/* Map Player list in here */}
        </tbody>
      </Table>
      <ScoreCalculator isCricketBoard />
    </>
  );
}
