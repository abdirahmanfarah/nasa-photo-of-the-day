import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../App.css";
import axios from "axios";
import moment from "moment";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  background: #263238;
  padding: 20px;
`;

const DateStyle = styled.h2`
  color: BEIGE;
`;

const Header = styled.h1`
  color: white;
  margin: auto;
`;
const Header2 = styled.h2`
  color: white;
  margin: auto;
`;
const Description = styled.p`
  margin: auto;
  color: white;
  // width: 95%;
  padding: 5px;
  line-height: 1.5;
  word-space: 10px;
  text-align: left;
`;
const DateButton = styled.button`
  background: #ab003c;
  padding: 10px;
  margin: auto;
  font-size: 15px;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
`;

const Body = styled.div`
  border: 1px solid grey;
  border-radius: 15px;
  background: #ab003c;
  margin: auto;
  margin-top: 2%;
  width: 80%;
`;

const Image = styled.div`
  margin: auto;
`;
const Date = styled.div`
  margin: auto;
  margin-bottom: 2%;
  margin-top: 2%;
`;

const Cal = styled.div`
  padding: 10px;
  margin: auto;
  color: white;
  background: #ab003c;
  font-size: 15px;
`;

export default function NasaPicture() {
  const [nasa, setNasa] = useState([]);
  const [selectedDate, setSelectedDate] = useState();

  // const handleChange = (e) => {
  //   // e.preventDefault();
  //   setSelectedDate(selectedDate);
  //   console.log("date", selectedDate);
  // };
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=olBYwidSzG1KBoxDgoUcPMhX2R0QfW7aMxVkyl7X&date=${moment(
          selectedDate
        ).format("YYYY-MM-DD")}`
      )
      .then((response) => {
        const nasa = response.data;
        console.log(nasa);
        setNasa(nasa);
      })
      .catch((error) => {
        console.log("Sorry, no images being displayed");
      });
  }, [selectedDate]);

  return (
    <Container>
      <Header>Nasa-Photo of the Day</Header>
      <Date>
        <Cal>
          Pick a date:{" "}
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy/MM/dd"
            // maxDate={new Date()}
            showYearDropdown
            scrollableMonthYearDropdown
          />
        </Cal>
        {/* <DateButton onClick={handleChange}>Pick Date!</DateButton> */}
      </Date>
      <DateStyle>{nasa.date}</DateStyle>
      <Image>
        <img className="img-source" src={nasa.url} />
      </Image>
      <Body>
        <Header2>{nasa.title}</Header2>{" "}
        <Description> {nasa.explanation}</Description>
      </Body>
    </Container>
  );
}
